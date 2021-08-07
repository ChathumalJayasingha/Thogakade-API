const customerSchema=require('../model/CustomerSchema');


const saveCustomer=(req,res)=>{
    const customer=new customerSchema({
        email:req.body.email,
        name:req.body.name,
        address:req.body.address,
        contact:req.body.contact,
        password:req.body.password
    });
    customer.save().then(customerSavedResponse=>{
            res.status(200).json({message:"Customer Saved",state:true})
    }).catch(customerSaveError=>{
        res.status(500).json({message:"Internal Server Error",state:false,error:customerSaveError})
    })
}

module.exports={
    saveCustomer
}