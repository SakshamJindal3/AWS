// you can make your custom template like this

const { CreateTemplateCommand } = require("@aws-sdk/client-ses");
const  sesClient  = require("../config/sesClient");
const emailType = require("../utils/emailConstants");

const TEMPLATE_NAME = emailType.PROMOTION;

const createCreateTemplateCommand = () => {
  return new CreateTemplateCommand({
    Template: {
      TemplateName: TEMPLATE_NAME,
      SubjectPart: "Your Holiday is approved",
      HtmlPart: `<h3>Hello <i>{{name}}</i>,</h3>
        <p>Your leave request is approved.</p>
        <h4>Thank You.</h4>
        <h2>Inzint</h2>
        <img src="https://inzint-assets.s3.ap-south-1.amazonaws.com/inzint-logo-dark.png" width="220" height="60">
        `
    },

    // Template: {
    //   TemplateName: TEMPLATE_NAME,
    //   SubjectPart: "Your Holiday is approved",
    //   HtmlPart: `<h3>Hi,</h3>
    //     <p>Your are promoted to Engineer(Level 1).</p>
    //     <h4>Thank You.</h4>
    //     <h2>Inzint</h2>
    //     <img src="https://inzint-assets.s3.ap-south-1.amazonaws.com/inzint-logo-dark.png" width="220" height="60">
    //     `
    // },
  });
};

const createTemplate = async () => {
  const createTemplateCommand = createCreateTemplateCommand();
  try {
    return await sesClient.send(createTemplateCommand);
  } catch (err) {
    console.log("Failed to create template.", err);
    return err;
  }
};

module.exports = createTemplate;