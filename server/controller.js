module.exports = {
  createUser: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { username, password } = req.body;
    const profile_pic = `https://robohash.org/${username}.png`;

    dbConnect
      .createUser([username, password, profile_pic])
      .then(user => res.status(200).send(user))
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
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
  },

  getPosts: (req, res, next) => {
    const dbConnect = req.app.get("db");
    //const { userposts, search } = req.query.params;

    dbConnect
      .getPosts()
      .then(results => {
        res.status(200).send(results);
      })
      .catch(() => {
        res.status(500).send();
      });
  },

  getAllUsers: (req, res, next) => {
    const dbConnect = req.app.get("db");

    dbConnect
      .getAllUsers()
      .then(results => {
        res.status(200).send(results);
      })
      .catch(() => {
        res.status(500).send();
      });
  },

  getAllUserInfo: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { id } = req.query;

    dbConnect
      .getAllUserInfo([id])
      .then(results => {
        res.status(200).send(results);
      })
      .catch(() => {
        res.status(500).send();
      });
  },

  getFriendList: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { id } = req.query;

    dbConnect
      .getFriendList([id])
      .then(friendsId => {
        res.status(200).send(friendsId);
      })
      .catch(() => {
        res.status(500).send();
      });
  },

  getRecoFriends: (req, res, next) => {
    const dbConnect = req.app.get("db");
    const { id1, id2, id3, id4, id5 } = req.query;
    console.log(id1, id2, id3);

    dbConnect
      .getRecoFriends([id1, id2, id3, id4, id5])
      .then(friends => {
        res.status(200).send(friends);
      })
      .catch(() => res.status(500).send());
  }
};
