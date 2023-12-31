import React from 'react';
import {User} from '../../type';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  const userImage: Record<string, string> = {
    user: 'https://www.iconarchive.com/download/i2335/aha-soft/people/user.ico',
    editor: 'https://icons.iconarchive.com/icons/iconshock/free-folder/512/folder-customer-icon.png',
    admin: 'https://icons.iconarchive.com/icons/aha-soft/people/256/boss-icon.png'
  };


  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-sm-3 border-end">
          <img src={userImage[user.role]} className="img-fluid rounded-start" alt="user-ava"/>
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Role: {user.role}</p>
            <p className="card-text">Status: {!user.active ? <span className="bg-danger text-light">NO</span> : null} Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;