import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import Layout from './layouts/Layout';
import LayoutApplication from './layouts/LayoutApplication';

import Main from './pages/Main';
import PageNotFound from './pages/PageNotFound';

import Application from './pages/Application';
import Q1Main from './components/MainApplication/Q1/Q1Main';

import Users from './pages/Users';
import User from './pages/User';

import Posts from './pages/Posts';
import Post from './pages/Post';

import Comments from './pages/Comments';
import Comment from './pages/Comment';

import store from './store';


//CSS

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/animate.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/responsive.css';

///External JS
import './js/active';
import 'jquery';
//import './js/map-active';
//import './js/plugins';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'wow.js';

ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="users" component={Users}>
                <Route path=":userId" component={User}/>
            </Route>
            <Route path="posts" component={Posts}>
                <Route path=":postId" component={Post}/>
            </Route>
            <Route path="comments" component={Comments}>
                <Route path=":commentId" component={Comment}/>
            </Route>
            <Route path="application" component={Application}>
                
            </Route>
            <Route path="*" component={PageNotFound}></Route>
        </Route>
    </Router>
</Provider>, document.querySelector('#root'));