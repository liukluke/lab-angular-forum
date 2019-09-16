const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReplySchema = require('./Reply').schema;

const ThreadSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    replies: [ReplySchema]
});

const Thread = mongoose.model('Thread', ThreadSchema);
module.exports = Thread;