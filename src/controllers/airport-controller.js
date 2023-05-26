const {Airportservice}=require('../services/index');
const airportservice=new Airportservice();

const create=async (req,res)=>{
    try {
        const response=await airportservice.create(req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"successfully created the flight",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a airport",
            err:error
        })
    }
}

module.exports={
    create
}