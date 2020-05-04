import { addExpense, editExpense, removeExpense} from '../../actions/expenses';
import { exec } from 'child_process';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', ()=>{
    const action = editExpense('123abc', {amount: 100} );
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {amount:100}
    });
});

test('should setup add expense action object with provided values',()=>{
    const expenseData = {
        description:'Rent',
        amount:5000,
        createdAt:1000,
        note:'This was last months rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)

        }
    });

});

test('should setup add expense action object with default values',()=>{
    const action = addExpense();
    
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description:'',
            amount:0,
            createdAt:0,
            note:''
        }
    });
});