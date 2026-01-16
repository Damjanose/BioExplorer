import type { WikipediaSummary } from '../types/biology';

const WIKIPEDIA_API_BASE = 'https://en.wikipedia.org/api/rest_v1';

/**
 * Fetches a summary of a Wikipedia article for a given topic
 * @param topic - The topic to search for (e.g., "Heart", "Human brain")
 * @returns Promise with Wikipedia summary data
 */
export async function fetchWikipediaSummary(topic: string): Promise<WikipediaSummary> {
  // Format the topic for Wikipedia API (replace spaces with underscores)
  const formattedTopic = topic.replace(/\s+/g, '_');
  
  const response = await fetch(
    `${WIKIPEDIA_API_BASE}/page/summary/${encodeURIComponent(formattedTopic)}`,
    {
      headers: {
        'Accept': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Wikipedia API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  
  return {
    title: data.title,
    extract: data.extract,
    thumbnail: data.thumbnail,
    content_urls: data.content_urls,
  };
}

/**
 * Maps body part IDs to Wikipedia article titles
 */
export const bodyPartToWikipediaTitle: Record<string, string> = {
  heart: 'Heart',
  brain: 'Human_brain',
  lungs: 'Lung',
  liver: 'Liver',
  stomach: 'Stomach',
  kidneys: 'Kidney',
  intestines: 'Human_digestive_system',
  skeleton: 'Human_skeleton',
};

/**
 * Fetches Wikipedia data for a specific body part
 * @param bodyPartId - The ID of the body part (e.g., "heart", "brain")
 * @returns Promise with Wikipedia summary data
 */
export async function fetchBodyPartWikipedia(bodyPartId: string): Promise<WikipediaSummary> {
  const wikipediaTitle = bodyPartToWikipediaTitle[bodyPartId] || bodyPartId;
  return fetchWikipediaSummary(wikipediaTitle);
}
