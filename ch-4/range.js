myRange = (start, end, step=1) => {
    ran = [];
    for (i=start; i<end+1; i+=step) {
        ran.push(i);
    }
    return ran;
}

rangeSum = (...numbers) => {
    sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}


