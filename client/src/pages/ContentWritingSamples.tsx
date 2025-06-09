
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
  category: 'press_release' | 'award_submission' | 'email_marketing';
  pdfFile: string;
}

const contentSamples: ContentSample[] = [
  // Press Releases
  {
    id: 'pr-1',
    title: 'Wild Supper Club Launch',
    description: 'Exclusive event announcement featuring renowned plant-based Chef Claire Sharryn Roberto with adaptogenic menu.',
    category: 'press_release',
    pdfFile: 'WILD SUPPER CLUB_ WILD & THE MOON X CLAIRE SHARRYN ROBERTO.pdf'
  },
  {
    id: 'pr-2', 
    title: 'Ramadan Iftar Edition',
    description: 'Special Ramadan edition featuring two exclusive Asian-inspired plant-based menus for traditional Iftar.',
    category: 'press_release',
    pdfFile: 'WILD SUPPER CLUB_ IFTAR EDITION_1749425627780.pdf'
  },
  {
    id: 'pr-3',
    title: 'Mushroom Wellness Workshop',
    description: 'Collaboration with DIRTEA exploring functional mushroom blends and next-generation wellness biohacking.',
    category: 'press_release',
    pdfFile: 'WILD & THE MOON x COMPTOIR102 x DIRTEA_ A Shroom Boom with Fungi!_1749425627780.pdf'
  },
  {
    id: 'pr-4',
    title: 'Superfood Workshop Series',
    description: 'Interactive educational session with Respect Health CEO teaching plant-based superfood integration.',
    category: 'press_release',
    pdfFile: 'WILD & THE MOON X COMPTOIR102 X RESPECT_ Superfood Workshop with Respect.docx_1749425627780.pdf'
  },
  // Award Submissions
  {
    id: 'award-1',
    title: 'F&B Entrepreneur(s) of the Year',
    description: 'Strategic award submission highlighting Wild & The Moon\'s entrepreneurial leadership and innovation in the F&B industry.',
    category: 'award_submission',
    pdfFile: '1. Wild & The Moon_ F&B Entrepreneur(s) of the Year_1749427936886.pdf'
  },
  {
    id: 'award-2',
    title: 'Leading Cafe',
    description: 'Comprehensive submission showcasing Wild & The Moon\'s excellence in cafe operations and customer experience.',
    category: 'award_submission',
    pdfFile: '2. Wild & The Moon_ Leading Cafe_1749427936886.pdf'
  },
  {
    id: 'award-3',
    title: 'Leading Healthy Restaurant',
    description: 'Award submission demonstrating Wild & The Moon\'s commitment to healthy, plant-based dining excellence.',
    category: 'award_submission',
    pdfFile: '3. Wild & The Moon_ Leading Healthy Restaurant_1749427936886.pdf'
  },
  {
    id: 'award-4',
    title: 'Leading Sustainable Restaurant Category',
    description: 'Strategic submission highlighting Wild & The Moon\'s pioneering sustainability initiatives and environmental leadership.',
    category: 'award_submission',
    pdfFile: '4. Wild & The Moon_ Leading Sustainable Restaurant Category_1749427936886.pdf'
  },
  // Email Marketing
  {
    id: 'email-1',
    title: 'The Wildest Iftars are coming your way this Ramadan',
    description: 'Multi-sequence email campaign for new menu item launch with personalized customer journey.',
    category: 'email_marketing',
    pdfFile: 'WILD SUPPER CLUB_ IFTAR EDITION_1749425627780.pdf'
  },
  {
    id: 'email-2',
    title: 'Wild & The Moon x Claire Sharryn Roberto',
    description: 'Educational email series connecting seasonal ingredients with wellness benefits and menu offerings.',
    category: 'email_marketing',
    pdfFile: 'WILD SUPPER CLUB_ WILD & THE MOON X CLAIRE SHARRYN ROBERTO_1749425627779.pdf'
  },
  {
    id: 'email-3',
    title: 'Self-care is Quintessential!',
    description: 'Loyalty-focused email campaign with personalized offers and exclusive member benefits.',
    category: 'email_marketing',
    pdfFile: 'WILD & THE MOON x COMPTOIR102 x DIRTEA_ A Shroom Boom with Fungi!_1749425627780.pdf'
  },
  {
    id: 'email-4',
    title: 'Enter superfood heaven with us! Wild & The Moon x Respect Health x Comptoir102',
    description: 'Comprehensive email marketing strategy for workshop and event promotion with automated follow-ups.',
    category: 'email_marketing',
    pdfFile: 'WILD & THE MOON X COMPTOIR102 X RESPECT_ Superfood Workshop with Respect.docx_1749425627780.pdf'
  },
  {
    id: 'email-5',
    title: 'Get Summer Ready with Wild!',
    description: 'Comprehensive email marketing strategy for workshop and event promotion with automated follow-ups.',
    category: 'email_marketing',
    pdfFile: 'WILD SUPPER CLUB_ WILD & THE MOON X CLAIRE SHARRYN ROBERTO_1749425627779.pdf'
  },
  {
    id: 'email-6',
    title: 'Easter brings you the Wildest treats!',
    description: 'Comprehensive email marketing strategy for workshop and event promotion with automated follow-ups.',
    category: 'email_marketing',
    pdfFile: 'WILD SUPPER CLUB_ IFTAR EDITION_1749425627780.pdf'
  },
  {
    id: 'email-7',
    title: 'Summer brings new Wild flavors!',
    description: 'Comprehensive email marketing strategy for workshop and event promotion with automated follow-ups.',
    category: 'email_marketing',
    pdfFile: 'Get Summer Ready with Wild.eml'
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
    count: 7
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
                    {/* Content */}
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {sample.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {sample.description}
                      </p>
                      
                      <Button 
                        asChild
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        <a 
                          href={`/pdfs/${encodeURIComponent(sample.pdfFile)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
