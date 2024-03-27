import React from "react";
import { useState, useEffect, useContext } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import CommentList from "./CommentList/CommentList";
import AddComment from "./AddComment/AddComment";
import { Theme } from "../../contex/Theme/Theme";


export default function CommentArea({ latestRelease }) {
  const bookApi = `https://striveschool-api.herokuapp.com/api/`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NDExMDdiZWEzMTAwMWEyZGYyZGIiLCJpYXQiOjE3MTA1NzE3OTMsImV4cCI6MTcxMTc4MTM5M30.DopAh1Mek9bSIzqCU-4FAeczLM_hQX41K_BrLTxOBp0`;

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useContext(Theme);

  async function getComments() {
    setIsLoading(true);
    console.log(latestRelease);

    if (latestRelease) {
      try {
        const response = await fetch(
          `${bookApi}books/${latestRelease}/comments/`,
          {
            headers: {
              Authorization: authToken,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed loading comments");
        }
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        alert(`Error fetching comments: `, error);
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getComments();
  }, [latestRelease]);

  async function addComment(newCommentData) {
    try {
      const response = await fetch(`${bookApi}comments/`, {
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify({
          comment: newCommentData.comment,
          rate: newCommentData.rate,
          elementId: latestRelease,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      getComments();
    } catch (error) {
      alert("Error adding comment:", error);
    }
  }

  async function deleteComment(commentId) {
    try {
      const response = await fetch(`${bookApi}comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: authToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      getComments();
    } catch (error) {
      alert("Error deleting comment:", error);
    }
  }

  return (
    <>
      <Container>
        <Card
          bg={theme === "dark" ? "dark" : "warning"}
          data-bs-theme={theme === "dark" ? "dark" : "light"}
          border={theme === "dark" ? "dark" : "warning"}
          className="text-center my-2 p-2 shadow no-border"
        >
          COMMENTS
        </Card>
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="warning" />
          </div>
        )}
        {latestRelease && (
          <div>
            <CommentList
              comments={comments}
              onRemoveComment={deleteComment}
              getComments={getComments}
            />
            <AddComment onAddComment={addComment} />
          </div>
        )}
      </Container>
    </>
  );
}
