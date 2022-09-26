import './ImageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';
// import Button from '../Button/Button';


export default function ImageGallery ({items, onClick}) {
    const images = items.map(({id, webformatURL, largeImageURL}) => {
        return <ImageGalleryItem key={id} webformatURL={webformatURL} onClick={onClick} largeImageURL={largeImageURL}/>
    })

    return (
        <div>
             <ul className="ImageGallery">
                {images}
            </ul>
        </div>    
    )
}

// import { Component } from 'react';
// import './ImageGallery.css';
// import ImageGalleryItem from './ImageGalleryItem';
// import ImageList from './ImageList';
// import axios from 'axios';

// export default class ImageGallery extends Component {
//     state ={
//         results: [],
//         loading: false,
//         error: null,
//         page: 1
//     }
    
//     componentDidMount() {
//         this.fetchPosts();
//       }
    
//       componentDidUpdate(_, prevState) {
//         const { page } = this.state;
//         if (prevState.page !== page) {
//             this.fetchPosts();
//         }
//       }
    
//       fetchPosts() {
//             const { page } = this.state;
//             this.setState({
//                 loading: true,
//             });
        
//             axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=12`)
//             .then(({data}) => {
//                 this.setState(({items}) => {
//                     return {
//                         items: [...items, ...data]
//                     }
//                 })
//             })
//             .catch(error => {
//                 this.setState({
//                     error
//                 })
//             })
//             .finally(() => this.setState({loading: false}))
//           }
    
    
//     loadMore = () => {
//         this.setState(({page}) => {
//             return {
//                 page: page + 1
//             }
//         })
//       }

//       render() {
       
//         return (
//             <ImageList results={this.state.results}/>
//         )
//       }
// }


