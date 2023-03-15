import { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onTaggle }) => {
  return (
    <div>
      {tasks.length > 0
        ? tasks.map((task,index) => (
            <Task key={index} task={task} onDelete={onDelete} onTaggle={onTaggle} />
          ))
        : " no tasks"}
    </div>
  );
};

export default Tasks;
