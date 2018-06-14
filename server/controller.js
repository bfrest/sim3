module.exports = {
  createUser: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { username, password } = req.body;

    dbConnect
      .createUser([username, password])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};
