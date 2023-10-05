import React from 'react';
import styled from 'styled-components';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

const FList = styled.ul`
  margin: 30px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: fit-content;
`;

export default function FriendsList({ friends = [] }) {
  return (
    <FList>
      {friends.map(friend => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </FList>
  );
}
