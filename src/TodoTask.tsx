import React from 'react';
import { ITask } from "../src/interface";



interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
  }

/* létrehoztunk egy interfcaet hogy a meggtudjuk adni a task változót */


const TodoTask = ({ task, completeTask }: Props) => {
    return (
      <div className="task"> 
        <div className="content">
          <span>{task.taskName}</span>
          <span>{task.deadline}</span>
        </div>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
    );
  };
   /* a TodoTask azt csinálja hogy amit beviszel az input mezőbe azt ki is írassa, mind a szöveget és mind az értéket, az x- gomb kattintásával pedig törlöd */
  export default TodoTask;