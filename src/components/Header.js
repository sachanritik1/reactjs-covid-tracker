import React from "react"
import { Link } from "react-router-dom"
function Header() {
	return (
		<header className="header">
			<h2>Worldometer</h2>
			<li>
				<a href="/">Home</a>
				<a href="/covid">Covid-Tracker</a>
				<a href="/Population">Population</a>
			</li>
		</header>
	)
}

export default Header
