import React, {useState, useEffect} from "react";
import { CardWrapper, Wrapper, ButtonWrapper } from "./catalog.styled";
import CardItem from "../components/cardItem";
import data from "../data/data";

function Catalog() {
  const [items, setItems] = useState([ ]);
  const [visible, setVisible]= useState(3 );
  const showMoreItems=()=>{
    setVisible(prevValue => prevValue + 3);
  };

  useEffect(()=>{
    setItems(data)
  }, []);


  return (
    <Wrapper>
   
      <CardWrapper>
        {items.slice(0, visible).map((Item, i) => {
          return (
          <CardItem key={i}id={Item.id} 
          title={Item.title} 
          text = {Item.text} 
          image = {Item.image}
          price={Item.price}/>
          );})}
      </CardWrapper>
    
    <ButtonWrapper>
    <button onClick={showMoreItems}>View more</button>
    </ButtonWrapper>
   
    </Wrapper>
  );
}

export default Catalog;
