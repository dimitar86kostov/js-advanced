function daysInAmonth(month, year) {

    let date = new Date(year, month, 0)

    console.log(date.getDate());

}
daysInAmonth(1, 2012);
daysInAmonth(2, 2021);