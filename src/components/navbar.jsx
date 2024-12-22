import React from 'react'

const navbar = () => {
    return (
        <nav className='container flex mx-auto my-2 justify-center items-center  bg-[#161616] text-[#ecc0c0] h-10  w-[22rem] md:w-[28rem] border rounded-full'>
            <div className="navTitleBox flex justify-center items-center gap-3 font-bold">
                <div className="taskIcon"><i class="fa-solid fa-list-check"></i></div>
                <div className="navTitle">All ToDos</div>
            </div>
        </nav>
    )
};

export default navbar;