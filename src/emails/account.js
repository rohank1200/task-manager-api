const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "rohank0918@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "rohank0918@gmail.com",
        subject: "Is it really over?",
        text: `We're sad to hear that you're leaving, ${name}. Let us know if you have any suggestions for our app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}