import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import SingleComment from '../SingleComment/SingleComment';

export default function CommentList({ comments, onRemoveComment }) {
  
  return (
    <>
      <Accordion className='mb-3'>
      {comments.map((comment, index) => (
        <SingleComment key={index} commentdata={comment} index={index} onRemoveComment={onRemoveComment}/> 
      ))}  
      </Accordion>

    </>
  );
}
