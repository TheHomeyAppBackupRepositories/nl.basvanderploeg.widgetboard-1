'use strict';

module.exports = {

  async getLocation({ homey }) {
    return {
      lat: homey.geolocation.getLatitude(),
      lng: homey.geolocation.getLongitude(),
    };
  },

};
