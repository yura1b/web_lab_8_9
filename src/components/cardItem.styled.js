import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    font-family:sans-serif;
    font-size: 24px;
    color: white;
    background-color: white;
    gap: 10px;
    justify-content: center;
    :hover{
        transition: box-shadow 0.5s ease;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.5)
    }

`;

export const CardItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 250px;
    border-radius: 7px;
    :hover{
        transition: box-shadow 0.0s ease;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0)
    }

`;

export const ImageWrapper = styled.div`
    display:flex;
    justify-content: center;
`;