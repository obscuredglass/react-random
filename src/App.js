import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {
  // we made it a class so we can keep track of 'state'

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






  // shuffleCards = () => {
  //   const shuffledFriendList = this.state.friendList.sort(() => 0.5 - Math.random());

  //   this.setState({
  //     friendList: shuffledFriendList
  //   });
  // };

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
        />
        <h1 className="title">Friends List</h1>
        {
          this.state.friends.map(friends =>
            <FriendCard
              key={friends.id}
              id={friends.id}
              name={friends.name}
              image={friends.image}
              occupation={friends.occupation}
              location={friends.location}
              // shuffleCards={this.shuffleCards}
            />
          )
        }

      </Wrapper>
    );
  }
}

export default App;
