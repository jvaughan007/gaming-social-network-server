const db = require('../knex/knex');

exports.insertUser = async (email, username, hashedPassword) => {
  const user = (
    await db('users')
      .insert({ email, username, password: hashedPassword })
      .returning('*')
  )[0];
  return user;
};

exports.deleteUser = (id) => {
  return db('users').where({ id }).delete();
};

exports.updateUser = (id, updatedUser) => {
  return db('users')
    .where({ id })
    .update(updatedUser)
    .returning('*')
    .then((rows) => rows[0]);
};