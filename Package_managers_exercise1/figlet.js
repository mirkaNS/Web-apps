const figlet = require('figlet');

// figlet('Hello World!!', function (err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

const createFigletText = (msg) => {

    const figText = figlet.textSync(msg, {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
    return figText;
}

module.exports = { createFigletText };