
const API_BASE = 'https://api.weatherapi.com/v1/'

export const getWeatherInfo= (city,currentDate,days)=>{
    console.log(currentDate)
    console.log(days)
    return fetch(`${API_BASE}forecast.json?key=c0f5008ffa0b4ff9aec195803240703&q=${city}&days=${days}&dt=${currentDate}&hour=12&lang=uk`)
}

// c0f5008ffa0b4ff9aec195803240703