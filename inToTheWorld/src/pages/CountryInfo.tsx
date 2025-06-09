import { useEffect, useState } from "react";
import './styles/countryinfo.css';

interface CountryInfoProps {
  country: string;
}


function CountryInfo({country} : CountryInfoProps){

  const [data, setData] = useState(Object);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "ZYSwyz29fjOn%2FWe2eyMfR426viugoisgYx9ToUU%2FdbgdCEjFUuCAbqp0o%2F2%2B8rAKs7bC8h7fT4xyGFWq6dxUwA%3D%3D"; // URL-encoded 필요
  const BASE_URL = "https://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicList";

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        setData(null);
        setError(null);

        const url = `${BASE_URL}?ServiceKey=${API_KEY}&countryName=${encodeURIComponent(country)}&numOfRows=1&pageNo=1`;

        const res = await fetch(url);
        const text = await res.text();

        // XML → JSON 변환
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");
        const countryName = xml.querySelector("countryName")?.textContent;
        const continent = xml.querySelector("continent")?.textContent;
        const info = xml.querySelector("basic")?.textContent;
        const flag = xml.querySelector("imgUrl")?.textContent;

        setData({ countryName, continent, info, flag });
      } catch (error) {
        setError("정보를 불러오지 못했습니다.");
        console.log(error);
      }
    };

    fetchCountryInfo();
  }, [country]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!data) return <div>Loading country info...</div>;

  return (
    <section className="country-container">
      <div className="header">
        <h2>{data.countryName || country}</h2>
        {data.continent && <p className="continent">대륙: {data.continent}</p>}
      </div>

      {data.flag && (
        <div className="flag-wrapper">
          <img src={data.flag} alt={`${data.countryName} flag`} />
        </div>
      )}

      {data.info && (
        <div className="info-html" dangerouslySetInnerHTML={{ __html: data.info }} />
      )}
    </section>
  );
}

export default CountryInfo;