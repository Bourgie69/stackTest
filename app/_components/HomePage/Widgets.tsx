"use client";

import { get } from "http";
import { useEffect, useState } from "react";

type WeatherData = {
  location: object;
  current: object;
};

const Widgets = () => {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0a4b71b097f542e5b09124137260401&q=Ulaanbaatar&aqi=no`
      );
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div className="flex rounded-2xl bg-orange-300 h-100 w-60 p-5 m-5">
      <div className="flex flex-col">
        <p>{data?.current.temp_c}C</p>
        <p>{data?.current.wind_kph}kph</p>
      </div>
    </div>
  );
};

export default Widgets;
