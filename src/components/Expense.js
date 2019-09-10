import React from 'react'

const Expense = ({expense}) => (
    <li className="gastos">
        <p>
            {expense.nameExpense}
            <span className="gasto">$ {expense.amountExpense}</span>
            
        </p>
    </li>
)
 
export default Expense;