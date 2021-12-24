import React from 'react'
import FidgetSpinner from '../assets/Fidget-spinner.gif'
import '../css/MiniLoader.css'

export const MiniLoader: React.FC = () => {
    return (
        <div className='mini-loader'>
            <img className='img' src={FidgetSpinner} />
        </div>
    )
}