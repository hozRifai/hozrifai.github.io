import React from "react";
import {Container, Row, Col, Image  } from 'react-bootstrap';
import Typical from 'react-typical';


const styles = {
    homeBackground: {background: 'rgba(228, 228, 228, 0.667)'},
    imageCenter: {textAlign: 'center', marginTop: '5%'},
    imageStyle: {height:'auto',width:'60%', border: '2px solid #807070'},
    infoCenter: {marginTop: '5%', zIndex: '0', textAlign: 'center'},
    border: {borderLeft: '2px solid #807070', height: "89%", zIndex:'-1', position: 'absolute'},
    name: {marginTop: '3%',fontStyle: 'bold', },
    description: {marginTop: '1%', fontSize: '20px', fontStyle: 'italic'},
    testBorder: {position: 'relative', padding: '10% 0 0 5%'},
    rightHeader: {fontStyle: 'italic', fontSize: '28px', color: 'rgba(8, 7, 10, 0.6)'},
    contactAnchor: {textDecoration: 'none', margin: '3% 0 0 1%', display: 'inline-flex'},
    contactIcons: {padding: '0 1.1rem  2.0rem  0',  color: 'rgba(43, 25, 95, 0.6)'},
    contactName: {fontSize: '18px', position: 'relative', top: '-10%'}
  }

  const links = ["https://www.linkedin.com/in/hozrifai/", "https://github.com/hozRifai", "https://stackoverflow.com/users/9877827/hozayfa-el-rifai" ]
  const icons = ["fab fa-linkedin fa-2x", "fab fa-github fa-2x", "fab fa-stack-overflow fa-2x" ]
  const names = ['LinkedIn', 'GitHub', 'StackOverFlow']

export default Welcome => (

    <div style={styles.homeBackground}> 
        <Container>
            <Row>
                <Col sm={12} md={5} style={styles.imageCenter}>
                    <Image style={styles.imageStyle} src="../static/personal_image.jpg" roundedCircle/> 
                    <h3 style={styles.name}> Hozayfa El Rifai</h3> 
                    <Typical steps={['Full Stack Dev', 1000, 'Full Stack Dev & Data Scientist', 1000]} loop={1} />
                </Col>

                <Col sm={12} md={7} style={styles.infoCenter}>
                    <p style={styles.border}></p>
                    <div style={styles.testBorder}>
                            <h5 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="3s" style={styles.rightHeader}>Building websites & DL models is my speciality!
                            Working on migrating ideas to real business  
                            {" "}<i className="fab fa-bitcoin"></i>
                            </h5>
                    </div>
                            
                    <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="4s">
                        {links.map( (link, index) => {
                            return (
                                <a href={link} style={styles.contactAnchor} key={index} > 
                                <span style={styles.contactIcons}>
                                    <i className={icons[index]}></i> <span style={styles.contactName}> {names[index]} </span>
                                </span>
                                </a>
                            )
                        })}
                    </div>
                </Col>
                
            </Row>
        </Container>
    </div>
);