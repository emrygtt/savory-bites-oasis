
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Plus, X, Save } from "lucide-react";
import {
  getPageContent,
  updatePageContent,
  PageContent,
  ContentSection
} from "@/utils/contentManager";

interface ContentEditorProps {
  pageKey: string;
}

const ContentEditor = ({ pageKey }: ContentEditorProps) => {
  const [content, setContent] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = () => {
      setIsLoading(true);
      const pageContent = getPageContent(pageKey);
      setContent(pageContent);
      setIsLoading(false);
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

  const addNewSection = () => {
    if (content) {
      const newSection: ContentSection = {
        id: `section-${Date.now()}`,
        title: "Yeni Başlık",
        content: "İçerik buraya..."
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

  const saveChanges = () => {
    if (content) {
      updatePageContent(pageKey, content);
      toast.success("İçerik başarıyla kaydedildi");
    }
  };

  if (isLoading || !content) {
    return <div className="text-center p-8">Yükleniyor...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>SEO Ayarları</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Meta Başlık</label>
              <Input
                value={content.metaTitle}
                onChange={(e) => handleMetaChange("metaTitle", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Meta Açıklama</label>
              <Textarea
                value={content.metaDescription}
                onChange={(e) => handleMetaChange("metaDescription", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Sayfa Bölümleri</CardTitle>
          <Button onClick={addNewSection} size="sm" className="flex items-center gap-1">
            <Plus size={16} /> Bölüm Ekle
          </Button>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" defaultValue={content.sections.map((_, i) => `section-${i}`)}>
            {content.sections.map((section, index) => (
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
                      removeSection(index);
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
                        onChange={(e) => handleSectionChange(index, "id", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Başlık</label>
                      <Input
                        value={section.title}
                        onChange={(e) => handleSectionChange(index, "title", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">İçerik</label>
                      <Textarea
                        className="min-h-[150px]"
                        value={section.content}
                        onChange={(e) => handleSectionChange(index, "content", e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">Not: Yeni satır için "\n" kullanabilirsiniz.</p>
                    </div>
                    {section.imageUrl !== undefined && (
                      <div>
                        <label className="block text-sm font-medium mb-1">Görsel URL</label>
                        <Input
                          value={section.imageUrl || ""}
                          onChange={(e) => handleSectionChange(index, "imageUrl", e.target.value)}
                        />
                        {section.imageUrl && (
                          <div className="mt-2">
                            <img 
                              src={section.imageUrl} 
                              alt={section.title} 
                              className="max-h-32 rounded-md"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button onClick={saveChanges} className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/80 text-white flex items-center gap-2">
          <Save size={16} /> Değişiklikleri Kaydet
        </Button>
      </div>
    </div>
  );
};

export default ContentEditor;
