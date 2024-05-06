function townPopulation(params) {
    let obj = {};

    for (const el of params) {

        let [town, popu] = el.split(' <-> ');
        popu = Number(popu);
        
        if (town in obj) {

            obj[town] += popu;
        } else {

            obj[town] = popu;
        }
    }

    let entries = Object.entries(obj);

    for (const [town, popu] of entries) {

        console.log(`${town} : ${popu}`);
    }

}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)