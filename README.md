# node-07-weather

Openweather and Mapbox APIs consumption using Axios.

## DEMO

[ONLINE VERSION](https://node-07-weather-joaquin.herokuapp.com/api/v1)

## Endpoints

1. Get the data from 10 places searching by name:

- Endpoint: https://node-07-weather-joaquin.herokuapp.com/api/v1/cities/:city
- Example: https://node-07-weather-joaquin.herokuapp.com/api/v1/cities/londres

2. Get weather by replacing lon (log) and lat (lal) obtained from the first endpoint:

- Endpoint: https://node-07-weather-joaquin.herokuapp.com/api/v1/weather/?lon="replace-with-log"&lat="replace-with-lal"
- Example: https://node-07-weather-joaquin.herokuapp.com/api/v1/weather/?lon=-0.018386&lat=51.5038775

3. Or get weather by passing place and id (obtained from the first endpoint too):

- Endpoint: https://node-07-weather-joaquin.herokuapp.com/api/v1/weather/:city/:id
- Example: https://node-07-weather-joaquin.herokuapp.com/api/v1/weather/londres/poi.274877980392