
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";
import MetaEditor from "./MetaEditor";
import SectionsContainer from "./SectionsContainer";
import useContentEditor from "@/hooks/useContentEditor";

interface ContentEditorProps {
  pageKey: string;
}

const ContentEditor = ({ pageKey }: ContentEditorProps) => {
  const {
    content,
    isLoading,
    isSaving,
    handleMetaChange,
    handleSectionChange,
    handleImageUploaded,
    addNewSection,
    removeSection,
    saveChanges
  } = useContentEditor(pageKey);

  if (isLoading || !content) {
    return <div className="text-center p-8">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <MetaEditor 
        metaTitle={content.metaTitle}
        metaDescription={content.metaDescription}
        onMetaChange={handleMetaChange}
      />

      <SectionsContainer 
        sections={content.sections}
        onSectionChange={handleSectionChange}
        onImageUploaded={handleImageUploaded}
        onAddSection={addNewSection}
        onRemoveSection={removeSection}
      />
      
      <div className="flex justify-end">
        <Button 
          onClick={saveChanges} 
          className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white flex items-center gap-2"
          disabled={isSaving}
        >
          {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} 
          {isSaving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
        </Button>
      </div>
    </div>
  );
};

export default ContentEditor;
