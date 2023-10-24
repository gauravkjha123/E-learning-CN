import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
import { Link, useParams } from "react-router-dom";

function Details() {
  const { id }=useParams();
  let cource=coursesData.find((value)=>value.id===id)
  return (
    
    <div className={style.courses_container}>
      <div className={style.card_container}>
        <div className={style.card_image}>
          <div className={style.image_container}>

            <img src={`${cource.img}`} alt="icons" />
          </div>
        </div>
        <div className={style.card_content}>
          <h1 className={style.card_title}>{cource.title}</h1>
          <p className={style.card_description}>{cource.description}</p>
        </div>
      </div>
      {
      <Link to={`/learn/${cource.id}`}>
        <button className={style.button}>Start Learning</button>
      </Link>}
      
    </div>
  );
}

export default Details;
