
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

import './App.css';
function App() {
  const weather = useWeather();

  useEffect(()=>{
    weather.fetchCurrentLocationData()
  },[])

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick ={weather.fetchData} value="Search"/>
      <Card/>
      <Button value="Refresh"/>

    </div>
  );
}

export default App;
