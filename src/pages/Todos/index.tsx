import useSWR from 'swr'
import {todo} from "./types";

function Todos() {
  const {data, error, isLoading} = useSWR('https://dummyjson.com/todos');
  const todos = data?.todos?.map((t: todo) => {
    return (
      <>
        <div className="flex justify-center items-center">
          <h1 className="text-xl flex-[1] p-2">{t.id}</h1>
          <p className="text-blue-600 flex-[9]  underline ">{t.todo}</p>
        </div>
      </>
    )
  })

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text-blue-800 mb-4">Todos</h1>
      {isLoading && <h1>LOADING....</h1>}
      {data && todos}
      {error && <h1>DATA ERROR OCCURRED</h1>}
      <h1 className="text-3xl font-bold underline text-center text-red-300">Users</h1>
    </>
  )
}

export default Todos;
