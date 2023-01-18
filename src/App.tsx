import React, { FC, ChangeEvent, useState } from 'react';
import {ITask} from './interface';
import './App.css';
import TodoTask from './TodoTask';


const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState<ITask[]>([]);
  
  
  const valtoztatas = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    }
    else{
      setDeadline(Number(event.target.value));
    }
    

  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todo, newTask]);
    setTask("");
    setDeadline(0);
    
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todo.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };


  return (
   <div className="App">
    <div className="Header">
      <div className="inputContainer">
      </div>
      <input type="text" placeholder="Task..."   
      name="task" 
      value={task}
      onChange ={valtoztatas}>

      </input>
      <input 
      type="number"
      placeholder="Deadline (in days)..." name="deadline"
      value={deadline}
      onChange= {valtoztatas} 
      />
      <button onClick={addTask}>Add a Task</button>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return <TodoTask  key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  </div>
  );
};

export default App;
