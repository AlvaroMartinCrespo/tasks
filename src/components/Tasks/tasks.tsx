import { Session } from '@supabase/supabase-js';

function Tasks({ session }: { session: Session }) {
  return (
    <>
      <section className="bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <span className="text-gray text-xs">Welcome, {session.user.email}</span>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-4">Create new Task</h2>
              <form>
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="Text a new task ..."
                    className="w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="ml-2 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-200 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2">Task 1</h3>
                <p className="text-gray-600">Description of Task 1 ...</p>
                <div className="mt-4 flex justify-end">
                  <button className="text-red-600 font-semibold hover:text-red-700">Delete</button>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2">Task 2</h3>
                <p className="text-gray-600">Description of Task 1 ...</p>
                <div className="mt-4 flex justify-end">
                  <button className="text-red-600 font-semibold hover:text-red-700">Delete</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                Show complete task
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tasks;
