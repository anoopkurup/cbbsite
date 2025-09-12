import { authenticate, getShowId } from './client';
import { Episode } from '@/types';
import SpotifyWebApi from 'spotify-web-api-node';

/**
 * Fetch all episodes for a show from Spotify
 * @returns Array of episodes
 */
export async function getSpotifyEpisodes(): Promise<Episode[]> {
  try {
    // Authenticate with Spotify API
    const spotifyApi = await authenticate();
    
    // Get the show ID
    const showId = getShowId();
    
    if (!showId) {
      throw new Error('Spotify show ID not found');
    }
    
    // Fetch show details
    const showResponse = await spotifyApi.getShow(showId);
    const show = showResponse.body;
    
    // Fetch episodes (Spotify API returns max 50 episodes per request)
    let allEpisodes: SpotifyApi.EpisodeObjectSimplified[] = [];
    let offset = 0;
    const limit = 50;
    
    while (true) {
      const episodesResponse = await spotifyApi.getShowEpisodes(showId, {
        limit,
        offset
      });
      
      const episodes = episodesResponse.body.items;
      allEpisodes = [...allEpisodes, ...episodes];
      
      // Check if we've fetched all episodes
      if (episodes.length < limit) {
        break;
      }
      
      offset += limit;
    }
    
    // Map Spotify episodes to our Episode type
    const mappedEpisodes: Episode[] = allEpisodes.map((spotifyEpisode, index) => {
      // Extract episode number from description or use index
      let episodeNumber = allEpisodes.length - index; // Newest first
      
      // Try to extract episode number from description
      const episodeNumberMatch = spotifyEpisode.description?.match(/Episode\s+(\d+)/i);
      if (episodeNumberMatch && episodeNumberMatch[1]) {
        episodeNumber = parseInt(episodeNumberMatch[1], 10);
      }
      
      // Extract topics from description
      const topics = extractTopicsFromDescription(spotifyEpisode.description || '');
      
      // Format duration
      const durationMs = spotifyEpisode.duration_ms;
      const minutes = Math.floor(durationMs / 60000);
      const seconds = Math.floor((durationMs % 60000) / 1000);
      const duration = `${minutes} min ${seconds} sec`;
      
      return {
        id: spotifyEpisode.id,
        title: spotifyEpisode.name,
        description: spotifyEpisode.description || '',
        publishDate: spotifyEpisode.release_date,
        duration,
        episodeNumber,
        topics,
        spotifyUrl: spotifyEpisode.external_urls.spotify,
        featured: index < 3, // Mark first 3 episodes as featured
        slug: createSlug(spotifyEpisode.name),
        image: spotifyEpisode.images[0]?.url,
        thumbnail: spotifyEpisode.images[0]?.url
      };
    });
    
    // Sort by episode number descending (newest first)
    return mappedEpisodes.sort((a, b) => b.episodeNumber - a.episodeNumber);
    
  } catch (error) {
    console.error('Error fetching episodes from Spotify:', error);
    throw error;
  }
}

/**
 * Extract topics from episode description
 * @param description Episode description
 * @returns Array of topics
 */
function extractTopicsFromDescription(description: string): string[] {
  const commonTopics = [
    'Marketing Strategy',
    'LinkedIn Timeline Talk',
    'AI and Business',
    'Consumer Psychology',
    'Digital Trends',
    'Brand Analysis',
    'Startup Culture',
    'Social Media',
    'Personal Branding',
    'Marketing Psychology'
  ];

  const foundTopics: string[] = [];
  const lowerDescription = description.toLowerCase();

  commonTopics.forEach(topic => {
    if (lowerDescription.includes(topic.toLowerCase()) || 
        lowerDescription.includes(topic.split(' ')[0].toLowerCase())) {
      foundTopics.push(topic);
    }
  });

  // Default topics if none found
  if (foundTopics.length === 0) {
    foundTopics.push('Marketing', 'Business Insights');
  }

  return foundTopics.slice(0, 4); // Limit to 4 topics
}

/**
 * Create a URL-friendly slug from a title
 * @param title Episode title
 * @returns URL slug
 */
function createSlug(title: string): string {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Get a single episode by slug
 * @param slug Episode slug
 * @returns Episode or undefined
 */
export async function getSpotifyEpisodeBySlug(slug: string): Promise<Episode | undefined> {
  const episodes = await getSpotifyEpisodes();
  return episodes.find(episode => episode.slug === slug);
}

/**
 * Get featured episodes
 * @returns Array of featured episodes
 */
export async function getSpotifyFeaturedEpisodes(): Promise<Episode[]> {
  const episodes = await getSpotifyEpisodes();
  return episodes.filter(episode => episode.featured);
}

/**
 * Get the latest episode
 * @returns Latest episode or undefined
 */
export async function getSpotifyLatestEpisode(): Promise<Episode | undefined> {
  const episodes = await getSpotifyEpisodes();
  return episodes[0]; // First episode is the latest due to sorting
}

/**
 * Get episodes by topic
 * @param topic Topic to filter by
 * @returns Array of episodes with the specified topic
 */
export async function getSpotifyEpisodesByTopic(topic: string): Promise<Episode[]> {
  const episodes = await getSpotifyEpisodes();
  return episodes.filter(episode => 
    episode.topics.some(episodeTopic => 
      episodeTopic.toLowerCase().includes(topic.toLowerCase())
    )
  );
}