import { createContext } from "react";

export const AffirmContext = createContext();
export default function MyContext({ children }) {
  const data = {};
  return <AffirmContext value={data}>{children}</AffirmContext>;
}
