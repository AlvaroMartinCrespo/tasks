import { Session } from '@supabase/supabase-js';

function Tasks({ session }: { session: Session }) {
  return (
    <>
      <div className="p-5 m-5 border absolute">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log(session.user)}
        >
          Imprime User
        </button>
      </div>
    </>
  );
}

export default Tasks;
