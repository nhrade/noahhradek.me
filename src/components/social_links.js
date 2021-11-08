import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"
import { graphql, useStaticQuery } from "gatsby";

export default function SocialLinks({ children }) {

    const query = graphql`
    query SocialLinksQuery {
        site {
          siteMetadata {
            socialLinks {
              site
              url
              color
            }
          }
        }
      }
    `

    const data = useStaticQuery(query);
    const links = data.site.siteMetadata.socialLinks;

    return (
        <ButtonGroup>
                {links.map((link, i) => {
                    return (
                    <Button variant="link" key={i} href={`${link.url}`}>
                        <i className={`bi-${link.site}`} style={{fontSize: '1.5rem', color: link.color}}/>
                    </Button>
                    );
                })}
        </ButtonGroup>
    );
}