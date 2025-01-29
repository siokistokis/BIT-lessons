
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
























import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateStory from './pages/CreateStory';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-story" component={CreateStory} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </Router>
  );
}



















import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/stories')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  return (
    <div>
      <h1>Fundraising Stories</h1>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            <h3>{story.title}</h3>
            <img src={story.imageUrl} alt={story.title} />
            <p>{story.description}</p>
            <p>Target: ${story.targetAmount} | Collected: ${story.collectedAmount}</p>
            {/* Display donation form */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default Home;


