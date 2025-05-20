const moment = require('moment');
const _ = require('lodash');

module.exports = {
    getYearsOfExperience: () => {
    const startDate = moment('2015-09-01');
    const now = moment();
    const years = now.diff(startDate, 'years', true);
    const roundedYears = Math.floor(years);
    
    // If less than 1 month over roundedYears, return roundedYears
    const nextYear = moment(startDate).add(roundedYears + 1, 'years');
    const monthsToNextYear = now.diff(nextYear, 'months', true);
    
    if (monthsToNextYear < -11) {
      return roundedYears;
    }
    
    return roundedYears + '+';
    }
}
