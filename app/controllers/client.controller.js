const db = require("../models");
const Client = db.client;
var geoip = require('geoip-lite');

const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    var ip = req.socket.remoteAddress;
    var geo = geoip.lookup(ip);
    
    Client.create({
    item_id:    req.body.item_id,
    first_name: req.body.first_name,
    last_name:  req.body.last_name,
    country:    geo.country,    
    email:      req.body.email,    
    phone:      req.body.phone,    
    owner:      req.body.owner,    
    status:     req.body.status,    
    age:        req.body.age,    
    ip_address: ip
  })
    .then(client => {
      res.send({ message: "Client registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};