import React, { useEffect, useRef, useState } from "react";
import "./Navpin.css";
import { color } from "framer-motion";

import color7 from "../../assets/color7.svg";
import color1 from "../../assets/color1.svg";
import color2 from "../../assets/color2.svg";
import color3 from "../../assets/color3.svg";
import color6 from "../../assets/color6.svg";
import color5 from "../../assets/color5.svg";


import pen1 from "../../assets/pen1.svg";
import pen2 from "../../assets/pen2.svg";
import pen3 from "../../assets/pen3.svg";
import pen4 from "../../assets/pen4.svg";
import pen5 from "../../assets/pen5.svg";
import pen6 from "../../assets/pen6.svg";


import erazers from "../../assets/eraser01.svg";

const NavPin = () => {
  const canvasRef = useRef(null); // استخدام useRef للـ canvas
  const mainFourToolsRef = useRef(null);
  const dropdownTogglerRef = useRef(null);
  const dropdownPinRef = useRef(null);
  const erazersPin = useRef();
  const clearPin = useRef();
  const [isActive, setIsActive] = useState(false); // استخدام useState لتتبع حالة النشاط

  
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const mainFourTools = mainFourToolsRef.current;
    const dropdownPin = dropdownPinRef.current;
    const dropdownToggler = dropdownTogglerRef.current;
    if (isActive) {
      canvas.classList.add("active");
    } else {
      canvas.classList.remove("active");
    }

    let itemsColor = dropdownPin.querySelectorAll(".row-a a");
    let itemsSize = dropdownPin.querySelectorAll(".row-b a");

    let isDrawing = false; // حالة الرسم
    let isErasing = false; // لتمكين/تعطيل المساحة

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let colors = dropdownPin.querySelectorAll(".row-a a");
    colors.forEach((color) => {
      color.addEventListener("click", function () {
        removeColorsActive();
        color.classList.add("active");
        changeColor(color.getAttribute("color"));
      });
    });

    let sizes = dropdownPin.querySelectorAll(".row-b a");
    sizes.forEach((size) => {
      size.addEventListener("click", function () {
        removeSizesActive();
        size.classList.add("active");
        changeSize(size.getAttribute("line-width"));
      });
    });

    function removeColorsActive() {
      colors.forEach((color) => {
        color.classList.remove("active");
      });
    }

    function removeSizesActive() {
      sizes.forEach((size) => {
        size.classList.remove("active");
      });
    }

    function changeColor(color) {
      theColor = color;
      ctx.strokeStyle = color; // هذا السطر هو المهم لتغيير اللون
      ctx.globalCompositeOperation = "source-over"; // يجب أن يكون في وضع الرسم وليس المسح
      changeImg();
    }

    function changeSize(size) {
      thSize = size;
      ctx.lineWidth = size;
      changeImgSize();
    }

    let theColor;
    let thSize;

    itemsColor.forEach((item) => {
      if (item.classList.contains("active")) {
        theColor = item.getAttribute("color");
      }
    });

    itemsSize.forEach((item) => {
      if (item.classList.contains("active")) {
        thSize = item.getAttribute("line-width");
      }
    });

    function changeImg() {
      if (!isActive) {
        canvas.style.cursor = `auto`;
        console.log("without pen");
        return;
      } else {
        console.log("with pen");
        itemsColor.forEach((item, index) => {
          if (item.classList.contains("active")) {
            // استخدم قيمة src-attr التي تحتوي على المسار المستورد
            const imageSrc = item.getAttribute("src-attr");
            const penSrc = item.getAttribute("pen-attr");
            mainFourTools.querySelector(".colors").style.background = `#fff url(${imageSrc}) no-repeat center center / contain`;
            canvas.style.cursor = `url(${penSrc}) , auto`;
          }
        });
      }
    }
    
    changeImg();

    function changeImgSize() {
      if (!isActive) {
        return false;
      } else {
        itemsSize.forEach((item) => {
          if (item.classList.contains("active")) {
            mainFourTools.querySelector(".sizes .sizes-content").style.width =
              item.getAttribute("line-width") + "px";
            mainFourTools.querySelector(".sizes .sizes-content").style.height =
              item.getAttribute("line-width") + "px";
          }
        });
      }
    }
    changeImgSize();

    // التعامل مع النقر على عنصر الألوان
    mainFourTools.querySelector(".colors").addEventListener("click", () => {
      dropdownPin.style.top = "100%"; // تعيين الموضع
      dropdownPin.classList.toggle("active");


      // عرض .row-a وإخفاء .row-b
      dropdownPin.querySelector(".row-a").style.display = "flex";
      dropdownPin.querySelector(".row-b").style.display = "none";
      
     
    });

    // التعامل مع النقر على عنصر الأحجام
    mainFourTools.querySelector(".sizes").addEventListener("click", () => {
      dropdownPin.style.top = "98px"; // تعيين الموضع
      dropdownPin.classList.toggle("active");
      // عرض .row-b وإخفاء .row-a
      dropdownPin.querySelector(".row-a").style.display = "none";
      dropdownPin.querySelector(".row-b").style.display = "flex";
    });

   

    // الوظائف الخاصة بالرسم
    const startDrawing = (e) => {
      if (!isActive || e.button !== 0) return;
      isErasing = false;
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
    };

    const endDrawing = () => {
      isDrawing = false;
    };

     clearPin.current.addEventListener("click", clear);
     erazersPin.current.addEventListener("click", toggleErase);

    function clear() {
      if (!isActive) return;  // تحقق من حالة النشاط قبل تنظيف اللوحة
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function toggleErase(e) {
      if (!isActive) return;  // تحقق من حالة النشاط قبل التبديل
      isErasing = !isErasing;
      if(isErasing){
        const era_attr = e.target.getAttribute("era-attr")
        canvas.style.cursor = `url(${era_attr}) , auto`;
      }
      
      ctx.globalCompositeOperation = isErasing ? "destination-out" : "source-over";
    }

  

    // إعداد الأحداث
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", endDrawing);

    return () => {
      // تنظيف المستمعات عند الخروج من المكون
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", endDrawing);
    };
  }, [isActive]); // تعيد تشغيل useEffect فقط عند تغيير isActive

  return (
    <div
      className="nav-pin-main coloring-main-container active"
      id="navbar-collapse"
    >
      <ul className="nav-pin nav navbar-nav navbar-right">
        <li className="dropdown user-info-headernew">
          <a
            ref={dropdownTogglerRef}
            className={
              isActive ? "dropdown-toggler active" : "dropdown-toggler"
            }
            onClick={() => setIsActive(!isActive)}
          >
            <i className="fas fa-feather"></i>
          </a>
          <div
            ref={mainFourToolsRef}
            className={isActive ? "main-four-tools active" : "main-four-tools"}
          >
            <div className={isActive ? "colors animate" : "colors"}></div>
            <div className={isActive ? "sizes animate" : "sizes"}>
              <div
                className="sizes-content"
                style={{ width: "5px", height: "5px" }}
              ></div>
            </div>
            <div className={isActive ? "erazers animate" : "erazers"} era-attr={erazers} ref={erazersPin}></div>
            <div className={isActive ? "deletes animate" : "deletes"} ref={clearPin}></div>
          </div>
          <ul
            style={{display:isActive?"":"none"}}
            className="dropdown-menu no-close dropdown-pin topB"
            ref={dropdownPinRef}
          >
            {/* <li className="no-close row-a" style={{ display: "flex" }}>
              <a
                className="float-left jq_color color-1 active"
                src-attr="src/assets/color7.svg"
                
                color="#000000"
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-2"
                src-attr="/src/assets/color1.svg"
                color="#ec008c"
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-3"
              
                src-attr="/src/assets/color2.svg"
                color="#f7941d"
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-4"
                src-attr="/src/assets/color3.svg"
                color="#28abe2"
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-5"
                src-attr="/src/assets/color6.svg"
                color="#33b451"
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-6"
                src-attr="/src/assets/color5.svg"
                color="#ed1e25"
              >
                <i></i>
              </a>
            </li> */}

            <li className="no-close row-a" style={{ display: "flex" }}>
              <a
                className="float-left jq_color color-1 active"
                src-attr={color7} // نستخدم المسار المستورد هنا
                color="#000000"
                pen-attr={pen1}
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-2"
                src-attr={color1} // نستخدم المسار المستورد هنا
                color="#ec008c"
                pen-attr={pen2}
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-3"
                src-attr={color2} // نستخدم المسار المستورد هنا
                color="#f7941d"
                pen-attr={pen3}
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-4"
                src-attr={color3} // نستخدم المسار المستورد هنا
                color="#28abe2"
                pen-attr={pen4}
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-5"
                src-attr={color6} // نستخدم المسار المستورد هنا
                color="#33b451"
                pen-attr={pen5}
              >
                <i></i>
              </a>
              <a
                className="float-left jq_color color-6"
                src-attr={color5} // نستخدم المسار المستورد هنا
                color="#ed1e25"
                pen-attr={pen6}
              >
                <i></i>
              </a>
            </li>

            <li className="no-close row-b" style={{ display: "none" }}>
              <a
                className="float-left jq_canvas_width bg-a active"
                line-width="5"
              >
                <i></i>
              </a>
              <a className="float-left jq_canvas_width bg-b" line-width="10">
                <i></i>
              </a>
              <a className="float-left jq_canvas_width bg-c" line-width="15">
                <i></i>
              </a>
              <a className="float-left jq_canvas_width bg-d" line-width="20">
                <i></i>
              </a>
              <a className="float-left jq_canvas_width bg-e" line-width="25">
                <i></i>
              </a>
              <a className="float-left jq_canvas_width bg-f" line-width="30">
                <i></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavPin;
