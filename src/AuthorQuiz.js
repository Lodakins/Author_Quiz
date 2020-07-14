import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import './authorquiz.css';




function Header(){
    return(
           <div className="row">
              <header>
                  <h3 className="text-center text-primary"> Author Quiz</h3>
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

function MainBody(){
  return(
      <div className="row">
          <div className="col-md-4 offset-1">
                <p> This is for images</p>
          </div>
          <div className="col-md-6">
                <p> This is for the Quiz</p>
          </div>
      </div>
  ) 

}

function AuthorQuiz() {
  return (
    <div className="container-fluid">
        <Header />
        <MainBody />
        <Footer />
    </div>
  );
}

export default AuthorQuiz;
