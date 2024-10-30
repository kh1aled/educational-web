import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";


const Sidebar = () => {
  const texts = useSelector((state) => state.translation.texts);
  const sidebar = useRef();
 

  // ====== Handle mouse event on sidebar    ==========

  const handleMouseHover = () => {
    sidebar.current.classList.add("full-width-admin");
    document.querySelector(".navbar .bars").classList.add("toggled");
  };

  const handleMouseLeave = () => {
    sidebar.current.classList.remove("full-width-admin");
    document.querySelector(".navbar .bars").classList.remove("toggled");
  };

  //handle change actions on menu toggle

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (menuId) => {
    setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };

  return (
    // <aside id="leftsidebar" ref={sidebar} className={texts.lang === "en"? "sidebar sidebar-en": "sidebar sidebar-ar"} onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
    //   <div className="menu">
    //     <div
    //       className="slimScrollDiv"
    //       style={{position:"relative",overflow:"hidden",width:"auto",height:"100%"}}
    //     >
    //       <ul className="list"
    //       style={{overflow:"hidden",width:"auto",height:"100%"}}>

    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/curriculums"

    //           >
    //             <i className="fa-solid fa-book-bookmark"></i>
    //             <span>{texts.sidebar.li1}</span>
    //           </a>
    //         </li>

    //         <li className="active">
    //           <a
    //             href="https://sonono.manhal.com/ar/lessons"
    //             className="toggled waves-effect waves-block"
    //           >
    //             <i className="fa-solid fa-tv"></i>
    //             <span>{texts.sidebar.li2}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/virtual-className"
    //             className="waves-effect waves-block"
    //           >

    //             <i className="fa-regular fa-address-book"></i>
    //             <span>{texts.sidebar.li3}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/homework"
    //             className="waves-effect waves-block"
    //           >

    //             <i className="fa-regular fa-pen-to-square"></i>
    //             <span>{texts.sidebar.li4}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/quiz"
    //             className="waves-effect waves-block"
    //           >

    //             <i className="fa-solid fa-award"></i>
    //             <span>{texts.sidebar.li5}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/media-manhal"

    //           >

    //             <i className="fa-solid fa-landmark"></i>
    //             <span>{texts.sidebar.li6}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/classNamees"
    //             className="waves-effect waves-block"
    //           >

    //             <i className="fa-solid fa-people-line"></i>
    //             <span>{texts.sidebar.li7}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/groups"
    //             className="waves-effect waves-block"
    //           >

    //             <i className="fa-solid fa-group-arrows-rotate"></i>
    //             <span>{texts.sidebar.li8}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/students"
    //             className="waves-effect waves-block"
    //           >
    //             <i className="fa-solid fa-graduation-cap"></i>
    //             <span>{texts.sidebar.li9}</span>
    //           </a>
    //         </li>
    //         <li className="">
    //           <a
    //             href="https://sonono.manhal.com/ar/gradebook"
    //             className="waves-effect waves-block"
    //           >
    //             <i className="fa-regular fa-address-card"></i>
    //             <span>{texts.sidebar.li10}</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //           onClick={handleClick}
    //             className="menu-toggle waves-effect waves-block"
    //             id="presences"
    //           >
    //             <i className="fa-solid fa-file-signature"></i>
    //             <span>{texts.sidebar.li11}</span>
    //           </a>
    //           <ul  className="ml-menu" id="ul-presences">
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/presences/className/progress-className"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-solid fa-table-list"></i>
    //                 <span>{texts.sidebar.li11To1}</span>
    //               </a>
    //             </li>
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/presences/vc/progress-className"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-solid fa-users-rectangle"></i>
    //                 <span>{texts.sidebar.li11To2}</span>
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a
    //             onClick={handleClick}
    //             className="menu-toggle waves-effect waves-block"
    //             id="teacher-tools"
    //           >
    //             <i className="fa-solid fa-screwdriver-wrench"></i>
    //             <span>{texts.sidebar.li12}</span>
    //           </a>
    //           <ul className="ml-menu" id="ul-teacher-tools">
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/badges"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-solid fa-award"></i>
    //                 <span>{texts.sidebar.li12To1}</span>
    //               </a>
    //             </li>
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/calender"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-regular fa-calendar-days"></i>
    //                 <span>{texts.sidebar.li12To2}</span>
    //               </a>
    //             </li>
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/schedule"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-solid fa-table"></i>
    //                 <span>{texts.sidebar.li12To3}</span>
    //               </a>
    //             </li>
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/media_library"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-solid fa-photo-film"></i>
    //                 <span>{texts.sidebar.li12To4}</span>
    //               </a>
    //             </li>
    //             <li className=""  style={{display:"none"}}>
    //               <a
    //                 href="https://sonono.manhal.com/ar/behavior"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="icon-media"></i>
    //                 <span>{texts.sidebar.li11To1}</span>
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <a
    //           onClick={handleClick}
    //             className="menu-toggle waves-effect waves-block"
    //             id="editors"
    //           >
    //             <i className="fa-solid fa-book"></i>
    //             <span>{texts.sidebar.li13}</span>
    //           </a>
    //           <ul className="ml-menu" id="ul-editors">
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/my-stories"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-solid fa-chalkboard-user"></i>
    //                 <span>{texts.sidebar.li13To1}</span>
    //               </a>
    //             </li>
    //             <li className="">
    //               <a
    //                 href="https://sonono.manhal.com/ar/mygames"
    //                 className="waves-effect waves-block"
    //               >
    //                 <i className="fa-solid fa-book-open"></i>
    //                 <span>{texts.sidebar.li13To2}</span>
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </aside>

    <aside
      ref={sidebar}
      className={
        texts.lang === "en" ? "sidebar sidebar-en" : "sidebar sidebar-ar"
      }
      onMouseOver={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-link">
            <li className="nav-link">
              <a href="#">
                <i className="fa-solid fa-book-bookmark"></i>
                <span className="text nav-text">{texts.sidebar.li1}</span>
              </a>
            </li>
            <li className="nav-link active">
              <a href="#">
                <i className="fa-solid fa-tv"></i>
                <span>{texts.sidebar.li2}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-regular fa-address-book"></i>
                <span>{texts.sidebar.li3}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-regular fa-address-book"></i>
                <span>{texts.sidebar.li4}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-solid fa-award"></i>
                <span>{texts.sidebar.li5}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-solid fa-landmark"></i>
                <span>{texts.sidebar.li6}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-solid fa-people-line"></i>
                <span>{texts.sidebar.li7}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-solid fa-group-arrows-rotate"></i>
                <span>{texts.sidebar.li8}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-solid fa-graduation-cap"></i>
                <span>{texts.sidebar.li9}</span>
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="fa-regular fa-address-card"></i>
                <span>{texts.sidebar.li10}</span>
              </a>
            </li>
            <li className="nav-link">
              <a
                className={`menu-toggle waves-effect waves-block ${
                  activeMenu === "presences" ? "toggled selected" : ""
                }`}
                id="presences"
                onClick={() => handleMenuToggle("presences")}
              >
                <i className="fa-solid fa-file-signature"></i>
                <span>{texts.sidebar.li11}</span>
              </a>
              <motion.ul
                animate={{ height: activeMenu === "presences" ? "60px" : "0" }}
                className={`ml-menu ${
                  activeMenu === "presences" ? "active" : ""
                }`}
                id="ul-presences"
              >
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/presences/className/progress-className"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-solid fa-table-list"></i>
                    <span>{texts.sidebar.li11To1}</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/presences/vc/progress-className"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-solid fa-users-rectangle"></i>
                    <span>{texts.sidebar.li11To2}</span>
                  </a>
                </li>
              </motion.ul>
            </li>
            <li className="nav-link">
              <a
                className={`menu-toggle waves-effect waves-block ${
                  activeMenu === "teacher-tools" ? "toggled selected" : ""
                }`}
                onClick={() => handleMenuToggle("teacher-tools")}
                id="teacher-tools"
              >
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <span>{texts.sidebar.li12}</span>
              </a>
              <motion.ul

                  animate={{ height: activeMenu === "teacher-tools" ? "90px" : "0" }}
                className={`ml-menu ${
                  activeMenu === "teacher-tools" ? "active" : ""
                }`}
                id="ul-teacher-tools"
              >
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/badges"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-solid fa-award"></i>
                    <span>{texts.sidebar.li12To1}</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/calender"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-regular fa-calendar-days"></i>
                    <span>{texts.sidebar.li12To2}</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/schedule"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-solid fa-table"></i>
                    <span>{texts.sidebar.li12To3}</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/media_library"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-solid fa-photo-film"></i>
                    <span>{texts.sidebar.li12To4}</span>
                  </a>
                </li>
                <li className="" style={{ display: "none" }}>
                  <a
                    href="https:sonono.manhal.com/ar/behavior"
                    className="waves-effect waves-block"
                  >
                    <i className="icon-media"></i>
                    <span>{texts.sidebar.li11To1}</span>
                  </a>
                </li>
              </motion.ul>
            </li>
            <li className="nav-link">
              <a
                className={`menu-toggle waves-effect waves-block ${
                  activeMenu === "editors" ? "toggled selected" : ""
                }`}
                onClick={() => handleMenuToggle("editors")}
                id="editors"
              >
                <i className="fa-solid fa-book"></i>
                <span>{texts.sidebar.li13}</span>
              </a>
              <motion.ul
                
                animate={{ height: activeMenu === "editors" ? "60px" : "0" }}
                
                className={`ml-menu ${
                  activeMenu === "editors" ? "active" : ""
                }`}
                id="ul-editors"
              >
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/my-stories"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <span>{texts.sidebar.li13To1}</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https:sonono.manhal.com/ar/mygames"
                    className="waves-effect waves-block"
                  >
                    <i className="fa-solid fa-book-open"></i>
                    <span>{texts.sidebar.li13To2}</span>
                  </a>
                </li>
              </motion.ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
