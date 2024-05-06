function heroicInventory(params) {
    let heroes = [];

    params.forEach((hero) => {


        let obj = {};

        let data = hero.split(' / ');

        obj.name = data[0];
        obj.level = Number(data[1]);
        let items = data[2];

        obj.items = items ? items.split(', ') : [];


        heroes.push(obj);
    });

    console.log(JSON.stringify(heroes));

    

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)