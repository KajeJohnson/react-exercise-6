import { useEffect, useState } from "react";
import { Period } from "../type";
import {forcastDetroit}

export function WeatherForcast() {
  const [periods, setPeriods] = useState<Period[]>([]);

  useEffect(() => {
    getPeriod();
  }, []);


function getPeriod() {
  forcastDetroit().then((response) => {
    console.log(response.data);
    setPeriods(response.data.properties.periods);
  });


return (
    <div>
  <div>
    <h1>Weather Forcast</h1>

    <div>
      <ul>
        {" "}
        {periods.map((period) => {
          <li key={period.name}>
            <div>{period.name}</div>
            <div>{period.temperature}</div>
            <img src={period.icon} alt="" />
            <div>{period.detailedForcast}</div>
          </li>;
        })}
      </ul>
    </div>
  </div></div>
)}
    }
