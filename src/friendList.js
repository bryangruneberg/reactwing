import React, {Component} from 'react';
import Friend from './friend';

class FriendsList extends Component {
  render() {
    const {friends, showActive, filterText} = this.props;

    const friendList = [];
    const totalFriends = friends.length;
    const filtered = filterText !== null && filterText.length;

    friends.forEach(friend => {
      if((!!!friend.isOnline && !showActive) || (!!friend.isOnline && showActive)) {
        if(filtered) {
          const {name, surname} = friend;
          if(name.toUpperCase().indexOf(filterText.toUpperCase()) !== -1 || surname.toUpperCase().indexOf(filterText.toUpperCase()) !== -1) {
            friendList.push(friend);
          }
        } else {
          friendList.push(friend);
        }
      }
    });

    const showActiveText = showActive ? 'online' : 'offline';

    return (
      <div>
        {friendList.length > 0 && <div>
          <div>{friendList.length} {filtered ? 'filtered' : ''} friends {showActive ? 'online' : 'offline'} of {totalFriends} friends </div>
          {friendList.map((friend, index) =>
            <Friend
              key={index}
              friend={friend}
            />)
          }
        </div>
        }

        {friendList.length == 0 && <div>
          No matching friends in your {showActiveText} friends
        </div>
        }
      </div>
    )
  }
};

export default FriendsList;