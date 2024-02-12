let addDays = require('date-fns/addDays');

function dateChange(days){
    let newDate = addDays(new Date(2020, 07, 22), days);
    let mth = newDate.getMonth()+1;
    if (mth < 10){
        mth = '0'+mth;
    }
    return `${newDate.getDate()}-${mth}-${newDate.getFullYear()}`;
}
module.exports = dateChange;