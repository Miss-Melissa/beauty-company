// --------- display list of products ---------
const showProducts = async (req, res) => {
    try {
        let db = req.db;
        db.query("Select * from products", function (error, rows) {
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
const showProduct = async (req, res) => {
    let db = req.db;
    let id = req.params.id;
    await db.query("select * from products where id = ?", id, function (err, rows) {
        if (err) {
            throw err
        }
        else {
            res.send({
                message: "Success got single product!",
                data: rows
            });
        }
    });
}

// --------- creating a product ---------
const createProduct = async (req, res) => {
    try {
        let db = req.db;
        let id = Math.floor(Math.random() * 9000000) + 100000000;
        let data = {
            id: id,
            productname: req.body.productname,
            productprice: req.body.productprice,
            productdesc: req.body.productdesc,
            image: req.file.filename
        };
        console.log(data)
        await db.query(

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
const deleteProduct = async (req, res) => {
    try {
        let db = req.db;
        let id = req.params.id;
        db.query("Delete from products where id = ?", id, function (err, rows) {
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
const updateProdcut = (req, res) => {
    try {
        let db = req.db;
        let id = req.params.id;
        let data = {
            id: id,
            productname: req.body.productname,
            productprice: req.body.productprice,
            productdesc: req.body.productdesc,
        }

        if (req.file) { // updating image is optional
            data.image = req.file.filename
        }


        db.query("update products set ? where id = ?", [data, id], function (err, rows) {
            if (err) {
                console.log(err)
            }
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






module.exports = { showProducts, showProduct, createProduct, deleteProduct, updateProdcut }
