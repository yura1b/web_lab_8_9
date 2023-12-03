import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, CardItemWrapper, ImageWrapper } from './cardItem.styled';


const CardItem = (props) =>{
    return (
        <Wrapper>
            <CardItemWrapper>
            
                <ImageWrapper>
                <Link to= {`/product/${props.id}`}><img style={{ borderRadius:'7px', width:200, height:200}} src={props.image}/></Link>
                    
                </ImageWrapper>
                <div>
                    <p style={{color:"gray", fontSize:20,marginLeft:"10px"}}>{props.title}</p>
                </div>
                <div>
                    <p style={{color:"gray", fontSize:14, margin:0,marginLeft:"10px"}}>{props.text}</p>
                </div>
                <div>
                    <p style={{color:"#CE4E45",marginLeft:"10px"}}>${props.price}</p>
                </div>
                <div>
                    <button style={{width:"100px", height:"30px", borderWidth:"0", borderRadius:"3px", alignSelf:"end",marginLeft:"10px", marginBottom:"10px"}}>Buy now</button>
                </div>
            </CardItemWrapper>
        </Wrapper>
    )
    
};

export default CardItem;