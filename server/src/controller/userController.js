const bcrypt = require('bcrypt');
const saltRounds = 10;



const registerUser = (req, res) => {
    try {
        var db = req.db;
        var id = Math.floor(Math.random() * 9000000) + 100000000;
        const username = req.body.username
        const password = req.body.password;

        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.log(err)
            }
            db.query(
                "Insert into users (username, password) values (?,?)",
                [username, hash],
                function (err) {
                    if (err) {
                        console.log(err)
                        res.send({
                            message: "Username/password is invalid or already taken",
                        });
                    } else {
                        res.send({
                            message: "Successfully created a user with id: " + id,
                        });
                    }
                }
            );
        });
    } catch (error) {
        res.send({
            message: "An error occcurred"
        });
    }
};



const loginUser = async (req, res) => {
    try {
        var db = req.db;
        const username = req.body.username;
        const password = req.body.password;

        let results = await db.query(
            "select * from users where username = ?",
            username,
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.send({ err: err });
                }
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if (response) {
                            req.session.user = result;
                            console.log(req.session.user)
                            res.send(result);
                        } else {
                            res.send({ message: "Wrong password" });
                        }
                    });
                } else {
                    res.send({ message: "User dosent exixst!" })
                }
            });
    } catch (error) {
        console.log(error)
        res.send({
            message: "An error occured"
        });
    }
};


const loginStatus = (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
}

const logout = (req, res) => {
    if (req.session.user) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send('Unable to log out')
            } else {
                res.send('Logout successful')
            }
        });
    } else {
        res.end()
    }

}


module.exports = { registerUser, loginUser, loginStatus, logout }
