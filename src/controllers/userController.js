const userService = require("../services/userServices");
class userController {
  /**
   * @author Maruf
   * @method  POST - register
   * @desc Feature: signs up the user
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async register(req, res) {
    try { 
      const user = await userService.register(req.body); // call user service to register user
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  POST - login
   * @desc Feature: signs in the user
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async login(req, res) {
    try { 
      const user = await userService.login(req.body); // call user service to log user in
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  /**
   * @author Maruf
   * @method  PATCH - editProfile
   * @desc Feature: update the user
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async editProfile(req, res) {
    try {
      const userId = req.decoded.userId;
      const edited = await userService.editUser(userId, req.body);
      return res.status(200).json(edited);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }  

}

module.exports = userController;

/* 


*/
