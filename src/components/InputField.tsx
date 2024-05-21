import React, {useRef} from 'react';
import './styles.css';

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e:React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAddTodo}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{handleAddTodo(e);inputRef.current?.blur()}}>
      <input ref={inputRef} className='input__box' type='text' placeholder='Enter To Do' value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField;
