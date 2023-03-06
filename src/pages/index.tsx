import React from 'react'
import { Block, Button, View } from 'vcc-ui';
import Page from '~/containers/Page'
import { CarsResponse } from '~/types';
import { useQuery } from 'react-query';
import { getCars } from '~/api';
import CarsSlideshow from '~/components/CarsSlideshow';

export default function Home() {



  // Let the client fetch the data from the server and use react-query to cache the data
  const { data, isLoading } = useQuery<CarsResponse>("cars", getCars);

  const cars = data?.result ?? [];



  return (
    <Page title="cars">
      {Array.isArray(cars) && cars.length > 0 && (<CarsSlideshow cars={cars} />)}
    </Page>
  )
}
