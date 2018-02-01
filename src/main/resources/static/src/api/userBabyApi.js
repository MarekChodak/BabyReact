import axios from 'axios';
import moment from 'moment';

class UserBabyApi {
  static loadUserBaby() {
    return axios.get('rest/baby/my');
  }

  static addUserBaby(baby, photo) {
    let formData = new FormData();
    formData.append('file', photo);
    formData.append('firstName', baby.firstName);
    formData.append('lastName', baby.lastName);
    formData.append('birthDate', moment(baby.birthDate).format("YYYYMMDD"));
    return axios.post('rest/baby/babyPicture', formData);
  }
}

export default UserBabyApi;
