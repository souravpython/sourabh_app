import React from "react";
import styled from "styled-components";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const image = {
  width: "140%",
  height: "100%",
};
const StyledContainer = styled.div`
  border: ${(props) => `2px solid black`};
  width: 98%;
  height: 80%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  border-radius: 2.5px;
`;
const Text = styled.h3`
  color: #000;
  font-family: Arial;
  font-size: 1rem;
  margin-left: 0.5rem;
  text-align: left;
  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
`;
const ImageContainer = styled.div`
  border-right: 5px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CustomCard = ({
  gender,
  name,
  location,
  email,
  login,
  dateOfBirth,
  phone,
  picture,
}) => (
  <StyledContainer>
    <ImageContainer>
      <img style={image} src={picture.large} alt={"img"} />
    </ImageContainer>
    <div style={{ marginLeft: "50px", padding: 5 }}>
      <RowContainer>
        {gender === "female" ? (
          <IconContext.Provider value={{ color: "pink", size: "1.2rem" }}>
            <BiFemaleSign />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: "blue", size: "1.2rem" }}>
            <BiMaleSign />
          </IconContext.Provider>
        )}
        <Text>{name.title + " " + name.first + " " + name.last}</Text>
      </RowContainer>

      <RowContainer>
        <IconContext.Provider value={{ color: "green", size: "1.2rem" }}>
          <GoLocation />
        </IconContext.Provider>
        <Text>
          {location.street.number +
            "/" +
            location.street.Text +
            "," +
            location.city +
            " " +
            location.country +
            "-" +
            location.postcode}
        </Text>
      </RowContainer>

      <RowContainer>
        <IconContext.Provider value={{ color: "purple", size: "1.2rem" }}>
          <AiOutlineMail />
        </IconContext.Provider>
        <Text>{email}</Text>
      </RowContainer>
      <RowContainer>
        <IconContext.Provider value={{ color: "red", size: "1.2rem" }}>
          <MdDateRange />
        </IconContext.Provider>
        <Text>{dateOfBirth.date.toString().slice(0, 10)}</Text>
      </RowContainer>

      <RowContainer>
        <IconContext.Provider value={{ color: "Orange", size: "1.2rem" }}>
          <AiFillPhone />
        </IconContext.Provider>
        <Text>{phone}</Text>
      </RowContainer>
    </div>
  </StyledContainer>
);
export default CustomCard;