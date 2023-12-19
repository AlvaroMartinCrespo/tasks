import './App.css';
import Main from './components/Main/main';
import Login from './components/Login/login';
import { client } from './supabase/client';
import { useState } from 'react';
import Tasks from './components/Tasks/tasks';
import { sessionDefault } from './interfaces/defaultConst';

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
      <section>
        {sessionState.access_token ? (
          <Main isSession={isSession} title="Tasks">
            <Tasks session={sessionState} />
          </Main>
        ) : (
          <>
            <Login />
          </>
        )}
      </section>
    </>
  );
}

export default App;
