import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const users = {};

export function registerUser(username, password) {
  if (users[username]) return null;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users[username] = { username, password: hashedPassword };
  return users[username];
}

export function authenticateUser(username, password) {
  const user = users[username];
  if (user && bcrypt.compareSync(password, user.password)) {
    return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }
  return null;
}

export function getUserFromToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return users[decoded.username];
  } catch (err) {
    return null;
  }
}
