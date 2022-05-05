countBs = (string, char) => {
    let count = 0;
    for (let N=0; N < string.length; N++) {
        if (string[N]==char) {
            count += 1;
        }
    }
    return count;
}