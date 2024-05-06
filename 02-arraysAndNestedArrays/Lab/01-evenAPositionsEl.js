function evenAPositionsEl(params) {

    let result = '';

    for (let i = 0; i < params.length; i++) {
        const element = params[i];

        if (i % 2 == 0) {
            result += `${element} `
        }
    }
    console.log(result);

}
evenAPositionsEl(['20', '30', '40',
    '50', '60']
);