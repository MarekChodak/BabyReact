import axios from 'axios';

class MeasuresApi {
  static loadBabyMeasures() {
    return axios.get('rest/baby/myBabyMeasures');
  }

  static addMeasure(measure) {
    return axios.post('rest/baby/addMeasure', measure);
  }
}

export default MeasuresApi;
