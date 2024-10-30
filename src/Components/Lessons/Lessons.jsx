import React, { useEffect, useRef, useState } from "react";
import "./LessonsStyle.css";
import { useSelector } from "react-redux";
import { Dropdown } from "bootstrap";
import CardContentView from "../CardContentVeiw/CardContentView";
import TableContentVeiw from "../TableContentVeiw/TableContentVeiw";
import { motion, transform } from "framer-motion";
const Lessons = () => {
  const texts = useSelector((state) => state.translation.texts);
  const [isActive, setIsActive] = useState(false);
  const [lessonsActive, setLessonsActive] = useState(false);
  const [DropdownMenuActive, setDropdownMenuActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // حالة للتحكم في display


  

  //======== handle change btn =========

  const [inputValue, setInputValue] = useState("");
  const [selectValue1, setSelectValue1] = useState("default");
  const [selectValue2, setSelectValue2] = useState("default");
  const [selectValue3, setSelectValue3] = useState("default");
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeSelect1 = (e) => {
    setSelectValue1(e.target.value);
  };
  const handleChangeSelect2 = (e) => {
    setSelectValue2(e.target.value);
  };

  const handleChangeSelect3 = (e) => {
    setSelectValue3(e.target.value);
  };

  // =============== add className show and remove from dropdown ===========
  const DropdownMenu = useRef();

  const showDropDown = () => {
    console.log(22222);
    
    setDropdownMenuActive(!DropdownMenuActive)
  };

    // استخدم useEffect لمزامنة حالة isVisible مع DropdownMenuActive
    useEffect(() => {
      if (DropdownMenuActive) {
        setIsVisible(true); // اجعل العنصر مرئيًا (display: block)
      }
    }, [DropdownMenuActive]);
  

  // =============== add className show and remove from dropdown ===========
  const lessons_details = useRef();

  const handleLessonsDetailsActive = () => {
    setLessonsActive(true);
    lessons_details.current.classList.add("active");
  };

  const removeActive = () => {
    setLessonsActive(false);
    setTimeout(() => {
      lessons_details.current.classList.remove("active");
    }, 500);
    
  };

  // =============== control in nav-tabs  ===========

  const handleClickNav = (target, e) => {
    // إزالة الصنف active من جميع علامات التبويب
    document
      .querySelectorAll(".nav-tabs li")
      .forEach((li) => li.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // تعيين الصنف active للعناصر النشطة
    e.target.parentElement.classList.add("active");
    document
      .querySelectorAll(".content .tab-pane")
      .forEach((li) => li.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  };

  // ========Control in veiw  ===============

  const tableActive = useRef();
  const cardActive = useRef();

  const handleTableActive = () => {
    removeAllActive();
    tableActive.current.classList.add("active");
    setIsActive(true);
    // table_content_veiw.classList.add("active");
  };
  const handleCardActive = () => {
    removeAllActive();
    cardActive.current.classList.add("active");
    setIsActive(false);
    // card_content_veiw.classList.add("active");
  };

  function removeAllActive() {
    // card_content_veiw.classList.remove("active");
    // table_content_veiw.classList.remove("active");
    cardActive.current.classList.remove("active");
    tableActive.current.classList.remove("active");
  }

  useEffect(() => {
    // تحقق من وجود الصنف 'active' عند تحميل المكون
    if (cardActive.current && cardActive.current.classList.contains("active")) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [cardActive]);

  return (
    <section id="game-body" className="lessons-body clearfix">
      <div className="block-header">
        <ol className="breadcrumb">
          <li>
            <a
              className="col-manhalgreen"
              href="https://sonono.manhal.com/ar/lessons"
            >
              {texts.block_header.breadcrumb1}
            </a>
          </li>

          <li className="icon">
            <i
              className={
                texts.lang === "en"
                  ? "fa-solid fa-chevron-right"
                  : "fa-solid fa-chevron-left"
              }
            ></i>
          </li>
          <li>
            <a className="col-manhalgreen" href="https://sonono.manhal.com/ar">
              {texts.block_header.breadcrumb2}
            </a>
          </li>
        </ol>
      </div>
      <div className="row g-4 p-2 flex-sm-column-reverse flex-md-row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-10">
          <div className="form-group search-container-a">
            <div className="form-line float-left">
              <input
                type="search"
                className="form-control input-sm"
                placeholder={texts.searchInput}
                aria-controls="DataTables_Table_0"
                name="search"
                onChange={handleChangeInput}
              />
            </div>
            <button className="btn btn-primary waves-effect float-left search-absolute">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-10">
          <div className="row filter-container">
            <a className="btn filter-pup-btn" onClick={showDropDown}>
              <div>
                <i className="fa-solid fa-filter"></i>
                <span className="filter-name pull-right">
                  {texts.filterInput}
                </span>
              </div>
              <div>
                <i className={DropdownMenuActive ?"fa-solid fa-sort-up arrow-icon ": "fa-solid fa-sort-down arrow-icon" }></i>
              </div>
            </a>
            <motion.div
              id="filtermenu"
              ref={DropdownMenu}
              className="dropdown-menu filter-menu"
              tabIndex="1"
              animate={{opacity : DropdownMenuActive ? 1 : 0}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onAnimationComplete={() => {
                if (!DropdownMenuActive) setIsVisible(false); 
              }}
              style={{ display: isVisible ? "block" : "none" }}
            >
              <div className="row g-4">
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-b-10 float-left padding-0"
                  data-select2-id="select2-data-11-lkd9"
                >
                  <div className="row clearfix g-3">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-control-label">
                      <label className="filter-label col-manhalgreen">
                        {texts.lessons_alert.form_labels.label5}
                      </label>
                    </div>

                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                      <select
                        className="form-select"
                        value={selectValue1}
                        onChange={handleChangeSelect1}
                      >
                        <option className="selected" value={"default"}>
                          --------
                        </option>
                        <option defaultValue={"البستان"}>البستان</option>
                        <option value="الصف الاول">الصف الاول</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-b-10 float-left padding-0"
                  data-select2-id="select2-data-11-lkd9"
                >
                  <div className="row clearfix  g-3">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-control-label">
                      <label className="filter-label col-manhalgreen">
                        {texts.lessons_alert.form_labels.label3}
                      </label>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                      <select
                        className="form-select"
                        value={selectValue2}
                        onChange={handleChangeSelect2}
                      >
                        <option className="selected" value={"default"}>
                          --------
                        </option>
                        <option value="اللغة العربية">اللغة العربية</option>
                        <option value="التربية الاسلامية">
                          التربية الاسلامية
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-b-10 float-left padding-0"
                  data-select2-id="select2-data-11-lkd9"
                >
                  <div className="row clearfix g-3">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 form-control-label">
                      <label className="filter-label col-manhalgreen">
                        {texts.lessons_alert.form_labels.label4}
                      </label>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                      <select
                        className="form-select"
                        value={selectValue3}
                        onChange={handleChangeSelect3}
                      >
                        <option className="selected" value={"default"}>
                          --------
                        </option>
                        <option value="أصدقاء العربية 4">
                          أصدقاء العربية 4
                        </option>
                        <option value="هيا إلى الإيمان 3">
                          هيا إلى الإيمان 3
                        </option>
                        <option value="كتاب أصدقاء العربية 01 كتاب الطالب">
                          كتاب أصدقاء العربية 01 كتاب الطالب
                        </option>
                        <option value="كتاب أصدقاء العربية 01 كتاب النشاط">
                          كتاب أصدقاء العربية 01 كتاب النشاط
                        </option>
                        <option value="أنا مميز 1">أنا مميز 1</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-b-10  padding-0"
                  data-select2-id="select2-data-11-lkd9"
                >
                  <button className="btn filter-search-btn">
                    {texts.searchInput}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-10">
          <div className="tile-list-cards-table">
            <a
              className="btn waves-effect float-right card-active active"
              onClick={handleTableActive}
              ref={tableActive}
            >
              <i className="fa-solid fa-table-cells"></i>
            </a>

            <a
              className="btn waves-effect float-right table-active"
              onClick={handleCardActive}
              ref={cardActive}
            >
              <i className="fa-solid fa-table-list"></i>
            </a>

            <a
              className="btn btn-primary float-right btn-addLessons btn-add-btn-top"
              onClick={handleLessonsDetailsActive}
            >
              <i className="fa-regular fa-square-plus"></i>
            </a>
          </div>
          <div className="lessons-details" ref={lessons_details}>
            <motion.div
              animate={{ scale: lessonsActive ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lessons-dialog"
            >
              <div className="header">
                <h4 className="modal-title">
                  {texts.lessons_alert.header.title}
                  <span id="popup_header" crud="add">
                    {texts.lessons_alert.header.popup_header}
                  </span>
                </h4>
                <button type="button" className="close" onClick={removeActive}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div className="lessons-details-body">
                <ul className="nav nav-tabs tab-nav-right" role="tablist">
                  <li
                    role="presentation"
                    className="toInfo active"
                    onClick={(e) => handleClickNav("information", e)}
                  >
                    <a
                      data-toggle="tab"
                      aria-expanded="true"
                      className="active"
                    >
                      {texts.lessons_alert.nav_tabs.navinfo}
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className="toGoal"
                    onClick={(e) => handleClickNav("goals", e)}
                  >
                    <a data-toggle="tab" aria-expanded="false" className="">
                      {texts.lessons_alert.nav_tabs.navgoals}
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <div
                    role="tabpanel"
                    className="tab-pane show active"
                    id="information"
                    data-select2-id="select2-data-information"
                  >
                    <div className="row flex-row-reverse">
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <div className="form-line">
                            <div className="row">
                              <div className="col-form col-lg-3 col-md-3 col-sm-3 col-xs-12 float-left">
                                <label className="filter-label col-manhalgreen text-left">
                                  {texts.lessons_alert.form_labels.label1}
                                </label>
                              </div>
                              <div className="col-form col-lg-9 col-md-9 col-sm-9 col-xs-12 float-left">
                                <input
                                  id="title"
                                  type="text"
                                  className="form-control"
                                  value=""
                                  placeholder={
                                    texts.lessons_alert.form_labels.label1
                                  }
                                  onChange={handleChangeInput}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <div className="form-line">
                            <div className="row">
                              <div className="col-form col-lg-3 col-md-3 col-sm-3 col-xs-12 float-left">
                                <label className="filter-label col-manhalgreen text-left">
                                  {texts.lessons_alert.form_labels.label2}
                                </label>
                              </div>
                              <div className="col-form col-lg-9 col-md-9 col-sm-9 col-xs-12 float-left">
                                <input
                                  id="description"
                                  type="text"
                                  className="form-control"
                                  value=""
                                  placeholder={
                                    texts.lessons_alert.form_labels.label2
                                  }
                                  onChange={handleChangeInput}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-form col-lg-3 col-md-3 col-sm-3 col-xs-12 float-left">
                              <label className="filter-label col-manhalgreen text-left float-left">
                                {texts.lessons_alert.form_labels.label3}
                              </label>
                            </div>
                            <div className="col-form col-lg-9 col-md-9 col-sm-9 col-xs-12 float-left">
                              <div className="form-line float-left">
                                <select
                                  id="category"
                                  className="form-control show-tick category-standards selsct-with-search1 select2-hidden-accessible"
                                  data-select2-id="select2-data-category"
                                  aria-hidden="true"
                                >
                                  <option
                                    value=""
                                    data-select2-id="select2-data-76-mmd7"
                                  >
                                    ---------
                                  </option>
                                  <option
                                    value="اللغة العربية"
                                    data-select2-id="select2-data-97-s421"
                                  >
                                    اللغة العربية
                                  </option>
                                  <option
                                    value="التربية الاسلامية"
                                    data-select2-id="select2-data-98-317u"
                                  >
                                    التربية الإسلامية
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-form col-lg-3 col-md-3 col-sm-3 col-xs-12 float-left">
                              <label className="filter-label col-manhalgreen text-left float-left">
                                {texts.lessons_alert.form_labels.label4}
                              </label>
                            </div>
                            <div className="col-form col-lg-9 col-md-9 col-sm-9 col-xs-12 float-left">
                              <div className="form-line float-left">
                                <select
                                  id="curricula"
                                  className="form-control show-tick selsct-with-search1 select2-hidden-accessible"
                                  data-select2-id="select2-data-curricula"
                                  aria-hidden="true"
                                >
                                  <option
                                    value=""
                                    data-select2-id="select2-data-83-gjq7"
                                  >
                                    ---------
                                  </option>
                                  <option value="أنا مميز 1">أنا مميز 1</option>
                                  <option value="كتاب أصدقاء العربية 01 كتاب النشاط">
                                    كتاب أصدقاء العربية 01 كتاب النشاط
                                  </option>
                                  <option value="كتاب أصدقاء العربية 01 كتاب الطالب">
                                    كتاب أصدقاء العربية 01 كتاب الطالب
                                  </option>
                                  <option value="هيا إلى الإيمان 3">
                                    هيا إلى الإيمان 3
                                  </option>
                                  <option value="أصدقاء العربية 4">
                                    أصدقاء العربية 4
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12"
                        id="Div_level"
                      >
                        <div className="form-group">
                          <div className="row">
                            <div className="col-form col-lg-3 col-md-3 col-sm-3 col-xs-12 float-left">
                              <label className="filter-label col-manhalgreen text-left float-left">
                                {texts.lessons_alert.form_labels.label5}
                              </label>
                            </div>
                            <div className="col-form col-lg-9 col-md-9 col-sm-9 col-xs-12 float-left">
                              <div className="form-line float-left">
                                <select
                                  id="level"
                                  className="selsct-with-search1 form-control autosubmit show-tick select2-hidden-accessible"
                                  name="level"
                                  data-select2-id="select2-data-level"
                                  aria-hidden="true"
                                >
                                  <option
                                    value=""
                                    data-select2-id="select2-data-87-ziex"
                                  >
                                    ---------
                                  </option>
                                  <option value="البستان">البستان</option>
                                  <option value="الصف الأول">الصف الأول</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="goals">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <textarea
                        className="form-control m-b-20"
                        style={{
                          resize: "none",
                          boxShadow: "inset 0 0 0.25rem #ddd",
                        }}
                        placeholder={
                          texts.lessons_alert.form_labels.placeholder
                        }
                        maxLength={"3000"}
                        rows={"10"}
                        cols={"40"}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lesson-alert">
            <div className="alert-dialog">
              <h2></h2>
              <button className="okBtn">ok</button>
            </div>
          </div>
        </div>
      </div>
      <div className="body mt-3 p-2">
        {isActive ? <CardContentView /> : <TableContentVeiw />}
      </div>
    </section>
  );
};

export default Lessons;
