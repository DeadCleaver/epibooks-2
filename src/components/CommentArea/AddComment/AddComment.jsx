import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function AddComment({ onAddComment }) {
  const [newComment, setNewComment] = useState(``);
  const [newRating, setNewRating] = useState(``);

  const submitComment = async (event) => {
    event.preventDefault();

    onAddComment({ comment: newComment, rate: newRating });

    setNewComment("");
    setNewRating("");
  };

  return (
    <Card border="light" className="p-2">
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
        <div className="d-flex justify-content-center">
        <Button
          className="mb-3"
          variant="outline-primary"
          type="submit"
          size="sm"
          onClick={submitComment}
        >
          Add Comment
        </Button>
        </div>
      </Form>
    </Card>
  );
}
