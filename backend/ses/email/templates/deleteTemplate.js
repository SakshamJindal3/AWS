const { DeleteTemplateCommand } = require("@aws-sdk/client-ses");
const  sesClient  = require("../config/sesClient");
const emailType = require("../utils/emailConstants");

const TEMPLATE_NAME = emailType.HOLIDAY;

const createDeleteTemplateCommand = (templateName) => {
  return new DeleteTemplateCommand({
    TemplateName: templateName
  });
};

const deleteTemplate = async () => {
  const deleteTemplateCommand = createDeleteTemplateCommand(TEMPLATE_NAME);
  try {
    return await sesClient.send(deleteTemplateCommand);
  } catch (err) {
    console.log("Failed to delete template.", err);
    return err;
  }
};

module.exports = deleteTemplate;