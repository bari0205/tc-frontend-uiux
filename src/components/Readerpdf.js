import React, {Component} from "react";
import { ReactReader } from "react-reader";
import { useParams, useHistory } from "react-router-dom";
import { book } from "../data/Book";


export default function Readerpdf() {
  const { id } = useParams();
  const databook = book.filter((item) => item.id == id);
  const bookid = id - 1;
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ReactReader
        url={require('../pdf/'+book[bookid].file)}
        title={book[bookid].title}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={(epubcifi) => console.log(epubcifi)}
      />
    </div>
  );
}
