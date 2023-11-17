import React, { useState } from 'react';
import Button from '../Component/Button.js'
import './Form.css';
import image from './asset/add.png'
const Form = (props) => {
    const [entervalue, setentervalue] = useState('');
    const goalInputChangeHandler = (event) => {
        setentervalue(event.target.value)

    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(entervalue)
    };
    return (
        <form onSubmit={formSubmitHandler} className='content'>
            <div className="form-control">
                <label>Add Your Takse</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">
                <img alt="" src={image} className="image"/>
            </Button>
        </form>
    );
}
export default Form;