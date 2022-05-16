import React, { useState, useEffect, useTransition } from 'react';
import { ASTEROID_URL } from '../../Constants/Constants';
import Page from '../Page/Page';
import './Asteroids.css';

const Asteroids = () => {
    
    const [result, setResult] = useState();
    const [isPending, startTransition] = useTransition();

    const fetchAPI = async () => {
        await fetch(ASTEROID_URL)
        .then(response => response.json())
        .then((data) => setResult(data))
        .catch((err) => {
            console.error(err);
        });
    };
        
    useEffect(() => {
        startTransition(() => {
            fetchAPI();
        });
    }, []);

    return (
      <Page className={'asteroids'}>
         {isPending ? <div>...Loading</div> :
          <>
          <div className='asteroids__header'>
            <div>elementCount:{result?.element_count}</div>
            <div>near_earth_objects:</div> 
          </div>
          <div> {result?.near_earth_objects['2020-09-08'].map((near_object) => {
              return (
                  <React.Fragment key={near_object.id}>
                    <div className='flex-grid'>
                        <div className='col'> name:{near_object.name}</div>
                        <div className='col'>absolute_magnitude_h: {near_object.absolute_magnitude_h}</div>
                        <div className='col'> estimated_diameter- MIN: {near_object.estimated_diameter['kilometers'].estimated_diameter_min}</div>
                        <div className='col'>estimated_diameter- MAX: {near_object.estimated_diameter['kilometers'].estimated_diameter_max}</div>
                    </div>
                 </React.Fragment>
              )
          })}</div>
          </>
        }
      </Page>
    )
}

export default Asteroids;