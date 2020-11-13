
import React from "react"
import layoutStyles from "./layout.module.css"

export default function Layout({ children }) {
	return (
		<section className={`layout ${layoutStyles.layout}`}>
			{children}
		</section>
	)
}