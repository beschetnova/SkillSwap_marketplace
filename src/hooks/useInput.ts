import { useState } from "react";

type UseInputReturn = [
  { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void },
  () => void
];

export const useInput = (initialValue: string): UseInputReturn  => {
const [value, setValue] = useState(initialValue);
 
  return [
    { value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};