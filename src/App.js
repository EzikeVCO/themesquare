import React, {Component} from 'react';
import  CardList from './card/CardList'
import  { Robots } from './robots/Robots';
import Search from './search/Search';
import './App.css';
import Scroll from './scroll/Scroll';
class App extends Component{
        constructor() {
        super()
        this.state = {
            Robots: [],
            searchfield: ''

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({Robots:users})});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    
        
    }
    render() {
           
        const filteredRobots = this.state.Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.Robots.length === 0) {
            return <h1>loading</h1>

        }else
        return (
            <div className='tc'>
                <h1>ThemePark</h1>
                <Search searchChange={this.onSearchChange} />
                <Scroll> 
            <CardList Robots={filteredRobots}/>
            </Scroll>
            </div>
    
        );
    } 
 







}













export default App;