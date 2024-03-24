import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function AddComment2({ onAddComment }) {
  const [newComment, setNewComment] = useState(``);
  const [newRating, setNewRating] = useState(``);

  const submitComment = async (event) => {
    event.preventDefault();

    onAddComment({ comment: newComment, rate: newRating });

    setNewComment("");
    setNewRating("");
  };

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
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            type="number"
            max="5"
            min="1"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          />
        </Form.Group>
        <Button
          className="mb-3"
          variant="primary"
          type="submit"
          size="sm"
          onClick={submitComment}
        >
          Add Comment
        </Button>
      </Form>
    </>
  );
}
