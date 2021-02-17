import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const tekst = () => (
  <Layout>
    <SEO title="Ole Petter Baugerød Stokke koder" />

    <div className="title-box">
        <img src="https://media1.giphy.com/media/l0MYGlG4YLB51v0bu/giphy.gif"></img>
        <Link to="/tekst/">tekst</Link> 
    </div>
    
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>
    <p>Her er et par ting jeg har skrevet.</p>

  </Layout>
)

export default tekst
