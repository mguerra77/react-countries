export type Country = {
  cca3: string;                    // id estable (3 letras)
  name: { common: string };
  flags?: { png?: string; svg?: string; alt?: string };
  region?: string;
  population?: number;
  capital?: string[];              // Array de capitales
  area?: number;                   // Área en km²
  borders?: string[];              // Array de códigos de países limítrofes
};