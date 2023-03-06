import React from 'react'
import Image from 'next/image'
import { Block, Button, View } from 'vcc-ui';
import Page from '~/containers/Page'
import { CarModel, CarsResponse } from '~/types';
import { useQuery } from 'react-query';


export default function Home() {

  const fetchCars = async (): Promise<CarsResponse> => {
    const res = await fetch("/api/cars");
    if (!res.ok) {
      throw new Error("Something went wrong with your request");
    }
    return res.json();
  };

  // Let the client fetch the data from the server and use react-query to cache the data
  const { data, isLoading } = useQuery<CarsResponse>("cars", fetchCars);

  const cars = data?.result ?? [];



  return (
    <Page title="cars">
      hej
    </Page>
  )
}
