import React from "react";
import "./TableStyles.css";
import { useSelector } from "react-redux";
const TableContentVeiw = () => {
  const texts = useSelector((state) => state.translation.texts);
  const data = useSelector((state)=>state.cardsData.value.cards)
    console.log();
    
  return (
    <div className="table-content-view">
      <table className="table" id="cardsTable">
        <thead>
          <tr>
            <th>#</th>
            <th className="sorting_asc fixed-width">
              {texts.lessons_alert.form_labels.label1}
            </th>
            <th className="sorting_asc LessonsSortingDescription fixed-width">
              {texts.lessons_alert.form_labels.label2}
            </th>
            <th>{texts.lessons_alert.form_labels.label4}</th>
            <th>{texts.lessons_alert.form_labels.label3}</th>
            <th>{texts.lessons_alert.form_labels.label5}</th>
            <th>{texts.lessons_alert.form_labels.label6}</th>
            <th>{texts.lessons_alert.form_labels.label7}</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(data).map((key , index)=>{
              const card = data[key]
              return(
                <Row
                key={key}
                title={card.cardTitle}
                index={index + 1}
                subject={card.cardSubject}
                grade={card.Grade}
                teacher={card.Teacher}
                />
              )
            })
            
          }
        </tbody>
      </table>
    </div>
  );
};

const Row = ({title , index , subject ,grade , teacher} ) => {
  return (
    <tr title={title}>
      <td className="number">{index}</td>
      <td className="fixed-width name">
        <a href="https://sonono.manhal.com/ar/lessonsviewer/1420">{title}</a>
      </td>
      <td className="fixed-width" title={title}>
        <p>{title}</p>
      </td>
      <td></td>
      <td>{subject}</td>
      <td>{grade}</td>
      <td>{teacher}</td>
      <td className="action">
        <a
          att_id="1420"
          className="btn-assignToLessonGroup"
          title="تخصيص الدرس"
        >
          <i className="fa-solid fa-user-plus"></i>
        </a>
      </td>
    </tr>
  );
};

export default TableContentVeiw;
