import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CarModel, CarResponse } from "~/types"


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarResponse>
) {
  const fileContents = fs.readFileSync('public/api/cars.json', 'utf8');
  const items: CarModel[] = JSON.parse(fileContents);

  const car = items.find((car) => car.id === req.query.carId)

  const result = {
    result: car ?? null
  }

  res.status(200).json(result);
}
