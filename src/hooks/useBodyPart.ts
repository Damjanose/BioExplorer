import { useState, useEffect } from 'react';
import type { BodyPart, WikipediaSummary, BodyPartData } from '../types/biology';
import { getBodyPartById } from '../api/bodyApi';
import { fetchBodyPartWikipedia } from '../api/wikipedia';

/**
 * Custom hook to fetch and manage body part data
 * Combines local data with Wikipedia API data
 */
export function useBodyPart(bodyPartId: string): BodyPartData {
  const [wikipedia, setWikipedia] = useState<WikipediaSummary | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  // Get local body part data
  const localData = getBodyPartById(bodyPartId);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      if (!bodyPartId) return;

      setIsLoading(true);
      setError(undefined);

      try {
        const wikiData = await fetchBodyPartWikipedia(bodyPartId);
        if (isMounted) {
          setWikipedia(wikiData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch Wikipedia data');
          console.warn('Wikipedia fetch failed, using local data only:', err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [bodyPartId]);

  // Create default body part info if not found
  const defaultInfo: BodyPart = {
    id: bodyPartId,
    name: bodyPartId.charAt(0).toUpperCase() + bodyPartId.slice(1),
    system: 'Unknown',
    description: 'Information not available',
    function: 'Information not available',
    funFacts: [],
  };

  return {
    info: localData || defaultInfo,
    wikipedia,
    isLoading,
    error,
  };
}
