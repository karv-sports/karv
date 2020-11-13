import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import homeStyles from "../components/home.module.css"

export default function Home() {
    return (
        <Layout>
            <Home>
                <h1>KARV</h1>
                <Link to='/skiTypes'>Ski Types</Link>
                <Link to='/skiSelector'>Ski Selector</Link>
            </Home>
        </Layout>
    )
  }