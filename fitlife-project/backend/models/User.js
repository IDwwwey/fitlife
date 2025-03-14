import db from '../config/db.js';

class User {
  static async create(userData) {
    const [result] = await db.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [userData.username, userData.email, userData.password]
    );
    return result;
  }
  
  static async findByEmail(email) {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0];
  }
}

export default User;