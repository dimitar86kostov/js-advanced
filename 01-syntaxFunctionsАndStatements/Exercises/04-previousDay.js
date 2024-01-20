function prevDay(year, month, date) {

    let d = new Date(year, month - 1, date);

    d.setDate(d.getDate() - 1)

    let yy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let out = `${yy}-${mm}-${dd}`
   

    
    console.log(out);
    

}
// prevDay(2016, 9, 30);
prevDay(2015, 2, 1)