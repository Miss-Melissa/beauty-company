// --------- display list of products ---------
const showProducts = async (req, res, next) => {
    try {
        var db = req.db;
        let results = db.query("Select * from products", function (error, rows) {
            if (error) {
                console.log("Error");
            } else {
                res.send({
                    status: 1,
                    message: "Successfully got list of products",
                    data: rows,
                });
            }
        });
    } catch (error) {
        res.send({
            message: "An error occcurred",
        });
    }
};


// --------- display single product ---------
const showProduct = async (req, res, next) => {
    var db = req.db;
    var id = req.params.id;
    let results = await db.query("select * from products where id = ?", id, function (err, rows) {
        if (err) {
            throw err
            console.log(err)
        }
        else {
            res.send({
                message: "Success!",
                data: rows
            });
        }
    });
}

// --------- creating a product ---------
const createProduct = async (req, res, next) => {
    try {
        var db = req.db;
        var id = Math.floor(Math.random() * 9000000) + 100000000;
        var data = {
            id: id,
            productname: req.body.productname,
            productprice: req.body.productprice,
            productdesc: req.body.productdesc,
            image: req.file.filename
        };
        console.log(data)
        let results = await db.query(

            "Insert into products set ?",
            [data],
            function (err, rows) {
                if (err) {
                    res.send({
                        message: "An error occurred",
                    });
                } else {
                    res.send({
                        message: "Successfully created a customer with id: " + id,
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

// --------- Delete Product ---------
const deleteProduct = async (req, res, next) => {
    try {
        var db = req.db;
        var id = req.params.id;
        let results = db.query("Delete from products where id = ?", id, function (err, rows) {
            if (err) throw err
            else {
                res.send({
                    message: 'Success'
                })
            }
        })
    }
    catch (error) {
        res.send({
            message: 'An error occurreed'
        })
    }
}


// --------- Update Product ---------
const updateProdcut = async (req, res, next) => {
    try {
        var db = req.db;
        var id = req.params.id;
        var data = {
            id: id,
            productname: req.body.productname,
            productprice: req.body.productprice,
            productdesc: req.body.productdesc,
            image: req.file.filename,
        };
        let results = db.query("update products set ? where id = ?", [data, id], function (err, rows) {
            if (err) throw err
            else {
                res.send({
                    message: 'Successfully updated!'
                })
            }
        })

    }
    catch (error) {
        res.send({
            message: 'An error occurreed'
        })
    }
}



module.exports = { showProducts, showProduct, createProduct, deleteProduct, updateProdcut, }
