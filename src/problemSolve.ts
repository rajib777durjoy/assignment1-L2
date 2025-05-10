

function formatString(input: string, toUpper?: boolean):string{
 if(input && toUpper== true){
    return input.toUpperCase()
 }
else if(toUpper == false){
    return input.toLowerCase()

}
if(input && toUpper == null){
    return input.toUpperCase()
}
}

// console.log(formatString('hello'))


const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number}[]{
   
return items.filter(item=>item?.rating >= 4)
    
}
// console.log(filterByRating(books))

//3



//4



function processValue(value: string | number): number{
   if(typeof value === "string"){
     return value.length;
   }
   else{
    return value * 2;
   }
}
// console.log(processValue(10))

interface Product {
    name: string;
    price: number;
  }
  
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
  if(products.length === 0){
    return null;
  }
   let maxPrice= products[0]
   products.forEach(item=>{
    if(item.price > maxPrice.price){
        maxPrice = item
    }
})

return maxPrice
  }

//   console.log(getMostExpensiveProduct(products))


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
 if(day === Day.Friday || day === Day.Saturday || day === Day.Sunday){
  return 'Weekend'
 }
 else{
   return 'Weekday'
 }
}
// console.log(getDayType(Day.Sunday))

async function squareAsync(n: number): Promise<number>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
       if(n < 0){
        reject()
       }
       else {
         resolve(n*n)
       }
    },1000)
  })
}

squareAsync(-4)
.then(res=>{
  // console.log(res)
})
.catch(err=>{
  // console.log("Error: Negative number not allowed")
})