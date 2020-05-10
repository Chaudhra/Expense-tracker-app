import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter,sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    };

    onDatesChange = (date) =>{
        this.props.setStartDate(date.startDate);
        this.props.setEndDate(date.endDate);
    };

    onFocusChange = (calendarFocused) =>{
        this.setState(()=>{
            return {
                calendarFocused:calendarFocused
            }
        });
    };

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e)=>{
        if(e.target.value === 'date'){
            this.props.sortByDate();
        }else if (e.target.value ==='amount'){
            this.props.sortByAmount();
        }
    };

    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className= "input-group__item">
                        {/*We use props.dispatch on the onChange event to write back to the redux store. We have access to it from connect()*/}
                        <input className="text-input" type = "text" placeholder="Search expenses"  value={this.props.filters.text} onChange={this.onTextChange}></input>
                    </div>
                     
                    <div className= "input-group__item">
                       <select className="select"
                        value={this.props.filters.sortBy} 
                        onChange={this.onSortChange}>
                        <option value ="date">Date</option>
                        <option value="amount">Amount</option>
                        </select>
                    </div>

                    <div className= "input-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate = {this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        />
                    </div>
                
                </div>
 
            </div>
        );
    };
};


const mapStateToProps=(state) =>{
    return {
        filters:state.filters
    };
};

// mapDispatchToProps allows us to add properties to the prop. When we say props.setTextFilter,
// It will call the setTextFilter() function by performing a dispatch to the action creater (which is setTextFilter())  
//Example: When we say props.expenses in the componenet, it will call selectExpenses function 

const mapDispatchToProps = (dispatch) =>{
    return {
        setTextFilter:(text) =>{
            return dispatch(setTextFilter(text));
        },
        sortByDate:() =>{
            return dispatch(sortByDate());
        },
        sortByAmount: ()=>{
            return dispatch(sortByAmount());
        },
        setStartDate: (startDate) =>{
            return dispatch(setStartDate(startDate));
        },
        setEndDate: (endDate)=>{
            return dispatch(setEndDate(endDate));
        } 
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);