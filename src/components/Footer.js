import React from "react"

function Footer() {
	const date = new Date()
	const year = date.getFullYear()
	return (
		<footer className="footer">
			<li>
				<p>Contact Us:</p>
				<a href="https://www.facebook.com/Worldometer-100282632233226">
					Facebook
				</a>
				<a href="https://twitter.com/worldometerinfo">Twitter</a>
			</li>
			<p>© {year} Worldometer.info</p>
		</footer>
	)
}

export default Footer
