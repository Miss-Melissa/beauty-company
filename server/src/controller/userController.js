const registerUser = async (req, res, next) => {
    try {
        var db = req.db;
        var id = Math.floor(Math.random() * 9000000) + 100000000;
        var data = {
            userid: id,
            username: req.body.username,
            password: req.body.password,
        };
        console.log(data)
        let results = await db.query(

            "Insert into users set ?",
            [data]
            ,
            function (err, rows) {
                if (err) {
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
            "select * from users where username = ? and password = ?",
            [username, password],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.send({
                        message: "Wrong username/password combination"
                    });
                } if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({
                        message: "Wrong username/password combination"
                    });
                }
            }
        );
    } catch (error) {
        console.log(error)
        res.send({
            message: "Wrong username/password combination"
        });
    }
};







module.exports = { registerUser, loginUser }
