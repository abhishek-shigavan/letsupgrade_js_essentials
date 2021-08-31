// Array of food data objects with properties name, price, quantity
let foodItems = [
    { name : "Veg Thali", price : 200, quantity : 2},
    { name : "Paneer Masala", price : 250, quantity : 3},
    { name : "Pav Bhaji", price : 90, quantity : 4},
    { name : "Veg Pulao", price : 120, quantity : 2},
    { name : "Veg Biryani", price : 220, quantity : 1},
    { name : "Dal Tadka", price : 120, quantity : 2},
    { name : "Kurma Puri", price : 70, quantity : 4}
];

for(obj in foodItems){
    let name = foodItems[obj].name;
    let price = foodItems[obj].price;
    let quantity = foodItems[obj].quantity 
    console.log(`Name of Food Item : ${name} | Price : ${price} | Quantity : ${quantity}`);

    // Another way
    // console.log(foodItems[obj]);
}