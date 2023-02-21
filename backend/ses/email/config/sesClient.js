const { SESClient } = require("@aws-sdk/client-ses");

// Set the AWS Region.
const REGION = "us-east-2";
const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
// Create SES service object.
const sesClient = new SESClient({ region: REGION
//     , credentials: {
//     accessKeyId: ACCESS_KEY_ID,
//     secretAccessKey: SECRET_ACCESS_KEY
// } 
});
module.exports = sesClient;