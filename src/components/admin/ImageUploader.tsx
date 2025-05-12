
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { uploadImage } from "@/services/apiService";
import { toast } from "sonner";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  currentImageUrl?: string;
  label?: string;
}

const ImageUploader = ({ onImageUploaded, currentImageUrl, label = "Görsel" }: ImageUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Lütfen bir görsel dosyası seçin");
      return;
    }

    // Validate file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Dosya boyutu 5MB'dan küçük olmalıdır");
      return;
    }

    setIsUploading(true);

    try {
      // Create a preview
      const tempPreview = URL.createObjectURL(file);
      setPreviewUrl(tempPreview);

      // Upload to server
      const result = await uploadImage(file);
      
      if (result.success) {
        onImageUploaded(result.imageUrl);
        toast.success("Görsel başarıyla yüklendi");
      } else {
        toast.error("Görsel yüklenirken bir hata oluştu");
        // Revert preview if upload failed
        setPreviewUrl(currentImageUrl || null);
      }
    } catch (error) {
      toast.error("Görsel yüklenirken bir hata oluştu");
      console.error("Image upload error:", error);
      // Revert preview if upload failed
      setPreviewUrl(currentImageUrl || null);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        {isUploading && (
          <div className="flex items-center space-x-2 text-sm text-orange-500">
            <Loader2 size={16} className="animate-spin" />
            <span>Yükleniyor...</span>
          </div>
        )}
      </div>

      {previewUrl ? (
        <div className="relative">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="max-h-48 rounded-md object-cover"
          />
          <Button 
            variant="outline" 
            size="sm" 
            className="absolute top-2 right-2 bg-white/80"
            onClick={() => {
              setPreviewUrl(null);
              onImageUploaded('');
            }}
          >
            Kaldır
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <Input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
            disabled={isUploading}
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            <ImageIcon className="h-12 w-12 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">Yüklemek için tıklayın</p>
            <p className="text-xs text-gray-500">PNG, JPG, GIF (Maks. 5MB)</p>
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
