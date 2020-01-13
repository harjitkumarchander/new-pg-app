import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
// import Mainpage from './components/Mainpage';
import Register from './components/Register';
import PostpgDetail1 from './components/PostPG/PostpgDetail1';
import PostpgDetail2 from './components/PostPG/PostpgDetail2';
import Postpgdetail3 from './components/PostPG/Postpgdetail3';

ReactDOM.render(
            <Router>
                {/* <Topbar /> */}
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/postpgdetail1" component={PostpgDetail1} />
                    <Route path="/postpgdetail2" component={PostpgDetail2} />
                    <Route path="/postpgdetail3" component={Postpgdetail3} />
                </Switch>
                {/* <Footer /> */}
            </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
