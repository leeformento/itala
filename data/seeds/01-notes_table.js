
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes_table_four').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes_table_four').insert([
        {title: 'title 1', textBody: 'content 1'},
        {title: 'title 2', textBody: 'content 2'},
        {title: 'title 3', textBody: 'content 3'}
      ]);
    });
};
