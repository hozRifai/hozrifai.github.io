import React from 'react';
import {Carousel, Modal} from 'react-bootstrap';

const ProjectModal = ({ open, setOpen}) => (
    <Modal show={open}  onHide={() => setOpen(false)} size="lg">
        <Modal.Body>
            <Carousel fade={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="static/1.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="static/2.jpg"
                        alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100" 
                        src="static/3.jpg"
                        alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Modal.Body>
    </Modal>
)

export default ProjectModal;