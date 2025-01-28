import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";

export function Filter({ children }) {
  const {typeRequest} = useContext(MovieContext)
  if (typeRequest == "discover") {
    return (
      <div className="flex flex-col w-max mt-16 gap-5 items-center">
        {children}
      </div>
    );
  } else {
    <></>;
  }
}
