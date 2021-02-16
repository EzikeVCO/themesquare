import React, {Component} from 'react';
import  CardList from '../components/card/CardList'
import Search from '../components/search/Search';
import './App.css';
import Scroll from '../components/scroll/Scroll';
import ErrorBoundry from '../components/errorboundry/ErrorBoundry'
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
                    <ErrorBoundry> 
            <CardList Robots={filteredRobots}/>
            </ErrorBoundry>
            </Scroll>
            </div>
    
        );
    } 
 







}













export default App;