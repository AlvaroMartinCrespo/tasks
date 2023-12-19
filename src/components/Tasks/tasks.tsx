import { Session } from '@supabase/supabase-js';
import { useState } from 'react';
import { client } from '../../supabase/client';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { Task } from '../../interfaces/interfaces';

function Tasks({ session }: { session: Session }) {
  const [task, setTask] = useState<string>('');
  const [listOfTasks, setListOfTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<boolean>(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  // Post task to supabase
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    const idToast = toast.loading('Creating task...');

    try {
      const req = await client.from('tasks').insert({
        name: task,
        user_id: session.user.id,
      });
      console.log(req);
      toast.success('Task created', {
        id: idToast,
      });
    } catch (e) {
      toast.error('Error creating task', {
        id: idToast,
      });
      console.error(e);
    }
    setTask('');
    fetchTasks();
  };

  // Get tasks from supabase
  const fetchTasks = async () => {
    try {
      const { data } = await client
        .from('tasks')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });
      setListOfTasks(data || []);
    } catch (e) {
      console.error(e);
    }
  };

  const completeTask = async (id: number) => {
    const idToast = toast.loading('Completing task...');
    try {
      await client.from('tasks').update({ done: true }).eq('id', id).select();
      toast.success('Task completed', {
        id: idToast,
      });
    } catch (e) {
      toast.error('Error completing task', {
        id: idToast,
      });
      console.error(e);
    }
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    const idToast = toast.loading('Deleting task...');
    try {
      await client.from('tasks').delete().eq('id', id);
      toast.success('Task deleted', {
        id: idToast,
      });
    } catch (e) {
      toast.error('Error deleting task', {
        id: idToast,
      });
      console.error(e);
    }
    fetchTasks();
  };

  return (
    <>
      <section className="bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <span className="text-gray text-xs">Welcome, {session.user.email}</span>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-4">Create new Task</h2>
              <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                  <textarea
                    placeholder="Text a new task ..."
                    className="w-full border-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                    onChange={(e) => setTask(e.target.value)}
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
              {completedTasks ? (
                <>
                  <span className="italic text-gray text-xs w-full">Here are the tasks you have completed.</span>
                  {listOfTasks
                    .filter((task: Task) => {
                      return task.done;
                    })
                    .map((task: Task) => {
                      return (
                        <div className="bg-gray-200 rounded-md p-4">
                          <p className="text-gray-600">{task.name}</p>
                          <div className="mt-4 flex justify-end gap-5">
                            <button
                              onClick={() => deleteTask(task.id)}
                              className="text-red-600 font-semibold hover:text-red-700"
                            >
                              Delete
                            </button>
                            <span className="text-green-600 font-semibold">Completed</span>
                          </div>
                        </div>
                      );
                    })}
                </>
              ) : (
                <>
                  {listOfTasks.length !== 0 ? (
                    <>
                      {listOfTasks
                        .filter((task: Task) => !task.done)
                        .map((task: Task) => {
                          return (
                            <>
                              <div className="bg-gray-200 rounded-md p-4">
                                <p className="text-gray-600">{task.name}</p>
                                <div className="mt-4 flex justify-end gap-5">
                                  <button
                                    onClick={() => deleteTask(task.id)}
                                    className="text-red-600 font-semibold hover:text-red-700"
                                  >
                                    Delete
                                  </button>
                                  {task.done ? (
                                    <span className="text-green-600 font-semibold">Completed</span>
                                  ) : (
                                    <>
                                      <span className="text-gray-600 font-semibold">Pending</span>
                                      <button
                                        className="text-green-600 font-semibold hover:text-green-700"
                                        onClick={() => completeTask(task.id)}
                                      >
                                        Complete
                                      </button>
                                    </>
                                  )}
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </>
                  ) : (
                    <span className="italic text-gray text-xs">No tasks</span>
                  )}
                </>
              )}
            </div>

            <div className="flex justify-center mt-10">
              {completedTasks ? (
                <>
                  <button
                    onClick={() => setCompletedTasks(!completedTasks)}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Show tasks
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setCompletedTasks(!completedTasks)}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Show complete task
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default Tasks;
