import ImageGalleryItem from './ImageGalleryItem';


export default function ImageGallery ({items}) {
    const images = items.map(({id, webformatURL, largeImageURL}) => {
        return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL}/>
    })
    return (
            <ul className="ImageGallery">
                {images}
            </ul>
    )
}
