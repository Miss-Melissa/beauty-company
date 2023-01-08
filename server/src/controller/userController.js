const bcrypt = require('bcrypt');
const saltRounds = 10;



const registerUser = (req, res, next) => {
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
                            message: "An error occurred",
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



const loginUser = async (req, res, next) => {
    try {
        var db = req.db;
        const username = req.body.username;
        const password = req.body.password;

        let results = await db.query(
            "select * from users where username = ?",
            username,
            function (err, result) {
                if (err) {
                    res.send({ err: err });
                }
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if (response) {
                            res.send("Youre logged in as user: " + result[0].username);
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







module.exports = { registerUser, loginUser }
