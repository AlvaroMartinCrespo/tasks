import './App.css';
import Main from './components/Main/main';
import Login from './components/Login/login';
import { client } from './supabase/client';
import { useState } from 'react';
import Tasks from './components/Tasks/tasks';

function App() {
  const [session, setSession] = useState(null);

  client.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return (
    <>
      <Main title="Login">
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
