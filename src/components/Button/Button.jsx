import './Button.css';
import { Component } from 'react';

export default class Button extends Component {
   
handlePress =() => {
   this.props.onClick();
}

    render() {
    
    const { handlePress } = this;
    return (
        <button className="Button" onClick={handlePress}>Load more</button>
    )
   }
    
}

