import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//styles
import {GlobalStyle} from './GlobalStyles';

//components
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import ShowProject from './components/ShowProject';
import Footer from './components/Footer';


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path="/projects" element={ <Project /> } />
                <Route path='/:projectId' element={<ShowProject />} />
            </Routes>
            <Footer />
            <GlobalStyle />
        </Router>
    )
}
export default App