import React from 'react';
import './Menu.css';
import MenuList from '../components/MenuList';

const Entrees = [
    {
        itemName: "Tacos",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 2.50,
        isFavorite: false
    },
    {
        itemName: "Tacos",
        description: "Tripas, Lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 4,
        isFavorite: false
    },
    {
        itemName: "Quesadillas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Quesadillas",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: "https://bit.ly/2GBnz1n",
        price: 14,
        isFavorite: false
    },
    {
        itemName: "Burritos",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Burritos",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 14,
        isFavorite: false
    },
    {
        itemName: "Mulitas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Mulitas",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 4,
        isFavorite: false
    },
    {
        itemName: "Tortas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Tortas",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 14,
        isFavorite: false
    },
]

const Specials = [
    {
        itemName: "Pizza Birria",
        description: "Dos tortillas grandes rellenas de queso y birria con una taza de consome",
        englishDesc: "Two large tortillas stuffed with cheese and birria with a cup of consome",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 16,
        isFavorite: false
    },
    {
        itemName: "Birria Ramen",
        description:"Birria y fideos ramen en una taza de consome caliente",
        englishDesc: "Birria and ramen noodles in a warm cup of consome",
        foodImage: "https://bit.ly/2GBnz1n",
        price: 13,
        isFavorite: false
    },
    {
        itemName: "Quesabirrias",
        englishDesc: "Three Quesadillas with birria and a dipping cup of consome",
        description: "Tres Quesadillas con birria y una taza de consome",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 12,
        isFavorite: false
    }
]

const Drinks = [
    {
        itemName: "Bottle Soda",
        description: "",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Jumex",
        description: "",
        foodImage: "https://bit.ly/2GBnz1n",
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Coconut Water",
        description: "",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Bottle Water",
        description: "",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 1.50,
        isFavorite: false
    },
    {
        itemName: "Large Aguas Frescas",
        description: "Horchata, Jamaica",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 5,
        isFavorite: false
    },
    {
        itemName: "Small Aguas Frescas",
        description: "Horchata, Jamaica",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 3,
        isFavorite: false
    },
]


const Menu = () => {
    return (
        <div>
            <h1>Main Course</h1>
            <MenuList menuItems={Entrees} />

            <h1>Specials</h1>
            <MenuList menuItems={Specials} />

            <h1>Drinks</h1>
            <MenuList menuItems={Drinks} />
        </div>
    );
}

export default Menu;
