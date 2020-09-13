import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import '../css/FAQ.css';
import ContextAwareToggle from './ContextAwareToggle';

const FAQ = () => {

    return (
        <div className="container">

            <Accordion defaultActiveKey="0">

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="0">
                        <h2>What is Oxford Hack?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="answer">
                        <p>
                        Oxford Hack is the official Oxford student Hackathon, where over 300 people gather every year to collaborate, innovate, learn and experiment while creating a project from scratch in 24 hours. We give you all the resources you need, from hardware and APIs to workshops, sponsors and volunteers who can help you with whatever questions you might have. In a few words, you attend to have fun, learn things you didn’t even know existed and see your ideas come to life. This year we are moving everything digitally - for more information about what is going to change, check out the Event page.                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="1">
                        <h2>What is a digital Oxford Hack going to look like?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="answer">
                        <p>
                        Oxford Hack 2020 will be the same as ever - only online! We won’t be meeting in person and we will have workshops, meal breaks and other activities virtually. Don’t worry, we will still do our best to engage our hackers and provide you with innovative ways to meet the other people.                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="2">
                        <h2>What makes Oxford Hack special?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body className="answer">
                        <p>
                        Oxford Hack is an inclusive and encouraging event, providing a unique opportunity to hone your skills in any technical field you like. We don’t impose any restrictions on the product your team makes, so you can be as experimental and disciplined as you like. We’ve got some wonderful sponsors, who’ll be arranging their own prize categories and workshops.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="3">
                        <h2>Can I participate in Oxford Hack?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body className="answer">
                        <p>
                        Students at all levels of study are welcome to attend.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="4">
                        <h2>Do I need to have a team beforehand?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body className="answer">
                        <p>
                        No - we’ll help you e-meet everyone and find people with the same interests as you.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="5">
                        <h2>Do I need to pay to participate?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body className="answer">
                        <p>
                        No - Oxford Hack is completely free to attend.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="6">
                        <h2>What do I need to have to participate?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body className="answer">
                        <p>
                        You’ll need to have a computer to work on and a good internet connection to participate in the workshops
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="7">
                        <h2>How many people can be in a team?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body className="answer">
                        <p>
                        You can have up to 4 people in a team.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="8">
                        <h2>Can I start working on my project before the event?</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                      <Card.Body className="answer">
                        <p>
                        No - because we want our event to be fair, everyone has the same starting line, so all projects have to be created from scratch during the 24 hours of the hackathon.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                  <Card style={{background:"none", border:"none"}}>
                    <Card.Header className="question" style={{background:"none", border: "none"}}>
                      <ContextAwareToggle eventKey="9">
                        <h2>Error 404 question not found</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                      <Card.Body className="answer">
                        <p>
                        Have more questions? Contact us at committee@oxfordhack.co.uk.
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>

            </Accordion>
        </div>
    )

}

export default FAQ;