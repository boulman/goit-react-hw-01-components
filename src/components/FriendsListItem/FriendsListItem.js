import React from 'react';
import styled from 'styled-components';

const FLItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 250px;
  background-color: white;
  box-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.6);
  border-radius: 4px;
`;

const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 6px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export default function FriendsListItem({
  friend: { name, avatar, isOnline },
}) {
  return (
    <FLItem>
      <Status $isOnline={isOnline} />
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FLItem>
  );
}
