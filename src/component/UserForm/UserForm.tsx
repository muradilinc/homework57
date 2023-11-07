import React, {useState} from 'react';
import {User, UserMutation} from '../../type';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    active: false,
    role: ''
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser(prevState => ({
      ...prevState,
      [event.target.name] : event.target.value,
    }));
  };

  const changeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prevState => ({
      ...prevState,
      active: event.target.checked
    }));
  };

  const createUser = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user
    });
  };

  return (
    <form onSubmit={createUser}>
      <h4>User Form</h4>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={changeUser}
          id="name"
          placeholder="Name"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={changeUser}
          id="email"
          placeholder="Email"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            checked={user.active}
            onChange={changeActive}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{!user.active ? 'NO' : null} Active</label>
        </div>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="role">Open this select role</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="role"
          id="role"
          value={user.role}
          onChange={changeUser}
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Create user</button>
    </form>
  );
};

export default UserForm;