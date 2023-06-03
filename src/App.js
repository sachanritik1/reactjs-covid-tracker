import React from "react"
import Covid from "./Covid"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Population from "./Population"
import Header from "./components/Header"
import Footer from "./components/Footer.js"
import "./App.css"

function App() {
	return (
		<Router>
			<div className="top">
				<Header />
			</div>

			<div className="mid">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/covid" element={<Covid />} />
					<Route path="/population" element={<Population />} />
				</Routes>
			</div>

			<div className="bottom">
				<Footer />
			</div>
		</Router>
	)
}

export default App
