import { getUser } from "../database/connection";

async function validateUser(req, res, next) {
  const { username, password } = req.body;
  const user = await getUser(username);
  if (user.length === 0) {
    return res.status(401).json({ message: "Invalid username or password" });
  } else {
    const validPassword = password === user[0].password;
    if (validPassword) {
      req.user = user[0];
      next();
    } else {
      return res.status(401).json({ message: "Invalid username or password" });
    }
  }
}
