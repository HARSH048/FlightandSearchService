const Crudservice=require('./crud-service');
const {AirportRepository}=require('../repository/index');

class Airportservice extends Crudservice{
    constructor()
    {
        const airportRepository=new AirportRepository();
        super(airportRepository);
    }
}

module.exports=Airportservice;