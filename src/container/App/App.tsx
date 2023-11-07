import UserForm from '../../component/UserForm/UserForm';
import {useState} from 'react';
import {User} from '../../type';
import Users from '../../component/Users/Users';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers(prevState => [...prevState, user]);
  };
  console.log(users);

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