import { Fragment } from "react";
import React from 'react';
import Home from "./Component/Home.js";
import About from "./Component/About.js";
import Product from "./Component/Product.js";
import Suggection from "./Component/Suggection.js";
import Form from "./Component/Form.js";
import Footer from "./Component/Footer.js";

function App(props) {
    return (
        <Fragment>
            <Home />
            <About />
            <Product />
            <Suggection />
            <Form />
            <Footer/>
        </Fragment>
    )
}

export default App;
