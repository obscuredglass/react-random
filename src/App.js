import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component{
  // we made it a class so we can keep track of 'state'

  state = {
    friendList: friends
  }

  // create method to delete friend from friendlist
  handleRemoveFriend = (friendID) => {
    //create new friendList using.filter()
    const newFriendList= this.state.friendList.filter(friend => {
      return friend.id !== friendID
    });

    this.setState({
      friendList: newFriendList
    });
  }

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
        handleRemoveFriend={this.handleRemoveFriend}
        />
        )
    }

    </Wrapper>
  );
}
}

export default App;
