require('dotenv').config()
const axios = require('axios');



async function getUpcomingEvents() {
    try {
        var headers = {
            'Authorization': 'Bearer ' + process.env.CANVAS_API_TOKEN
        }
        const response = await axios.get('https://byui.instructure.com/api/v1/users/self/upcoming_events', { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function changeEvents() {
    try {
        var events = await getUpcomingEvents();
        return events
            .map(event => {
                const { title, type, html_url, end_at } = event;
                return {
                    title,
                    type,
                    endDate: end_at,
                    url: html_url
                }
            })
    } catch (error) {
        return error
    }
}



exports.handler = async function (event, context) {
    var assignments = await changeEvents()
    if (assignments.name === "Error") {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: "Token is Invalid", body: assignments })
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify(assignments)
    };
}