import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Todo } from './todoModel';

type Props = {
    todo: Todo;
    task: Todo[];
    setTask: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodoComp = ({todo, task, setTask}: Props) => {
  return (
    <form className='todo__single'>
      <span className='todo__single__text'></span>
      <div>
        <span className='icon'><CiEdit /></span>
        <span className='icon'><MdDeleteOutline /></span>
        <span className='icon'><TiTick /></span>
      </div>
    </form>
  )
}

export default SingleTodoComp;
