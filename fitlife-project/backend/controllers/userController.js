import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const existingUser = await User.findByEmail(req.body.email);
    if (existingUser) {
      return res.status(400).json({ error: "用户已存在" });
    }
    
    const newUser = await User.create(req.body);
    res.status(201).json({
      id: newUser.insertId,
      username: req.body.username,
      email: req.body.email
    });
  } catch (error) {
    res.status(500).json({ error: "服务器错误" });
  }
};