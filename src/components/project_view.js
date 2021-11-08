import { useStaticQuery } from "gatsby";
import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import { graphql } from "gatsby";

const NUM_COLS = 4;

export default function ProjectView(props) {

    const query = graphql`
    query GithubRepoQuery {
        github {
          viewer {
            login
            repositories(
              first: 10
              orderBy: {field: STARGAZERS, direction: DESC}
              isFork: false
            ) {
              edges {
                node {
                  name
                  id
                  description
                  isFork
                  url
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `

    const data = useStaticQuery(query);
    const repos = data.github.viewer.repositories;
    const grid = [[]];
    let gridIdx = 0;

    repos.edges.forEach((repo, i) => {
        if(i % NUM_COLS == 0 && i > 0) {
            grid.push([]);
            gridIdx++;
        }
        grid[gridIdx].push(repo);
    });

    console.log(repos);
    return (
        <Container fluid="md">
            { grid.map((row, rowIdx) => {
                return (
                    <Row xs={1} md={2} key={rowIdx} className="g-4">
                        { row.map((repo, colIdx) => {
                            return (
                                <Col key={colIdx}>
                                    <Card style={{margin: "4%"}}>
                                        <Card.Header>
                                            <Card.Title>{ repo.node.name }</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Subtitle> Language: { repo.node.primaryLanguage != null ? repo.node.primaryLanguage.name : "" }</Card.Subtitle>
                                            <Card.Text>{ repo.node.description }</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                        <Card.Link href={repo.node.url}>Repository</Card.Link>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            );
                        }) }
                    </Row>
                );
            }) }
        </Container>
    )
}