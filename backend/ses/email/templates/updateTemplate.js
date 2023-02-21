// you can update your custom template like this

const { UpdateTemplateCommand } = require("@aws-sdk/client-ses");
const  sesClient  = require("../config/sesClient");
const emailType = require("../utils/emailConstants");

const TEMPLATE_NAME = emailType.HOLIDAY;

const createUpdateTemplateCommand = () => {
  return new UpdateTemplateCommand({
    Template: {
      TemplateName: TEMPLATE_NAME,
      SubjectPart: "Segmentation done for your file",
      HtmlPart: `<h3>Dear <i>{{firstName}} {{lastName}}</i>,</h3>
        <p>Your file <i>{{fileName}}</i> is segmented and ready to be opened.</p>
        <p>Please visit this link: <a href={{viewUrl}}>View In Slicer 3D link</a></p>
        <p>Please label the file, and get back to us.</p>
        <h4>Thank You.</h4>
        <h2>Inzint</h2>
        <img src="https://inzint-assets.s3.ap-south-1.amazonaws.com/inzint-logo-dark.png" width="220" height="60">
        `
    },
  });
};

const updateTemplate = async () => {
  const updateTemplateCommand = createUpdateTemplateCommand();
  try {
    return await sesClient.send(updateTemplateCommand);
  } catch (err) {
    console.log("Failed to update template.", err);
    return err;
  }
};

module.exports = updateTemplate;