import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component{
  // we made it a class so we can keep track of 'state'

  state = {
    friendList: friends,
    clickedFriends,
    score
  };

setClicked = event => {
const currentFriends = this.state.alt;
const FriendsAlreadyClicked =
this.state.clickedFriends.indexOf(currentFriends) > -1;

if (FriendsAlreadyClicked) {
  this.setState({
    friends: this.state.friendList.sort(function(a, b) {
      return 0.5 - Math.random();
    }),
    clickedFriends: [],
    score: 0
  });
  alert("You have lost the game. Dare you play again?")
}

else  {
  this.setState(
    {
      friendList: this.state.friendList.sort(function(a, b){
        return 0.5 - Math.random();
      }),
      clickedFriends: this.state.clickedFriends.concat(
        currentFriends
      ),
      score: this.state.score + 1
    }
  )
}



}






  shuffleCards = () => {
    const shuffledFriendList = this.state.friendList.sort(() => 0.5 - Math.random());
  
    this.setState({
      friendList: shuffledFriendList
    });
  };

render () {
  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
    {
      this.state.friendList.map(friend =>
        <FriendCard
        key={friend.id}
        id={friend.id}
        name={friend.name}
        image={friend.image}
        occupation={friend.occupation}
        location={friend.location}
        shuffleCards={this.shuffleCards}
        />
        )
    }

    </Wrapper>
  );
}
}

export default App;