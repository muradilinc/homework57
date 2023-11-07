import UserForm from '../../component/UserForm/UserForm';
import {useState} from 'react';
import {User} from '../../type';

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
        </div>
      </main>
    </>
  );
};

export default App;