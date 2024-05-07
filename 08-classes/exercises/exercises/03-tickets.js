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

// print() {
//     return `Destination: ${destination}, Price: ${price}, Status: ${status}`;
// }

// sorting() {
//     for (let i = 0; i < input.length; i++) {
//         const line = input[i].split("|");
//         this.sorted.push(line);
//     }
//     console.log(this.sorted.sort());;
// }

// result() {

//     for (const line of this.sorted) {

//         finalResult.push(new Ticket(line[0], line[1], line[2]))
//     }






