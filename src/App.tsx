import { useEffect, useState } from 'react';
import './App.css';

type LocalizedText = {
  language: string;
  text: string;
};

type Country = {
  isoCode: string;
  name: LocalizedText[];
  officialLanguage: string[];
};

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch('https://openholidaysapi.org/Countries');
      const data = await response.json();
      setCountries(data);
    }

    fetchCountries();
  }, []);

  console.log(countries);

  return (
    <div>
      <h1>Public Holiday App</h1>
    </div>
  );
}

export default App;
