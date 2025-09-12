import { getEpisodes } from '@/lib/episodesService'
import EpisodesClient from '@/components/EpisodesClient'

export default async function EpisodesPage() {
  const episodes = await getEpisodes()

  return <EpisodesClient episodes={episodes} />
}