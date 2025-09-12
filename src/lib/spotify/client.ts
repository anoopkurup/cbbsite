import SpotifyWebApi from 'spotify-web-api-node';

// Global variables to store the authenticated client and token info
let spotifyApi: SpotifyWebApi | null = null;
let accessToken: string | null = null;
let tokenExpirationTime: number | null = null;

/**
 * Authenticate with Spotify API using Client Credentials flow
 */
export async function authenticate(): Promise<SpotifyWebApi> {
  try {
    // Check if we have a valid token that hasn't expired
    const now = Date.now();
    if (spotifyApi && accessToken && tokenExpirationTime && now < tokenExpirationTime) {
      return spotifyApi;
    }

    // Create a new Spotify API client
    spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    // Get a new access token
    const data = await spotifyApi.clientCredentialsGrant();
    accessToken = data.body['access_token'];
    tokenExpirationTime = Date.now() + (data.body['expires_in'] * 1000);
    
    // Set the access token on the Spotify API client
    spotifyApi.setAccessToken(accessToken);
    
    console.log('Successfully authenticated with Spotify API');
    return spotifyApi;
  } catch (error) {
    console.error('Error authenticating with Spotify API:', error);
    throw error;
  }
}

/**
 * Get the Spotify show ID from the podcast URL
 * @returns The Spotify show ID
 */
export function getShowId(): string {
  // Extract show ID from the Spotify URL in hosts.ts
  // Format: https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3
  const showUrl = 'https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3';
  const showId = showUrl.split('/').pop() || '';
  return showId;
}

// Export a function to get the authenticated client
export async function getSpotifyApi(): Promise<SpotifyWebApi> {
  if (!spotifyApi) {
    return await authenticate();
  }
  return spotifyApi;
}