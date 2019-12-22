import React from 'react';
import './App.css';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './components/Register.js';
import Post from './components/Post.js';

function App() {

  // the following was received by the server
  

  let posts = [{title: "First Post", info:"First react app"}, {title: "Second Post", info: "React first Lesson"} ]

  return (
    <div className="App">
      <Header/>
      <Post title = {posts[0].title} info = {posts[0].info}/>
      <Post title = {posts[1].title} info = {posts[1].info}/>
      <Register/>
    </div>
  );
}

export default App;
