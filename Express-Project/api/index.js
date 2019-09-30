const express=require('express')
const router =express.Router();

require('./routes/login')(router)
require('./routes/mentor-register')(router)
require('./routes/user-register')(router)
require('./routes/search')(router)

module.exports=router
