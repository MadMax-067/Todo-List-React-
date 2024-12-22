import React, { useState } from 'react'

const todoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [renamedTask, setRenamedTask] = useState(props.taskName);

  const enableEditing = () => {
    setIsEditing(true);
  };

  const handleRename = (e) => {
    e.preventDefault();
    if (renamedTask.trim()) {
      props.renameTodo(props.taskId, renamedTask);
      setIsEditing(false);
    }
  };
  return (
    <div id={props.taskId} tabIndex={0} className='flex focus:bg-[#393939] hover:bg-[#252525] justify-start items-center rounded-xl my-1 cursor-pointer'>
      <input type="radio" className='mx-3' />
      <form className="todoData flex flex-col" onSubmit={handleRename}>
        {isEditing ? (<input type='text' value={renamedTask} onChange={(e) => { setRenamedTask(e.target.value) }} className='text-[1rem] py-1 bg-transparent outline-none' />) : (<span className='text-[1rem] py-1' >{props.taskName}</span>)}
      </form>
      <div className="optionsBox flex items-center gap-2 ml-auto mr-4">
        <button onClick={enableEditing}>
          <i class="fa-regular fa-pen-to-square hover:text-gray-400 active:scale-90 transition-all"></i>
        </button>
        <button onClick={() => {props.deleteTodo(props.taskId)}} >
          <i class="fa-solid fa-trash hover:text-gray-400 active:scale-90 transition-all"></i>
        </button>
      </div>
    </div>
  )
}

export default todoItem
