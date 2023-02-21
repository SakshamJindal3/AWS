const emailType = require("./utils/emailConstants");
const createHolidayEmailCommand =  require("./createEmail/createHolidayEmail");
const createPromotionEmailCommand = require("./createEmail/createPromotionEmail");
const sesClient = require("./config/sesClient");

const emailUtils = async (emailData, typeOfEmail) => {

  const holiday = emailType.HOLIDAY;
  const promotion = emailType.PROMOTION;

  function sendEmailCommand (typeOfEmail) {
    switch (typeOfEmail) {
      case holiday:
        return createHolidayEmailCommand(emailData);
      case promotion:
        return createPromotionEmailCommand(emailData);
      default:
        return createHolidayEmailCommand(emailData);
    }
  } 

  try {
    return await sesClient.send(sendEmailCommand(typeOfEmail));
  } catch (err) {
    console.log("Failed to send template email", err);
    return err;
  }
};

//export default emailUtils;
module.exports =  emailUtils;
