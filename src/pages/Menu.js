import React from 'react';
import './Menu.css';
import MenuList from '../components/MenuList';

const Entrees = [
    {
        itemName: "Tacos",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 2.50,
        div:"english here",
        isFavorite: false
    },
    {
        itemName: "Tacos",
        description: "Tripas, Lengua, Cabeza",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 4,
        div: "english here",
        isFavorite: false
    },
    {
        itemName: "Quesadillas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        foodImage: "https://bit.ly/2GBnz1n",
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Quesadillas",
        description: "Tripas, lengua, Cabeza",
        foodImage: "https://bit.ly/2GBnz1n",
        price: 14,
        isFavorite: false
    },
    {
        itemName: "Burritos",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 20,
        isFavorite: false
    },
    {
        itemName: "Burritos",
        description: "Tripas, lengua, Cabeza",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 20,
        isFavorite: false
    },
    {
        itemName: "Mulitas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 30,
        isFavorite: false
    },
    {
        itemName: "Mulitas",
        description: "Tripas, lengua, Cabeza",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 30,
        isFavorite: false
    },
    {
        itemName: "Tortas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 30,
        isFavorite: false
    },
    {
        itemName: "Tortas",
        description: "Tripas, lengua, Cabeza",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 30,
        isFavorite: false
    },
]

const Specials = [
    {
        itemName: "Pizza Birria",
        description: "Two large tortillas stuffed with cheese and birria with a cup of consome",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Birria Ramen",
        description: "Better than your nonna's! All local and fresh ingredients",
        foodImage: "https://bit.ly/2GBnz1n",
        price: 15,
        isFavorite: false
    },
    {
        itemName: "Quesabirrias",
        description: "Fish of the day, grilled whole with a side of vegetables",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 20,
        isFavorite: false
    }
]

const Drinks = [
    {
        itemName: "Bottle Soda",
        description: "The original Caesar's Salad recipe",
        foodImage: "https://bit.ly/2GJFu5W",
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Jumex",
        description: "Better than your nonna's! All local and fresh ingredients",
        foodImage: "https://bit.ly/2GBnz1n",
        price: 15,
        isFavorite: false
    },
    {
        itemName: "Coconut Water",
        description: "Fish of the day, grilled whole with a side of vegetables",
        foodImage: "https://bit.ly/3d6iKsJ",
        price: 20,
        isFavorite: false
    },
    {
        itemName: "Bottle Water",
        description: "Meat!",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 30,
        isFavorite: false
    },
    {
        itemName: "Horchata",
        description: "Meat!",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 30,
        isFavorite: false
    },
    {
        itemName: "Jamaica",
        description: "Meat!",
        foodImage: "https://bit.ly/3ddiSH1",
        price: 30,
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
