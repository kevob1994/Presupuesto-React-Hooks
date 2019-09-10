import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlRemaining from './components/ControlRemaining';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [remaining, setRemaining] = useState(0)
  const [ questionBudget, setquestionBudget ] = useState(true);
  const [ createExpense, setCreateExpense ] = useState(false);
  const [ expense, setExpense ] = useState({});
  const [listExpenses, setListExpenses] = useState([]);

  useEffect(() => {
    if(createExpense === true){
      const listSpending = [...listExpenses, expense];
      setListExpenses(listSpending);

      const budgetRemaining = remaining - expense.amountExpense;
      setRemaining(budgetRemaining)
      setCreateExpense(false)
    }
  },[createExpense])

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {
            (questionBudget)
            ?
              <Question 
                setBudget={ setBudget }
                setquestionBudget={ setquestionBudget }
                setRemaining={ setRemaining }
              />
            : (
                <div className="row">
                  <div className="one-half column">
                    <Form 
                      setExpense={setExpense}
                      setCreateExpense={setCreateExpense}
                    />
                  </div>
                  <div className="one-half column">
                    <List
                      listExpenses={listExpenses}
                    />
                    <ControlRemaining
                      budget={budget}
                      remaining={remaining}
                    />
                  </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
