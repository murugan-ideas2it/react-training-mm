import axios from "axios";

const instance = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  }
});

export function AddEmployee(inputData, callback) {
  instance({
    url: "/users/",
    method: "POST",
    data: inputData,
  }).then(response => {
    callback(null, response);
  }).catch(error => {
    callback(error);
  });
}

export function EditEmployee(inputData, callback) {
  instance({
    url: "/users/",
    method: "PUT",
    data: inputData,
  }).then(response => {
    callback(null, response);
  }).catch(error => {
    callback(error);
  });
}

export function DeleteEmployee(inputData, callback) {
  instance({
    url: "/users/",
    method: "DELETE",
    data: inputData,
  }).then(response => {
    callback(null, response);
  }).catch(error => {
    callback(error);
  });
}