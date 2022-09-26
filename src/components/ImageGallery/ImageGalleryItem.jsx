
import './ImageGalleryItem.css';

export default function ImageGalleryItem ({webformatURL, largeImageURL, onClick}) {
        return (
            <li className="ImageGalleryItem">
                <img src={webformatURL} alt="" onClick={() => onClick({largeImageURL})} className="ImageGalleryItem-image"/>
            </li>
        )
}