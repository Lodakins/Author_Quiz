import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import './bootstrap.min.css';
import './authorquiz.css';




function Header(){
    return(
           <div className="row">
              <header className="jumbotron col-md-12">
                  <h3 className="text-center text-primary"> Author Quiz</h3>
                  <p> Please select book written by the author</p>
              </header>
           </div>
    )
}

function Footer(){
  return (
      <footer className="footer row">
          <div className="col-md-12">
              <p> &copy; Copyright LDTech </p>
          </div>
      </footer>
  )
}

function MainBody({author,books,highlight,checkAnswer}){

  function getBackgroundColor(highlight){
    let mapping={
        "none":"",
        "correct":"green",
        "incorrect":"red"
    }

    return mapping[highlight];

  }

  return(
      <div className="row mb-5" style={{backgroundColor:getBackgroundColor(highlight) ,padding:"15px"}}>
          <div className="col-md-5">
                <img src={author.imageUrl} className="authorImage" alt="author" />
          </div>
          <div className="col-md-6">
            {books.map(title=> <Book title={title}  key={title} onClick={checkAnswer} />)}
          </div>
      </div>
  ) 

}

function Book({title,onClick}){
  return(
  <div style={{backgroundColor:"#57df90",padding:"20px 30px",marginTop:"20px"}} onClick={()=>onClick(title)}> <h4> {title} </h4></div>
  )
}


MainBody.propTypes={
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource:PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.string.isRequired,
    checkAnswer: PropTypes.func.isRequired,
    highlight: PropTypes.string.isRequired
}


function AuthorQuiz({turndata,highlight,checkAnswer}) {
  return (
    <div className="container-fluid">
        <Header />
        <MainBody  {...turndata} highlight={highlight} checkAnswer={checkAnswer}/>
        <Footer />
    </div>
  );
}

export default AuthorQuiz;
