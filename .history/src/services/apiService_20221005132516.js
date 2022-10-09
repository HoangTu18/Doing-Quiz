import axios from "axios";


import React from 'react';

function apiService(props) {
    return (
        <div>
             const postCreateNewuser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("http://localhost:8081/api/v1/participant", data);
};
        </div>
    );
}

export default apiService;