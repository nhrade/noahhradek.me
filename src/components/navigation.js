import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Container } from "react-bootstrap"

export default function Navigation(props) {
    const query = graphql`
    query NavigationQuery {
        site {
          siteMetadata {
            navigation {
              brandText
              links {
                text
                url
              }
            }
          }
        }
      }
    `

    const data = useStaticQuery(query);
    const links = data.site.siteMetadata.navigation.links;
    return (
        <nav>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Noah Hradek</Navbar.Brand>
                    <Navbar.Toggle aria-controls="links-navbar-nav" />
                    <Navbar.Collapse id="links-navbar-nav">
                        <Nav className="me-auto"N>
                            { links.map((link, i) => {
                                return (
                                    <Nav.Link key={i} href={link.url}>{link.text}</Nav.Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}