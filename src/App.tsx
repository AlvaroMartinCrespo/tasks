import './App.css';
import Main from './components/Main/main';
import Login from './components/Login/login';
import { client } from './supabase/client';
import { useState } from 'react';
import Tasks from './components/Tasks/tasks';
import sessionDefault from './interfaces/defaultConst';

function App() {
  const [session, setSession] = useState(sessionDefault);
  const [isSession, setIsSession] = useState(false);

  client.auth.onAuthStateChange((_event, session) => {
    setSession(session);

    if (session) {
      setIsSession(true);
    }
  });

  return (
    <>
      <Main isSession={isSession} title="Login">
        <section>
          {session ? (
            <Tasks session={session} />
          ) : (
            <>
              <Login />
            </>
          )}
        </section>
      </Main>
    </>
  );
}

export default App;
