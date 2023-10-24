import React from "react";
import styles from "./Chapter.module.css";
import { Link, useParams,useOutletContext } from "react-router-dom";

function Chapter() {
  const { chapterId }=useParams();
  const cource=useOutletContext()
  const chapter=cource.chapters.find((value)=>value.chapter==chapterId);
  return (
    <div>
      <h1>{chapter.title}</h1>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
      
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="React Video"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
