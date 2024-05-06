function calorieObject(params) {
    let result = {};

    for (let i = 0; i < params.length; i += 2) {

        result[params[i]] = Number(params[i + 1]);

    }

    console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'])