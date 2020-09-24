import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import News from './news/news.reducer';
import Contact from './contact/contact.reducer';
import Theme from './theme/theme.reducer';
import Table from './table/table.reducer';
import Snackbar from './snackbar/snackbar.reducer';
import DialogWindow from './dialog-window/dialog-window.reducer';
import Auth from './auth/auth.reducer';
import Pattern from './pattern/pattern.reducer';
import Material from './material/material.reducer';
import BusinessPages from './business-pages/business-pages.reducer';
import Products from './products/products.reducer';
import Categories from './categories/categories.reducer';
import Users from './users/users.reducer';
import Comments from './comments/comments.reducer';

const rootReducer = (history) =>
  combineReducers({
    Contact,
    News,
    Theme,
    Table,
    Snackbar,
    DialogWindow,
    Auth,
    router: connectRouter(history),
    Pattern,
    Material,
    BusinessPages,
    Products,
    Categories,
    Users,
    Comments
  });
export default rootReducer;
