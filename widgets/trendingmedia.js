WidgetMetadata = {
  id: "vokdn.trendingmedia",
  title: "Media Data",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "Get trending movies, TV shows and variety shows data",
  author: "vokdn",
  site: "https://github.com/Corpse00/ForwardWidgets",
  modules: [
    {
      id: "trendingMovies",
      title: "Trending Movies",
      functionName: "trendingMovies",
      params: [
      ],
    },
    {
      id: "latestMovies",
      title: "Latest Movies",
      functionName: "latestMovies",
      params: [
      ],
    },
    {
      id: "trendingTV",
      title: "Trending TV Shows",
      functionName: "trendingTV",
      params: [
      ],
    },
    {
      id: "trendingVariety",
      title: "Trending Variety Shows",
      functionName: "trendingVariety",
      params: [
      ],
    },
  ],
};

// Base method to fetch media data
async function fetchMediaData(category) {
  try {
    // First try to get the latest data
    const latestUrl = `https://assets.vvebo.vip/scripts/datas/latest_${category}.json`;

    console.log(`Fetching latest ${category} data:`, latestUrl);
    const response = await Widget.http.get(latestUrl);

    if (response && response.data) {
      console.log(`${category} data fetched successfully (latest_${category}.json)`);
      return response.data;
    }
  } catch (error) {
    console.log(`Failed to get latest_${category}.json, trying by date:`, error.message);
  }

  // If latest.json fails, try by date
  const maxRetries = 7; // Try up to 7 days

  for (let i = 0; i < maxRetries; i++) {
    try {
      // Calculate date, starting from today going backwards
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - i);

      const dateStr = targetDate.getFullYear().toString() +
        (targetDate.getMonth() + 1).toString().padStart(2, '0') +
        targetDate.getDate().toString().padStart(2, '0');

      // Try to get data from OSS
      const dataUrl = `https://assets.vvebo.vip/scripts/datas/trending_${category}_enriched_${dateStr}.json`;

      console.log(`Fetching ${category} data (attempt ${i + 1}):`, dataUrl);
      const response = await Widget.http.get(dataUrl);

      if (response && response.data) {
        console.log(`${category} data fetched successfully, using date: ${dateStr}`);
        return response.data;
      }
    } catch (error) {
      console.log(`Failed to get ${category} data for ${dateStr}:`, error.message);
      // Continue to try next day
    }
  }

  console.error(`All dates failed to fetch ${category} data, returning empty array`);
  return [];
}

// Format media data
function formatMediaData(mediaList) {
  // Filter out invalid data
  const validMediaList = mediaList.filter(media => {
    return media &&
      media.title &&
      media.tmdb_info &&
      media.tmdb_info.id;
  });

  console.log(`Before filter: ${mediaList.length} media items, after filter: ${validMediaList.length} media items`);

  return validMediaList.map(media => {
    const tmdbInfo = media.tmdb_info;

    return {
      id: tmdbInfo?.id || media?.id || Math.random().toString(36),
      type: "tmdb",
      title: media?.title || "",
      originalTitle: tmdbInfo?.originalTitle || media?.original_title || "",
      description: tmdbInfo?.description || media?.summary || "",
      releaseDate: tmdbInfo?.releaseDate || media?.release_date || "",
      backdropPath: tmdbInfo?.backdropPath || "",
      posterPath: tmdbInfo?.posterPath || media?.poster_url || "",
      rating: tmdbInfo?.rating || media?.rating || 0,
      mediaType: tmdbInfo?.mediaType || (media?.is_tv ? "tv" : "movie"),
      genreTitle: tmdbInfo?.genreTitle || (media?.genres ? media.genres.join(", ") : ""),
      tmdbInfo: tmdbInfo,
      year: media?.year || "",
      countries: media?.countries || [],
      directors: media?.directors || [],
      actors: media?.actors || [],
      popularity: tmdbInfo?.popularity || 0,
      voteCount: tmdbInfo?.voteCount || 0,
      isNew: media?.is_new || false,
      playable: media?.playable || false,
      episodeCount: media?.episode_count || "",
    };
  });
}

// Trending Movies
async function trendingMovies(params) {
  const data = await fetchMediaData("trending");
  return formatMediaData(data);
}

// Latest Movies
async function latestMovies(params) {
  const data = await fetchMediaData("latest");
  return formatMediaData(data);
}

// Trending TV Shows
async function trendingTV(params) {
  const data = await fetchMediaData("tv");
  return formatMediaData(data);
}

// Trending Variety Shows
async function trendingVariety(params) {
  const data = await fetchMediaData("variety");
  return formatMediaData(data);
}