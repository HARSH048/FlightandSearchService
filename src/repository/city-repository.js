
const {Op}=require('sequelize');
const {city}=require('../models/index');
class cityRepository{

    async createcity({name})
    {
        try{
            const City = await city.create({name});
            return City;
        }catch(err)
        {
            console.log("something went wrong in repository");
            throw(err);
        } 
    }

    async deletecity(cityid)
    {
        try{
            await city.destroy({
                where:{
                    id:cityid
                }
            });

        }catch(err)
        {
            console.log("something went wrong in repository");
            throw(err);
        }
    } 

    async getcity(cityid){
        try {
            const City=await city.findByPk(cityid);
            return City;       
        } catch (error) {
            console.log("something went wrong in reository");
            throw(err);       
        }
    }

    async updatecity(cityid,data)
    {
        try{
            const City = await city.findByPk(cityid);
            City.name = data.name;
            await City.save();
            return City;

        } catch (error) {
            console.log("something went wrong in reository");
            throw(err);
            
        }
    }

    async getall(filter)
    {
        try {
            if(filter.name){
                const cities = await city.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities=await city.findAll();
            return cities; 
        } catch (error) {
            console.log("something went wrong in reository");
            throw(err);
            
        }
    }
}

module.exports=cityRepository;