import { CarsResponse } from "~/types";

const getCars = async (): Promise<CarsResponse> => {
    const res = await fetch("/api/cars");
    if (!res.ok) {
      throw new Error("Something went wrong with your request");
    }
    return res.json();
  };

export default getCars;
