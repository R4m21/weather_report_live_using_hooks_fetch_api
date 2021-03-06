import React, { useEffect, useState } from 'react';
import "../sass/style.scss"
const App = () => {
    const [city, setCity] = useState(null);
    const [main, setMain] = useState({ feels_like: "", humidity: "", pressure: "", temp: "", temp_max: "", temp_min: "" });
    const [weather, setWeather] = useState([{ description: "", icon: "", id: "", main: "" }]);
    const [inpSearch, setInpSearch] = useState("mumbai");
    const [cityObj, setCityObj] = useState({ coord: { lon: "", lat: "" }, visibility: "", wind: { speed: "", deg: "" }, dt: "", sys: { country: "", sunrise: "", sunset: "" }, timezone: "", name: "" });
    const url = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const t = [cityObj.dt, cityObj.sys.sunrise, cityObj.sys.sunset];
    const time = t.map(val => new Date(val * 1000).toLocaleTimeString());
    const [curTime, setCurTime] = useState(null);
    useEffect(() => {
        const getResponse = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpSearch}&units=metric&appid=980b81bb9148dc743472d4cd0453cce3`;
            const res = await fetch(url);
            const resJson = await res.json();
            setCity(resJson.name);
            if (resJson.name) {
                setCityObj(resJson);
                setMain(resJson.main);
                setWeather(resJson.weather);
            }
        }
        getResponse();
    }, [inpSearch]);
    (() => setInterval(() => setCurTime(new Date().toLocaleTimeString()), 1000))();
    return (
        <>
            {/* searching for location */}
            <div className="inputf"><input type="text" name="inpSearch" value={inpSearch} id="" autoComplete="off" placeholder="Search Location" onChange={e => setInpSearch(e.target.value)} /></div>
            {!city ? <h1>city is not found</h1> :
                <div>
                    {/* Name of city */}
                    <h1 className="head0">{city}</h1>
                    <div className="card">
                        {/* current time and weather text */}
                        <div className="time">
                            <h3 className="head1">current weather</h3>
                            <p className="pg1">{curTime}</p>
                        </div>
                        {/* current tempareture */}
                        <div className="curTemp">
                            <div className="temp">
                                <h3 className="head2">
                                    <img src={url} alt={weather.main} />
                                    <span style={{ textTransform: 'lowercase' }}>{main.temp}°c</span>
                                </h3>
                                <h2 className="head4">{weather[0].description}</h2>
                            </div>
                            <p className="pg2">RealFeel® <span style={{ color: '#000' }}>{main.feels_like}°</span></p>
                        </div>
                        <h3 className="head3">overcast</h3>
                        {/* overcast list */}
                        <div className="row">
                            <div className="col1">
                                <ul>
                                    <li className="list_items">
                                        <span className="lt">wind</span>
                                        <span className="rt" style={{ textTransform: "lowercase" }}>{cityObj.wind.speed}m/s</span>
                                    </li>
                                    <li className="list_items">
                                        <span className="lt">humidity</span>
                                        <span className="rt">{main.humidity}%</span>
                                    </li>
                                    <li className="list_items">
                                        <span className="lt">min-temp</span>
                                        <span className="rt" style={{ textTransform: "lowercase" }}>{main.temp_min}°c</span>
                                    </li>
                                    <li className="list_items li">
                                        <span className="lt">max-temp</span>
                                        <span className="rt" style={{ textTransform: "lowercase" }}>{main.temp_max}°c</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col2">
                                <ul>
                                    <li className="list_items">
                                        <span className="lt"> pressure</span>
                                        <span className="rt">↔ {main.pressure}mb</span>
                                    </li>
                                    <li className="list_items">
                                        <span className="lt">visibility</span>
                                        <span className="rt">{cityObj.visibility / 1000}km</span>
                                    </li>
                                    <li className="list_items">
                                        <span className="lt">sunrise</span>
                                        <span className="rt">{time[1]}</span>
                                    </li>
                                    <li className="list_items">
                                        <span className="lt">sunset</span>
                                        <span className="rt">{time[2]}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
            {city ? <div className="ft">update weather time : {time[0]}</div> : null}
        </>
    )
}

export default App
