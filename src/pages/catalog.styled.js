import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    font-family:sans-serif;
    font-size: 24px;
    color: white;
    background-color: white;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60px;
    >button{
        width: 200px;
        height: 40px;
        border: 0px;
        margin-bottom: 16px;
    }
`;