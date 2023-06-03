import React, { useEffect, useState } from "react"

import InfoBox from "./InfoBox"
import Table from "./Table"
import { sortData } from "./util"

function Covid() {
	const [countries, setCountries] = useState([])
	const [country, setCountry] = useState("worldwide")
	const [countryInfo, setCountryInfo] = useState({})
	const [tableData, setTableData] = useState([])

	useEffect(() => {
		fetch("https://disease.sh/v3/covid-19/all")
			.then((res) => res.json())
			.then((data) => {
				setCountryInfo(data)
			})
	}, [])
	useEffect(() => {
		const getCountriesData = async () => {
			await fetch("https://disease.sh/v3/covid-19/countries")
				.then((res) => res.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
					}))
					const sortedData = sortData(data)
					setTableData(sortedData)
					setCountries(countries)
				})
		}
		getCountriesData()
	}, [])

	const onCountryChange = (event) => {
		const countryCode = event.target.value
		setCountry(countryCode)

		const url =
			countryCode === "worldwide"
				? "https://disease.sh/v3/covid-19/all"
				: `https://disease.sh/v3/covid-19/countries/${countryCode}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCountry(countryCode)
				setCountryInfo(data)
			})
	}

	return (
		<div className="covid">
			<div>
				<div>
					<div className="title">
						<h1>COVID-19 TRACKER</h1>
						<form>
							<select
								variant="outlined"
								onChange={onCountryChange}
								value={country}
							>
								<option value="worldwide">Worldwide</option>
								{countries.map((country) => (
									<option value={country.value}>{country.name}</option>
								))}
							</select>
						</form>
					</div>
					<div className="stats">
						<InfoBox
							title="Coronavirus Cases"
							cases={`+${countryInfo.todayCases}`}
							total={countryInfo.cases}
						/>
						<InfoBox title="Active Cases" cases={countryInfo.active} />

						<InfoBox
							title="Recovered"
							cases={`+${countryInfo.todayRecovered}`}
							total={countryInfo.recovered}
						/>
						<InfoBox
							title="Deaths"
							cases={`+${countryInfo.todayDeaths}`}
							total={countryInfo.deaths}
						/>
					</div>
				</div>
				<div>
					<div>
						<h3>Live Cases by Country-</h3>
						<Table countries={tableData} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Covid
