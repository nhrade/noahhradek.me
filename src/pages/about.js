import React from "react"
import Layout from '../components/layout'
import { Container } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
    return (
        <Layout>
            <main>
                <Container>
                <StaticImage
                    src="../../static/images/pexels-markus-spiske-2061168.jpg"
                    alt="A block of code"
                    layout="fixed"
                    width={640}
                    height={480}/>
                    <br/>
                    <p>
                        I'm a software engineer with two years of professional experience and more than six years total experience.
                        The tech stack I've used professionally is Python and Django, as well as Typescript and Angular.
                        I've also used React and normal Javascript. My other non-professional experience includes
                        artificial intelligence, machine learning, game development, computer vision, graphics, as well as databases.
                    </p>
                </Container>
            </main>
        </Layout>
    );
}

export default About;