
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ImageUploader from "./ImageUploader";
import { ContentSection } from "@/utils/contentManager";

interface SectionEditorProps {
  section: ContentSection;
  index: number;
  onSectionChange: (index: number, field: string, value: string) => void;
  onImageUploaded: (index: number, imageUrl: string) => void;
  onRemoveSection: (index: number) => void;
}

const SectionEditor = ({
  section,
  index,
  onSectionChange,
  onImageUploaded,
  onRemoveSection,
}: SectionEditorProps) => {
  return (
    <AccordionItem key={section.id} value={`section-${index}`}>
      <div className="flex items-center justify-between">
        <AccordionTrigger className="flex-1">
          {section.title}
        </AccordionTrigger>
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onRemoveSection(index);
          }}
        >
          <X size={16} />
        </Button>
      </div>
      <AccordionContent>
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-sm font-medium mb-1">Bölüm ID</label>
            <Input
              value={section.id}
              onChange={(e) => onSectionChange(index, "id", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Başlık</label>
            <Input
              value={section.title}
              onChange={(e) => onSectionChange(index, "title", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">İçerik</label>
            <Textarea
              className="min-h-[150px]"
              value={section.content}
              onChange={(e) => onSectionChange(index, "content", e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">Not: Yeni satır için "\n" kullanabilirsiniz.</p>
          </div>
          <ImageUploader 
            currentImageUrl={section.imageUrl} 
            onImageUploaded={(url) => onImageUploaded(index, url)}
            label="Bölüm Görseli"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default SectionEditor;
