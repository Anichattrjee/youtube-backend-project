//wrapAsync using promises
const asyncHandler=(requesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((error)=>console.log(error));
    }
}


//The concept of wrapAsync por the wrapper function

// const asyncHandler=()=>{}
// const asyncHandler=(fn)=>{}
//const asyncHandler=(fn)=>{()=>{}} || const asynchHandler=(fn)=>()=>{}
//const asyncHandler=(fn)=>async()=>{}
//const asyncHandler=(fn)=>async(req,res,next)=>{}


//wrapAsync using try catch


// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next);
//     }
//     catch(error)
//     {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         });
//     }
// }

export {asyncHandler};