import type { Country } from "../../types/country";
import StarRating from "../../components/StarRating";

type Ratings = Record<string, number>;

type Props = {
  countries: Country[];
  ratings: Ratings;
  setRatings: (next: Ratings) => void;
};

export default function CountryList({ countries, ratings, setRatings }: Props) {
  if (!countries.length) {
    return <p className="text-sm text-gray-500 text-center py-8">No hay resultados</p>;
  }

  return (
    <div className="space-y-3">
      {countries.map((c) => {
        const id = c.cca3 ?? c.name.common; // uso cca3 como ID único ya que es más estable que el nombre y como segunda opcion a este
        const name = c.name.common;
        const flag = c.flags?.png ?? c.flags?.svg;
        const rating = ratings[id] ?? 0;
        const capital = c.capital?.[0] || "—";
        const population = c.population?.toLocaleString() || "s/d";
        const area = c.area ? `${c.area.toLocaleString()} km²` : "s/d";
        const borderCount = c.borders?.length || 0; // cantidad de países limítrofes

        return (
          <div key={id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                {flag ? (
                  <img
                    src={flag}
                    alt={c.flags?.alt ?? `Bandera de ${name}`}
                    className="h-12 w-16 object-cover rounded border border-gray-200 flex-shrink-0"
                  />
                ) : null}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{name}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Población: <span className="font-medium">{population} habitantes</span></p>
                    <p>Capital: <span className="font-medium">{capital}</span></p>
                    <p>Superficie: <span className="font-medium">{area}</span></p>
                    <p>Países limítrofes: <span className="font-medium">{borderCount}</span></p>
                  </div>
                </div>
              </div>
              <StarRating
                value={rating}
                onChange={(val) => setRatings({ ...ratings, [id]: val })}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}