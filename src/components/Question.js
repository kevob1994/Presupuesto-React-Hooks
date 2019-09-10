import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({setBudget, setquestionBudget, setRemaining}) => {

    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const addBudget = e => {
        e.preventDefault();
        if(amount < 1 || isNaN(amount)){
            setError(true);
            return;
        }
        setError(false)
        setBudget(amount)
        setRemaining(amount)
        setquestionBudget(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error message="El presupuesto es invalido"/>: null}
            <form
                onSubmit={addBudget}
            >
                <input 
                    type="number" 
                    name=""
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => setAmount(parseInt(e.target.value, 10))}

                />
                <input type="submit" className="button-primary u-full-width" value="Definir presupuesto"/>
            </form>
        </Fragment>
        
     );
}
 
export default Question;