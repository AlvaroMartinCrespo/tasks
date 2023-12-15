import './App.css';
import Main from './components/Main/main';
import Login from './components/Login/login';
import { client } from './supabase/client';
import { useState } from 'react';
import Tasks from './components/Tasks/tasks';
import sessionDefault from './interfaces/defaultConst';

function App() {
  const [sessionState, setSessionState] = useState(sessionDefault);
  const [isSession, setIsSession] = useState(false);

  client.auth.onAuthStateChange((_event, session) => {
    setSessionState(session ?? sessionDefault);

    if (sessionState?.access_token !== '') {
      setIsSession(true);
    }
  });

  return (
    <>
      <Main isSession={isSession} title="Login">
        <section>
          {sessionState.access_token ? (
            <Tasks session={sessionState} />
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
