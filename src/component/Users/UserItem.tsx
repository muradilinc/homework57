import React from 'react';

const UserItem: React.FC = () => {
  const userImage = {
    user: 'https://www.iconarchive.com/download/i2335/aha-soft/people/user.ico',
    editor: 'https://w7.pngwing.com/pngs/871/972/png-transparent-customer-ico-user-icon-folder-miscellaneous-blue-text.png',
    admin: 'https://icons.iconarchive.com/icons/aha-soft/people/256/boss-icon.png'
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-sm-3 border-end">
          <img src={userImage.admin} className="card-img rounded-start" alt="..."/>
        </div>
        <div className="col-sm-9">
          <div className="card-body">
            <h5 className="card-title">Muradil</h5>
            <p className="card-text">Email: muradil@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;