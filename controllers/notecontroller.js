const { findOneAndUpdate } = require('../model/userSchema');
const note = require('./../model/noteSchema')



exports.notepage = (req, res)=>{
    res.status(200).render('home.ejs')
}

exports.mynotes = async(req,res)=>{
    const mynote =  await note.find().select('-__v');
    res.status(200).json({status: 'success', data: mynote})
}



exports.note= async(req, res)=>{
    try{let slug = req.params;
    let mynote = await note.findOne(slug);
        return res.status(200).json({status: 'success', data:mynote})}
    catch(err){res.status(400).json({status:'error', message:err.message})}
}

exports.addnote = async(req,res)=>{
    try{const notes = await note.create({
        title: req.body.title,
        content: req.body.content,
        userId: req.user.id
    });
    res.status(200).json({status:'success', message:'note added!', data: notes})}
    catch(err){res.status(400).json({status:'error', message:err.message})}

}


exports.editnote = async(req, res)=>{
    try{let slugger = req.params;
    let update = {content:req.body.content, title: req.body.title}
    let updated_note = await note.findOneAndUpdate(slugger,update,{runValidators: true});
    res.status(200).json({status:'success', data:updated_note})}
    catch(err){res.status(400).json({status:'error', message:err.message})}
}



exports.deletenote =async(req, res)=>{
    try{let slugger = req.params;
    let deleted_note = await note.findOneAndDelete(slugger);
    res.status(200).json({status:'sucess', message:'deleted!'})}
    catch(err){res.status(400).json({status:'error', message:err.message})}
}