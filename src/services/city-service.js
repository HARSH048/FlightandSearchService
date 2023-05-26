const { cityRepository } = require("../repository/index");

class cityservice{
    constructor(){
        this.cityrepository=new cityRepository();
    }

    async createcity(data)
    {
        try {
            const city= await this.cityrepository.createcity(data);
            return city;
        } catch (error) {
            console.log("something went wron on service layer");
            throw (error);
        }
    }

    async deletecity(cityid)
    {
        try {
            const city= await this.cityrepository.deletecity(cityid);
            return true;
        } catch (error) {
            console.log("something went wron on service layer");
            throw (error);
        }

    }

    async updatecity(cityid,data)
    {
        try {
            const city= await this.cityrepository.updatecity(cityid,data);
            return city;
        } catch (error) {
            console.log("something went wron on service layer");
            throw (error);
        }

    }

    async getcity(cityid)
    {
        try {
            const city=await this.cityrepository.getcity(cityid);
            return city;        
        } catch (error) {
            console.log("something went wron on service layer");
            throw (error);
        }

    }

    async getall(filter)
    {
        try {
            const cities=await this.cityrepository.getall({name: filter.name});
            return cities;
        } catch (error) {
            console.log("something went wron on service layer");
            throw (error);
        }
    }
}

module.exports=cityservice;