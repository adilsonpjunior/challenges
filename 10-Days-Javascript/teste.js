function reverseString(s) {

    try {

        console.log(s.split("").reverse().join(""));
        
    } catch (error) {

        console.log('s.split is not a function');
        console.log(s);
        
    }
    
}

reverseString('1234');