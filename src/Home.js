import React from "react"

function Home() {
	return (
		<div className="home">
			<div className="title">
				<h1>Welcome to the Worldometer</h1>
				<p>Here you get the informatipon about covid-19 and world population</p>
			</div>

			<div className="pages">
				<p>for the more info about coronavirus click here </p>
				<a href="/covid">Covid-19</a>
			</div>
			<div className="pages">
				<p>for the more info about population click here </p>
				<a href="/population">Population</a>
			</div>
		</div>
	)
}

export default Home
