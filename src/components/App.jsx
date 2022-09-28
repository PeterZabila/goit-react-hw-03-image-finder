import { Component } from 'react';
// import axios from 'axios';
import './App.css';
import SearchBar from "./SearchBar/SearchBar";
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { Notify } from 'notiflix';
import fetchResult from './Api/Api';


const URL = `https://pixabay.com/api/`;

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

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ lading: true });

      const response = fetchResult(URL, nextQuery, this.state.page)
        .then(response => {
          if (this.state.results) {
            this.setState((prevState) => {
              return {
                loading: false,
                results: [...prevState.results, ...response.hits],
              }
            });
            return;
          }
        })
        .catch(error => this.setState({ error, loading: false }));
      return response;
    }
  }

  onSubmit = (query) => {
    if (query.trim() === '') {
      Notify.failure('Type search query');
      return;
    }
    
   if(query !== this.state.query) {
    this.setState({query,
      page: 1,
    })
   }
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