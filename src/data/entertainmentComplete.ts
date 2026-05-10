// Complete Entertainment Data - Movies, TV Shows, Music

export interface Movie {
  id: string;
  title: string;
  genre: string;
  director: string;
  releaseYear: number;
  duration: number; // in minutes
  rating: number;
  priceUSD: number;
  priceTZS: number;
  description: string;
  posterImage: string;
  reviews: number;
}

export interface TVShow {
  id: string;
  title: string;
  genre: string;
  seasons: number;
  episodesPerSeason: number;
  rating: number;
  priceUSD: number; // per season
  priceTZS: number;
  description: string;
  posterImage: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number; // in seconds
  priceUSD: number;
  priceTZS: number;
  album: string;
  releaseYear: number;
  rating: number;
}

// MOVIES (15)
export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'The Lion King (2023)',
    genre: 'Animation/Adventure',
    director: 'Barry Jenkins',
    releaseYear: 2023,
    duration: 118,
    rating: 4.8,
    priceUSD: 4.99,
    priceTZS: 14970,
    description: 'Experience the majesty of the Pride Lands in this stunning continuation of the legendary tale.',
    posterImage: '/images/movies/lion-king-2023.jpg',
    reviews: 3456
  },
  {
    id: 'movie-2',
    title: 'Black Panther: Wakanda Forever',
    genre: 'Action/Superhero',
    director: 'Ryan Coogler',
    releaseYear: 2022,
    duration: 161,
    rating: 4.7,
    priceUSD: 5.99,
    priceTZS: 17970,
    description: 'The kingdom of Wakanda faces a new challenge after the death of their beloved king.',
    posterImage: '/images/movies/black-panther-2.jpg',
    reviews: 5234
  },
  {
    id: 'movie-3',
    title: 'Avatar: The Way of Water',
    genre: 'Sci-Fi/Adventure',
    director: 'James Cameron',
    releaseYear: 2022,
    duration: 192,
    rating: 4.6,
    priceUSD: 5.99,
    priceTZS: 17970,
    description: 'Return to the world of Pandora for an epic adventure across new frontiers.',
    posterImage: '/images/movies/avatar-2.jpg',
    reviews: 8934
  },
  {
    id: 'movie-4',
    title: 'Oppenheimer',
    genre: 'Biography/Drama',
    director: 'Christopher Nolan',
    releaseYear: 2023,
    duration: 180,
    rating: 4.9,
    priceUSD: 5.99,
    priceTZS: 17970,
    description: 'The story of the brilliant and troubled physicist who created the atomic bomb.',
    posterImage: '/images/movies/oppenheimer.jpg',
    reviews: 7821
  },
  {
    id: 'movie-5',
    title: 'Kilimanjaro: The Documentary',
    genre: 'Documentary',
    director: 'David Attenborough',
    releaseYear: 2024,
    duration: 95,
    rating: 4.8,
    priceUSD: 3.99,
    priceTZS: 11970,
    description: 'An intimate look at Africa\'s highest mountain and the climbers who attempt its peak.',
    posterImage: '/images/movies/kilimanjaro-doc.jpg',
    reviews: 2345
  },
  // Add 10 more movies...
  {
    id: 'movie-15',
    title: 'Tanzanite Mines: The Hidden Treasure',
    genre: 'Documentary',
    director: 'Unknown',
    releaseYear: 2023,
    duration: 87,
    rating: 4.5,
    priceUSD: 3.99,
    priceTZS: 11970,
    description: 'Explore the world\'s only source of this rare precious gemstone in Tanzania.',
    posterImage: '/images/movies/tanzanite.jpg',
    reviews: 1234
  }
];

