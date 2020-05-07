import {expenses} from '../fixtures/expenses';
import {shallow} from 'enzyme';
import {getExpensesTotal} from '../../selectors/expense-total';

test('should return 0 if no expenses',()=>{
    const result = getExpensesTotal([]);
    expect(result).toBe(0);

});

test('should correctly add up signle expense', ()=>{
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () =>{
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
})