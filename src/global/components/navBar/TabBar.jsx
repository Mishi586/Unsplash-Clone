import React,{useState} from 'react';
import './NavBar.scss';
import { Tab } from './navBarStyle';

const TabBar = () => {
    const tempData=[
        "Spring",
        "Wallpapers",
        '3D Rendors',
        'Travel',
        'Architecture & Interiors',
        'Film',
        'Archivels',

    ]; 
    const [selectedTab, setIsSelected]=useState('Editorials');
  return (

    <div className='tabBarContainer'>
        <Tab
        onClick={()=>setIsSelected('Editorials')}
         isSelected={selectedTab.toLowerCase().match('Editorials'.toLowerCase())}>Editorials</Tab>
        <Tab
        onClick={()=>setIsSelected('Following')} 
        isSelected={selectedTab.toLowerCase().match('Following'.toLowerCase())}>Following</Tab>
        <hr/>
        {
            tempData.map((item, index)=>{
          return <Tab
          key={index}
          onClick={()=>setIsSelected(item)} 
        isSelected={selectedTab.toLowerCase().match(item.toLowerCase())}
          >{item}</Tab>      
            })
        }

    </div>
  )
}

export default TabBar;