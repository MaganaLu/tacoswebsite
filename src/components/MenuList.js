import React from 'react';
import MenuItem from './MenuItem';
import MenuItem2 from './MenuItem2';

const MenuList = ({ menuItems }) => {
    return (
        <div>
            {menuItems.map(item => <MenuItem2 itemInfo={item} key={item.itemName} />)}
        </div>
    )
}

export default MenuList;