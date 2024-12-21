const greadChecker = (num) => {
    if (num >= 80 && num <= 100) {
        return console.log("You got A+");
    }
    else if (num >= 60 && num < 80) {
        return console.log("You got A-");
    }
    else if (num >= 40 && num < 60) {
        return console.log("You got B");
    }
    else if (num >= 33 && num < 40) {
        return console.log("You got C");
    }
    else if (num => 0 && num < 33) {
        return console.log("You are fail");
    }

}


const arr = [33, 43, 23, 77, 89, 65, 58, 37, 95];



for (let i = 0; i < arr.length; i++) {
    greadChecker(arr[i])
}