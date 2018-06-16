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
    dbConnect
      .attemptLogin([username, password])
      .then(result => {
        // the result is going to be an array, so if the array has any values it will send the 200 with the users info else send 404
        if (result.length) {
          res.status(200).send(result[0]);
        } else {
          res.status(404).send();
        }
      })
      .catch(() => res.status(500).send());
  }
};
