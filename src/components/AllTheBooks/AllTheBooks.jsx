import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../SingleBook/SingleBook";
import CommentArea from "../CommentArea/CommentArea";
import Wellcome from "../Wellcome/Wellcome";
import { useContext } from "react";
import { LatestRelease } from "../../contex/LatestRelease/LatestRelease";

export default function AllTheBooks({ books }) {

  const {latestRelease} = useContext(LatestRelease);

  return (
    <>    
     <Container className="mt-1">
        <Row>
          <Col xs={6} lg={8}>
            <Row xs={1} lg={2} xl={3} className="g-2">
              {books.map((book) => (
                <Col key={book.asin}>
                  <SingleBook bookdata={book} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={6} lg={4}>
            <CommentArea asin={latestRelease}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
