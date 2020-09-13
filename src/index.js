import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import Click from './click';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors=[
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
]

const state={
    turndata:getTurnData(authors),
    author:getauthors(authors),
    highlight:""
}

function getauthors(auth){
    const allAuthors = auth.reduce(function(c,p,i){
         c.push(p.name);
         return c;
    },[]);

    return allAuthors;
}


function getTurnData(auth){

   const allBooks = auth.reduce(function(c,p,i){

        let arr = [...c, ...p.books]
       
        return arr;
        
   },[])

   console.log("Books array: "+ allBooks);

   const fourRandomBooks = shuffle(allBooks).slice(0,4);
   const answer= sample(fourRandomBooks);
    return {
       books:fourRandomBooks,
       author: auth.find((authors)=>authors.books.some((title)=>title === answer))
   }
}

console.log(state)
function handle(val){
    console.log(`${val} clicked.`);
}
function checkAnswer(title){
    let isCorrect= state.turndata.author.books.some((item)=> item === title);
    state.highlight = isCorrect ? "correct" :"incorrect";
    render();
}

function render(){

ReactDOM.render(
  <React.StrictMode>
    <AuthorQuiz  {...state} checkAnswer={checkAnswer}/>
  </React.StrictMode>,
  document.getElementById('root')
);

}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
