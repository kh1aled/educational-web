

import React, { useEffect, useRef, useState } from "react";
import "./GamesView.css";
import NavPin from "../NavPin/NavPin";
import { useSelector } from "react-redux";

const GamesView = () => {
  const [selectedValue, setSelectedValue] = useState("-1");
  const [fullWidth, setFullWidth] = useState(true);
  const [currentItemActiveIndex, setCurrentItemActiveIndex] = useState(0);
  const [iframeSrc, setIframeSrc] = useState(""); // For iframe src
  const dataGames = useSelector((state) => state.games1420.value.games);
  const next = useRef()
  const prev = useRef()


  const handleChange = (e) => {
    setSelectedValue(e.target.value);

  };
  
  const handleNext = () => {
    // Move to next item if within bounds
    if (currentItemActiveIndex < Object.keys(dataGames).length - 1) {
      setCurrentItemActiveIndex(currentItemActiveIndex + 1);
    }
  };

  const handlePrev = () => {
    // Move to previous item if within bounds
    if (currentItemActiveIndex > 0) {

      setCurrentItemActiveIndex(currentItemActiveIndex - 1);
    }else{
      prev.current.classList.add("disabled")
    }
  };

  const handleItemClick = (index, srcAttr) => {
    // Set active item and iframe src on click
    setCurrentItemActiveIndex(index);
    setIframeSrc(srcAttr);
  };

  useEffect(() => {
    // Update iframe src when currentItemActiveIndex changes
    const selectedItem = dataGames[Object.keys(dataGames)[currentItemActiveIndex]];
    if (selectedItem) {
      setIframeSrc(selectedItem.src_attr);
    }

    if(currentItemActiveIndex < Object.keys(dataGames).length - 1){
      next.current.classList.remove("disabled")
    }else{
      next.current.classList.add("disabled")
    }

    if (currentItemActiveIndex > 0) {
      prev.current.classList.remove("disabled")
    }else{
      prev.current.classList.add("disabled")
    }
  }, [currentItemActiveIndex, dataGames]);

  return (
    <div className="gamesview">
      <nav className="navbar-game navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupported"
          aria-controls="navbarSupported"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-angle-down"></i>
          {/* <i className="fa-solid fa-angle-up up"></i>  */}
        </button>
        <div className="navbar-icon">
          <div
            category="2"
            className="category-icon-container float-left"
            title="المادة الدراسية"
            style={{ backgroundImage: "url(/src/assets/cat1.svg)" }}
          ></div>
          <h1 className="lesson-title-container float-left" title="الدرس">
            الرياضيات
          </h1>
          <div className="separateing-line-container float-left"></div>

          <label className="level-title-container float-left" title="الصف">
            البستان
          </label>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupported">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link">
                <div className="filter-student-list float-left">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <div className="float-left stdent-filters-ddl  focused">
                  <select
                    className="form-control ms"
                    name="users-selector-view"
                    id="users-selector-view"
                    class-id="9"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option userimageurl="/images/user.svg" value="-1">
                      Select Student
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/25ee7f58587a8e415f02dbfad4fe0cf5.jpeg"
                      value="18"
                    >
                      Sara Nizar
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/d46e113f1c656390af2b70961ba732b1.jpeg"
                      value="78"
                    >
                      Manar Khalid
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/29ff0dd3d263df51893f724ac5413aa0.jpeg"
                      value="79"
                    >
                      Ahmad Ali
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/bd818db78b193338c40c29213eda0943.jpeg"
                      value="81"
                    >
                      Rawan Amjad
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/f347e2d6e5b0573dd1a267333e293d86.jpeg"
                      value="88"
                    >
                      Zaid Khalid
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/7261c6c7f08835037d903804d6705d63.jpeg"
                      value="90"
                    >
                      Haya Amjad
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/71967dfec2cc5e2bfc1b487d690af6a3.jpeg"
                      value="91"
                    >
                      mahmood Salem
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/024252f1996475155cacb635d854265c.jpeg"
                      value="92"
                    >
                      Ameer Khalid
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/319304581f41bceedd4a450a20255a76.jpeg"
                      value="98"
                    >
                      Shadi Ali
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/avatars/58c1f07ffb6bd9a7bb8cf387d09ab0b0.jpeg"
                      value="101"
                    >
                      Omar Saeed
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/default_thumb/avatar/avatar-girl.png"
                      value="148"
                    >
                      student1
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/default_thumb/avatar/avatar-girl.png"
                      value="154"
                    >
                      student2
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/default_thumb/avatar/avatar-girl.png"
                      value="157"
                    >
                      student3
                    </option>
                    <option
                      userimageurl="https://sonono.manhal.com/images/default_thumb/avatar/avatar-girl.png"
                      value="173"
                    >
                      khalil
                    </option>
                  </select>
                  <div className="user-avatar"></div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <div
                  className="points-awards-container float-left"
                  title="النقاط"
                >
                  <div className="imagepoints floating-left"></div>
                  <div className="num floating-left user-points">0%</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <div
                  className="points-awards-container float-left"
                  title="الجوائز"
                >
                  <div className="imageawards floating-left"></div>
                  <div className="num floating-left user-awards">0</div>
                </div>
              </a>
            </li>
            <li className="nav-item rate">
              <a className="nav-link">
                <div
                  className="rate-container float-left"
                  title="معدل تطور الأداء"
                >
                  <div className="imagerate floating-left"></div>
                  <div className="num floating-left user-progress">0%</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link user">
                <div className="pull-left nametop">user1</div>
                <img
                  className="rounded-circle pull-left"
                  src="https://sonono.manhal.com/images/default_thumb/avatar/avatar-teacher-f.png"
                  alt="User"
                />
              </a>
            </li>
            <li className="nav-item exist">
              <a href="">
                <i className="fa-solid fa-right-from-bracket"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="game">
        <aside
          id="leftsidebar"
          className="sidebarGame lesson-builder"
          style={{ width: fullWidth ? "220px" : "0" }}
        >
          <div className="vertical-slider-viewer">
            <div className="slimScrollDiv" style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
              <ul className="hide-bullets  bulider jq-bulider ui-sortable" id="lesson_item_container" style={{ overflow: "hidden", width: "auto", height: "100vh" }}>
                {Object.keys(dataGames).map((el, index) => {
                  const card = dataGames[el];
                  return (
                    <Item
                      media_id={card.media_id}
                      media_cat={card.media_cat}
                      media_agree={card.media_agree}
                      src_attr={card.src_attr}
                      title={card.title}
                      image_src={card.image_src}
                      key={index}
                      myindex={index}
                      isSelected={currentItemActiveIndex === index}
                      onItemSelect={() => handleItemClick(index, card.src_attr)}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
        <section id="game-body" className="game-body clearfix">
          <NavPin />
          <a className="arrow-next" ref={next} onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </a>
          <canvas
            id="canvas"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "0px",
              top: "0px",
              overflow: "hidden",
              cursor: "auto",
            }}
            className="canvas"
          ></canvas>
          <iframe
            id="iframe"
            allowFullScreen=""
            className="lesson-viewer-iframe"
            style={{ height: "100%", width: "100%" }}
            src={iframeSrc}
          ></iframe>
          <a className="arrow-prev" ref={prev} onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </a>
          <a className={fullWidth ? "bars toggled" : "bars"} onClick={() => setFullWidth(!fullWidth)}>
            <span></span>
          </a>
        </section>
      </section>
    </div>
  );
};

const Item = ({ media_id, media_cat, media_agree, src_attr, title, image_src, myindex, isSelected, onItemSelect }) => {
  return (
    <li
      className={`col-sm-12 col-md-12 col-lg-12 jq_media_item ui-sortable-handle ${isSelected ? "selected" : ""}`}
      media_agree={media_agree}
      media_type="all"
      media_cat={media_cat}
      media_id={media_id}
      src-attr={src_attr}
      onClick={onItemSelect}
    >
      <div className="item-header">
        <div className="item-category" title={title}>
          {title}
        </div>
        <div className="item-seen float-right" id="seen_"></div>
      </div>
      <a className="thumbnail jq_media_title" id="carousel-selector-1" title={title}>
        <img src={image_src} alt={title} />
      </a>
    </li>
  );
};

export default GamesView;
