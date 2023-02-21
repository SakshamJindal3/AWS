const emailType  = require("./email/utils/emailConstants");
const emailUtils  = require("./email/emailUtils");
//const createTemplate = require("./email/templates/createTemplate");
//const deleteTemplate = require("./email/templates/deleteTemplate");
//const updateTemplate = require("./email/templates/updateTemplate");

const sendEmailHandler = async (req, res) => {
   try {
    const emailData = req.body;
    console.log("emaildata --->", emailData);
    await emailUtils(emailData?.sendTo, emailType.HOLIDAY)
    //await createTemplate()
    //await deleteTemplate()
    //await updateTemplate()
   } catch (error) {
    res.status(400).send(error);
   }
}

module.exports = sendEmailHandler;