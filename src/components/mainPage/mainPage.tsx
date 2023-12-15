export default function MainPage({ setUser }) {
  const setFalse = () => {
    setUser(false);
  };
  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={setFalse}>SetUser a false</button>
    </div>
  );
}
