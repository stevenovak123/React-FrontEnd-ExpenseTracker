import React, { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {    
    //     const[userInput,setUserInput]=useState({enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })
    //this way all 3 update and not just 1 field. Using multiple states 
    //for the each field also works.
    const [enteredTitle,setEnteredTitle]=useState('')
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value); 
        // setUserInput({
            // ...userInput,
            // enteredTitle:event.target.value,
            // })
            //proper way of doing using a single state is down below.
            // setUserInput((prevState)=>{
                //     return {...prevState,enteredTitle:event.target.value }
                // });
            };
            const [enteredAmount,setEnteredAmount]=useState('');
            const AmountChangeHandler=(event)=>{
                setEnteredAmount(event.target.value);
                // setUserInput({
                    //     ...userInput,   
                    //     enteredAmount:event.target.value,
                    // })
                    
                    //proper way of doing using a single state is down below.
                    // setUserInput((prevState)=>{
                        //     return {...prevState,enteredAmount:event.target.value }
                        // });
                    }
                    const [enteredDate,setEnteredDate]=useState('');
                    const DateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        
        //proper way of doing using a single state is down below.
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:event.target.value }
        // });
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredDate('')
        setEnteredTitle('')
        setEnteredAmount('')
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>title</label>
                <input type="Text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={DateChangeHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
            </form>
    )
}

