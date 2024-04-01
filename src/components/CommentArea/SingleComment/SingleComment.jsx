import React from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import "./SingleComment.css";
import { useState } from "react";

export default function SingleComment({
  commentdata,
  index,
  onRemoveComment,
  getComments
}) {
  const { _id, author, rate, comment } = commentdata;
  const bookApi = `https://striveschool-api.herokuapp.com/api/`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NDExMDdiZWEzMTAwMWEyZGYyZGIiLCJpYXQiOjE3MTE3ODU0OTksImV4cCI6MTcxMjk5NTA5OX0.LI0we1aoWFVkNOJhX5uNNckep5QfJ_mxbrArhaKAOKI`;


  /* per l'edit */
  const [editMode, setEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);
  const [editedRate, setEditedRate] = useState(rate);

  function handleEdit() {
    setEditMode(true);
  };

  function handleCancel() {
    setEditMode(false);
    setEditedComment(comment);
    setEditedRate(rate);
  };

  async function handleSave() {
    
      try {
        const response = await fetch(`${bookApi}comments/${_id}`, {
          method: `PUT`,  
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
          },
          body: JSON.stringify({
            comment: editedComment,
            rate: editedRate,
        })
      });
    
        if (!response.ok) {
          throw new Error('Failed to add comment');
        } 
    
        getComments();

      } catch (error) {
        alert('Error adding comment:', error);
      }
    ;

    setEditMode(false);
  };

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header className="my-small-text">{author}</Accordion.Header>
      <Accordion.Body className="my-small-text">
        {/* <div>"{comment}"</div>
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
        </div> */}
        {editMode ? (
          <Form>
            <Form.Group controlId="editedComment" className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type="text"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="editedRate" className="mb-3">
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                type="number"
                max="5"
                min="1"
                value={editedRate}
                onChange={(e) => setEditedRate(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="outline-warning" size="sm" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                className="ms-2"
                variant="outline-success"
                size="sm"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </Form>
        ) : (
          <>
            <div>"{comment}"</div>
            <div>
              <strong>Rating:</strong> {rate}
            </div>
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => onRemoveComment(_id)}
              >
                Remove
              </Button>
              <Button
                className="ms-2"
                variant="outline-warning"
                size="sm"
                onClick={handleEdit}
              >
                Modify
              </Button>
            </div>
          </>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}
