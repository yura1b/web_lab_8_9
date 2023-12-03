import React from "react";
import { Wrapper, PictureWrapper, PWrapper } from "./layout.styled";
import titlePhoto from "../icons/titlePhoto.webp";
import macimg7 from "../icons/macimg7.webp";

const Layout = () => {
  return (
    <Wrapper>
      <div>
        <PictureWrapper>
          <div style={{ height: "100%" }}>
            <img
              src={titlePhoto}
              alt="Poster 1"
              style={{
                borderRadius: 3,
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </PictureWrapper>
        <div>
          <p
            style={{
              color: "white",
              fontFamily: 'Roboto',
              fontSize: 30,
              textAlign: "center",
            }}>
            Modern Mac: which apple computer to choose?
          </p>
          <PWrapper>
            <p style={{ color: "white", fontFamily: 'Roboto' }}>
               The history of the Apple company began precisely with the creation of a computer and
               continues successfully to this day. Apple Mac models are considered
               top models of productive, stylish, ergonomic and powerful
               computers for tasks of various levels of complexity.
            </p>
          </PWrapper>
          <PWrapper>
            <p style={{ color: "white", fontFamily: 'Roboto' }}>
              Students, office workers, programmers, designers, architects
               and musicians — branded computers open new horizons
               opportunities for every industry and profession. Thanks to the wide
               model range - you will definitely be able to choose an option that
               will meet your task needs.
            </p>
          </PWrapper>
        </div>
        <PictureWrapper>
          <div style={{ height: "100%" }}>
            <img
              src={macimg7}
              alt="Poster 1"
              style={{
                borderRadius: 3,
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </PictureWrapper>
        <div>
          <p
            style={{
              color: "white",
              fontFamily: 'Roboto',
              fontSize: 30,
              textAlign: "center",
            }}>
            Apple MacBook Air 15 M2
          </p>
          <PWrapper>
            <p style={{ 
              color: "white", 
              fontFamily: 'Roboto'
              }}>
              The model of ultralight laptops of 2023 can be safely called
               older brother of last year's 13-inch version. After all, the creators
               corporations tried their best and equipped the MacBook Air 15 M2
               the same stylish, thin and light body. However, they were also surprised
               increased display diagonal and powerful equipment inside.
               If you highlight the characteristics of the MacBook Air 2023, you will see
               significant changes that have a positive effect on efficiency and
               performance:
            </p>
          </PWrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Layout;
