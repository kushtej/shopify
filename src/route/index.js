import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Privacy from "./Privacy";
import AddCart from "./AddCart";


/**
 * @class AppRouter
 */
export class AppRouter extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Router>
                <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/" exact component={ Home }/>
                             <Route path="/about" exact component={ About }/>
                           <Route path="/contact" exact component={ Contact }/>
                           <Route path="/products" exact component={ Products }/>
                             <Route path="/privacy" exact component={ Privacy }/>
                             <Route path="/addcart" exact component={ AddCart }/>

                        </Switch>
                    </Suspense>
                </Router>
            </div> 
        )
    }
}

export default AppRouter;