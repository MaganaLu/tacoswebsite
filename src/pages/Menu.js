import React from 'react';
import './Menu.css';
import MenuList from '../components/MenuList';
import Tacos from '../pictures/Tacos.jpg'
import Mulitas from '../pictures/Mulitas.jpg'
import Torta from '../pictures/Torta.jpg'
import PizzaBirria from '../pictures/Pizzabirria2.jpg'
import QuesaBirria from '../pictures/Quesabirrias.jpg'
import BirriaRamen from '../pictures/birriaramen.jpg'
import AguasFrescas from '../pictures/AguasFrescas.png'
import BottleSoda from '../pictures/BottleSoda.jpg'
import BottleWater from '../pictures/bottleWater.jpg'
import CoconutWater from '../pictures/coconutWater.png'
import Jumex from '../pictures/jumex.jpg'
import burritos from '../pictures/burritos.jpg'
import Quesadillas from '../pictures/Quesadillas.jpg'
import ChilesRellenos from '../pictures/ChillesRellenos.jpg'
import CarneAsada from '../pictures/CarneAsada.jpg'
import Birria from '../pictures/Birria.jpg'



const Entrees = [
    {
        itemName: "Tacos",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: Tacos,
        price: 2.50,
        isFavorite: false
    },
    {
        itemName: "Tacos",
        description: "Tripas, Lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: Tacos,
        price: 4,
        isFavorite: false
    },
    {
        itemName: "Chiles Rellenos",
        description: "Tripas, Lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: ChilesRellenos,
        price: 4,
        isFavorite: false
    },
    {
        itemName: "Carne Asada",
        description: "Tripas, Lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: CarneAsada,
        price: 4,
        isFavorite: false
    },
    {
        itemName: "Birria",
        description: "Tripas, Lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: Birria,
        price: 4,
        isFavorite: false
    },
    {
        itemName: "Quesadillas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: Quesadillas,
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Quesadillas",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: Quesadillas,
        price: 14,
        isFavorite: false
    },
    {
        itemName: "Burritos",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: burritos,
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Burritos",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: burritos,
        price: 14,
        isFavorite: false
    },
    {
        itemName: "Mulitas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: Mulitas,
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Mulitas",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: Mulitas,
        price: 4,
        isFavorite: false
    },
    {
        itemName: "Tortas",
        description: "Asada, Adobada, Carnitas, Pollo, Birria",
        englishDesc: "Beef, Pork, Pork Carnitas, Chicken, Beef BBQ",
        foodImage: Torta,
        price: 12,
        isFavorite: false
    },
    {
        itemName: "Tortas",
        description: "Tripas, lengua, Cabeza",
        englishDesc: "Tripe, Tongue, Head Meat ",
        foodImage: Torta,
        price: 14,
        isFavorite: false
    },
]

const Specials = [
    {
        itemName: "Pizza Birria",
        description: "Dos tortillas grandes rellenas de queso y birria con una taza de consome",
        englishDesc: "Two large tortillas stuffed with cheese and birria with a cup of consome",
        foodImage: PizzaBirria,
        price: 16,
        isFavorite: false
    },
    {
        itemName: "Birria Ramen",
        description:"Birria y fideos ramen en una taza de consome caliente",
        englishDesc: "Birria and ramen noodles in a warm cup of consome",
        foodImage: BirriaRamen,
        price: 13,
        isFavorite: false
    },
    {
        itemName: "Quesabirrias",
        englishDesc: "Three Quesadillas with birria and a dipping cup of consome",
        description: "Tres Quesadillas con birria y una taza de consome",
        foodImage: QuesaBirria,
        price: 12,
        isFavorite: false
    }
]

const Drinks = [
    {
        itemName: "Bottle Soda",
        description: "",
        foodImage: BottleSoda,
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Jumex",
        description: "",
        foodImage: Jumex,
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Coconut Water",
        description: "",
        foodImage: CoconutWater,
        price: 3,
        isFavorite: false
    },
    {
        itemName: "Bottle Water",
        description: "",
        foodImage: BottleWater,
        price: 1.50,
        isFavorite: false
    },
    {
        itemName: "Large Aguas Frescas",
        description: "Horchata, Jamaica",
        foodImage: AguasFrescas,
        price: 5,
        isFavorite: false
    },
    {
        itemName: "Small Aguas Frescas",
        description: "Horchata, Jamaica",
        foodImage: AguasFrescas,
        price: 3,
        isFavorite: false
    },
]


const Menu = () => {
    return (
        <div>
            <h1>Specials</h1>
            <MenuList menuItems={Specials} />

            <h1>Main Course</h1>
            <MenuList menuItems={Entrees} />

            <h1>Drinks</h1>
            <MenuList menuItems={Drinks} />
        </div>
    );
}

export default Menu;
