import React from "react"
import { Link } from "react-router-dom"
function Header() {
	return (
		<header className="header">
			<a href="/">
				<h2>Worldometer</h2>
			</a>

			<li>
				<a href="/covid">Coronavirus</a>
				<a href="/Population">Population</a>
			</li>
		</header>
	)
}

export default Header
