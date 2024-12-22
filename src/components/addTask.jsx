import React, { useState } from 'react'
const addTask = ({ addTodo }) => {
    //handling input value
    const [task, setTask] = useState("");
    //handling input change
    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };


    return (
        <div>
            <div className="addTaskContainer w-[20rem] md:w-[26rem] bg-[#252525] rounded-xl mx-auto mb-3">
                <form className="addTaskBox flex justify-center items-center" onSubmit={addTodo}>
                    <button>
                        <i class="fa-solid fa-plus px-3 hover:text-gray-400 active:scale-90 transition-all cursor-pointer"></i>
                    </button>
                    <input name='taskInput' type="text" placeholder='Add ToDo' value={task} onChange={handleTaskChange} className='h-10 bg-transparent w-full outline-none' />
                </form>
            </div>
        </div>
    )
}

export default addTask
