const Products = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});

        res.json(products);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.find({});

        res.json(product);
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};