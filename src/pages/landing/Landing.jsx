import React from 'react';
import { NavBar, TabBar } from '../../global/components/navBar';
import Hero from './components/hero/Hero';
import ImageCollection from './components/imageCollection/ImageCollection';

const Landing=()=>{
    return <div>
        <NavBar/>
        <TabBar/>
        <Hero/>
        <ImageCollection/>
        
    </div>


}
export default Landing;