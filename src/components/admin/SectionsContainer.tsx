
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import SectionEditor from "./SectionEditor";
import { ContentSection } from "@/utils/contentManager";

interface SectionsContainerProps {
  sections: ContentSection[];
  onSectionChange: (index: number, field: string, value: string) => void;
  onImageUploaded: (index: number, imageUrl: string) => void;
  onAddSection: () => void;
  onRemoveSection: (index: number) => void;
}

const SectionsContainer = ({
  sections,
  onSectionChange,
  onImageUploaded,
  onAddSection,
  onRemoveSection
}: SectionsContainerProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sayfa Bölümleri</CardTitle>
        <Button onClick={onAddSection} size="sm" className="flex items-center gap-1">
          <Plus size={16} /> Bölüm Ekle
        </Button>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={sections.map((_, i) => `section-${i}`)}>
          {sections.map((section, index) => (
            <SectionEditor
              key={section.id}
              section={section}
              index={index}
              onSectionChange={onSectionChange}
              onImageUploaded={onImageUploaded}
              onRemoveSection={onRemoveSection}
            />
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default SectionsContainer;
