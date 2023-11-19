import { ReactNode } from "react";

export interface PropsWithChildren {
  children: ReactNode;
}

export interface Country {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}
