import React from 'react';
import './App.css';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register.js';
import Post from './components/Post.js';
import Slider from './components/Slider.js';
import AddPost from './components/AddPost.js'
import Carousel from 'react-bootstrap/Carousel';
function App() {

  // the following was received by the server
  

  let posts = [{title: "Khao-sok, Thiland", image: require( "../src/khao-sok.jpg" ),info:"Some say the biodiversity of Khao Sok exceeds that of the Amazon. Most agree that at over 160 million years old, the evergreen rainforest here is one of the oldest in the world. Whichever list it tops, the fact this 738-sq-km expanse of national park exists at all in its current state – alive with whooping gibbons, flashing hornbills and with such richness of flora and fauna that an entomologist on honeymoon once picked up a rock and discovered a new species – is something to be grateful for. And this biodiversity haven owes a few thanks to an unexpected twist of fate."}, 
  {title: "Florance Italy",image: require( "../src/florence.jpg" ), info: 'Firenze, the cradle of the Renaissance, is one of Europe’s great art cities. With frescoes by Giotto and Ghirlandaio, canvases by Botticelli and Bronzino, and sculptures by Michelangelo and Giambologna, there is so much exquisite art and architecture within its ancient walls that it’s easy to become overwhelmed.'} ]

  return (
    <div className="App">
      <Header/>
      <Slider/>

      {/* <Post title = {posts[0].title} info = {posts[0].info}/>
      <Post title = {posts[1].title} info = {posts[1].info}/> */}

      {posts.map((element)=>{
        return <Post title={element.title} image={element.image} info={element.info}/>
      })}

      <AddPost/>
      <Register/>
    </div>
  );
}

export default App;
