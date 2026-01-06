import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
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

const queryClient = new QueryClient()

function CountriesList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["fetchCountries"],
    queryFn: () => 
    fetch('https://openholidaysapi.org/Countries')
    .then((res) => res.json())
  })

  const countries = data || []

  console.log(countries);

  return (
    <div>
      <h1>Public Holiday App</h1>
      { isLoading && <p style={{ color: "grey" }}>Loading...</p>}
      { error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesList />
    </QueryClientProvider>
  )
}

export default App;
