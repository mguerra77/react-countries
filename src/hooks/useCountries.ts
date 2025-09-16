import { useEffect, useState } from "react";
import type { Country } from "../types/country";

type State = {
  data: Country[];
  loading: boolean;
  error: string | null;
};

export function useCountries(query: string) {
  const [state, setState] = useState<State>({ data: [], loading: false, error: null });

  useEffect(() => {
    if (!query) {
      setState({ data: [], loading: false, error: null });
      return;
    } // no hacer requests con string vacío para mejorar UX

    const controller = new AbortController(); // cancelar requests previos para evitar race conditions cuando el usuario tipea rápido
    const run = async () => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("No se encontraron países con ese nombre");
          }
          throw new Error(`Error del servidor (${res.status})`);
        }
        const json = (await res.json()) as Country[];
        setState({ data: json, loading: false, error: null });
      } catch (e: unknown) {
        if (e instanceof Error && e.name === "AbortError") return;
        const errorMessage = e instanceof Error ? e.message : "Error desconocido"; // fallback genérico para errores inesperados
        setState({ data: [], loading: false, error: errorMessage });
      }
    };
    run();
    return () => controller.abort();
  }, [query]);

  return state;
}