import React from 'react';
import UserItem from './UserItem';
import {User} from '../../type';

interface Props {
  users: User[]
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      {
        users.map(user => <UserItem key={user.id} user={user}/>)
      }
    </>
  );
};

export default Users;