import React from 'react';
import styled from 'styled-components';

const ProductCard = () => {
    return (
        <ProductContainer>
            <ProdImg>
                <img src="https://i.imgur.com/Td5qbSq.png" alt= "Coqueteira" />
            </ProdImg>
            <ProdInfo>
                <ProdName>
                    Coqueteleira 500ml
                </ProdName>
                <ProdDescription>
                    Coqueteleira 500ml aço inox
                </ProdDescription>
                <OldPrice> 
                    R$ 75,00
                </OldPrice>
                <ProdPrice>
                    R$ 58,00
                </ProdPrice>
                <BtnAddCart>
                    Adicionar ao carrinho
                </BtnAddCart>
            </ProdInfo>
            
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    font-family: 'Rubik', sans-serif;
    border-radius: 10px;
    padding: 10px;
    margin: 20px 0;
    background-color: white;
    box-shadow: 0px 5px 5px gray;
    display: flex;
    flex-direction: column;
    
`

const ProdImg = styled.div`
    background-color: white;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 100%;
    }
`

const ProdInfo = styled.div`

`

const ProdName = styled.h1`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 10px;
`

const ProdDescription = styled.p`
    font-size: .8em;
    margin-bottom: 10px;
`

const OldPrice = styled.div`
    font-size: .8em;
    margin-bottom: 10px;
    text-decoration: line-through;
` 

const ProdPrice = styled.div`
    font-size: 1.2em;
    margin-bottom: 20px;
`

const BtnAddCart = styled.div`
    color: white;
    width: 100%; 
    height: 40px;
    background-color: #F2B705; // ${props => `${props.backgroundColor}`};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default ProductCard;
