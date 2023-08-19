import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dinesh Kumar </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently employed as a XBRL developer at
            Chennai.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Vector Designer
            </li>
            <li className="about-activity">
              <ImPointRight /> Disc jockey
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I make thing cool!!!"{" "}
          </p>
          <footer className="blockquote-footer">Dinesh Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
