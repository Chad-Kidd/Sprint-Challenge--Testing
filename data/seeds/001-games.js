exports.seed = function(knex, Promise) {
  return knex('Games')
    .truncate()
    .then(function () {
      return knex('Games').insert([
        {title: 'Pacman', genre: 'Arcade', releaseYear: 1980},
        {title: 'Mario Kart', genre: 'Multi-player racing video game', releaseYear: 1992},
        {title: 'Mortal Kombat', genre: 'Fighting Game', releaseYear: 1992},
        {title: 'X-Men', genre: 'Arcade', releaseYear: 1992}
      ]);
    });
};
