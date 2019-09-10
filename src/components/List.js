import React from 'react';
import Expense from './Expense';

const List = ({listExpenses}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                listExpenses.map( expense => (
                    <Expense
                        key={expense.id}
                        expense={expense}
                    />
                ))
            }
        </div>
     );
}
 
export default List;