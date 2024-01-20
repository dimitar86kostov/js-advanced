function cooking(num, n1, n2, n3, n4, n5) {
    num = Number(num);

    let arr = [n1, n2, n3, n4, n5]

    for (const el of arr) {

        if (el == 'chop') {
            console.log(num / 2);
            num /= 2;


        } else if (el == 'spice') {

            console.log(num + 1);
            num += 1;

        } else if (el == 'bake') {
            num *= 3;
            console.log(num);

        } else if (el == 'fillet') {

            num *= 0.80
            console.log(num.toFixed(2))

        } else if (el == 'dice') {
            
            num = Math.sqrt(num)
            console.log(num)
        }
    }

}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake',
    'fillet'
);