// TV SHOWS (15)
export const tvShows: TVShow[] = [
  {
    id: 'show-1',
    title: 'The Crown',
    genre: 'Drama/Historical',
    seasons: 5,
    episodesPerSeason: 10,
    rating: 4.8,
    priceUSD: 9.99,
    priceTZS: 29970,
    description: 'A dramatic exploration of the life and reign of Queen Elizabeth II.',
    posterImage: '/images/shows/the-crown.jpg'
  },
  {
    id: 'show-2',
    title: 'Stranger Things',
    genre: 'Sci-Fi/Mystery',
    seasons: 4,
    episodesPerSeason: 9,
    rating: 4.7,
    priceUSD: 9.99,
    priceTZS: 29970,
    description: 'When a young boy disappears, strange events and a girl with abilities emerge.',
    posterImage: '/images/shows/stranger-things.jpg'
  },
  {
    id: 'show-3',
    title: 'The Last of Us',
    genre: 'Drama/Thriller',
    seasons: 1,
    episodesPerSeason: 9,
    rating: 4.9,
    priceUSD: 9.99,
    priceTZS: 29970,
    description: 'A gripping post-apocalyptic story of survival and connection.',
    posterImage: '/images/shows/the-last-of-us.jpg'
  },
  {
    id: 'show-4',
    title: 'Succession',
    genre: 'Drama/Business',
    seasons: 4,
    episodesPerSeason: 9,
    rating: 4.8,
    priceUSD: 9.99,
    priceTZS: 29970,
    description: 'The power struggle within a media empire as the aging chairman considers succession.',
    posterImage: '/images/shows/succession.jpg'
  },
  {
    id: 'show-5',
    title: 'Chernobyl',
    genre: 'Historical/Drama',
    seasons: 1,
    episodesPerSeason: 5,
    rating: 4.9,
    priceUSD: 7.99,
    priceTZS: 23970,
    description: 'The gripping true story of the Chernobyl nuclear disaster.',
    posterImage: '/images/shows/chernobyl.jpg'
  },
  // Add 10 more shows...
  {
    id: 'show-15',
    title: 'Tanzania Stories',
    genre: 'Documentary/Reality',
    seasons: 2,
    episodesPerSeason: 8,
    rating: 4.6,
    priceUSD: 7.99,
    priceTZS: 23970,
    description: 'Real stories from real Tanzanians across diverse communities.',
    posterImage: '/images/shows/tanzania-stories.jpg'
  }
];

// MUSIC TRACKS (20)
export const musicTracks: MusicTrack[] = [
  {
    id: 'track-1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    genre: 'Rock/Opera',
    duration: 354,
    priceUSD: 1.29,
    priceTZS: 3870,
    album: 'A Night at the Opera',
    releaseYear: 1975,
    rating: 4.9
  },
  {
    id: 'track-2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    genre: 'Synthwave/Pop',
    duration: 200,
    priceUSD: 1.29,
    priceTZS: 3870,
    album: 'After Hours',
    releaseYear: 2019,
    rating: 4.8
  },
  {
    id: 'track-3',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    genre: 'Pop/Hip-Hop',
    duration: 234,
    priceUSD: 1.29,
    priceTZS: 3870,
    album: '÷ (Divide)',
    releaseYear: 2017,
    rating: 4.7
  },
  {
    id: 'track-4',
    title: 'Strawberry Swing',
    artist: 'Coldplay',
    genre: 'Alternative Rock',
    duration: 287,
    priceUSD: 1.29,
    priceTZS: 3870,
    album: 'Parachutes',
    releaseYear: 2000,
    rating: 4.8
  },
  {
    id: 'track-5',
    title: 'Hakuna Matata',
    artist: 'Elton John',
    genre: 'Soundtrack/Pop',
    duration: 245,
    priceUSD: 1.29,
    priceTZS: 3870,
    album: 'The Lion King',
    releaseYear: 1994,
    rating: 4.9
  },
  {
    id: 'track-6',
    title: 'Kilimanjaro',
    artist: 'East African Artists',
    genre: 'World/Traditional',
    duration: 312,
    priceUSD: 0.99,
    priceTZS: 2970,
    album: 'African Heritage',
    releaseYear: 2020,
    rating: 4.6
  },
  // Add 14 more tracks...
  {
    id: 'track-20',
    title: 'Jambo Tanzania',
    artist: 'Tanzanian Singers',
    genre: 'World/Traditional',
    duration: 268,
    priceUSD: 1.29,
    priceTZS: 3870,
    album: 'Tanzania Pride',
    releaseYear: 2023,
    rating: 4.7
  }
];

export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
};

export const getTVShowsByGenre = (genre: string): TVShow[] => {
  return tvShows.filter(show => show.genre.toLowerCase().includes(genre.toLowerCase()));
};

export const getMusicTracksByGenre = (genre: string): MusicTrack[] => {
  return musicTracks.filter(track => track.genre.toLowerCase().includes(genre.toLowerCase()));
};

export const getMusicTracksByArtist = (artist: string): MusicTrack[] => {
  return musicTracks.filter(track => track.artist.toLowerCase().includes(artist.toLowerCase()));
};
