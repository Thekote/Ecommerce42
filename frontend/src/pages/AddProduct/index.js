import React from "react"
import ProductDataService from "../../client/product"
import styled from "styled-components"
import { toast } from "react-toastify"
import { Formik, Field, Form } from "formik"

const initialProductState = {
  title: "",
  description: "",
  price: "",
  stock: "",
  isActive: true,
  categoryId: "",
}

const AddProduct = () => {
  const createProduct = async (values, { resetForm }) => {
    return ProductDataService.create(values)
      .then(() => {
        toast.success("Produto cadastrado com sucesso!!")
        resetForm()
      })
      .catch((err) => {
        toast.error("Erro ao cadastrar produto")
      })
  }

  return (
    <Container>
      <Formik initialValues={initialProductState} onSubmit={createProduct}>
        <FormContainer>
          <div>
            <h2>Cadastrar Produtos</h2>
            <div className="line"></div>
            <div>
              <div>
                <label>Nome</label> <br />
                <Field
                  type="text"
                  id="title"
                  required
                  name="title"
                  placeholder="Coqueteleira"
                />
              </div>
              <div>
                <label>Descrição</label> <br />
                <Field
                  type="text"
                  id="description"
                  required
                  name="description"
                  placeholder="Ex: Coqueteleira 500ml de aço inox"
                />
              </div>
              <div>
                <label>Preço</label> <br />
                <Field
                  type="number"
                  id="price"
                  required
                  name="price"
                  placeholder="Ex: 99.99"
                />
              </div>
              <div>
                <label>Quantidade em Estoque</label> <br />
                <Field
                  type="number"
                  id="stock"
                  required
                  name="stock"
                  placeholder="Ex: 50"
                />
              </div>
              <div>
                <label>Categoria</label> <br />
                <Field
                  type="number"
                  id="category"
                  required
                  name="categoryId"
                  placeholder="Ex: 2"
                />
              </div>
              <br />
              <button type="submit" className="btn btn-success">
                Cadastrar Produto
              </button>
              <br />
              <button type="reset" className="btn btn-cancel">
                Recomeçar
              </button>
            </div>
          </div>
        </FormContainer>
      </Formik>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const FormContainer = styled(Form)`
  display: flex;
  justify-content: center;
  width: 30vw;
  font-family: "Rubik", sans-serif;
  margin-top: 0px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 10px;
  *,
  *:before,
  *:after {
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

  button {
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
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .btn-cancel {
    background-color: #f9af39;
  }

  .btn-cancel:hover {
    background-color: #fe7839;
  }
`

export default AddProduct
