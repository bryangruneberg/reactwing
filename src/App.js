import React, {Component} from 'react';
import FriendsList from './friendList'
import friends from './friends.json';
import Toggle from './Toggle'
import TextFilter from './TextFilter'


class App extends Component {

  state = {
    showActive: true,
    filterText: null,
  }

  toggleActive = () => {
    this.setState({
      showActive: !this.state.showActive
    });
  }

  processFilterText = e => {
    this.setState({
      filterText: e.target.value
    });
  }

  render()
  {
    const showActive = this.state.showActive;
    const filterText = this.state.filterText;

    return (
      <div>
        <Toggle showActive={showActive} toggleActive={this.toggleActive} />
        <hr />
        <TextFilter value={filterText} onChange={this.processFilterText} />
        <b>Friend List</b>
        <hr />
        <FriendsList friends={friends} showActive={showActive} filterText={filterText} />
        <hr />
      </div>
    )
  }
};

export default App;