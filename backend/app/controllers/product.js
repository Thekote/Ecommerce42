const { Product }  = require('../../models');


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json({
            product,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const listProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        return res.json(products);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const findOneProduct = async (req, res) => {
    try {
        const product = await Product.findOne({where: {id: req.params.id}});
        return res.json(product);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Product.update (req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedProduct = await Product.findOne({ where: { id: id }});
            return res.status(200).json({ product: updatedProduct});
        }
        throw new Error ('Product not found');

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const enableProduct = async (req, res) => {
    try {
        const product = await Product.findOne({where: {id: req.params.id}});
        if(product.active === false){
            product.active = true;
            await product.save();
        } else {
            throw new Error ('Product already enabled');
        }

        return res.sendStatus(204);

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

const disableProduct = async (req, res) => {
    try {
        const product = await Product.findOne({where: {id: req.params.id}});

        if(product.active === true){
            product.active = false;
            await product.save();
        } else {
            throw new Error ('Product already disabled');
        }

        return res.sendStatus(204);


    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    listProduct,
    findOneProduct,
    updateProduct,
    enableProduct,
    disableProduct
};
