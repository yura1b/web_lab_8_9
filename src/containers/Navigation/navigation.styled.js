import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  background-color: black;
  font-family: sans-serif;
  font-size: 18px;
  height: 50px;
`;

export const LinkingWrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    padding: 0;
    margin: 0;
  }
  .Nav-link {
    
  }
  .nav-link.selected {
    font-weight: bold;
  }
`;
