const users = require("../Models/userSchema");

//regitore user:-

//users get:-
exports.userget = async (req, res) => {
  try {
    const userData = await users.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(401).json(error);
  }
};

// useredit
exports.useredit = async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  try {
    const updatedUser = await users.findByIdAndUpdate(
      id,
      { price: price }, // Specify the field you want to update and its new value
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(401).json(error);
  }
};
