import { ReactNode } from "react";

export interface PropsWithChildren {
  children: ReactNode;
}

export interface Country {
  name: string;
  capital: string;
  population: number;
  region: string;
  flag: string;
}

export interface ApiCountry {
  name: ApiCountryName;
  capital: string;
  population: number;
  region: string;
  flags: Flag;
}

export interface ApiCountryName {
  common: string;
  official: string;
}

interface Flag {
  png: string;
  svg: string;
}
