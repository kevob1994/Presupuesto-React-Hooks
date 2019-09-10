import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function Form (props){
    const {setExpense, setCreateExpense } = props
    const [nameExpense, setNameExpense] = useState("") 
    const [amountExpense, setAmountExpense] = useState("")
    const [error, setError] = useState(0)

    const addExpense = e => {
        e.preventDefault();

        if(amountExpense < 1 || isNaN(amountExpense) || nameExpense === ""){
            setError(true);
            return;
        }
        console.log("ENTROO FORM")
        const expense = {
            nameExpense,
            amountExpense,
            id: shortid.generate()
        }
        console.log(expense)
        
        
        setCreateExpense(true);
        setExpense(expense);
        setError(false);

        setNameExpense("")
        setAmountExpense("")

    }

    return ( 
        <form onSubmit= { addExpense}>
            <h2>Agrega tus gastos aqui</h2>
            { error ? <Error message="Ambos campos son obligatorios o presupuesto incorrecto"/>: null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange= { e => setNameExpense(e.target.value)}
                    value={ nameExpense }
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange= { e => setAmountExpense( parseInt(e.target.value,10))}
                    value={ amountExpense }
                />
            </div>

            <input type="submit" value="Agregar gasto" className="button-primary u-full-width"/>
        </form>
     );
}
 
export default Form;