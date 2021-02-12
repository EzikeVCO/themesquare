import React from 'react';
import  CardList from './card/CardList'
import  { Robots } from './robots/Robots';
import Search from './search/Search'
const App = () => {
    return (
        <div className='tc'>
            <h1>Robotos</h1>
            <Search />
        <CardList Robots={Robots}/>
        </div>

    );







}













export default App;