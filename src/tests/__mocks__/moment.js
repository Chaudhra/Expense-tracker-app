// The following is a manual mock function created for Jest, for moment
// Had to create mock function because moment() always generates the current point in time, and everytime the test case runs, this value has
// changed. Therefore, the snapshots don't end up matching. Creating a mock function, enables us to run the below code when moment() is called
// during a test. 
// https://jestjs.io/docs/en/mock-functions.html
const moment = require.requireActual('moment');

export default (timestamp =0) =>{
    return moment(timestamp);
}