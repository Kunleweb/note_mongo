const mongoose = require('mongoose');
const User = require('./userSchema')
const slugify = require('slugify')

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug:String,
  content: {
    type: String,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user_note'
  }
});

// Update updatedAt automatically
noteSchema.pre('save', function(next) {
  this.slug = slugify(this.title,{lower:true}) 
  next();
});





const note_note =  mongoose.model('note', noteSchema)

module.exports = note_note
