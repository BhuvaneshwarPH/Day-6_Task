class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


const moviesArray = [
  new Movie("Baby day out", "WB", "PG"),
  new Movie("James bond", "BCC", "R"),
  new Movie("Bahubali", "Studio3", "PG"),
];


const pgMovies = casinoRoyale.getPG(moviesArray);

pgMovies.forEach((movie) => {
  console.log(
    `Title:-${movie.title}, Studio:-${movie.studio}, Rating:-${movie.rating}`
  );
});
/*output:- Title:-Baby day out, Studio:-WB, Rating:-PG
Title:-Bahubali, Studio:-Studio3, Rating:-PG*/