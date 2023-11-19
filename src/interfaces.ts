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
