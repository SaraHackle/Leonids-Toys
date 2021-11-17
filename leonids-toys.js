const toyToFind =3
const toys = [
  {
    id: 1,
    name: "Teddy Bear",
    manufacturer: "Build-A-Bear",
    price: 10,
    color: "brown",
    amtInInventory: 5,
    inStock: true,
  },
  {
    id: 2,
    name: "Xylophone",
    manufacturer: "Skip Hop",
    price: 15.25,
    color: "rainbow",
    amtInInventory: 10,
    inStock: true,
  },
  {
    id: 3,
    name: "Batman Legos",
    manufacturer: "Lego",
    price: 25.5,
    color: "black",
    amtInInventory: 0,
    inStock: false,
  },
];

const rockingHorse = {
  id: 4,
  name: "My First Rocking Horse",
  manufacturer: "Rocker LLC",
  price: 31,
  color: "blue",
  amtInInventory: 1,
  inStock: true,
};
toys.push(rockingHorse);

const blocks = {
  id: 5,
  name: "ABC Blocks",
  manufacturer: "Alphablox",
  price: 5.75,
  color: "red",
  amtInInventory: 100,
  inStock: true,
};
toys.push(blocks);

for (const toy of toys) {
    if (toy.id === toyToFind){
    toy.price += toy.price * .05
  console.log(`The ${toy.name} made by ${toy.manufacturer} is $${toy.price}`);
    }
}
