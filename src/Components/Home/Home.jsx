import React, { useState, useCallback, Suspense } from 'react'
import Page from '../Page/Page';
import Content from '../Content/Content';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {

    const [value, setValue] = useState();
    const [date, setDate] = useState();

    const handleOnChange = useCallback((val) => {
        const date = new Date(val);

        //Format the date as expected format for the calendar
        const dateFormat = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        setValue(val);
        setDate(dateFormat);
    }, [setValue, setDate])

    return (
    <>
      <Page className={'home'}>
        <Calendar maxDate={new Date()} onChange={handleOnChange} value={value} />
        <Suspense fallback={<h1>Loading content...</h1>}>
            <Content date={date} />
        </Suspense>
      </Page>
    </>
    )
}

export default Home;