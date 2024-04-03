import React from "react";
import { Container, Card, Form } from "react-bootstrap";

export default function Wellcome({changeGenre}) {

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    changeGenre(genre);
  };

  return (
    <>
      <Container className="mt-3" data-testid="el-wellcome" >
        <Card border="warning">
          <Card.Body>
            <Card.Title>Wellcome in Epibooks</Card.Title>
            <Card.Text>
              Which genre do you like to browse?
              <Form.Select aria-label="Default select example" onChange={handleGenreChange} className="mt-3">
                <option value="fantasy">Fantasy</option>
                <option value="history">History</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="scifi">Science Fiction</option>
              </Form.Select>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </>
  );
}
