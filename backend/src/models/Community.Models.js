import mongoose, { Schema, model } from "mongoose"

const communitySchema = new Schema({
	
	message : {
		type : String,
	},
	owner : {
		type : mongoose.Schema.Types.ObjectId,
		ref : "user"
	}

} , {timestamps : true})

export const community = mongoose.model("community" , communitySchema)