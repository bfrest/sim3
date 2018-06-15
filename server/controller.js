module.exports = {
  createUser: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { username, password } = req.body;

    dbConnect
      .createUser([username, password])
      .then(user => res.status(200).send(user))
      .catch(() => res.status(500).send());
  },

  attemptLogin: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { username, password } = req.body;
    console.log(username, password);

    dbConnect
      .attemptLogin([username, password])
      .then(user => res.status(200).send(user))
      .catch(err => res.status(500).send(err));
  }
};
