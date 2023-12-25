import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { generateResponse } from "../../services/services"; // Ensure this path is correct
import "./Home.css";
export const Home = () => {
  const [userCharacter, setUserCharacter] = useState("");
  const [userMBTI, setUserMBTI] = useState("");
  const [otherCharacter, setOtherCharacter] = useState("");
  const [otherMBTI, setOtherMBTI] = useState("");
  const [situation, setSituation] = useState("");
  const responseFromRedux = useSelector((state) => state.data.response);
  const dispatch = useDispatch();

  const mbtiTypes = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
  ];
  // Array of character types for the dropdown
  const characterTypes = [
    "Boss",
    "Same Level Colleague",
    "Senior",
    "Junior",
    "Student",
    "Teacher",
    "Mentor",
    "Mentee",
    "Friends",
    "PhD Professor",
    "PhD Student",
    "Mom",
    "Dad",
    "Older Brother",
    "Younger Brother",
    "Older Sister",
    "Younger Sister",
    "Grandma",
    "Grandpa",
    "Pet Dog",
    "Pet Mouse",
    "Pet Bird",
    "Pet Turtle",
    "Pet Cat",
    "School Project Team Member",
    "Classmates",
    "LinkedIn Referral Person",
    "Pedestrian",
    "Nice Person",
    "Not Nice Person",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Constructing the request data
      const requestData = {
        userCharacter,
        userMBTI,
        otherCharacter,
        otherMBTI,
        situation,
      };

      // Making API call
      const apiResponse = await generateResponse(requestData);
      console.log(apiResponse);

      // Dispatching to Redux store
      dispatch({ type: "SET_RESPONSE", payload: apiResponse });
    } catch (error) {
      console.error("Error in generating response:", error);
    }
  };

  return (
    <div className="card-container">
      <div className="card" style={{ maxWidth: "100%", width: "60%" }}>
        <Container className="mt-4">
          <h1 className="mb-4">MBTI Communication Helper</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Your Character:
              </Form.Label>
              <Col sm="10">
                <Form.Select
                  value={userCharacter}
                  onChange={(e) => setUserCharacter(e.target.value)}
                >
                  <option value="">Select Your Character</option>
                  {characterTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Your MBTI:
              </Form.Label>
              <Col sm="10">
                <Form.Select
                  value={userMBTI}
                  onChange={(e) => setUserMBTI(e.target.value)}
                >
                  <option value="">Select MBTI Type</option>
                  {mbtiTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Other Person's Character:
              </Form.Label>
              <Col sm="10">
                <Form.Select
                  value={otherCharacter}
                  onChange={(e) => setOtherCharacter(e.target.value)}
                >
                  <option value="">Select Other Person's Character</option>
                  {characterTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Other Person's MBTI:
              </Form.Label>
              <Col sm="10">
                <Form.Select
                  value={otherMBTI}
                  onChange={(e) => setOtherMBTI(e.target.value)}
                >
                  <option value="">Select MBTI Type</option>
                  {mbtiTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Situation:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  rows={3}
                />
              </Col>
            </Form.Group>
            <button type="submit" class="flip-card__btn">
              Generate
            </button>
          </Form>
          <div className="mt-4">
            <h2>Response:</h2>
            <p>{responseFromRedux}</p>
            {/* Audio player component */}
          </div>
        </Container>
      </div>
    </div>
  );
};
