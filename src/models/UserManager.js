const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO $(this.table) (name,email,password) VALUES(?,?,?)`,
      [user.name, user.mail, user.password]
    );
  }
}
module.exports = UserManager;
