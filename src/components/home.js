import React from "react"
import Layout from "../components/layout"
import homeStyles from "./home.module.css"

export default function Home() {
  return (
    <Layout>
        <section className={`home ${homeStyles.home}`}>
			{children}
		</section>
    </Layout>
  )
}