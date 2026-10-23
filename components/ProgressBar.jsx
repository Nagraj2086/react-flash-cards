import React from 'react'

function ProgressBar({current,total}) {
    const percentage=(current)/total*100
  return (
    <div className='progress-container'>
        <div className="progress-bar">
            <div className="progress-fill" style={{ width:`${percentage}%` }}></div>
        </div>
        <p>{current}/{total}</p>
    </div>
  )
}

export default ProgressBar