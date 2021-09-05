import React from 'react'
import './alert.css'

const Alert = ({ text, color }) => {
    return (
        <div className={`alert alert-${color}`}>
            <p className='alert-textx'>{text}</p>
        </div>
    )
}

export default Alert
