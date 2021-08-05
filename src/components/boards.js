import React, { Component } from 'react';
import Board from './board';


class Boards extends Component {
  state = {
    boards: []
  };
  componentDidMount() {
    fetch(
      `https://api.trello.com/1/members/me/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}`,
      {
        method: 'GET'
      }
    )
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        this.setState({
          boards: data
        });
      });
  }
  render() {
    var allBoards = this.state.boards.map(board => {
      return <Board key={board.id} boards={board} />;
    });
    return allBoards;
  }
}

export default Boards;
