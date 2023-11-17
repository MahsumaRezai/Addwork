import { Fragment } from 'react';
import classes from './Form.module.css';
import add from './asset/add.png'
const Form = () => {
    return (
        <Fragment>
            <form className={classes.form}>
                <div className={classes.inputs}>
                    <input className={classes.input} placeholder="" type="text"></input>
                    <button>
                        <img src={add} alt="" className={classes.add} />
                    </button>

                </div>


            </form>

        </Fragment>
    )
}
export default Form;
