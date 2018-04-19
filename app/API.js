import axios from "axios";

export default {

  getProject: function() {
    return axios.get("/api/project");
  },

  saveProject: function(data){
    return axios.post("/api/project", data);
  }
 
};
