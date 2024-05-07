function ticketStatistic(arr, criteria) {

    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [destination, price, status] = arr[i].split("|");
        let myTicket = new Ticket(destination, price, status);
        result.push(myTicket)
    }

    return sortedArr(result, criteria)

    function sortedArr(arr, criteria) {
        return arr.sort((a, b) => {
            return criteria === 'price' ?
                a[criteria] - b[criteria] :
                a[criteria].localeCompare(b[criteria])}
        );
    }
}

let res = ticketStatistic(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'], 'destination');

console.log(res);







