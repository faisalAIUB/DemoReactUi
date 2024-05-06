import React, { useEffect, useState } from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import { GetWeather } from './TestApi.Service';


const Weather = ({}) => {
    const [weatherList, setWeatherList] = useState([]);
   //console.log(weatherList);
    useEffect(() => {
        (async () => {
            try{
                const response = await GetWeather();
                // Log the response data
                const data = response.data;
                console.log(data);
                setWeatherList(data);
            }
            catch(e){
                console.log(e);
            }
            
        })();

    }, []);


    return (
        <HStack>
            
            {weatherList?.map((item,i) => {
                return (
                <>
                    <Box key={i}>
                        
                        <Text>{item.Date}</Text>
                        <Text>{item.Summary}</Text>
                    </Box>
                    <hr />
                </>

                );
            })}
            
        </HStack>
    );
};

export default Weather;
