import React from "react";
import styled, { css } from "styled-components";

const neumorphismMixin = (distance, blur, intensity, inset = false) => css`
  box-shadow: ${distance} ${distance} ${blur} ${inset ? "inset" : ""}
      hsl(0, 0%, 35%) inset,
    ${-distance} ${-distance} ${blur} ${inset ? "inset" : ""} hsl(0, 0%, 100%)
      inset;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  border:5px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  margin: 16px;
  ${neumorphismMixin("43px", "45px", "100%")};
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  /* Your content styles go here */
`;

const CardTitle = styled.h2`
  /* Your title styles go here */
`;

const CardText = styled.p`
  /* Your text styles go here */
`;

const Card = ({ title, content, imageUrl }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt="Card" />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
