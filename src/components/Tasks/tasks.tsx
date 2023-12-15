function Tasks({ session }) {
  return (
    <>
      <div className="p-5 m-5 border absolute">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log(session)}
        >
          Imprime sesion
        </button>
      </div>
    </>
  );
}

export default Tasks;
