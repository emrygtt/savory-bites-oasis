
import { useEffect } from "react";
import { initializeContent } from "@/utils/contentManager";

export const useContentInit = () => {
  useEffect(() => {
    // Initialize content asynchronously
    const initialize = async () => {
      await initializeContent();
    };
    
    initialize();
  }, []);
};
