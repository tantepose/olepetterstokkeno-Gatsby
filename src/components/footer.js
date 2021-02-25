import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer `
  padding-top: 100px;
  padding-bottom: 50px;
  font-style: italic;
`

const Footer = ({ siteTitle }) => (
  <StyledFooter>
    <p><Link to="/">OlePetterStokke.no</Link> er designet og utviklet av Ole Petter Baugerød Stokke.</p>        
    <a href="mailto:hei@olepetterstokke.no">hei@olepetterstokke.no</a> | <a href="tel:40550999">405 50 999</a>
  </StyledFooter>
)

export default Footer
