const facto = (number) => {
    let fact = 1;
    let factorial = 0;
    for(let i = number;i>0;i--)
    {
      fact = fact * i;
      factorial = fact;
    }
    return factorial;

}
module.exports = facto;