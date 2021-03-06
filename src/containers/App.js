import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
    //declaring state , destructuring array 
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    // empty array []  denotes that this hooks loads during mount only (run once), similar to componentDidMount
    //add the state in the array to run if that state changes [users] this will run useffect if users state changes

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
        console.log(event.target.value);
    }

    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (robots.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='tc' >
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;