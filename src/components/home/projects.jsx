import React from 'react';
import ProjectCard from './projectCart';
import {Container, OverlayTrigger, Tooltip, Row, Col} from 'react-bootstrap';
import './styles.css';
import {projects} from '../../data.js';


const styles = {
    background: {backgroundColor: 'rgba(255, 255, 255, 0.667)', marginTop: '5%'},
    cardStyle: { margin: '2% 0'},
    headline: {textAlign: 'center', paddingTop: '3%', color: '#616161'},
}

const renderTooltip = (props) => (
    <Tooltip {...props}>View More</Tooltip>
)

export default Projects => {
    return (
        <div style={styles.background}>
        <Container>
            
            <h1 style={styles.headline}>
                <i className="fas fa-laptop-code fa-1x"></i>  Top Projects 
                <OverlayTrigger placement="right" overlay={renderTooltip}> 
                    <span className="right-arrow"> 
                        <a href="/301"> <i className="fas fa-angle-right fa-1x"></i> </a>
                    </span> 
                </OverlayTrigger>
            </h1>

            <Row className="mt-5">
                {projects.map( ({title, image, description, icons, languages, github, demo, topProjects}) => {
                    return (
                        <Col sm={12} md={6} lg={4}> 
                            <ProjectCard
                                title={title} image={image}
                                description={description} languages={languages}
                                github={github} icons={icons} demo={demo} />
                        </Col>
                    )
                } )}

            </Row>
        </Container>
    </div>

    )
}
    