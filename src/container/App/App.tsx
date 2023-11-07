import {useState} from 'react';
import UserForm from '../../component/UserForm/UserForm';
import Users from '../../component/Users/Users';
import {User} from '../../type';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Muradil',
      email: 'muradil@gmail.com',
      active: false,
      role: 'admin'
    },
    {
      id: '2',
      name: 'Rika',
      email: 'muradil@gmail.com',
      active: true,
      role: 'user'
    },
    {
      id: '3',
      name: 'Soup',
      email: 'muradil@gmail.com',
      active: true,
      role: 'editor'
    }
  ]);

  const addUser = (user: User) => {
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-3">
          <div className="col-6">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-6">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;