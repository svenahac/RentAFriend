const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

conn.connect((err) => {
  if (err) {
    console.log("ERROR: " + err.message);
    return;
  }
  console.log("Connection established!");
});

let datapool = {};

datapool.allPosts = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM Post", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

datapool.onePost = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM Post WHERE id = ?", [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

datapool.createPost = (title, type, img, date, rate, u_id) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "INSERT INTO Post (title, type, img, date, rate, u_id) VALUES (?, ?, ?, ?, ?, ?)",
      [title, type, img, date, rate, u_id],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

datapool.deletePost = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("DELETE FROM Post WHERE id = ?", [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

datapool.addUser = (
  name,
  last_name,
  telephone,
  date_of_birth,
  username,
  password,
  email
) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "INSERT INTO Login_info (name, last_name, telephone, date_of_birth, username, password, email) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, last_name, telephone, date_of_birth, username, password, email],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

datapool.getUser = (username) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "SELECT * FROM Login_info WHERE username = ?",
      [username],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

datapool.addRating = (stars, u_id) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "INSERT INTO Rating (stars, u_id) VALUES (?, ?)",
      [stars, u_id],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

datapool.getRating = (u_id) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM Rating WHERE u_id = ?", [u_id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

datapool.updateRating = (stars, u_id) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "UPDATE Rating SET stars = ? WHERE u_id = ?",
      [stars, u_id],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

datapool.addRole = (role, u_id) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "INSERT INTO Role (role, u_id) VALUES (?, ?)",
      [role, u_id],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

datapool.getRole = (u_id) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM Role WHERE u_id = ?", [u_id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

modules.exports = datapool;
