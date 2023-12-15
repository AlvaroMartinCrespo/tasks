import { useState } from 'react';
import Login from './components/login/login';
import MainPage from './components/mainPage/mainPage';
import './App.css';

function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      {!user ? (
        <>
          <Login setUser={setUser} />
        </>
      ) : (
        <>
          <MainPage setUser={setUser} />
        </>
      )}
    </>
  );
}

export default App;
