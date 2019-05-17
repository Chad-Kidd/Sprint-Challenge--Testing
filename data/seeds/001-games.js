exports.seed = function(knex, Promise) {
  return knex('games')
    .truncate()
    .then(function () {
      return knex('games').insert([
        {title: 'Pacman', genre: 'Arcade', releaseYear: 1980},
        {title: 'Mario Kart', genre: 'Multi-player racing video game', releaseYear: 1992},
        {title: 'Mortal Kombat', genre: 'Fighting Game', releaseYear: 1992},
        {title: 'X-Men', genre: 'Arcade', releaseYear: 1992}
      ]);
    });
};
