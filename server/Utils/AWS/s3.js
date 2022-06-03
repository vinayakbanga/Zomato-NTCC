import AWS from "aws-sdk";
const s3Bucket= new AWS.S3({
   
    // accessKeyId:process.env.AWS_S3_ACCESS_KEY,
    // secretAccessKey:process.env.AWS_S3_SECRET_KEY,
     accessKeyId:"AKIA6FQECZYODNW7DFTK",
    secretAccessKey:"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",
    region:"ap-south-1",
});
export const s3Upload = (options)=>{
    return new Promise((resolve,reject)=>s3Bucket.upload(options,(error,data)=>{
        if(error)return reject(error);
        return resolve(data);
    })) 
}