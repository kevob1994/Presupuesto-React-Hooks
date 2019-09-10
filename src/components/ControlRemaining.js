import React, { Fragment } from 'react'
import {checkBudget} from './../Helpers'
const ControlRemaining = ({budget,remaining}) => (
    <Fragment>
        <div className="alert alert-primary">
            Presupuesto: $ { budget }
        </div>
        <div className={checkBudget(budget,remaining)}>
            Restante: $ { remaining }
        </div>
    </Fragment>
)
 
export default ControlRemaining;