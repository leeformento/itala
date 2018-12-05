
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes_table_three').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes_table_three').insert([
        {note_title: 'title 1', textBody: 'content 1'},
        {note_title: 'title 2', textBody: 'content 2'},
        {note_title: 'title 3', textBody: 'content 3'}
      ]);
    });
};
