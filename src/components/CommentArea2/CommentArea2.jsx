import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { LatestRelease } from '../../contex/LatestRelease/LatestRelease'
import CommentList2 from './CommentList2/CommentList2';
import AddComment2 from './AddComment2/AddComment2';

export default function CommentArea2() {

  const bookApi = `https://striveschool-api.herokuapp.com/api/`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NDExMDdiZWEzMTAwMWEyZGYyZGIiLCJpYXQiOjE3MTA1NzE3OTMsImV4cCI6MTcxMTc4MTM5M30.DopAh1Mek9bSIzqCU-4FAeczLM_hQX41K_BrLTxOBp0`;
  const {latestRelease} = useContext(LatestRelease);

  const [comments, setComments] = useState([]);


  async function getComments() { 

    if (latestRelease) {
      try {
        const response = await fetch(`${bookApi}books/${latestRelease}/comments/`, {
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
        alert(`Error fetching comments: `, error);
      }
    }
  };


 useEffect(() => {
   getComments();
 }, [latestRelease]); 
 
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
        elementId: latestRelease,
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
      <Container className='border shadow rounded'>
        <h3 className='text-center my-2'>Comments</h3>
        {latestRelease && <div><CommentList2 comments={comments}  onRemoveComment={deleteComment} getComments={getComments} />
        <AddComment2 onAddComment={addComment}/></div>}

      </Container>
    </>
  );
}
