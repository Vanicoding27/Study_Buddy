import React from 'react'

function Button({ placeholder }) {
    return (
        <button className="bg-blue-600 text-black m-5 px-4 py-2 rounded hover:bg-blue-700 transition">
            {placeholder}
        </button>
    );
}


export default Button 