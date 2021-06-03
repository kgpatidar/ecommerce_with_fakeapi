import React from "react";
import "./App.css";
import Card from "./Card";
import data from "./data";

const App = () => {
  const [which, setWhich] = React.useState(-1);
  const [term, setTerm] = React.useState("");

  return (
    <div className="App">
      {which === -1 && (
        <div className="searchbar">
          <input
            placeholder="Search : Enter Name, City, Country or Tag"
            className="search-bar"
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      )}
      {console.log(term)}
      <div className="grid-view">
        {which === -1 &&
          data
            .filter((val) => {
              if (term === "") {
                return val;
              } else if (val.name.toLowerCase().includes(term.toLowerCase())) {
                return val;
              } else if (val.city.toLowerCase().includes(term.toLowerCase())) {
                return val;
              } else if (
                val.country.toLowerCase().includes(term.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data, index) => (
              <Card hotelData={data} callFunc={() => setWhich(data)} />
            ))}
      </div>

      {which !== -1 && (
        <div className="hotel-view">
          <h1>{which.name}</h1>
          <br></br>
          <br></br>
          {which.images.map((img, index) => (
            <img src={img} width="200px" />
          ))}
          <br></br>
          <br></br>

          <h4>{which.description}</h4>
          <h3>Rating : {which.rating}</h3>
          <h3>Stars : {which.stars}</h3>

          <h5>Date Start : {which.date_start}</h5>
          <h5>Date Ends : {which.date_end}</h5>

          <br></br>
          <button onClick={() => setWhich(-1)}>Cancel</button>
          <br></br>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default App;
