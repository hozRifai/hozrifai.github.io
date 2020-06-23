import React, {useState} from 'react';
import { Tooltip, Card, OverlayTrigger, Row, Col} from 'react-bootstrap';
import ProjectModal from './projectModal';

const showCode = (props) => ( <Tooltip {...props}>Code</Tooltip>)
const showDemo = (props) => (<Tooltip {...props}>Demo</Tooltip>)

const styles = {
    cardStyle: { margin: '2% 0'},
    projectImage: {objectFit: 'cover', heigth: '40vh', width: '100%'},
    projectTitle: {color: '#f11111', textAlign: 'center'},
    projectDescription: {textAlign: 'center', fontSize: '15px'},
    githubIcon: {position: 'absolute', top: '-5%', right: '40%'},
    eyeIcon: {position: 'absolute', top: '49%', right: '39%'},
    iconLink: {textDecoration: 'none', color: 'rgba(0, 0, 0, 0.54)'},
}

const ProjectCart = ({ title, image, description, icons, languages, github, demo, topProjects }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card style={styles.cardStyle} className="shadow">
            <div className="embed-responsive embed-responsive-21by9 zoom">
                <button onClick={() => setOpen(true)}>
                    <Card.Img className="card-img-top embed-responsive-item"  src={image} style={styles.projectImage} />
                </button>
                <ProjectModal open={open} setOpen={setOpen} />
            </div>

            <Card.Body>
                <Card.Title style={styles.projectTitle}> {title}  </Card.Title>
                <Card.Text style={styles.projectDescription}> {description} </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col xs={10} sm={10} md={8} lg={10}>
                        {icons.map( (icon, index) => {
                            const full_link = "static/".concat(icon)
                            return (
                                <OverlayTrigger placement="top" overlay={
                                    <Tooltip>{languages[index]}  </Tooltip>
                                }>
                                    <img style={{width: '44px', padding: '0 5px'}} src={full_link} alt="tool" /> 
                                </OverlayTrigger>
                            ) 
                            
                        } )}
                    </Col>
                    <Col xs={2} sm={2} md={4} lg={2} style={{textAlign: 'right'}}>
                        <OverlayTrigger placement="left" overlay={showCode}> 
                            <span style={styles.githubIcon}>
                                { github.length <= 0 ?
                                    <a style={styles.iconLink} href="# "> <i className="fab fa-github-alt fa-1x"></i> </a>
                                    :
                                    <a style={styles.iconLink} href={github}> <i className="fab fa-github-alt fa-1x"></i> </a>
                                }
                            </span> 
                        </OverlayTrigger>

                        <OverlayTrigger placement="left" overlay={showDemo}> 
                            <span style={styles.eyeIcon}>
                                {
                                    demo === 'null' ? <a style={styles.iconLink} href="# "> <i className="fas fa-eye fa-1x"></i> </a>
                                    : <a style={styles.iconLink} href={demo}> <i className="fas fa-eye fa-1x"></i> </a>
                                }
                            </span> 
                        </OverlayTrigger>
                    </Col>
                </Row>

            </Card.Footer>
        </Card>
    )
}
export default ProjectCart;