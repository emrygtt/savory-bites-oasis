
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetaEditorProps {
  metaTitle: string;
  metaDescription: string;
  onMetaChange: (field: string, value: string) => void;
}

const MetaEditor = ({ metaTitle, metaDescription, onMetaChange }: MetaEditorProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Ayarları</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Meta Başlık</label>
            <Input
              value={metaTitle}
              onChange={(e) => onMetaChange("metaTitle", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Meta Açıklama</label>
            <Textarea
              value={metaDescription}
              onChange={(e) => onMetaChange("metaDescription", e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetaEditor;
