import { fetchMovies } from './services/movie-service';
import movieListTpl from '../templates/movie-list.hbs';
import '../sass/main.scss';

// 1. Сделать http-запрос
// 2. Получить и обработать ответ
// 3. Нарисовать интерфейс

const movieListRoot = document.querySelector('#movie-list-root');

const renderMovieList = movies => {
    const markup = movieListTpl(movies);
    movieListRoot.insertAdjacentHTML('beforeend', markup);
};

const handleFetchMoviesError = error => {
    console.log(error);
};

fetchMovies().then(renderMovieList).catch(handleFetchMoviesError);
