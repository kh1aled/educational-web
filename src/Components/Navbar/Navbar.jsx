import React, { useRef } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../Store/TranslationSlice";
import img from '../../assets/abc-block.png' 
const Navbar = () => {
  const texts = useSelector((state) => state.translation.texts);
  const dispatch = useDispatch();
  const collapse = useRef();
  const bars = useRef();


  const handleToggler = ()=>{

      bars.current.classList.toggle("toggled");
      document.querySelector(".sidebar").classList.toggle("full-width-admin");
    
  }


  const handleshow = ()=>{
    collapse.current.classList.toggle("show")
  }



  return (
    <nav className="navbar myNav navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleshow}
      >
        <i className="fa-solid fa-angle-down"></i>
      </button>
      <div className="navbar-icon">
        <div className="bars" ref={bars} onClick={handleToggler}></div>
        <h1 className="lesson-title-container float-left" title="الدرس">
          <img src={img} alt="" />
        </h1>
        <label className="level-title-container float-left" title="الصف">
          {texts.navbar.title}
        </label>
      </div>
      <div ref={collapse} className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link user">
              <img
                className="rounded-circle pull-left"
                src="https://sonono.manhal.com/images/default_thumb/avatar/avatar-teacher-f.png"
                alt="User"
              />
              <div className="pull-left nametop">user1</div>
              <i className="fa-solid fa-angle-down pull-left arrow"></i>
            </a>
          </li>
          <li className="nav-item lang">
            <a className="nav-link">
              <h1 title={texts.lang === "en" ?  "change language to arabic":  "تغير اللغة الي الانجليزية"} onClick={() => texts.lang === "en" ? dispatch(changeLanguage('ar')) : dispatch(changeLanguage('en'))}>{texts.navbar.lang}</h1>
            </a>
          </li>
          <li className="nav-item notifications">
            <a className="nav-link" href="#">
              <i className="fa-solid fa-bell"></i>
            </a>
          </li>
          <li className="nav-item message">
            <a className="nav-link" href="#">
              <i className="fa-regular fa-comment-dots"></i>
            </a>
          </li>
          
         
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
