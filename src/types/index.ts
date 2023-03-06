export interface CarModel {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface CarsResponse  {
  result: CarModel[] | [];
}
export interface CarResponse  {
  result: CarModel | null;
}


