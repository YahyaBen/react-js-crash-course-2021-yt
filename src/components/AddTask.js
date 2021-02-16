import React from 'react'
import {useState} from 'react'
const AddTask = () => {
    const[text,setText] = useState('')
    const[day,setDay]= useState('')
    const[reminder,setReminder]= useState('')
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task </label>
                <input type='text' placeholder='Add Task' />
            </div>
            <div className='form-control'>
                <label>Day & time </label>
                <input type='text' placeholder='Add Day & Time' />
            </div>
            <div className='form-control from-control-check'>
                <label>Reminder </label>
                <input type='Checkbox' />
            </div>
            <input type='submit' value = 'Save Task' className='btn btn-block'/>
        </form>    
        
    )
}

export default AddTask
