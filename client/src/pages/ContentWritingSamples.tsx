import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, ExternalLink, Award, Mail, Newspaper } from "lucide-react";
import { Link } from "wouter";

interface ContentSample {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'press_release' | 'award_submission' | 'email_marketing';
  documentId?: number;
  pdfFile?: string;
}

const contentSamples: ContentSample[] = [
  // Press Releases
  {
    id: 'pr-1',
    title: 'Wild Supper Club Launch',
    description: 'Exclusive event announcement featuring renowned plant-based Chef Claire Sharryn Roberto with adaptogenic menu.',
    imageUrl: 'https://images.unsplash.com/photo-1514533212735-5df27d970db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'press_release',
    documentId: 1
  },
  {
    id: 'pr-2', 
    title: 'Ramadan Iftar Edition',
    description: 'Special Ramadan edition featuring two exclusive Asian-inspired plant-based menus for traditional Iftar.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'press_release',
    documentId: 2
  },
  {
    id: 'pr-3',
    title: 'Mushroom Wellness Workshop',
    description: 'Collaboration with DIRTEA exploring functional mushroom blends and next-generation wellness biohacking.',
    imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'press_release',
    documentId: 3
  },
  {
    id: 'pr-4',
    title: 'Superfood Workshop Series',
    description: 'Interactive educational session with Respect Health CEO teaching plant-based superfood integration.',
    imageUrl: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'press_release',
    documentId: 4
  },
  // Award Submissions
  {
    id: 'award-1',
    title: 'F&B Entrepreneur(s) of the Year',
    description: 'Strategic award submission highlighting Wild & The Moon\'s entrepreneurial leadership and innovation in the F&B industry.',
    imageUrl: '/portfolio-images/awards-recognition.jpg',
    category: 'award_submission',
    pdfFile: '1. Wild & The Moon_ F&B Entrepreneur(s) of the Year_1749427936886.pdf'
  },
  {
    id: 'award-2',
    title: 'Leading Cafe',
    description: 'Comprehensive submission showcasing Wild & The Moon\'s excellence in cafe operations and customer experience.',
    imageUrl: '/portfolio-images/awards-recognition.jpg',
    category: 'award_submission',
    pdfFile: '2. Wild & The Moon_ Leading Cafe_1749427936886.pdf'
  },
  {
    id: 'award-3',
    title: 'Leading Healthy Restaurant',
    description: 'Award submission demonstrating Wild & The Moon\'s commitment to healthy, plant-based dining excellence.',
    imageUrl: '/portfolio-images/awards-recognition.jpg',
    category: 'award_submission',
    pdfFile: '3. Wild & The Moon_ Leading Healthy Restaurant_1749427936886.pdf'
  },
  {
    id: 'award-4',
    title: 'Leading Sustainable Restaurant Category',
    description: 'Strategic submission highlighting Wild & The Moon\'s pioneering sustainability initiatives and environmental leadership.',
    imageUrl: '/portfolio-images/awards-recognition.jpg',
    category: 'award_submission',
    pdfFile: '4. Wild & The Moon_ Leading Sustainable Restaurant Category_1749427936886.pdf'
  },
  // Email Marketing
  {
    id: 'email-1',
    title: 'Product Launch Campaign',
    description: 'Multi-sequence email campaign for new menu item launch with personalized customer journey.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'email_marketing'
  },
  {
    id: 'email-2',
    title: 'Seasonal Wellness Series',
    description: 'Educational email series connecting seasonal ingredients with wellness benefits and menu offerings.',
    imageUrl: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'email_marketing'
  },
  {
    id: 'email-3',
    title: 'Customer Retention Campaign',
    description: 'Loyalty-focused email campaign with personalized offers and exclusive member benefits.',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'email_marketing'
  },
  {
    id: 'email-4',
    title: 'Event Promotion Series',
    description: 'Comprehensive email marketing strategy for workshop and event promotion with automated follow-ups.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    category: 'email_marketing'
  }
];

const categories = [
  {
    id: 'press_release',
    title: 'Press Releases',
    description: 'Professional press releases for brand activations, collaborations, and events',
    icon: Newspaper,
    count: 4
  },
  {
    id: 'award_submission', 
    title: 'Award Submissions',
    description: 'Strategic award submissions for Wild & The Moon across multiple F&B industry categories',
    icon: Award,
    count: 4
  },
  {
    id: 'email_marketing',
    title: 'Email Marketing',
    description: 'Comprehensive email campaigns driving engagement and conversions',
    icon: Mail,
    count: 4
  }
];

export default function ContentWritingSamples() {
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
            A comprehensive collection of professional content writing across press releases, award submissions, 
            and email marketing campaigns. Each piece demonstrates strategic messaging, brand voice consistency, 
            and measurable impact in driving engagement and business results.
          </p>
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3 mb-16"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="text-center">
                <CardContent className="p-6">
                  <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <Badge variant="outline">{category.count} samples</Badge>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Content Categories */}
        {categories.map((category, categoryIndex) => {
          const categorySamples = contentSamples.filter(sample => sample.category === category.id);
          const IconComponent = category.icon;
          
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              className="mb-16"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <IconComponent className="w-8 h-8 text-primary" />
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-primary">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Sample Cards Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {categorySamples.map((sample, index) => (
                  <Card key={sample.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={sample.imageUrl}
                        alt={sample.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {sample.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {sample.description}
                      </p>
                      
                      {sample.documentId ? (
                        <Button 
                          asChild 
                          className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                        >
                          <Link href={`/portfolio/content-writing/${sample.documentId}`}>
                            View Document
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      ) : sample.pdfFile ? (
                        <Button 
                          asChild
                          className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                        >
                          <a 
                            href={`/api/awards/${encodeURIComponent(sample.pdfFile)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View PDF
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          className="w-full" 
                          disabled
                        >
                          Coming Soon
                          <FileText className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="font-playfair text-3xl font-bold text-primary mb-8">
            Content Writing Impact
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Press Releases</div>
                <p className="text-xs text-muted-foreground">
                  Professional press releases generating media coverage
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Award Submissions</div>
                <p className="text-xs text-muted-foreground">
                  Strategic submissions for Wild & The Moon's industry recognition
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Email Campaigns</div>
                <p className="text-xs text-muted-foreground">
                  Multi-sequence campaigns driving engagement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Success Rate</div>
                <p className="text-xs text-muted-foreground">
                  Content achieving measurable business impact
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}