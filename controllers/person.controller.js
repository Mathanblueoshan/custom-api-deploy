import Person from "../models/person.model.js";

export const personIndex = async (req,res) => {
  try {
    
    const persons = await Person.find();
    res.json(persons);

  } catch (error) {
     return res.status(500).json({message: error.message});//500 server error
  }
}

export const personCreate = async (req,res) => {

  // name,age
  console.log(req.body);
// validate the data
const newPerson = new Person({
    name: req.body.name,
    age:req.body.age
}); 

try {

 const person =  await newPerson.save();
  return res.status(201).json(person);//201 create

} catch (error) {

  return res.status(400).json({message: error.message});//400 bad req

}

}

// get one movie

export const personDetail = async (req,res) => {
  const id = req.params.id;

  try {
    const person = await Person.findById(id);
   
    if(person == null){
      res.status(404).json({message:"could not found"});
    }else{
      res.json(person);
    }
  } catch (error) {
    return res.status(500).json({message: error.message});//400 bad req

  }
}

export const personUpdate = async (req,res) => {
  const id = req.params.id;

  try {
    const updatedPerson = await Person.findOneAndUpdate({_id:id},
      {
      name:req.body.name, 
      age:req.body.age
      },
      {
        new:true
      });
    res.status(200).json({updatedPerson:updatedPerson})
  } catch (error) {
    return res.status(400).json({message: error.message});//400 bad req

  }
}

export const personDelete = async (req,res) => {
  const id = req.params.id;

  try {
    const deletedPerson = await Person.findByIdAndDelete(id);
    res.status(200).json({
      message:"Person deleted",
      DeletedPerson:deletedPerson})
  } catch (error) {
    return res.status(404).json({message: error.message});//404 not found
  }
}
