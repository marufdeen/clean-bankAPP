const Model = require('../models'); 

const userDao = {
  async findAll() {
    const result = await Model.user.find({}, { password: 0 });
    return result;
  },

  async findByEmail(email) {
    const result = await Model.user.findOne({ email });
    return result;
  },

  async findById(userId) {
    const result = await Model.user.findById(userId);
    return result;
  },

  async create(userData) {
    //const createUser = await Model(userData);
    const newUser = await await Model.user.create(userData);
    if (newUser) return newUser;
    return false;
  },

  async update(userId, userData) {
    const edit = await Model.user.findOneAndUpdate(userId, userData, {
      useFindAndModify: false,
      new: true,
    });
    if (edit) return edit;
    return false;
  },

  async remove(userId) {
    await Model.user.deleteOne({ _id: userId });
    return "User Deleted";
  },
};

module.exports = userDao;
