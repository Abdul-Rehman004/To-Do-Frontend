// src/App.tsx
import React, {useState} from 'react';

import { createTodo, getAllTodo, getOneTodo, updateTodo, deleteTodo } from './todoService';

const App: React.FC = () => {

  const [id, setId] = useState<number>(1)

 
  const handleCreateTodo = async () => {
    const newTodo = {
      
      title: 'New Todo',
      description: 'This is a new todo ',
 
    };
    try {
      await createTodo(newTodo);
      alert('Todo created');
console.log(newTodo);


    } catch (error) {
      console.error( error);
     
    }
  };

  const handleUpdateTodo = async (id:number) => {
    const updatedTodo = {
      title: 'Updated Todo',
      description: 'This is an updated todo ',
      
    };
    try {
      await updateTodo(id ,updatedTodo);
      alert('Todo updated');
    } catch (error) {
      console.error( error);
     
    }
  }; 
  
  const handleGetAllTodos = async () => {
 
    try {
     const todos= await getAllTodo()
     console.log(todos);

     
    } catch (error) {
      console.error( error);
     
    }
  };

  const handleDeleteTodo = async (id:number) => {
   
    try {
       await deleteTodo(id)
       alert('Todo deleted');
      
      
    } catch (error) {
      console.error( error);
     
    }
  };

  const handleGetOneTodo = async (id:number) => {
 
    try {
      const todo = await getOneTodo(id)
      console.log(todo);
      
    } catch (error) {
      console.error( error);
     
    }
  };

  
  return (
    
<>
    <div className="App">
      <h1>To-Do List Operations</h1>
   
      <button onClick={handleCreateTodo}>Create Todo</button>

    
      <button onClick={handleGetAllTodos}>Get Todos</button>

     
      <button onClick={()=> handleUpdateTodo(id)    }>Update Todo  {id} </button>

      <button onClick={()=>handleDeleteTodo(id)}>Delete Todo {id} </button>

      <button onClick={()=>handleGetOneTodo(id)}>Get One Todo {id}</button>
    </div>

<div>
<input
  type="number"
  value={id}
  onChange={(e) => setId(Number(e.target.value))}
  placeholder="Enter Todo ID"
/>
</div>


</>
  );
}

export default App;
