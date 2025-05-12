
import { useEffect } from "react";
import { initializeContent } from "@/utils/contentManager";

export const useContentInit = () => {
  useEffect(() => {
    // Initialize content asynchronously
    const initialize = async () => {
      try {
        await initializeContent();
      } catch (error) {
        console.error("Error initializing content:", error);
      }
    };
    
    initialize();
  }, []);
};
