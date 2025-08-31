import React from 'react'

function AddTask() {
    return (
        <div className='bg-stone-900 p-p m-4'>
            <h2 className='m-0'>Add Task</h2>
            <h3>Define your tasks with priorities</h3>
            <div className='bg-stone-800 m-2 p-2'>
                <h2>Add New Task</h2>
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
            <h2>Your Tasks(1)</h2>
            <div className='bg-stone-800 p-2'>
                <h3>Study <span>Medium</span></h3><h4>120 min</h4>
            </div>
        </div>

    )
}

export default AddTask;