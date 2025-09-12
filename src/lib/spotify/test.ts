// Test Spotify API integration
import { getEpisodes } from '@/lib/episodesService';

async function testSpotifyIntegration() {
  try {
    console.log('Testing Spotify API integration...');
    
    // Fetch episodes from Spotify
    const episodes = await getEpisodes();
    
    console.log(`Successfully fetched ${episodes.length} episodes from Spotify`);
    
    // Log the first episode as an example
    if (episodes.length > 0) {
      console.log('First episode:', {
        title: episodes[0].title,
        description: episodes[0].description.substring(0, 100) + '...',
        publishDate: episodes[0].publishDate,
        duration: episodes[0].duration,
        spotifyUrl: episodes[0].spotifyUrl
      });
    }
    
    console.log('Spotify API integration test completed successfully!');
  } catch (error) {
    console.error('Error testing Spotify API integration:', error);
  }
}

// Run the test
testSpotifyIntegration();