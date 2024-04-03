import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { LatestRelease } from "../../contex/LatestRelease/LatestRelease";
import "./SingleBook.css";
import { Navigate, useNavigate } from "react-router-dom";



export default function SingleBook({ bookdata }) {
  const { title, img, price, asin } = bookdata;
  const { latestRelease, setLatestRelease } = useContext(LatestRelease);

  function handleSelect() {
    setLatestRelease(asin);
  }

  const navigate = useNavigate();
  
  const displayDetails = () => {
    navigate("/details/" + asin);
  }

  return (
    <>
      <div>
        <Card
          className="card-book-box shadow"
          border={latestRelease == asin ? `danger` : `secondary`}
          text="dark"
        >
          <Card.Img
            className="card-book-img"
            variant="top"
            src={img}
            style={{ objectFit: "cover" }}
            onClick={handleSelect}
          />
          <Card.Body className="card-book-body">
            <Card.Title className="text-truncate fs-6 fw-bold">
              {title}
            </Card.Title>
            <Card.Text>
              <strong>price</strong>: {price} €
            </Card.Text>
            <div className="d-flex justify-content-center"><Button onClick={displayDetails} variant="outline-info" size="sm">INFO</Button></div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
