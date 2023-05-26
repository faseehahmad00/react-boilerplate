import React, { useEffect } from 'react';
import useSWR from 'swr';
import { todo } from './types';
import showNotification from '../../utils/showNotification';

function Todos() {
  const { data, error, isLoading } = useSWR('https://dummyjson.com/todos');

  useEffect(() => {
    showNotification('info', 'This is how notifications would display');
  }, []);

  const todos = data?.todos?.map((t: todo) => (
    <div key={t.id} className="flex justify-center items-center">
      <h1 className="text-xl flex-[1] p-2">{t.id}</h1>
      <p className="text-blue-600 flex-[9]  underline ">{t.todo}</p>
    </div>
  ));

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text-blue-800 mb-4">Todos</h1>
      {isLoading && <h1>LOADING....</h1>}
      {data && todos}
      {error && <h1>DATA ERROR OCCURRED</h1>}
    </>
  );
}

export default Todos;
