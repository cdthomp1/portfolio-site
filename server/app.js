exports.handler = (event, context, callback) => {
    console.table(event)

    return callback(null, {
        statusCode: 200,
        body: '<h1>Hello, Functions!</h1>'
    })
}