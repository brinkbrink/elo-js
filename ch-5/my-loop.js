higher = (a, test, update, body) => {
    for(let val = a; test(val); val = update(val)){
    body(val);
}
}

higher(3, p => p <= 666, p => p + 13, console.log);