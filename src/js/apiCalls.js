import axios from "axios";
const natParkAPIURL = "http://developer.nps.gov/api/v1/parks";

export default {
  getParks() {
    return axios
      .get(natParkAPIURL + "?&api_key=" + process.env.VUE_APP_NAT_PARK_KEY)
      .then(response => {
        return console.log(response.data);
      });
  }
};
