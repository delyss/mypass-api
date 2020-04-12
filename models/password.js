const mongoose = require('mongoose');
const { Schema } = mongoose;

const model = new Schema({
  user_name: { type: String },
  password: { type: String },
  url: { type: String },
  description: { type: String },
  tag: { type: String },
  old_password: { type: String },
  created_at: { type: Date },
  deleted_at: { type: Date }
});

module.exports = mongoose.model('Password', model);