import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <li>
        <Link className="population_page" to="/Population">
          Population
        </Link>
        <Link className="covid_page" to="/covid">
          covid-tracker
        </Link>
      </li>
    </div>
  );
}

export default Home;
