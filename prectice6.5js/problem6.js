const friends = ['rohim','karim','abdul','sadsd',"heroAlom"];
const check = (array) => {
    let bigname = array[0];
    for (let i=0;i<array.length;i++)
        {
            const element = array[i];
            if(element.length>bigname.length)
            {
                bigname = element;
            }   
        }
        return bigname;
}
const result = check(friends);
console.log(result);
