import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
import Cart from './container/Cart';
import Checkout from './container/Checkout';



const App = () => {
    return (<>
        <div>


            <Router>
                <Header />

                <Router>
                    <Switch>
                        <Route path='/' exact component={ProductListing} />
                        <Route path='/product/:productID' exact component={ProductDetail} />

                        <Route path='/cart' exact component={Cart} />
                        <Route>page not found!</Route>
                    </Switch>
                </Router>
            </Router>
        </div>
    </>)
}

export default App
