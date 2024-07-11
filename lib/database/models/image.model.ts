import { Document, model, models, Schema } from "mongoose";
 
export interface Image extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    config?: object;
    height?: number;
    width?: number;
    transformationUrl?: String;
    color?: string;
    prompt?: string;
    aspectRatio?:string;
    author: {
        _id:string;
        firstName:string;
        lastName:string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema({
    title:{type:String , required:true},
    transformationType:{type:String , required:true},
    publicId:{type:String , required:true},
    secureUrl:{type:URL , required:true},
    config:{type:Object},
    height:{type:Number},
    width:{type:Number},
    transformationUrl:{type:URL },
    color:{type:String},
    aspectRatio:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date , default:Date.now},
    updatedAt:{type:Date , default:Date.now},
})

const Image = models?.Image || model('Image',ImageSchema);
export default Image;
