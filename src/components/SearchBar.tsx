import type { ChangeEvent } from "react";

type Props = {
  query: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ query, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <input
      value={query}
      onChange={handleChange}
      placeholder="Buscar por nombre..."
      className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      aria-label="Buscar país"
    />
  );
}