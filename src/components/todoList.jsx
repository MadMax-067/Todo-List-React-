import React, { useState, useEffect } from 'react'
import TodoItem from './todoItem'
import AddTask from './addTask'
import { v4 as uuidv4 } from 'uuid';
const todoList = () => {
    //if the local storage has todos then intialize with them else with an empty array
    const [allTasks, setAllTasks] = useState(() => {
        const todoString = localStorage.getItem("todos");
        return todoString ? JSON.parse(todoString) : [];
    });

    //run on first rendering
    useEffect(() => {
        try {
            const todoString = localStorage.getItem("todos");
            if (todoString) {
                const savedTodos = JSON.parse(todoString);
                setAllTasks(savedTodos);
            }
        } catch (error) {
            console.error("Error loading todos from localStorage", error);
        }
    }, []);


    //save todos locally
    useEffect(() => {
        try {
            localStorage.setItem("todos", JSON.stringify(allTasks));
        } catch (error) {
            console.error("Error saving todos to localStorage", error);
        }
    }, [allTasks]);

    //add todo
    const addTodo = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(), // Unique ID for the task
            taskName: e.target.taskInput.value, // Task name passed from AddTask
            isCompleted: false //set is not completed by default
        };
        setAllTasks((prevTasks) => [...prevTasks, newTask]);
    };



    //rename todo
    const renameTodo = (id, newTaskName) => {
        setAllTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, taskName: newTaskName } : task))
    };

    //deleteTodo
    const deleteTodo = (id) => {
        setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div className='flex flex-col bg-[#161616] text-white mx-auto w-[22rem] md:w-[28rem] rounded-xl my-2'>
            <div className="day w-[20rem] md:w-[26rem] mx-auto pt-2 font-bold text-lg">Today</div>
            <div className="listContainer container flex flex-col w-[20rem] md:w-[26rem] mx-auto py-2 max-h-[32rem] overflow-y-auto ">
                {allTasks.length === 0 && <div className='text-lg md:text-xl'>No Todos 😔, Why not create one😁</div>}
                {allTasks.map((task) => {
                    return <TodoItem key={task.id} taskId={task.id} taskName={task.taskName} renameTodo={renameTodo} deleteTodo={deleteTodo} />
                })}
            </div>
            <AddTask addTodo={addTodo} />
        </div>
    )
}

export default todoList
