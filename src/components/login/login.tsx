export default function Login({ setUser }) {
  const setTrue = () => {
    setUser(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={setTrue}>SetUser a true</button>
    </div>
  );
}
