import React from 'react';
import { Wrapper, LogoBrandWrapper, LogoWrapper, SocialsWrapper, InstLogoWrapper, FacebookLogoWrapper, XLogoWrapper  } from './Footer.styled';
import {LaptopOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined  } from '@ant-design/icons'

const Footer = () =>{
  return (
    <Wrapper >
      <div>
        <LogoBrandWrapper>
          <LogoWrapper>
            <LaptopOutlined style={{ width:50 }}/>
          </LogoWrapper>
          <p>Lap-Top</p>
        </LogoBrandWrapper>
        
      </div>
      <SocialsWrapper>
        <InstLogoWrapper>
            <InstagramOutlined style={{width:40}}/>
        </InstLogoWrapper>

        <FacebookLogoWrapper>
            <FacebookOutlined style={{width:40}}/>
        </FacebookLogoWrapper>

        <XLogoWrapper>
            <TwitterOutlined style={{width:40}}/>
        </XLogoWrapper>
      </SocialsWrapper>

    </Wrapper>
  );
};

export default Footer;