import React, {Component} from 'react';
import  CardList from './card/CardList'
import  { Robots } from './robots/Robots';
import Search from './search/Search';
import './App.css';
class App extends Component{
        constructor() {
        super()
        this.state = {
            Robots: Robots,
            searchfield: ''

        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    
        
    }
    render() {
           
        const filteredRobots = this.state.Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1>ThemePark</h1>
                <Search searchChange={this.onSearchChange} />
            <CardList Robots={filteredRobots}/>
            </div>
    
        );
    } 
 







}













export default App;