import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery ({items, onClick, page}) {
    const images = items.map(({ id, webformatURL, largeImageURL}) => {
        return <ImageGalleryItem key={id} webformatURL={webformatURL} onClick={onClick} largeImageURL={largeImageURL}/>
    })

    return ( 
             <ul className="ImageGallery" key={page}>
                {images}
            </ul>
    )
}

ImageGallery.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func,
    page: PropTypes.number,
}
