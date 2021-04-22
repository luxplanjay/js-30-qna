import logoTpl from '../templates/logo.hbs';
import '../sass/common.scss';
import '../sass/main.scss';

const logoMarkup = logoTpl({ text: 'Logo!!!!', href: 'goit.ua' });
console.log(logoMarkup);
document.body.insertAdjacentHTML('beforeend', logoMarkup);
