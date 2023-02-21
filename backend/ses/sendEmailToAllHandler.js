const emailUtils = require("./email/emailUtils");
const emailType = require("./email/utils/emailConstants");

const sendEmailToAllHandler = async (req, res) => {
    try {
     const emailData = req.body; 
     console.log("emailData--->", emailData);
     await emailUtils(emailData?.sendTo, emailType.PROMOTION)
    } catch (error) {
     res.status(400).send(error);
    }
 }
 
 module.exports = sendEmailToAllHandler;