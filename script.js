

const people = [ 
    {name: 'Sandra', age: 18}, 
    {name: 'Erin', age: 28}, 
    {name: 'Carl', age: 42}, 
    {name: 'Lloyd', age: 12}, 
    {name: 'Samuel', age: 31}, 
    {name: 'William', age: 65}, 
    {name: 'Ric', age: 53}, 
    {name: 'Mick', age: 12}, 
    {name: 'Ludwig', age: 74},
    {name: 'Hilaire', age: 10}, 
    {name: 'Menachem', age: 4}, 
    {name: 'Saul', age: 52}, 
    {name: 'Robert', age: 65}, 
    {name: 'Blair', age: 12}, 
    {name: 'Robert', age: 81}, 
    {name: 'Peter', age: 69}
];

const futurePeople = people.map((item) => {
    item.age += 30;
    return item
})

const deadPeople = futurePeople.map((item) => {
    if (item.age > 100) {
      {item.isDead = true}
    }  else 
    {item.isDead = false}
    
  })