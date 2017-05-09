const lon = 59.033459;
const lat = 18.076678;


export default {
    data() {
      return {
        weather: ''
      }
    },
    methods: {
      getWeather() {
        this.$http
          .get('http://api.openweathermap.org/data/2.5/weather?' + lat + '&' + lon , (data) => {
            this.weather = data;
          })
          .error((err) => console.log(err))
      }
    }
  }