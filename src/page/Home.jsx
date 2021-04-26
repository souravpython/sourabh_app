import React, { Component } from "react";
import styled from "styled-components";
import CustomCard from "../component/CustomCard";
import CustomHeader from "../component/CustomHeader";
import axios from "axios";

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  border-color:black;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 50px;
  padding: 10px;
  justify-items: center;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    justify-items: center;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    justify-items: center;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-columns: "repeat(1, 1fr)";
    grid-gap: 2;
    justify-items: center;
  }
`;

class HomePage extends Component {
  state = {
    error: null,
    isLoaded: false,
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=5`).then(
      (res) => {
        const persons = res.data.results;
        this.setState({
          isLoaded: true,
          persons: persons,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  fetch = () => {
    axios.get(`https://randomuser.me/api`).then((res) => {
      const person = res.data.results[0];
      this.setState((state) => ({
        persons: [...state.persons, person],
      }));
    });
  };

  render() {
    const { error, isLoaded, persons } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <CustomHeader />
          <Button onClick={this.fetch}>Fetch More</Button>
          <Grid>
                {persons.map((person) => (
                    <CustomCard
                    key={person.login.uuid}
                      gender={person.gender}
                      name={person.name}
                      location={person.location}
                      email={person.email}
                      login={person.login}
                      dateOfBirth={person.dob}
                      phone={person.phone}
                      picture={person.picture}
                    />
                ))}
           
              </Grid>
        </div>
      );
    }
  }
}

export default HomePage;
