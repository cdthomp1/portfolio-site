const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'https://raw.githubusercontent.com/cdthomp1/portfolio-site/master/images/coming-soon.png' 
    },
    repoLink: {
        type: String,
        required: true
    },
    liveLink: {
        type: String,
        default: "na"
    }
})

const Project = mongoose.model('project', projectSchema);

module.exports = Project;