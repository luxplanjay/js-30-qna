import { fetchMovies } from './services/movie-service';
import movieListTpl from '../templates/movie-list.hbs';
import '../sass/main.scss';
import axios from 'axios';

// 1. Сделать http-запрос
// 2. Получить и обработать ответ
// 3. Нарисовать интерфейс

const movieListRoot = document.querySelector('#movie-list-root');

const renderMovieList = movies => {
    const markup = movieListTpl(movies);
    movieListRoot.insertAdjacentHTML('beforeend', markup);
};

const handleFetchMoviesError = error => {
    if (error.message === 'Request failed with status code 404') {
        console.log('Упс, что-то пошло не так :(');
    }
};

// console.log('Показываем спинер');
// fetchMovies()
//     .then(movies => renderMovieList(movies))
//     .catch(handleFetchMoviesError)
//     .finally(() => console.log('Прячем спинер'));

// async function init() {
//     console.log('Показываем спинер');

//     try {
//         const movies = await fetchMovies();
//         renderMovieList(movies);
//     } catch (error) {
//         handleFetchMoviesError(error);
//     } finally {
//         console.log('Прячем спинер');
//     }
// }

// init();
