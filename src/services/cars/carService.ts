import axios from "axios";
import { APIURL } from "../../config/apiConfig";
import axiosInstance from "../../utils/axiosInstance";
import { xAccessToken } from "../../utils/getAccessToken";

export class CarService {
  async getAllCollection() {
    return axios.get(`${APIURL}/car/complete/car/detail`);
  }
  async getCarDetailById(carId: any) {
    return axios.get(`${APIURL}/car/completeCarDetailById/${carId}`);
  }
  async getAllBrands() {
    return axios.get(`${APIURL}/carMake`);
  }
  async getAllCarBodies() {
    return axios.get(`${APIURL}/carBody`);
    // return axios.get(`http://localhost:8081/api/carBody`);
  }

  sellCar(payload: any) {
    return axiosInstance.post(`/sellCar`, payload);
  }

  bookTrial(payload: any) {
    return axiosInstance.post(`/trial`, payload);
  }

  getInpectionsById(payload: any) {
    return axiosInstance.get(`/sellCar/getBy/UserId/${payload}`);
  }

  getAllFuelType() {
    // return axios.get(`../../../public/json/data/fule-type.json`);
    return axios.get("/json/data/fule-type.json");
  }
}
