const express = require("express");
const bodyparser = require("body-parser");
// require('dotenv').config();
const { PORT } = require("./config/serverconfig");
// const cityRepository=require('./repository/city-repository');
//const PORT = 6500;
const apiroutes = require("./routes/index");
// const db=require('./models/index');
const { city, Airport } = require("./models/index");
const setupserver = async () => {
  const app = express();
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  app.use("/flightservice/api", apiroutes);
  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
    //      const repo=new cityRepository();
    //     // repo.createcity({name:"delhi"});
    //    repo.deletecity(1);
    // db.sequelize.sync({alter:true});
    // const City=await city.findOne({
    //     where:{
    //         id:6
    //     }
    // });
    // const airports=await City.getAirports();//these function only used after sync like in line no.21
    // console.log(airports);
  });
};

setupserver();
