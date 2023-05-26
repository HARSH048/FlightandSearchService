const {cityservice}=require("../services/index");

const Cityservice=new cityservice();

const create=async(req,res)=>{
    try {
        const city=await Cityservice.createcity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err:error
        })
        
    }
}

const destroy=async(req,res)=>{
    try {
        const response=await Cityservice.deletecity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully delete the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete a city",
            err:error
        })
        
    }
}

const update=async(req,res)=>{
    try {
        const response=await Cityservice.updatecity(req.params.id,req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully created the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err:error
        })
        
    }
}

const get=async(req,res)=>{
    try {
        const response=await Cityservice.getcity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully get the city",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err:error
        })
        
    }
}

const getall=async(req,res)=>{
    try {
        const cities= await Cityservice.getall(req.query);
        return res.status(201).json({
            data:cities,
            success:true,
            message:"successfully get the city",
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a city",
            err:error
        })
    }
}

module.exports={
    create,
    get,
    update,
    destroy,
    getall
}