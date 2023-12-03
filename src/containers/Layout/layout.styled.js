import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 18px;
  height: 1140px;
  background-color: black;
  font-family:'Roboto';
`;

export const PictureWrapper = styled.div`
    width: "100%";
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BestDealWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Line = styled.div`
    display: flex;
    justify-content: center;
`;

export const TextWrapper = styled.div`
    display: flex;
    p{
        font-size: 15px;
        margin-top: 30px;
        margin-left: 40px;
        font-family:'Roboto';
        color: white;
    }
`;

export const ProductsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 310px;
    background-color: white;
    align-self: center;
`;

export const ProductWrapper = styled.div`
    width: 200px;
    height: 250px;
    align-self: center;
    background-color: white;
    border-radius: 20px;
    border-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    >img{
        width: 180px;
        height: 150px;
        background-color: #fff;
        border-radius: 10px;
    }
    >p{
        font-family:'Roboto';
        margin: 0;
        font-size: 16px;
    }
`;

export const PWrapper = styled.div`
    width:80%;
    margin-left: 10%;
    font-size: 15px;
    >p{
        color: 'white';
        font-family: 'Roboto'
    }
`;
