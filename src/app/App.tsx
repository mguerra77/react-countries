import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CountryList from "../features/countries/CountryList";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { useCountries } from "../hooks/useCountries";

export default function App() {
  const [query, setQuery] = useState("");
  const debounced = useDebouncedValue(query, 400);
  // Acá usé 400ms de debounce para evitar requests excesivos mientras el usuario tipea

  const { data, loading, error } = useCountries(debounced);

  // ratings en memoria (se conservan entre búsquedas; no persisten al refresh)
  const [ratings, setRatings] = useState<Record<string, number>>({});

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl p-6">
        <h1 className="mb-6 text-2xl font-semibold text-gray-900 text-center">Buscador de países</h1>

        <SearchBar query={query} onChange={setQuery} />

        <section className="mt-6">
          {loading && <p className="text-sm text-gray-600 text-center py-4">⏳ Cargando…</p>}
          {error && <p role="alert" className="text-sm text-red-500 text-center py-4">⚠️ {error}</p>}
          {!loading && !error && (
            <CountryList countries={data} ratings={ratings} setRatings={setRatings} />
          )}
        </section>
      </div>
    </main>
  );
}