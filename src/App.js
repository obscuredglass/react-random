import React from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import friends from "./aqua.json";
import "./App.css";


class App extends React.Component {

  state = {
    friends,
    clickedFriends: [],
    score: 0
  };

  setClicked = event => {
    const currentFriends = this.state.alt;
    const FriendsAlreadyClicked =
      this.state.clickedFriends.indexOf(currentFriends) > -1;

    if (FriendsAlreadyClicked) {
      this.setState({
        friends: this.state.friends.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedFriends: [],
        score: 0
      });
      alert("You have lost the game. Dare you play again?")
    }
    // if you click on a friend who hasn't been clicked your score goes up and your cards are shuffled
    else {
      this.setState(
        {
          friends: this.state.friends.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriends: this.state.clickedFriends.concat(
            currentFriends
          ),
          score: this.state.score + 1
        },
        // if you get all 12 friends you win, you get a winning message and the game starts back over again
        () => {
          if (this.state.score === 12) {
            alert("Woohoo! You've Won! Now you can rememeber everything!");
            this.setState({
              friends: this.state.friends.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedFriends: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.friends.map(friends => (
            <FriendCard
              setClicked={friends.setClicked}
              id={friends.id}
              key={friends.id}
              image={friends.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;