import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Iframe from "react-iframe";
import logo from "./codebookbanner.png";
import picture from "./codepic.jpeg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";


const Home = () => {
  const Navigate = useNavigate();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/forum`;

  const [forumInput, setForumInput] = useState({
    Body: "",
  });

  //hangles the change in text inputs
  const handleChange = (e: { target: { value: any; name: any; }; }) => {
    const value = e.target.value;
    setForumInput({
      ...forumInput,
      [e.target.name]: value,
    });
  };

  //handles the submit action
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    console.log(forumInput);
    e.preventDefault();
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forumInput),
    });

    const data = await response.json();
    console.log("checking data", data);
    Navigate(`/forum`);
  };

  return (
    <div style={{ margin: "auto" }}>
      <Container style={{ marginTop: "50px", textAlign: "center" }}>
        <Image
          style={{
            width: "100%",
            border: "1px solid #E8E9EB",
            marginTop: "0px",
            marginBottom: "5px",
          }}
          src={logo}
        />
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        />
        <Row>
          <Col
            xs
            lg="4"
            style={{
              border: "1px solid #E8E9EB",
              borderRadius: "10px",
              marginRight: " 50px",
              marginTop: "20px",
            }}
          >
            <Image
              style={{
                width: "425px",
                border: "1px solid #E8E9EB",
                marginTop: "0px",
                marginBottom: "5px",
              }}
              src={picture}
            />
            <h4 style={{ color: " #564256" }}>Today's News</h4>
            <h5>* GitHub research highlights the impact of AI on developers</h5>
          </Col>
          {/* //form  */}
          <Col
            style={{
              border: "2px solid #E8E9EB",
              borderRadius: "10px",
              marginTop: "20px",
              marginBottom: "5px",
              marginRight: "23px",
              justifyItems: "center",
            }}
          >
            <Form onSubmit={handleSubmit}>
              <h4 style={{ color: " #564256" }}>Post your questions here!</h4>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={6}
                  onChange={handleChange}
                  name="Body"
                ></Form.Control>
                <Button variant="secondary" type="submit">
                  Post
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Row>
            <Col
              style={{
                border: "2px solid #E8E9EB",
                borderRadius: "10px",
                marginTop: "20px",
                marginBottom: "5px",
                justifyItems: "center",
              }}
            >
              <h4 style={{ color: " #564256" }}>Stressed? </h4>
              <Iframe
                id="iFrameExample"
                title="iFrame Example"
                width="100%"
                height="400px"
                display="flex"
                src="https://codepen.io/jh3y/pen/LYNZwGm?editors=1000"
              ></Iframe>
            </Col>
          </Row>
          <h4
            style={{
              color: " #564256",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {" "}
            Resources{" "}
          </h4>
          <CardGroup fluid>
            <Card>
              <Card.Body>
                <Card.Title style={{ color: " #564256" }}>W3Schools</Card.Title>
                <Card.Text>
                  W3Schools is optimized for learning and training. Examples
                  might be simplified to improve reading and learning.
                  Tutorials, references, and examples.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.w3schools.com/">
                  W3Schools{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title style={{ color: " #564256" }}>
                  Stack Overflow
                </Card.Title>
                <Card.Text>
                  Empower Your Teams and Start Collaborating, Sharing Knowledge,
                  & Scaling Productivity. Learn How Stack Overflow for Teams Can
                  Empower Teams In Your Organization. Manage Data Sprawl. Data
                  Stays Fresh. Attract & Retain Talent.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://stackoverflow.com/">
                  {" "}
                  Stack Overflow{" "}
                </Card.Link>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title style={{ color: " #564256" }}>MDN</Card.Title>
                <Card.Text>
                  The MDN Web Docs site provides information about Open Web
                  technologies including HTML, CSS, and APIs for both Web sites
                  and progressive web apps.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://developer.mozilla.org/en-US/">
                  MDN
                </Card.Link>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
