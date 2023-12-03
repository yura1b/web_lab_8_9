import React from 'react';
import { Wrapper, LogoBrandWrapper, FindWrapper, LogoWrapper } from './header.styled';
import {LaptopOutlined, SearchOutlined} from '@ant-design/icons'
import { TextInput } from 'react-native-web';

const Header = () =>{
  return (
    <Wrapper >
      <div>
        <LogoBrandWrapper>
          <LogoWrapper>
            <LaptopOutlined style={{ width:50, color:'#CE4E45' }}/>
          </LogoWrapper>
          <p>Lap-Top</p>
        </LogoBrandWrapper>
        
      </div>
        <FindWrapper>
        
          <TextInput
            style={{ backgroundColor:'white', border: '1.2px solid #ffffff', borderRadius:'7px', width: '400px', height:'40px' }}
            placeholder = '   Enter model'
            placeholderTextColor='grey'
          />

          <LogoWrapper>
            <SearchOutlined style={{ width:50  }}/>
          </LogoWrapper>

        </FindWrapper>
    
    </Wrapper>
  );
};

export default Header;