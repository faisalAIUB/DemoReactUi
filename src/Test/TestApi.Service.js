import axiox from 'axios'

export const GetWeather = async () => {
  return await  axiox.get("http://localhost:32768/weatherforecast");
}