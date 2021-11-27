import React, { useState } from "react"
import CategoryDataService from "../../client/category"
import styled from "styled-components"
import { toast } from "react-toastify"

const initialCategoryState = {
  description: "",
  cod: "",
  isActive: true,
}

const AddCategory = () => {
  const [category, setCategory] = useState(initialCategoryState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCategory({ ...category, [name]: value })
  }

  const createCategory = (event) => {
    event.preventDefault()

    CategoryDataService.create(category).then(() => {
      toast.success("Categoria criada com sucesso!!")
      resetForm()
    })
  }

  const resetForm = () => {
    setCategory(initialCategoryState)
  }

  return (
    <Container>
      <FormContainer onSubmit={createCategory} onReset={resetForm}>
        <div>
          <h2>Cadastrar Categorias de Produtos</h2>
          <div className="line"></div>
          <div>
            <div>
              <label>Descrição</label> <br />
              <input
                type="text"
                id="description"
                required
                value={category.description}
                onChange={handleInputChange}
                name="description"
                placeholder="Ex: Utensílios"
              />
            </div>
            <div>
              <label>Código da Categoria</label> <br />
              <input
                type="text"
                id="cod"
                required
                value={category.cod}
                onChange={handleInputChange}
                name="cod"
                placeholder="Ex: UTN"
              />
            </div>
            <br />{" "}
            <button type="submit" className="btn btn-success">
              Cadastrar Categoria
            </button>
            <br />{" "}
            <button type="reset" className="btn btn-cancel">
              Recomeçar
            </button>
          </div>
        </div>
      </FormContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const FormContainer = styled.form`
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
    background-color: #F9AF39;
  }

  .btn-cancel:hover {
    background-color: #fe7839;
  }
`

export default AddCategory
