import React from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  border: ${(props) => `1px solid`};
  padding: 25px 12px 18px;
`;
const Name = styled.h2`
  color: #000;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Location = styled.div`
  color: #000;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Email = styled.p`
  color: #000;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;
const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`;
const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #000;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
  }
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
    <Name>{gender}</Name>
    <Name>{name.title + " " + name.first + " " + name.last}</Name>
    <Location>
      {location.street.number +
        "\n" +
        location.street.name +
        "\n" +
        location.city +
        "\n" +
        location.state +
        "\n" +
        location.country +
        "-" +
        location.postcode}
    </Location>
    <Email>{email}</Email>
    <Email>{login.username}</Email>
    <Email>{dateOfBirth.date}</Email>
    <Email>{phone}</Email>
    <Email>
      <img src={picture.large} />
    </Email>
  </StyledContainer>
);
export default CustomCard;
