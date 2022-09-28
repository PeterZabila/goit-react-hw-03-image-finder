import { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from "./SearchBar/SearchBar";
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    results: [],
    query: '',
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    modalContent: {
      largeImageURL: '',
    }
  }

  // componentDidMount () {
  //     axios.get('https://pixabay.com/api/?page=1&key=28076639-0feb76057bbd5c0e620bbf417&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(resp => {
  //         this.setState({results: [...resp.data.hits]});
  //     });
  // }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if((query && prevState.query !== query) || page > prevState.page) {
      this.fetchPosts()
    }
  }

  fetchPosts() {
    const {query, page} = this.state;
    this.setState({ loading: true, });
  
    try {
     axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=28076639-0feb76057bbd5c0e620bbf417&image_type=photo&orientation=horizontal&per_page=12`)
      .then(resp => {
        this.setState({results: [...resp.data.hits]});
    });
   
      } catch (error) {
        this.setState({error});
        
        alert("No results fund matching your search request");
        
      } finally {
        this.setState({
          loading: false,
        })
      }
  }

  onSubmit = (query) => {
    this.setState({query,
      page: 1,
    })
  }

  openModal = (largeImageURL) => {
    this.setState({
        showModal: true,
        modalContent: {
          largeImageURL,
        }
    })
  }

  closeModal = () => {
      this.setState({
          showModal: false,
          modalContent: {
            largeImageURL: '',
          }
      })
  }

  loadMore = () => {
    this.setState(({page}) => {
        return {
            page: page + 1
        }
    })
  }


  // loadMore = () => {
  //   this.setState((prevState, {page}) => {
  //     console.log(prevState.results);
  //     console.log(this.state.results);
  //       return {
  //           page: page + 1,
  //             results: [...prevState.results, ...this.state.results],
  //       }
  //     });
  // }


  render() {
    const { results, loading, error, showModal, page } = this.state;
    const isResults = Boolean(results.length);
    const { onSubmit, loadMore, openModal, closeModal } = this;

    return (
      <>
        <div className="App">
          <SearchBar onSubmit={onSubmit}/>
        </div>
        <div className='Container'>
            {loading && <Loader/>}
            {isResults ? (<ImageGallery items={results} onClick={openModal} onMore={loadMore} key={page}/>) : (<p className='Message'>Please enter search key words</p>) }
            {showModal && <Modal onClose={closeModal}><img src={this.state.modalContent.largeImageURL.largeImageURL} max-width="600px" alt="" /></Modal>}
            {error && <p>Please try later...</p>}
         </div>
         <div className='Container'>
          {isResults && <Button onClick={loadMore}/>}
         </div>
     
      </>
    );
  }
};