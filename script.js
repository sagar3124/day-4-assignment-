// 1.	How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log(_.isEqual(obj1, obj2));



// 2.	Use the rest countries API and display all the country flags in console.

let result;
async function fetchData(){
  const res = await fetch('https://restcountries.com/v3.1/all')
              .then(res=>res.json())
              .then(res=>{
                  console.log(res);
                  result= res.map( x => x.flags);
                  console.log(result);
              })

}

fetchData();



// 3.	Use the same rest countries and print all countries name, region, sub region and population

let result;
async function fetchData(){
  const res = await fetch('https://restcountries.com/v3.1/all')
              .then(res=>res.json())
              .then(res=>{
                  console.log(res);
                  res.forEach( x => {
                    console.log(x.name, x.region, x.subregion, x.population);
                  });
              })
}
fetchData();

