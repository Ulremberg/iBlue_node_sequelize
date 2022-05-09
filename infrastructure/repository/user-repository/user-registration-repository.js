const httpStatusResponse = require("../../../commons/http-response/http-status-response");
const modelUser =
  require("../../database/model/user-model/user-registration-model").USER_REGISTRATION_MODEL;

  const userRegistrationRepository = async (req,res) => {
  try {
    const returnQueryUser = await modelUser.findAll();
    return res.status(200).json({returnQueryUser});
  } catch (error) {
    const finalError = await httpStatusResponse(
      500,
      error.message,
      "userRegistrationRepository"
    );
    return res.send(finalError);
  }
};

const createUser = async (req, res) => {
    
    try {
      
        const user = await modelUser.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    userRegistrationRepository,
    createUser
};
