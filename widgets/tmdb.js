WidgetMetadata = {
  id: "vokdn.tmdb",
  title: "TMDB",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Get TMDB chart data",
  author: "vokdn",
  site: "https://github.com/Corpse00/ForwardWidgets",
  modules: [
    {
      id: "nowPlaying",
      title: "Now Playing",
      functionName: "nowPlaying",
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "trending",
      title: "Trending",
      functionName: "trending",
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "time_window",
          title: "Time Window",
          type: "enumeration",
          enumOptions: [
            {
              title: "Today",
              value: "day",
            },
            {
              title: "This Week",
              value: "week",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "popular",
      title: "Popular",
      functionName: "popular",
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page",
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "topRated",
      title: "Top Rated",
      functionName: "topRated",
      params: [
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          enumOptions: [
            {
              title: "All",
              value: "all",
            },
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "categories",
      title: "Categories",
      functionName: "categories",
      params: [
        {
          name: "with_genres",
          title: "Category",
          type: "enumeration",
          enumOptions: [
            {
              title: "Family",
              value: "10751",
            },
            {
              title: "Animation",
              value: "16",
            },
            {
              title: "Comedy",
              value: "35",
            },
            {
              title: "Crime",
              value: "80",
            },
            {
              title: "Documentary",
              value: "99",
            },
            {
              title: "Drama",
              value: "18",
            },
            {
              title: "Mystery",
              value: "9648",
            },
            {
              title: "Western",
              value: "37",
            },
            {
              title: "Kids",
              value: "10762",
            },
            {
              title: "Sci-Fi",
              value: "878",
            },
            {
              title: "Action",
              value: "28",
            },
            {
              title: "Thriller",
              value: "53",
            },
            {
              title: "Reality",
              value: "10764",
            },
          ],
        },
        {
          name: "type",
          title: "Type",
          type: "enumeration",
          belongTo: {
            paramName: "with_genres",
            value: ["16", "35", "80", "99", "18", "878", "9648", "37", "10751"],
          },
          enumOptions: [
            {
              title: "Movies",
              value: "movie",
            },
            {
              title: "TV Shows",
              value: "tv",
            },
          ],
        },
        {
          name: "with_origin_country",
          title: "Country",
          type: "input",
          belongTo: {
            paramName: "with_genres",
            value: ["10764"],
          },
          value: "US",
          placeholders: [
            {
              title: "India",
              value: "IN",
            },
            {
              title: "USA",
              value: "US",
            },
            {
              title: "UK",
              value: "GB",
            },
            {
              title: "Japan",
              value: "JP",
            },
            {
              title: "Korea",
              value: "KR",
            },
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "networks",
      title: "Networks",
      functionName: "networks",
      params: [
        {
          name: "with_networks",
          title: "Network",
          type: "input",
          value: "213",
          placeholders: [
            {
              title: "Netflix",
              value: "213",
            },
            {
              title: "Disney+",
              value: "2739",
            },
            {
              title: "Apple TV+",
              value: "2552",
            },
            {
              title: "HBO Max",
              value: "3186",
            },
            {
              title: "Hulu",
              value: "453",
            },
            {
              title: "Prime Video",
              value: "1024",
            },
            {
              title: "Paramount+",
              value: "4330",
            }
          ],
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    },
    {
      id: "companies",
      title: "Production Companies",
      functionName: "companies",
      params: [
        {
          name: "with_companies",
          title: "Company",
          type: "enumeration",
          enumOptions: [
            {
              title: "Disney",
              value: "2",
            },
            {
              title: "Warner Bros.",
              value: "174",
            },
            {
              title: "Columbia Pictures",
              value: "5",
            },
            {
              title: "Sony Pictures",
              value: "34",
            },
            {
              title: "Universal Pictures",
              value: "33",
            },
            {
              title: "Paramount Pictures",
              value: "4",
            },
            {
              title: "20th Century Studios",
              value: "25",
            },
            {
              title: "Lionsgate",
              value: "1632",
            },
            {
              title: "Marvel Studios",
              value: "420",
            },
            {
              title: "DC Entertainment",
              value: "9993",
            },
          ]
        },
        {
          name: "page",
          title: "Page",
          type: "page"
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ]
    },
    {
      id: "list",
      title: "Lists",
      functionName: "list",
      params: [
        {
          name: "url",
          title: "List URL",
          type: "input",
          description: "TMDB List URL",
          placeholders: [
            {
              title: "Oscar Best Picture",
              value: "https://www.themoviedb.org/list/8512095-2025-oscar-nominations-for-best-picture-97th-academy-awards",
            }
          ],
        }
      ],
    },
    {
      id: "collections",
      title: "Collections",
      functionName: "collections",
      params: [
        {
          name: "collection_id",
          title: "Collection",
          type: "enumeration",
          enumOptions: [
            { title: "A Quiet Place", value: "521226" },
            { title: "Alien", value: "8091" },
            { title: "Annabelle", value: "402074" },
            { title: "Ant-Man", value: "422834" },
            { title: "Aquaman", value: "573693" },
            { title: "Austin Powers", value: "1006" },
            { title: "Avatar", value: "87096" },
            { title: "Avengers", value: "86311" },
            { title: "Back to the Future", value: "264" },
            { title: "Bad Boys", value: "14890" },
            { title: "Batman", value: "263,120794" },
            { title: "Beverly Hills Cop", value: "85861" },
            { title: "Black Panther", value: "529892" },
            { title: "Blade", value: "735" },
            { title: "Blade Runner", value: "422837" },
            { title: "Bourne", value: "31562" },
            { title: "Captain America", value: "131295" },
            { title: "Cars", value: "87118" },
            { title: "Child's Play", value: "10455" },
            { title: "Deadpool", value: "448150" },
            { title: "Despicable Me & Minions", value: "86066,544669" },
            { title: "Die Hard", value: "1570" },
            { title: "Divergent", value: "283579" },
            { title: "Doctor Strange", value: "618529" },
            { title: "Dune", value: "726871" },
            { title: "Evil Dead", value: "1960" },
            { title: "Expendables", value: "126125" },
            { title: "Fast & Furious", value: "9485" },
            { title: "Fifty Shades", value: "344830" },
            { title: "Final Destination", value: "8864" },
            { title: "Finding Nemo", value: "137697" },
            { title: "Friday the 13th", value: "9735" },
            { title: "Frozen", value: "386382" },
            { title: "G.I. Joe", value: "135468" },
            { title: "Ghostbusters", value: "2980" },
            { title: "Godfather", value: "230" },
            { title: "Guardians of the Galaxy", value: "284433" },
            { title: "Halloween", value: "91361" },
            { title: "Hangover", value: "86119" },
            { title: "Home Alone", value: "9888" },
            { title: "Hotel Transylvania", value: "185103" },
            { title: "How to Train Your Dragon", value: "89137" },
            { title: "Hunger Games", value: "131635" },
            { title: "Ice Age", value: "8354" },
            { title: "Incredibles", value: "468222" },
            { title: "Indiana Jones", value: "84" },
            { title: "Insidious", value: "228446" },
            { title: "Iron Man", value: "131292" },
            { title: "IT", value: "477962" },
            { title: "Jack Reacher", value: "403374" },
            { title: "Jack Ryan", value: "192492" },
            { title: "Jackass", value: "17178" },
            { title: "James Bond", value: "645" },
            { title: "Jaws", value: "2366" },
            { title: "John Wick", value: "404609" },
            { title: "Joker", value: "987044" },
            { title: "Jumanji", value: "495527" },
            { title: "Jurassic Park", value: "328" },
            { title: "Karate Kid", value: "8580" },
            { title: "Kingsman", value: "391860" },
            { title: "Knives Out", value: "722971" },
            { title: "Kung Fu Panda", value: "77816" },
            { title: "Lethal Weapon", value: "945" },
            { title: "Lilo & Stitch", value: "97461" },
            { title: "Mad Max", value: "8945" },
            { title: "Madagascar", value: "14740" },
            { title: "Matrix", value: "2344" },
            { title: "Maze Runner", value: "295130" },
            { title: "Men in Black", value: "86055" },
            { title: "Middle-earth", value: "119,121938" },
            { title: "Mission: Impossible", value: "87359" },
            { title: "Moana", value: "1241984" },
            { title: "Monsters, Inc.", value: "137696" },
            { title: "MonsterVerse", value: "535313,1539140" },
            { title: "Mummy", value: "1733" },
            { title: "Narnia", value: "420" },
            { title: "National Treasure", value: "52984" },
            { title: "Night at the Museum", value: "85943" },
            { title: "Nightmare on Elm Street", value: "8581" },
            { title: "Ocean's", value: "304" },
            { title: "Omen", value: "10919" },
            { title: "Pacific Rim", value: "363369" },
            { title: "Paddington", value: "488924" },
            { title: "Paranormal Activity", value: "41437" },
            { title: "Percy Jackson", value: "179919" },
            { title: "Pirates of the Caribbean", value: "295" },
            { title: "Pitch Perfect", value: "306031" },
            { title: "Planet of the Apes", value: "173710" },
            { title: "Purge", value: "256322" },
            { title: "Puss in Boots", value: "94602" },
            { title: "Rambo", value: "5039" },
            { title: "Resident Evil", value: "17255" },
            { title: "Riddick", value: "2794" },
            { title: "Rocky & Creed", value: "1575,553717" },
            { title: "Rush Hour", value: "90863" },
            { title: "Saw", value: "656" },
            { title: "Scream", value: "2602" },
            { title: "Shazam", value: "724848" },
            { title: "Shrek", value: "2150" },
            { title: "Sonic the Hedgehog", value: "720879" },
            { title: "Spider-Man", value: "556,125574,531241,573436" },
            { title: "Star Trek", value: "151,115575,115570" },
            { title: "Star Wars", value: "10" },
            { title: "Superman", value: "8537" },
            { title: "Taken", value: "135483" },
            { title: "Teenage Mutant Ninja Turtles", value: "1582" },
            { title: "Terminator", value: "528" },
            { title: "The Conjuring", value: "313086" },
            { title: "The Equalizer", value: "523855" },
            { title: "The Exorcist", value: "12263" },
            { title: "Thor", value: "131296" },
            { title: "Top Gun", value: "531330" },
            { title: "Toy Story", value: "10194" },
            { title: "Transformers", value: "8650" },
            { title: "TRON", value: "63043" },
            { title: "Twilight", value: "33514" },
            { title: "Underworld", value: "2326" },
            { title: "Venom", value: "558216" },
            { title: "Wizarding World", value: "1241,435259" },
            { title: "Wolverine", value: "453993" },
            { title: "Wonder Woman", value: "468552" },
            { title: "Wreck-It Ralph", value: "404825" },
            { title: "X-Men", value: "748" },
            { title: "xXx", value: "52785" },
          ],
        },
        {
          name: "language",
          title: "Language",
          type: "language",
          value: "en-US",
        },
      ],
    }
  ],
};

// Base method to fetch TMDB data
async function fetchData(api, params, forceMediaType) {
  try {
    const response = await Widget.tmdb.get(api, { params: params });

    if (!response) {
      throw new Error("Failed to fetch data");
    }

    console.log(response);
    let data = response.results;

    // If no forceMediaType, filter to only keep movie and tv data
    if (!forceMediaType) {
      data = data.filter((item) => {
        let mediaType = item.media_type;
        if (mediaType == null) {
          if (item.title) {
            mediaType = "movie";
          } else {
            mediaType = "tv";
          }
        }
        return mediaType === "movie" || mediaType === "tv";
      });
    }

    const result = data.map((item) => {
      let mediaType = item.media_type;
      if (forceMediaType) {
        mediaType = forceMediaType;
      } else if (mediaType == null) {
        if (item.title) {
          mediaType = "movie";
        } else {
          mediaType = "tv";
        }
      }
      return {
        id: item.id,
        type: "tmdb",
        title: item.title ?? item.name,
        description: item.overview,
        releaseDate: item.release_date ?? item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: mediaType,
        genreTitle: genreTitleWith(item.genre_ids),
      };
    });

    return result;
  } catch (error) {
    console.error("Failed to call TMDB API:", error);
    throw error;
  }
}

async function nowPlaying(params) {
  const type = params.type;
  if (type === "all") {
    const movieParams = { ...params };
    delete movieParams.type;
    const tvParams = { ...params };
    delete tvParams.type;
    const [movies, tv] = await Promise.all([
      fetchData("movie/now_playing", movieParams, "movie"),
      fetchData("tv/on_the_air", tvParams, "tv"),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  let api = "tv/on_the_air";
  if (type === "movie") {
    api = "movie/now_playing";
  }
  delete params.type;
  return await fetchData(api, params, type);
}

async function trending(params) {
  const type = params.type;
  const timeWindow = params.time_window;
  delete params.time_window;
  delete params.type;

  if (type === "all") {
    const api = `trending/all/${timeWindow}`;
    return await fetchData(api, params);
  }

  const api = `trending/${type}/${timeWindow}`;
  return await fetchData(api, params, type);
}

async function popular(params) {
  const type = params.type;
  if (type === "all") {
    const movieParams = { ...params };
    delete movieParams.type;
    const tvParams = { ...params };
    delete tvParams.type;
    const [movies, tv] = await Promise.all([
      fetchData("movie/popular", movieParams, "movie"),
      fetchData("tv/popular", tvParams, "tv"),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  let api = `movie/popular`;
  if (type === "tv") {
    api = `tv/popular`;
  }
  delete params.type;
  return await fetchData(api, params, type);
}

async function topRated(params) {
  const type = params.type;
  if (type === "all") {
    const movieParams = { ...params };
    delete movieParams.type;
    const tvParams = { ...params };
    delete tvParams.type;
    const [movies, tv] = await Promise.all([
      fetchData("movie/top_rated", movieParams, "movie"),
      fetchData("tv/top_rated", tvParams, "tv"),
    ]);

    const result = [];
    for (let i = 0; i < Math.max(movies.length, tv.length); i++) {
      if (movies[i]) result.push(movies[i]);
      if (tv[i]) result.push(tv[i]);
    }
    return result;
  }

  let api = `movie/top_rated`;
  if (type === "tv") {
    api = `tv/top_rated`;
  }
  delete params.type;
  return await fetchData(api, params, type);
}

async function categories(params) {
  let genreId = params.with_genres;
  let type = params.type;
  const onlyMovieGenreIds = ["28", "53"]; // Action, Thriller
  const onlyTvGenreIds = ["10762", "10764", "10766"]; // Kids, Reality, Soap
  if (genreId == "878" && type == "tv") {
    genreId = "10765";
  }
  if (onlyMovieGenreIds.includes(genreId)) {
    type = "movie";
  }
  if (onlyTvGenreIds.includes(genreId)) {
    type = "tv";
  }
  const api = `discover/${type}`;
  params.with_genres = genreId;
  delete params.type;
  return await fetchData(api, params, type);
}

async function networks(params) {
  const api = `discover/tv`;
  delete params.type;
  return await fetchData(api, params, "tv");
}

async function companies(params) {
  let api = `discover/movie`;
  delete params.type;
  return await fetchData(api, params, "movie");
}

async function collections(params) {
  const collectionIds = params.collection_id.split(",");
  delete params.collection_id;

  // Fetch all collections in parallel
  const responses = await Promise.all(
    collectionIds.map((id) =>
      Widget.tmdb.get(`collection/${id}`, { params: { ...params } })
    )
  );

  // Merge all parts, deduplicate by movie ID
  const seen = new Set();
  const allItems = [];
  for (const res of responses) {
    for (const item of res.parts || []) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        allItems.push(item);
      }
    }
  }

  // Filter out unreleased movies
  const today = new Date().toISOString().split("T")[0];
  const released = allItems.filter((item) => {
    return item.release_date && item.release_date <= today;
  });

  const result = released.map((item) => ({
    id: item.id,
    type: "tmdb",
    title: item.title,
    description: item.overview,
    releaseDate: item.release_date,
    backdropPath: item.backdrop_path,
    posterPath: item.poster_path,
    rating: item.vote_average,
    mediaType: "movie",
    genreTitle: genreTitleWith(item.genre_ids),
  }));

  // Sort chronologically: Old to New (franchise viewing order)
  return result.sort((a, b) => {
    const dateA = a.releaseDate ? new Date(a.releaseDate) : new Date(0);
    const dateB = b.releaseDate ? new Date(b.releaseDate) : new Date(0);
    return dateA - dateB;
  });
}

async function list(params = {}) {
  let url = params.url;

  // append ?view=grid
  if (!url.includes("view=grid")) {
    if (url.includes("?")) {
      url = url + "&view=grid";
    } else {
      url = url + "?view=grid";
    }
  }

  console.log("Requesting list page:", url);
  // Send request to get list page
  const response = await Widget.http.get(url, {
    headers: {
      Referer: `https://www.themoviedb.org/`,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
  });

  if (!response || !response.data) {
    throw new Error("Failed to get list data");
  }

  console.log("List page data length:", response.data.length);
  console.log("Starting parsing");

  // Parse HTML to get document ID
  const $ = Widget.html.load(response.data);
  if (!$ || $ === null) {
    throw new Error("Failed to parse HTML");
  }

  // Get all video items, get element ID array
  const coverElements = $(".block.aspect-poster");

  console.log("items:", coverElements);

  let tmdbIds = [];
  for (const itemId of coverElements) {
    const $item = $(itemId);
    const link = $item.attr("href");
    if (!link) {
      continue;
    }
    const match = link.match(/^\/(movie|tv)\/([^\/-]+)-/)
    const type = match?.[1];
    const id = match?.[2];
    if (id && type) {
      tmdbIds.push({ id: `${type}.${id}`, type: 'tmdb' });
    }
  }

  return tmdbIds;
}

function genreTitleWith(genre_ids) {
  if (!genre_ids) {
    return "";
  }
  const genreDict = [
    { "id": 10759, "name": "Action & Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 10762, "name": "Kids" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10763, "name": "News" },
    { "id": 10764, "name": "Reality" },
    { "id": 10765, "name": "Sci-Fi & Fantasy" },
    { "id": 10766, "name": "Soap" },
    { "id": 10767, "name": "Talk" },
    { "id": 10768, "name": "War & Politics" },
    { "id": 37, "name": "Western" },
    { "id": 28, "name": "Action" },
    { "id": 12, "name": "Adventure" },
    { "id": 16, "name": "Animation" },
    { "id": 35, "name": "Comedy" },
    { "id": 80, "name": "Crime" },
    { "id": 99, "name": "Documentary" },
    { "id": 18, "name": "Drama" },
    { "id": 10751, "name": "Family" },
    { "id": 14, "name": "Fantasy" },
    { "id": 36, "name": "History" },
    { "id": 27, "name": "Horror" },
    { "id": 10402, "name": "Music" },
    { "id": 9648, "name": "Mystery" },
    { "id": 10749, "name": "Romance" },
    { "id": 878, "name": "Sci-Fi" },
    { "id": 10770, "name": "TV Movie" },
    { "id": 53, "name": "Thriller" },
    { "id": 10752, "name": "War" },
    { "id": 37, "name": "Western" },
  ]
  if (genre_ids.length > 2) {
    genre_ids = genre_ids.slice(0, 2);
  }
  const result = genre_ids.map(id => {
    const genre = genreDict.find(genre => genre.id == id);
    if (genre) {
      return genre.name;
    }
    return null;
  }).filter(genre => genre !== null).join(", ");
  return result;
}