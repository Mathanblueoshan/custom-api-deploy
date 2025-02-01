export const personIndex = (req,res) => {
  res.json({msg:"all persons"});
}

export const personCreate = (req,res) => {
  res.json({msg:"new person"});
}

export const personUpdate = (req,res) => {
  res.json({msg:"upadated person"});
}

export const personDelete = (req,res) => {
  res.json({msg:"Deleted person"});
}
