const { SendTemplatedEmailCommand } =  require("@aws-sdk/client-ses");
const emailType = require("../utils/emailConstants");

const createHolidayEmailCommand = (emailData) => {
  
   const params = {
      Destination: { /* required */
         CcAddresses: [
          'mordhwaj@inzint.com',
         ],
        ToAddresses: [
           emailData?.email
          /* more To email addresses */
        ]
      },
      Source:'hardikgarg471@gmail.com',/* required */
      Template: emailType.HOLIDAY,/* required */
      TemplateData: JSON.stringify(
       {
        name: emailData?.name,
       }
      ), /* required */
      // ReplyToAddresses: [
      //   'hardikgarg471@gmail.com'
      // ],
    };
    console.log("email data we are sending is ------>", params);
    return new SendTemplatedEmailCommand(params);
  };

  module.exports = createHolidayEmailCommand