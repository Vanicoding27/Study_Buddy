import React from 'react'

function TimeConstraintsBox() {
    return (
        <div className='m-4 p-2 bg-stone-900'>
            <h2 className='p-2'>⏱️ Time Constraints</h2>
            <h3 className='p-2'>Set your daily schedule boundaries</h3>
            <div className='flex flex-row gap-4'>
                <div>
                    <h3>Total available Hours</h3>
                    <input placeholder='select'className='p-2' ></input>
                </div>
                <div>
                    <h3>Wake-up Time</h3>
                    <select name="select">
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                    </select>
                </div>
                <div>
                    <h3>Sleeping Time</h3>
                    <select name="select">
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                    </select>
                </div>
            </div>
        </div>
    )
}


export default TimeConstraintsBox