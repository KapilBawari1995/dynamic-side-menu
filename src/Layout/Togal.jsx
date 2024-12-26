import React from 'react'

const Togal = ({toggleSidebar}) => {
  return (
    <div className="flex justify-end  px-4 py-2">
        
    <button
        onClick={toggleSidebar}
        className="text-gray-600 hover:text-gray-800"
    >
        <svg
            className="w-6 h-6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path d="M10 8.586L6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586z"></path>
        </svg>
    </button>
</div>
  )
}

export default Togal
