import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface ContentWritingSample {
  id: number;
  title: string;
  description: string;
  filename: string;
  createdAt: string;
}

export default function ContentWritingSamples() {
  const { data: documents, isLoading } = useQuery<ContentWritingSample[]>({
    queryKey: ['/api/documents'],
    queryFn: async () => {
      const response = await fetch('/api/documents');
      if (!response.ok) throw new Error('Failed to fetch documents');
      return response.json();
    }
  });

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-6 hover:bg-accent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary" className="px-4 py-2">
              Content Writing Samples
            </Badge>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Content Writing Portfolio
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A collection of professional content writing samples including press releases, event materials, 
            and brand communications created for Wild & The Moon. These pieces demonstrate strategic messaging, 
            brand voice consistency, and the ability to generate significant organic media coverage.
          </p>
        </motion.div>

        {/* Content Samples Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {isLoading ? (
            <div className="col-span-full text-center py-12">
              <div className="inline-flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                Loading content samples...
              </div>
            </div>
          ) : documents && documents.length > 0 ? (
            documents.map((doc) => (
              <Card key={doc.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="w-8 h-8 text-primary mb-4" />
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {doc.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {new Date(doc.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {doc.description}
                  </p>
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    <a 
                      href={`/api/documents/${doc.id}/file`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Document
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No documents available</h3>
              <p className="text-muted-foreground">
                Content writing samples will be available soon.
              </p>
            </div>
          )}
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="font-playfair text-3xl font-bold text-primary mb-8">
            Content Writing Achievements
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Press Releases</div>
                <p className="text-sm text-muted-foreground">
                  Professional press releases for events, collaborations, and brand announcements
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Event Materials</div>
                <p className="text-sm text-muted-foreground">
                  Event descriptions, promotional content, and workshop materials
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Media Coverage Rate</div>
                <p className="text-sm text-muted-foreground">
                  Content pieces that generated organic media coverage and engagement
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}