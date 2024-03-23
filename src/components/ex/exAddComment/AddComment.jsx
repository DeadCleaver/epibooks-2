import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function AddComment({ onAddComment}) {

  const [newComment, setNewComment] = useState(``);
  const [newRating, setNewRating] = useState(``);

  const submitComment = async (event) => {
    event.preventDefault();

    onAddComment({comment: newComment, rate: newRating});

    setNewComment('');
    setNewRating('');
  }

  return (
    <>
      <Form onSubmit={submitComment}>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Rate it"
            value={newRating} 
            onChange={(e) => setNewRating(e.target.value)}
          >
            {/* <option>Rating</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" size="sm">
          Add Comment
        </Button>
      </Form>
    </>
  );
}
