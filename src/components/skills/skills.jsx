import CircularProgress from './progress';
import { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import WOW from 'wowjs'
import 'animate.css/animate.css'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, [])


    return (
        <Container fluid className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                Throughout my career, I have interacted with various industry professionals and working environments gaining various skills both technical and soft skills.
                                <br />
                                This has seen me partake in various cutting-edge web-based applications that are in use and some still in their testing stage.
                            </p>
                            <section className='tech-skill'>
                                <h1>Technical Skills</h1>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <CircularProgress targetValue={98} label="HTML" />
                                    <CircularProgress targetValue={95} label="CSS" />
                                    <CircularProgress targetValue={92} label="SaSS" />
                                    <CircularProgress targetValue={80} label="JavaScript" />
                                    <CircularProgress targetValue={90} label="JavaScript" />
                                    <CircularProgress targetValue={90} label="Python" />
                                </Carousel>
                            </section>
                            <section className='soft-skill'>
                                <h1>Soft Skills</h1>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <CircularProgress targetValue={95} label="Effective-Communication" />
                                    <CircularProgress targetValue={80} label="Leadership" />
                                    <CircularProgress targetValue={90} label="Time-Management" />
                                    <CircularProgress targetValue={85} label="Critical-Thinking" />
                                    <CircularProgress targetValue={90} label="Team-Work" />
                                </Carousel>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export default Skills