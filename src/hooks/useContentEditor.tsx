
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { 
  getPageContentSync, 
  updatePageContentSync, 
  PageContent, 
  ContentSection 
} from "@/utils/contentManager";

export const useContentEditor = (pageKey: string) => {
  const [content, setContent] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadContent = () => {
      setIsLoading(true);
      try {
        // Using sync version for now, will switch to async when backend is ready
        const pageContent = getPageContentSync(pageKey);
        setContent(pageContent);
      } catch (error) {
        console.error("Error loading content:", error);
        toast.error("İçerik yüklenirken bir hata oluştu");
        // Create fallback content if needed
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [pageKey]);

  const handleMetaChange = (field: string, value: string) => {
    if (content) {
      setContent({
        ...content,
        [field]: value
      });
    }
  };

  const handleSectionChange = (index: number, field: string, value: string) => {
    if (content) {
      const updatedSections = [...content.sections];
      updatedSections[index] = {
        ...updatedSections[index],
        [field]: value
      };

      setContent({
        ...content,
        sections: updatedSections
      });
    }
  };
  
  const handleImageUploaded = (index: number, imageUrl: string) => {
    if (content) {
      const updatedSections = [...content.sections];
      updatedSections[index] = {
        ...updatedSections[index],
        imageUrl: imageUrl
      };

      setContent({
        ...content,
        sections: updatedSections
      });
    }
  };

  const addNewSection = () => {
    if (content) {
      const newSection: ContentSection = {
        id: `section-${Date.now()}`,
        title: "Yeni Başlık",
        content: "İçerik buraya...",
        imageUrl: ""
      };

      setContent({
        ...content,
        sections: [...content.sections, newSection]
      });
    }
  };

  const removeSection = (index: number) => {
    if (content && content.sections.length > 1) {
      const updatedSections = [...content.sections];
      updatedSections.splice(index, 1);

      setContent({
        ...content,
        sections: updatedSections
      });
    } else {
      toast.error("En az bir bölüm olmalıdır");
    }
  };

  const saveChanges = async () => {
    if (content) {
      setIsSaving(true);
      try {
        // Using sync version for now, will switch to async when backend is ready
        updatePageContentSync(pageKey, content);
        toast.success("İçerik başarıyla kaydedildi");
      } catch (error) {
        toast.error("İçerik kaydedilirken bir hata oluştu");
        console.error("Error saving content:", error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  return {
    content,
    isLoading,
    isSaving,
    handleMetaChange,
    handleSectionChange,
    handleImageUploaded,
    addNewSection,
    removeSection,
    saveChanges
  };
};

export default useContentEditor;
