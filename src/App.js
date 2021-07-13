import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (name, age) => {
    setUsers((previousState) => {
      return [
        ...previousState,
        {
          name,
          age,
          id: Math.random(),
        },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUser} />
      {users.length > 0 && <UsersList users={users} />}
    </div>
  );
}

export default App;
