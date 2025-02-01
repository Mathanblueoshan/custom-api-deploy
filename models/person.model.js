import { model, Schema }  from "mongoose";

//write schema
const schema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  age: {
    type:Number,
  }
});


//create model
const Person = model("Person",schema);

export default Person;