import React from 'react';
import { Component } from 'react';
import './Menu2.css'

class MenuItem2 extends Component {
    constructor(props) {
        super(props);
        const { itemInfo } = this.props;
        this.state = {
            isFavorite: itemInfo.isFavorite
        }
    }

    render() {
        const { itemInfo } = this.props;
        const { isFavorite } = this.state;
        return(
            <div className="itemsContainer">
                <div key={itemInfo.name} className="itemContainer">
                    <div className="imageContainer">
                        <img className="image" src={itemInfo.foodImage} alt=""></img>
                        </div>

                        <div className="infoContainer">
                            <div className="nameAndPriceContainer">
                            <h3>{itemInfo.itemName}</h3>
                            <h4 style={{ marginLeft:'10px', color: "rgb(112, 80, 19)" }}>${parseFloat(itemInfo.price).toFixed(2)}</h4>
                            </div>

                        <div className="textContainer">{itemInfo.description}</div>
                        <div className="textContainer">{itemInfo.englishDesc}</div>
                        </div>
                    </div>
               
            
            </div>
        )
    }
}
export default MenuItem2;