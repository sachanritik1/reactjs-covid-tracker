import React, { useEffect, useState } from "react"
import axios from "axios"

function Population() {
	const [worldPopulation, setWorldPopulation] = useState()
	const [data, setData] = useState([])

	const options = {
		method: "GET",
		url: "https://get-population.p.rapidapi.com/population",
		headers: {
			"X-RapidAPI-Key": "f6c6108400msh011881d7bb8317bp1b37ffjsn31a224c5ec76",
			"X-RapidAPI-Host": "get-population.p.rapidapi.com",
		},
	}
	useEffect(() => {
		const timer = setTimeout(() => {
			axios
				.request(options)
				.then((res) => setWorldPopulation(res.data.readable_format))
				.catch((err) => console.log(err))
		}, 1000)
		return () => {
			clearTimeout(timer)
		}
	}, [worldPopulation])

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all?fields=name,population")
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className="population">
			{<h1>World's Population is : {worldPopulation}</h1>}
			<h2>Population of the respective countries (based on 2011 data) :</h2>
			<table className="table">
				<tbody>
					<tr>
						<th>Country</th>
						<th>Population</th>
					</tr>
					{data.map((country) => {
						return (
							<tr key={country.name.common}>
								<td>{country.name.common}</td>
								<td>{country.population}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default Population
