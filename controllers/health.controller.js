const healthService = require('../services/health.sevise')

const get = function (req,res){
    console.log(healthService.getService())
    res.send(healthService.getService())
  }
module.exports = {get}