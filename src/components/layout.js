
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import SocialLinks from './social_links'
import { Container, Stack } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query MainPageQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <main>
            <Navigation/>
            <Container>
                <title>{pageTitle} | {data.site.siteMetadata.title} </title>
                <Stack direction="vertical" gap={3}>
                    <div>
                        <SocialLinks/>
                    </div>
                    <div>
                        { children }
                    </div>
                </Stack>
            </Container>
        </main>
    )
}

export default Layout