import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    width: 80%;
    margin-left: 10%;
    font-family:"Roboto";
    font-size: 24px;
    color: white;
`;
export const ImageWrapper = styled.div`
    width: 50%;
`;
export const TextWrapper = styled.div`
    display: flex;
    width:50%;
    flex-direction: column;
`;
export const TitleWrapper = styled.div`
    font-size: 28px;
    color: grey;
`;

export const DescriptionWrapper = styled.div`
    font-size: 18px;
    color: grey;
`;

export const PriceWrapper = styled.div`
    align-self: flex-end;
    justify-self: end;
    display: flex;
    justify-content: flex-start;
    font-size: 26px;
    color: #CE4E45;
    
`;


