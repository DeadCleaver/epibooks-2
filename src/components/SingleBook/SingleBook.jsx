import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { LatestRelease } from "../../contex/LatestRelease/LatestRelease";
import "./SingleBook.css"

export default function SingleBook({bookdata}) {
    const {title, img, price, asin} = bookdata;
    const  {latestRelease, setLatestRelease}  = useContext(LatestRelease);

    function handleSelect() {
      setLatestRelease(asin);
    }

  return (
    <>
      <div>
        <Card className="card-book-box shadow" border={latestRelease == asin ? `danger` : `secondary`} text="dark">
          <Card.Img className="card-book-img" variant="top" src={img} style={{ objectFit: "cover"}} onClick={handleSelect}/>
            <Card.Body>
              <Card.Title className="text-truncate fs-6 fw-bold">{title}</Card.Title>
              <Card.Text><strong>price</strong>: {price} €</Card.Text>
            </Card.Body>          
        </Card>
      </div>
    </>
  );
}
