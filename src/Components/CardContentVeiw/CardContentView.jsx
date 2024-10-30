import React from "react";
import "./CardContentView.css";
import { useSelector } from "react-redux";
import Pagention from "../Pagention/Pagention";
import { Link } from "react-router-dom";
const CardContentView = () => {
    const data = useSelector((state)=>state.cardsData.value.cards)
    


  return (
    <div className="row card-content-view">
        {Object.keys(data).map((key) => {
        const card = data[key];
        return (
          <Card
            key={key}
            imgSrc={card.imgSrc}
            cardTitle={card.cardTitle}
            cardSubject={card.cardSubject}
            id={card.id}
          />
        );
      })}
        
        <Pagention/>

    </div>
  );
};



const Card = ({ imgSrc, cardTitle, cardSubject  , id}) => {
    return (

      <div className="col-12 col-lg-3 col-md-4 col-xl-2 col-sm-6 card-item-container">
        <div
          className="card no-touch"
          data-title="Islamic"
          data-category=""
          data-level=""
          data-description=""
          data-curricula=""
        >
          <div className="card-images book-worksheet" title="Islamic">
            <h4 className="card-buttons card-block text-right">
              <a
                c=""
                att_id={id}
                className="btn-assignToLessonGroup"
                title="تخصيص الدرس"
              >
                <i className="fa-solid fa-user-plus"></i>
              </a>
              <a
                style={{display:"none"}}
                href="https://sonono.manhal.com/ar/lessonsviewer/1420/edituserlist"
                className="btn-assignlesson"
                title="عرض"
              >
                <i className="icon-view"></i>
              </a>
            </h4>
            <Link to={`/lessonview/:${id}`}>
              <img
                src={imgSrc}
                alt={cardTitle}
              />
            </Link>
           
              
           
          </div>
          <h5 className="card-title card-block mt-3 mb-3" title="Islamic">
            {cardTitle}
          </h5>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0">
            <h5 className="card-subject card-block">
              <label className="pull-left col-manhalgreen m-b-0">
                {cardSubject}
              </label>
            </h5>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0 description">
            <h5
              className="card-subject card-block mt-1 mb-1"
             style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:'hidden'}}
            >
              <label className="pull-left m-b-0">naheel naser</label>
            </h5>
            <h5
              className="card-subject card-block mt-1 mb-1"
              style={{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:'hidden'}}
            >
              <label className="pull-right dates m-b-0">2021-01-24 09:09:27</label>
            </h5>
          </div>
        </div>
      </div> 
    );
  };

export default CardContentView;
