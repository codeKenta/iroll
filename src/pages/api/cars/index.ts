import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CarModel } from "~/types"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarModel[]>
) {
  const fileContents = fs.readFileSync('public/api/cars.json', 'utf8');
  const items: CarModel[] = JSON.parse(fileContents);
  res.status(200).json(items);
}
