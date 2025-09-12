import { Episode } from '@/types';
import { 
  getSpotifyEpisodes, 
  getSpotifyEpisodeBySlug, 
  getSpotifyFeaturedEpisodes, 
  getSpotifyLatestEpisode, 
  getSpotifyEpisodesByTopic 
} from './spotify/service';

// Cache for episodes to avoid repeated API calls
let episodesCache: Episode[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

/**
 * Get all episodes from Spotify with caching
 * @returns Array of episodes
 */
export async function getEpisodes(): Promise<Episode[]> {
  const now = Date.now();
  
  // Return cached episodes if cache is still valid
  if (episodesCache && now - lastFetchTime < CACHE_DURATION) {
    return episodesCache;
  }

  try {
    // Fetch episodes from Spotify
    const episodes = await getSpotifyEpisodes();
    
    // Update cache
    episodesCache = episodes;
    lastFetchTime = now;
    
    return episodes;
  } catch (error) {
    console.error('Error fetching episodes from Spotify:', error);
    
    // If we have cached episodes, return them
    if (episodesCache) {
      return episodesCache;
    }
    
    // Final fallback to static data
    const { episodes: staticEpisodes } = await import('@/data/episodes');
    return staticEpisodes;
  }
}

/**
 * Get a single episode by slug
 * @param slug Episode slug
 * @returns Episode or undefined
 */
export async function getEpisodeBySlug(slug: string): Promise<Episode | undefined> {
  // Try to get from Spotify first
  try {
    return await getSpotifyEpisodeBySlug(slug);
  } catch (error) {
    console.error('Error fetching episode from Spotify:', error);
    // Fallback to static data
    const { episodes } = await import('@/data/episodes');
    return episodes.find(episode => episode.slug === slug);
  }
}

/**
 * Get featured episodes
 * @returns Array of featured episodes
 */
export async function getFeaturedEpisodes(): Promise<Episode[]> {
  try {
    return await getSpotifyFeaturedEpisodes();
  } catch (error) {
    console.error('Error fetching featured episodes from Spotify:', error);
    // Fallback to static data
    const { episodes } = await import('@/data/episodes');
    return episodes.filter(episode => episode.featured);
  }
}

/**
 * Get the latest episode
 * @returns Latest episode or undefined
 */
export async function getLatestEpisode(): Promise<Episode | undefined> {
  try {
    return await getSpotifyLatestEpisode();
  } catch (error) {
    console.error('Error fetching latest episode from Spotify:', error);
    // Fallback to static data
    const { episodes } = await import('@/data/episodes');
    return episodes[0]; // First episode is the latest due to sorting
  }
}

/**
 * Get episodes by topic
 * @param topic Topic to filter by
 * @returns Array of episodes with the specified topic
 */
export async function getEpisodesByTopic(topic: string): Promise<Episode[]> {
  try {
    return await getSpotifyEpisodesByTopic(topic);
  } catch (error) {
    console.error('Error fetching episodes by topic from Spotify:', error);
    // Fallback to static data
    const { episodes } = await import('@/data/episodes');
    return episodes.filter(episode => 
      episode.topics.some(episodeTopic => 
        episodeTopic.toLowerCase().includes(topic.toLowerCase())
      )
    );
  }
}

/**
 * Force refresh the cache
 */
export function refreshEpisodesCache(): void {
  episodesCache = null;
  lastFetchTime = 0;
}