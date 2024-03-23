import React from 'react'
import CommentList from '../exCommentList/CommentList'
import AddComment from '../AddComment/AddComment'
import { useState, useEffect } from 'react'

export default function CommentArea({bookid}) {

  const bookApi = `https://striveschool-api.herokuapp.com/api/`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NDExMDdiZWEzMTAwMWEyZGYyZGIiLCJpYXQiOjE3MTA1NzE3OTMsImV4cCI6MTcxMTc4MTM5M30.DopAh1Mek9bSIzqCU-4FAeczLM_hQX41K_BrLTxOBp0`;
  const [comments, setComments] = useState([]);

  async function getComments() { 
    try {
      const response = await fetch(`${bookApi}books/${bookid}/comments/`, {
        headers: {
          'Authorization': authToken
        }
      });
      if (!response.ok) {
        throw new Error('Failed loading comments');
      } 
      const commentsData = await response.json();
      setComments(commentsData);
    } catch (error) {
      alert(`Error fetching comments: `, (error));
    }

  };


 useEffect(() => {
   getComments();
 }, []); 
 
 async function addComment(newCommentData) {
  try {
    const response = await fetch(`${bookApi}comments/`, {
      method: `POST`,  
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken
      },
      body: JSON.stringify({
        comment: newCommentData.comment,
        rate: newCommentData.rate,
        elementId: bookid,
    })
  });

    if (!response.ok) {
      throw new Error('Failed to add comment');
    } 

    getComments();
  } catch (error) {
    alert('Error adding comment:', error);
  }
};

async function deleteComment(commentId) {
  try {
    const response = await fetch(`${bookApi}comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': authToken
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete comment');
    }

    getComments();
  } catch (error) {
    alert('Error deleting comment:', error);
  }
};

  return (
    <>
        <CommentList comments={comments} onRemoveComment={deleteComment}/>
        <AddComment onAddComment={addComment}/>
    </>
  );
}
