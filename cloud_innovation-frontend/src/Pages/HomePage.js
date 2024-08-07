import React from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/Sidebar';
import "../Pages/home.css"
import LogIn from './LogIn';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <>
    <div className='top-header'>
      <Navbar />
    </div>
      <div className="home-page">

        <SideBar />
        <MovieList />
      </div>
    </>
  );
};

export default HomePage;
