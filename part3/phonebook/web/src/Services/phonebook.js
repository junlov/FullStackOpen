import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);

  return request.then((response) => response.data);
};

const delete_ = (object) => {
  const delUrl = `${baseUrl}/${object}`;
  const request = axios.delete(delUrl);

  console.log("request in phonebook", request);

  request
    .then((response) => {
      return response;
    })
    .catch((err) => console.log("error from phoenbook", err));
};

const updateNum = (id, newNumber) => {
  const patchUrl = `${baseUrl}/${id}`;
  const request = axios.patch(patchUrl, { number: newNumber });

  return request;
};

const phoneBookService = {
  getAll,
  create,
  delete_,
  updateNum,
};

export default phoneBookService;
