import React from "react";
import { Accordion, Button } from "react-bootstrap";
import "./SingleComment.css"

export default function SingleComment({ commentdata, index, onRemoveComment }) {
  const { _id, author, rate, comment } = commentdata;


  return (

    <Accordion.Item eventKey={index}>
      <Accordion.Header className="my-small-text">{author}</Accordion.Header>
      <Accordion.Body className="my-small-text">
        <div>"{comment}"</div>
        <div>
          <strong>rating: </strong>
          {rate}
        </div>
        <div className="d-flex justify-content-end">
        <Button variant="outline-danger" size="sm" onClick={()=> onRemoveComment(_id)}>
          remove
        </Button>
        <Button className="ms-2" variant="outline-warning" size="sm">
          modify
        </Button>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
