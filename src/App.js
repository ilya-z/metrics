import React from 'react';

import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import {AppProvider} from "./lib/provider";

export const App = () => (
        <AppProvider>
            <Header/>
            <Content/>
            <Footer/>
        </AppProvider>
    );
