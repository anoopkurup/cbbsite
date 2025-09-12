// Test to check if episodes are being fetched correctly
import { getEpisodes } from '@/lib/episodesService';

async function testEpisodes() {
  try {
    console.log('Testing episode fetching...');
    const episodes = await getEpisodes();
    console.log(`Fetched ${episodes.length} episodes`);
    console.log('First episode:', episodes[0]);
  } catch (error) {
    console.error('Error fetching episodes:', error);
  }
}

testEpisodes();