function devisor(n1, n2) {

    while (n2) {
        let temp = n2;
        n2 = n1 % n2;
        n1 = temp;
    }


    console.log(n1);
}


devisor(16, 5)