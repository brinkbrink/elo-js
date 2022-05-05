isEven = n => {
    if(n==1){
        return false;
    } else if (n == 0){
        return true;
    } else {
        if(n>0){
            n -= 2;
            return isEven(n);
        }
        else {
            n *= (-1);
            return isEven(n);
        }
    }
}

console.log(isEven(-2));