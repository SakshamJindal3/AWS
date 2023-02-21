const { SendTemplatedEmailCommand } =  require("@aws-sdk/client-ses");
const emailType = require("../utils/emailConstants");

const createPromotionEmailCommand = (emailData) => {
  
   const params = {
      Destination: { /* required */
         CcAddresses: [
          'mordhwaj@inzint.com',
         ],
        ToAddresses: emailData
      },
      Source:'hardikgarg471@gmail.com',/* required */
      Template: emailType.PROMOTION,/* required */
      TemplateData: JSON.stringify({}), /* required */
    };
    console.log("email data we are sending is ------>", params);
    return new SendTemplatedEmailCommand(params);
  };

  module.exports = createPromotionEmailCommand;