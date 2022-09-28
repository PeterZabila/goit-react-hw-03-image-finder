import { createPortal } from "react-dom";
import { Component } from 'react';
import './Modal.css';
import closePic from '../../images/closeIcon.png'
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = ({target, currentTarget, code}) => {
        if (target === currentTarget || code === 'Escape') {
            this.props.onClose()
        }
    }

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleKeyDown}>
                <div className="Modal">
                   <img className="close" alt="" src={closePic} width="25px" onClick={this.handleKeyDown} />
                    <div className="content">
                    {this.props.children}
                    </div>
                </div>
            </div>,
            modalRoot,
        );
    }
}


Modal.propTypes = {
    onClose: PropTypes.func,
}