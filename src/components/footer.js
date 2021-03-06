import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer `
  padding-top: 100px;
  padding-bottom: 50px;
  font-style: italic;
  /* background-color: var(--foreground-color); 
  color: var(--background-color); */
`

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <p><Link to="/">OlePetterStokke.no</Link> er utvikla av Ole Petter Baugerød Stokke.</p>        
    <a href="mailto:olepetterstokke@gmail.com">olepetterstokke@gmail.com</a> | <a href="tel:40550999">405 50 999</a>
  </StyledFooter>
)

export default Footer
