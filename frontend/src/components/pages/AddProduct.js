import React, { useState } from "react";
import ProductDataService from "../../client/product";
import styled from "styled-components";

const AddProduct = () => {
    const initialProductState = {
        title: "",
        description: "",
        price: "",
        stock: "",
        isActive: true,
        categoryId: ""

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
    <Container>    
    <Form>
        <div className="submit-form">
            <h2>Cadastrar Produtos</h2>
            <div className="line"></div>
            {submitted ? (
                <div>
                    <h4>Produto cadastrado com sucesso</h4>
                    <button className="btn btn-sucess" onClick={newProduct}>
                        Cadastrar Novo Produto
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Nome</label> <br/>
                        <input
                            type="text"
                            id="title"
                            required
                            value={product.title}
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Coqueteleira"
                        />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="description">Descrição</label> <br/>
                        <input
                            type="text"
                            id="description"
                            required
                            value={product.description}
                            onChange={handleInputChange}
                            name="description"
                            placeholder="Ex: Coqueteleira 500ml de aço inox"

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Preço</label> <br/>
                        <input
                            type="text"
                            id="price"
                            required
                            value={product.price}
                            onChange={handleInputChange}
                            name="price"
                            placeholder="Ex: 99,99"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">Quantidade em Estoque</label> <br/>
                        <input
                            type="text"
                            id="stock"
                            required
                            value={product.stock}
                            onChange={handleInputChange}
                            name="stock"
                            placeholder="Ex: 50"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Categoria</label> <br/>
                        <input
                            type="text"
                            id="category"
                            required
                            value={product.categoryId}
                            onChange={handleInputChange}
                            name="categoryId"
                            placeholder="Ex: 2"
                        />
                    </div>

                    <br/> <button onClick={saveProduct} className="btn btn-sucess">
                        Cadastrar Produto    
                    </button>
                    <br/> <button onClick={saveProduct} className="btn btn-cancel">
                        Cancelar    
                    </button>                            
            </div>
                
            )}
        </div>
    </Form>
    </Container>
    );
};

const Container = styled.div `
    display: flex;
    justify-content: center;

`
const Form = styled.div `
    display: flex;
    justify-content: center;
    width: 30vw;
    font-family: 'Rubik', sans-serif;
    margin-top: 0px;
    border: 1px solid black;
    padding: 30px;
    border-radius: 10px;
    *, *:before, *:after {
    box-sizing: border-box;
}


    input { 
        height: 40px;
        width: 400px;
        margin-bottom: 15px;
        margin-top: 5px;
        border: 1px solid black;
        border-radius: 5px;
        padding-left: 10px;
        
        

    }

    h2 {
        margin-top: 0px;
        margin-bottom: 5px;

    }

    .line {
        width: 100%;
        height: 1px;
        background-color: gray;
        margin-bottom: 30px;

    }

    button  {
        color: white;
        width: 100%; 
        height: 40px;
        background-color: #32cd32;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        border: 0;
        cursor: pointer;
        transition: background-color 0.5s;
        
    }

    button:hover {
        background-color: #228b22;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    .btn-cancel {
        background-color: #ff4040;

    }
    
    .btn-cancel:hover{
        background-color: #b22222;
    }

`


export default AddProduct;
