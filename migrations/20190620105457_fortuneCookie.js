exports.up = function (knex, Promise) {
  return knex.schema.createTable('cookieMessage', function (t) {
    t.increments('id').primary()
    t.string('quote')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cookieMessage')
}
