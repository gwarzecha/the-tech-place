const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// creates associations between user and posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// defines the relationship of the Post model to the User; post can belong to 1 user, not many
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };