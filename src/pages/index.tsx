import React from 'react'
import Image from 'next/image'
import { Block, Button, View } from 'vcc-ui';
import Page from '~/containers/Page'
import { CarModel } from '~/types';

import { useQuery } from 'react-query';


export default function Home() {

  const fetchCars = async (): Promise<CarModel[]> => {
    const res = await fetch("/api/cars");
    if (!res.ok) {
      throw new Error("Something went wrong with your request");
    }
    return res.json();
  };

  // Let the client fetch the data from the server and use react-query to cache the data
  const { data: cars, isLoading } = useQuery<CarModel[]>("cars", fetchCars);


  console.log(isLoading, cars)


  return (
    <Page title="home">
      hej
    </Page>
  )
}
