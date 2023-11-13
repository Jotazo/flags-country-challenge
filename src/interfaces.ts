import { ReactNode } from "react";

export interface PropsWithChildren {
  children: ReactNode;
}

export interface Country {
  capital: string;
  population: number;
  region: string;
  flag: string;
}

export interface ApiCountry {
  capital: string;
  population: number;
  region: string;
  flags: Flag;
}

interface Flag {
  png: string;
  svg: string;
}
