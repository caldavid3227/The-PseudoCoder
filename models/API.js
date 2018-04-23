import axios from "axios";

export default {

  getProject: function() {
    return axios.get("/api/project");
  },

  getProject: function(id) {
    return axios.get("/api/project" + id);
  },

   deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  
  saveProject: function(data){
    return axios.post("/api/project", data);
  },
  }
 

