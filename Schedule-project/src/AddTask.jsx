import React from 'react'

function AddTask() {
    return (
        <div className='bg-stone-950 p-1 m-4 rounded-2xl text-gray-400'>
            <h2 className='pl-1'>Add Task</h2>
            <h2 className='pl-1'>Define your tasks with priorities</h2>
            <div className='bg-stone-900 m-2 p-1 rounded-2xl'>
                <h3 className='pl-2'>Add New Task</h3>
                <div className='flex flex-row m-4 gap-4'>
                    <div>
                        <h3>Task Name</h3>
                        <input placeholder='eg. study mathematics'></input>
                    </div>
                    <div>
                        <h3>Duration (minutes) </h3>
                        <input placeholder='60'></input>
                    </div>
                    <div>
                        <h3>Priority</h3>
                        <select name="select">
                            <option >High</option>
                            <option >Medium</option>
                            <option >Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <h2 className='pl-1'>Your Tasks(1)</h2>
            <div className='bg-stone-900 p-1 m-2 rounded-2xl pl-2'>
                <h3>Study <span>Medium</span></h3><h4>120 min</h4>
            </div>
        </div>

    )
}

export default AddTask;