import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../GlobalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";
import video from "../../assets/hero.mp4";

export const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src={video} autoPlay muted />
      {/* <video width="750" height="500" controls>
        <source src={video} type="video/mp4" />
      </video> */}
      <Container>
        <MainHeading> Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security for clients all over the world
        </HeroText>

        <ButtonWrapper>
          <Link to="signup">
            <Button>Get started</Button>
          </Link>
          <HeroButton>Find more</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};
