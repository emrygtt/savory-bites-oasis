
import { useState, useEffect } from 'react';
import { getPageContent, PageContent } from '@/utils/contentManager';

export const usePageContent = (pageKey: string) => {
  const [content, setContent] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        const pageContent = await getPageContent(pageKey);
        setContent(pageContent);
        setError(null);
      } catch (err) {
        console.error(`Error loading content for ${pageKey}:`, err);
        setError(`Failed to load content for ${pageKey}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [pageKey]);

  return { content, isLoading, error };
};

export default usePageContent;
