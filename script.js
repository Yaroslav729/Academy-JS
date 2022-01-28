    let num = 266219;
    let arr = String(num).split("");
    let result = 1;

    for (let i = 0; i < arr.length; i++ ) {
        result *=  Number(arr[i])
    }
    console.log(String(result**3).substr(0,2));
