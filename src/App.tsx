import './App.css';
import Main from './components/Main/main';
import Login from './components/Login/login';

function App() {
  return (
    <>
      <Main title="Login">
        <section>
          <Login />
        </section>
      </Main>
    </>
  );
}

export default App;
