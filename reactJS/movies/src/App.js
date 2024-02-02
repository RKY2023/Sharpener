import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useCallback } from 'react';

const App = (props) => {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryAPI, setRetryAPI] = useState(true);

  // const fetchMoviesHandler = () => {
  //   fetch('https://swapi.dev/api/films').then( response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map( movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   });
  // }
  
  // async function fetchMoviesHandler () {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('https://swapi.dev/api/filmas')
  //     if(!response.ok){
  //       throw new Error('Something went wrong....Retrying');
  //     }
        
  //     const data = await response.json();
      
  //     const transformedMovies = data.results.map( movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     });
  //     setMovies(transformedMovies);
  //     // setIsLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     if(retryAPI === true){
  //       setTimeout( () => {
  //         fetchMoviesHandler();
  //         console.log('fetching API again...');
  //       },5000);
  //     }
  //   }
  //   setIsLoading(false);
  // }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films')
      if(!response.ok){
        throw new Error('Something went wrong....Retrying');
      }
        
      const data = await response.json();
      
      const transformedMovies = data.results.map( movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
      // setIsLoading(false);
    } catch (error) {
      setError(error.message);
      // if(retryAPI === true){
      //   setTimeout( () => {
      //     fetchMoviesHandler();
      //     console.log('fetching API again...');
      //   },5000);
      // }
    }
    setIsLoading(false);
  },[]);

  useEffect( () => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const setRetryAPIHandler = () => {
    setRetryAPI(false);
  }

  let content = <p>No Movies Found!</p>;

  if(movies.length > 0){
    content = <MoviesList movies={movies} />;
  }

  if(error){
    content = <p>{error}<button onClick={setRetryAPIHandler}>Cancel</button></p>;
  }

  if(isLoading){
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies Found!</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
