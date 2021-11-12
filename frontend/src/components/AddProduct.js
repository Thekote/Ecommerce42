import React, { useState } from "react";
import ProductDataService from "../services/product";

const AddProduct = () => {
    const initialProductState = {
        title: "",
        description: "",
        price: "",
        stock: "",
        isActive: true,
        categoryId: null

    };
    const [product, setProduct] = useState(initialProductState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProduct({...product, [name]: value});
    };


    const saveProduct = () => {
        var data = {
            title: product.title,
            description: product.description,
            price: product.price,
            stock: product.stock,
            isActive: product.isActive,
            categoryId: product.categoryId
        };

        ProductDataService.create(data)
            .then(response => {
                setProduct({
                    title: response.data.title,
                    description: response.data.description,
                    price: response.data.price,
                    stock: response.data.stock,
                    isActive: response.data.isActive,
                    categoryId: response.data.categoryId
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const newProduct = () => {
        setProduct(initialProductState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Sucessfuly created product!</h4>
                    <button className="btn btn-sucess" onClick={newProduct}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            required
                            value={product.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            required
                            value={product.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            required
                            value={product.price}
                            onChange={handleInputChange}
                            name="price"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input
                            type="text"
                            id="stock"
                            required
                            value={product.stock}
                            onChange={handleInputChange}
                            name="stock"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input
                            type="text"
                            id="category"
                            required
                            value={product.categoryId}
                            onChange={handleInputChange}
                            name="category"
                        />
                    </div>

                    <button onClick={saveProduct} className="btn btn-sucess">
                        Submit    
                    </button>                       
            </div>
                
            )}
        </div>
    );
};

export default AddProduct;
