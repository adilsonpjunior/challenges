function isPositive(a) {
    if (a > 0)
    {
        throw "YES";
    }
    else if (a == 0)
    {
        throw "Zero Error";
    }
    else
    {
        throw "Negative Error";
    }
    
};

isPositive(-20);