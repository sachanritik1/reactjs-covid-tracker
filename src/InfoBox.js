import React from "react"

function InfoBox({ title, cases, total }) {
	return (
		<div className="infobox">
			<p className="infobox_title" color="textSecondary">
				{title}
			</p>
			<h2 className="infobox_cases">{cases}</h2>
			<p className="infobox_total" color="textSecondary">
				{total} Total
			</p>
		</div>
	)
}

export default InfoBox
