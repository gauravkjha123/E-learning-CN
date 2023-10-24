import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, useParams,Outlet } from "react-router-dom";


function Learn() {
    const { id }=useParams();
    const cource=coursesData.find((value)=>value.id===id);

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {
        <Link to="/courses" >
          <h2 className={style.back}>{"<<"}</h2>
        </Link>}

        <h1 className={style.heading}>{cource.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul style={{listStyle:"none"}}>{cource.chapters.map((value,index)=><Link to={`/learn/${cource.id}/chapter/${value.chapter}`} key={index}><li >{value.title}</li></Link>)}</ul>
        </div>
      
      <div className={style.courses}>
      
      <Outlet context={cource}/>
      </div>
    </div>
</div>
  );
}

export default Learn;
