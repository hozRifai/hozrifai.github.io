import React from "react";
import {Container, OverlayTrigger, Tooltip, Row, Col, ProgressBar} from 'react-bootstrap';
import './styles.css';
import {skills, skillNames}  from './../../data';
const renderTooltip = (props) => (<Tooltip {...props}>View More</Tooltip>)

const styles = {
  background: {backgroundColor: 'rgba(228, 228, 228, 0.667)', marginTop: '5%', paddingBottom: '5%'},
  cardStyle: { margin: '2% 0'},
  headline: {textAlign: 'center', paddingTop: '3%', color: '#616161'},
}


export default Skills => (
  <div style={styles.background}>
    <Container>
      <h1 style={styles.headline}>
        <i className="fas fa-brain fa-1x"></i>  Top Skills 
        <OverlayTrigger placement="right" overlay={renderTooltip}> 
            <span className="right-arrow"> 
                <a href="/301"> <i className="fas fa-angle-right fa-1x"></i> </a>
            </span> 
        </OverlayTrigger>
      </h1>

    <Row>
        {skills.map( (skill, index) => {
                const full_link = "static/".concat(skill);
                return (
                    <Col xs={12} sm={6} md={3}  lg={3}>
                        <div class="sk-border">
                            <img style={{width: '100px', padding: '0 5px'}} src={full_link} alt="tool" />
                            <h5 style={{color: '#b689d2'}}>{skillNames[index]} </h5> 
                        </div>
                    </Col>
                ) 
        } )}
        
    </Row>

    </Container>
  </div>
);
