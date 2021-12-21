import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Makeup from './Makeup';
import Product from './TradeMaket';
import TradeMaket from './Trademark';

const Index = () => {
    return (
            <Router>
                 <Product/>
                 <TradeMaket/>
                 <Makeup/>
            </Router>
    );
}

export default Index;
