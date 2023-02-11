const axios=require("axios");
const { query } = require("express");

exports.homeRoutes = (req, res) => {
    //make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render("index",{users:response.data});
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.addUser = (req, res) => {
    res.render("add-user");
}

exports.updateUser = (req, res) => {
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
        .then(function(userdata){
            res.render("update-user",{user:userdata.data})
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports = {
    homeRoutes:  this.homeRoutes,
    addUser:  this.addUser,
    updateUser: this.updateUser
}