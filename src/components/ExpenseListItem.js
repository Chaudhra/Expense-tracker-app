import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = (props) =>{
    return (
        
            <Link className="list-item" to={`/edit/${props.id}`}>
                <div >
                    <h3 className="list-item__title" >{props.description}</h3>
                    <span className="list-item__sub-title">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
                </div>
                <h3 className="list-item__data">{numeral(props.amount/100).format('$0,0.00')}</h3>
            </Link>
            
    );
}


// Dont need anything from the state, so no need to pass mapToState func to connect()
export default connect()(ExpenseListItem);