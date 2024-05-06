function filterEmployees(data, criteria) {

    let input = JSON.parse(data);

    if (criteria == 'all') {

        for (let i = 0; i < input.length; i++) {
            let { first_name, last_name, email, gender } = input[i];

            console.log(`${i}. ${first_name} ${last_name} - ${email}`);

        }
    }

    for (let i = 0; i < input.length; i++) {
        let el = input[i];
        let tokens = criteria.split('-');

        if (el[tokens[0]] == tokens[1]) {

            console.log(`${i}. ${el.first_name} ${el.last_name} - ${el.email}`);
        }
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'

)