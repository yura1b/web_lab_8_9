import { Button } from "react-native-web";
import { Wrapper, TextWrapper,
     ImageWrapper, TitleWrapper,
      DescriptionWrapper, 
      PriceWrapper } from "../productDisplay/productDisplay.styled";


const ProductDisplay = (props) =>{
    const {product} = props;
    return(
        <Wrapper>
            <ImageWrapper>
                <img style={{width:"360px"}} src={product.image}/>
            </ImageWrapper>
            <TextWrapper>
                <TitleWrapper>
                    <p>
                        {product.title}
                    </p>
                </TitleWrapper>
                <DescriptionWrapper>
                    <p>
                        {product.text}
                    </p>
                </DescriptionWrapper>
                <PriceWrapper>
                        <button style={{width:"140px", height:"44px",
                         borderWidth:"0", borderRadius:"3px", alignSelf:"center", justifySelf:"flex-end"}}>Buy now</button>                    <p>
                        {product.price}$
                    </p>
                </PriceWrapper>
                
            </TextWrapper>
        </Wrapper>

    )
}

export default ProductDisplay