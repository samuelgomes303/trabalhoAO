// movieModel.js
import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    fresh: Number,
    rotten: Number,
    lastUpdated: Date,
  },
  num_mflix_comments: Number,
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
