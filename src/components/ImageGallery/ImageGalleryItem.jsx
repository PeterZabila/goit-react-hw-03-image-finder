import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem ({webformatURL, largeImageURL, onClick }) {
        return (
            <li className="ImageGalleryItem">
                <img src={webformatURL} alt="" onClick={() => onClick({largeImageURL})} className="ImageGalleryItem-image"/>
            </li>
        )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    onClick: PropTypes.func,
}