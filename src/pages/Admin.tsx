import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  PanelLeft,
  Home,
  UtensilsCrossed,
  Image,
  MessageSquare,
  Users,
  LogOut,
  FileText
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ContentEditor from "@/components/admin/ContentEditor";
import { initializeContent, getAllContent } from "@/utils/contentManager";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("home");
  const [contentPages, setContentPages] = useState<string[]>([]);
  const [selectedContentPage, setSelectedContentPage] = useState<string | null>(null);

  // Initialize content system
  useEffect(() => {
    initializeContent();
    
    // Get available pages for content management
    const allContent = getAllContent();
    setContentPages(Object.keys(allContent));
    
    // Set first page as default selected if available
    if (Object.keys(allContent).length > 0) {
      setSelectedContentPage(Object.keys(allContent)[0]);
    }
  }, []);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication for demo purposes
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Login successful");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginData({ username: "", password: "" });
    toast.info("Logged out successfully");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                Login
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Demo credentials: username: "admin", password: "admin123"
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-restaurant-charcoal text-white h-screen fixed">
        <div className="p-5">
          <div className="flex items-center space-x-2 mb-8">
            <PanelLeft size={24} />
            <h1 className="font-serif text-xl font-bold">Admin Panel</h1>
          </div>
          <Separator className="my-4 bg-gray-700" />
          <nav className="space-y-2">
            <div className="flex flex-col items-start bg-transparent h-auto space-y-1 w-full">
              <button 
                onClick={() => setActiveTab("home")}
                className={`w-full flex items-center justify-start px-4 py-3 text-left rounded-sm ${
                  activeTab === "home" ? "bg-restaurant-burgundy text-white" : "hover:bg-gray-700"
                }`}
              >
                <Home size={18} className="mr-2" />
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab("content")}
                className={`w-full flex items-center justify-start px-4 py-3 text-left rounded-sm ${
                  activeTab === "content" ? "bg-restaurant-burgundy text-white" : "hover:bg-gray-700"
                }`}
              >
                <FileText size={18} className="mr-2" />
                İçerik Yönetimi
              </button>
              <button 
                onClick={() => setActiveTab("menu")}
                className={`w-full flex items-center justify-start px-4 py-3 text-left rounded-sm ${
                  activeTab === "menu" ? "bg-restaurant-burgundy text-white" : "hover:bg-gray-700"
                }`}
              >
                <UtensilsCrossed size={18} className="mr-2" />
                Menu Management
              </button>
              <button 
                onClick={() => setActiveTab("gallery")}
                className={`w-full flex items-center justify-start px-4 py-3 text-left rounded-sm ${
                  activeTab === "gallery" ? "bg-restaurant-burgundy text-white" : "hover:bg-gray-700"
                }`}
              >
                <Image size={18} className="mr-2" />
                Gallery Management
              </button>
              <button 
                onClick={() => setActiveTab("contact")}
                className={`w-full flex items-center justify-start px-4 py-3 text-left rounded-sm ${
                  activeTab === "contact" ? "bg-restaurant-burgundy text-white" : "hover:bg-gray-700"
                }`}
              >
                <MessageSquare size={18} className="mr-2" />
                Contact Information
              </button>
              <button 
                onClick={() => setActiveTab("about")}
                className={`w-full flex items-center justify-start px-4 py-3 text-left rounded-sm ${
                  activeTab === "about" ? "bg-restaurant-burgundy text-white" : "hover:bg-gray-700"
                }`}
              >
                <Users size={18} className="mr-2" />
                About Content
              </button>
            </div>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="w-full flex items-center justify-start text-white hover:bg-gray-700"
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="hidden">
            <TabsTrigger value="home">Dashboard</TabsTrigger>
            <TabsTrigger value="content">İçerik Yönetimi</TabsTrigger>
            <TabsTrigger value="menu">Menu Management</TabsTrigger>
            <TabsTrigger value="gallery">Gallery Management</TabsTrigger>
            <TabsTrigger value="contact">Contact Information</TabsTrigger>
            <TabsTrigger value="about">About Content</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="home">
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800">Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Total Menu Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">24</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Gallery Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">9</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">5</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-serif font-bold text-gray-800 mt-8">Recent Activity</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    <div className="p-4">
                      <p className="font-medium">Menu Updated</p>
                      <p className="text-sm text-gray-500">5 minutes ago</p>
                    </div>
                    <div className="p-4">
                      <p className="font-medium">New Message Received</p>
                      <p className="text-sm text-gray-500">1 hour ago</p>
                    </div>
                    <div className="p-4">
                      <p className="font-medium">Gallery Image Added</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                    <div className="p-4">
                      <p className="font-medium">About Section Updated</p>
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content">
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800">İçerik Yönetimi</h1>
              
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sayfa Seçin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {contentPages.map((pageKey) => (
                        <Button
                          key={pageKey}
                          variant={selectedContentPage === pageKey ? "default" : "outline"}
                          className={selectedContentPage === pageKey ? "bg-restaurant-burgundy hover:bg-restaurant-burgundy/80" : ""}
                          onClick={() => setSelectedContentPage(pageKey)}
                        >
                          {pageKey.charAt(0).toUpperCase() + pageKey.slice(1).replace('_', ' ')}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {selectedContentPage && (
                  <ContentEditor pageKey={selectedContentPage} />
                )}
              </div>
            </div>
          </TabsContent>

          {/* Menu Management */}
          <TabsContent value="menu">
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800">Menu Management</h1>
              
              <div className="grid grid-cols-1 gap-6">
                {["Starters", "Main Courses", "Desserts", "Beverages"].map((category) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle>{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div>
                            <h3 className="font-medium">Sample Item 1</h3>
                            <p className="text-sm text-gray-500">Description goes here</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div>
                            <h3 className="font-medium">Sample Item 2</h3>
                            <p className="text-sm text-gray-500">Description goes here</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                        Add New Item
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Gallery Management */}
          <TabsContent value="gallery">
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800">Gallery Management</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upload New Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image-title">
                          Title
                        </label>
                        <Input id="image-title" placeholder="Enter image title" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image-category">
                          Category
                        </label>
                        <select 
                          id="image-category"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                        >
                          <option value="">Select a category</option>
                          <option value="food">Food</option>
                          <option value="interior">Interior</option>
                          <option value="chef">Chefs</option>
                          <option value="drinks">Drinks</option>
                          <option value="staff">Staff</option>
                        </select>
                      </div>
                    </div>
                    <Button className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                      Upload Image
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gallery Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="relative group">
                        <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                          <img 
                            src={`https://source.unsplash.com/random/300x300?sig=${item}`} 
                            alt={`Gallery item ${item}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                          <Button variant="outline" size="sm" className="text-white">Edit</Button>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Information Management */}
          <TabsContent value="contact">
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800">Contact Information</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Update Contact Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address Line 1
                        </label>
                        <Input defaultValue="123 Gourmet Lane" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address Line 2
                        </label>
                        <Input defaultValue="Culinary District" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <Input defaultValue="Foodville" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code
                        </label>
                        <Input defaultValue="FC 12345" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input defaultValue="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input defaultValue="info@savorybitesoasis.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          WhatsApp Number
                        </label>
                        <Input defaultValue="+15551234567" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Google Maps Embed URL
                      </label>
                      <Input defaultValue="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1586000029000!5m2!1sen!2s" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hours of Operation
                      </label>
                      <Textarea className="min-h-[100px]" defaultValue="Monday - Friday: 11:00 AM - 10:00 PM&#10;Saturday: 10:00 AM - 11:00 PM&#10;Sunday: 10:00 AM - 9:00 PM" />
                    </div>

                    <Button type="button" onClick={() => toast.success("Contact information updated")} className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Media Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Instagram
                        </label>
                        <Input defaultValue="https://instagram.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Facebook
                        </label>
                        <Input defaultValue="https://facebook.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Twitter
                        </label>
                        <Input defaultValue="https://twitter.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          TripAdvisor
                        </label>
                        <Input defaultValue="https://tripadvisor.com" />
                      </div>
                    </div>

                    <Button type="button" onClick={() => toast.success("Social media links updated")} className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* About Content Management */}
          <TabsContent value="about">
            <div className="space-y-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800">About Content Management</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Headline
                      </label>
                      <Input defaultValue="Our Story" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Content
                      </label>
                      <Textarea className="min-h-[200px]" defaultValue="Savory Bites Oasis began in 2010 with a simple vision: to create a dining experience that celebrates the art of gastronomy while honoring traditional cooking methods and ingredients. Founded by Chef Maria Rodriguez after years of training in Europe and Asia, our restaurant brings together diverse culinary traditions into a cohesive menu that surprises and delights. What started as a small bistro has grown into a beloved culinary destination, known for our commitment to quality, creativity, and exceptional dining experiences." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                      </label>
                      <Input defaultValue="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" />
                    </div>
                    <Button type="button" onClick={() => toast.success("Our Story content updated")} className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Philosophy</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Philosophy 1 Title
                      </label>
                      <Input defaultValue="Quality Ingredients" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Philosophy 1 Content
                      </label>
                      <Textarea defaultValue="We source only the finest ingredients from local farms and trusted suppliers. Our commitment to freshness and quality is unwavering, forming the foundation of every dish we create." />
                    </div>

                    <Separator />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Philosophy 2 Title
                      </label>
                      <Input defaultValue="Artisanal Approach" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Philosophy 2 Content
                      </label>
                      <Textarea defaultValue="Each dish is crafted with meticulous attention to detail. We honor traditional techniques while embracing innovation, creating unique culinary experiences that respect the essence of ingredients." />
                    </div>

                    <Separator />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Philosophy 3 Title
                      </label>
                      <Input defaultValue="Sustainable Practices" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Philosophy 3 Content
                      </label>
                      <Textarea defaultValue="We are committed to environmentally conscious practices, from reducing waste to supporting sustainable agriculture. Our goal is to create exceptional food while respecting our planet." />
                    </div>

                    <Button type="button" onClick={() => toast.success("Philosophy content updated")} className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {["Maria Rodriguez", "James Wilson", "Sophia Lee"].map((name, index) => (
                      <div key={index} className="p-4 border rounded-md">
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-gray-500">{["Executive Chef", "Sous Chef", "Pastry Chef"][index]}</p>
                        <div className="flex justify-end space-x-2 mt-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-restaurant-burgundy hover:bg-restaurant-burgundy/90">
                    Add Team Member
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
