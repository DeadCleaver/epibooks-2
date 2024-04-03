import React from "react";
import { useState, useEffect, useContext } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import CommentList from "./CommentList/CommentList";
import AddComment from "./AddComment/AddComment";
import { Theme } from "../../contex/Theme/Theme";
import { LatestRelease } from "../../contex/LatestRelease/LatestRelease";


export default function CommentArea({ asin }) {
  const bookApi = `https://striveschool-api.herokuapp.com/api/`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NDExMDdiZWEzMTAwMWEyZGYyZGIiLCJpYXQiOjE3MTE3ODU0OTksImV4cCI6MTcxMjk5NTA5OX0.LI0we1aoWFVkNOJhX5uNNckep5QfJ_mxbrArhaKAOKI`

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useContext(Theme);

  async function getComments() {
    setIsLoading(true);
    console.log(asin);
    
    if (asin) {
      try {
        const response = await fetch(
          `${bookApi}books/${asin}/comments/`,
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
        console.log(commentsData);
      } catch (error) {
        alert(`Error fetching comments: ` + error);
      }
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getComments();
  }, [asin]);

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
          elementId: asin,
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
        {asin && (
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
