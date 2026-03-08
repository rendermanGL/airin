
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, ExternalLink, Award, Mail, Newspaper } from "lucide-react";
import { Link } from "wouter";

interface ContentSample {
  id: string;
  title: string;
  category: 'press_release' | 'award_submission' | 'email_marketing';
  pdfFile: string;
}

const contentSamples: ContentSample[] = [
  // Press Releases
  {
    id: 'pr-1',
    title: 'Wild Supper Club Iftar edition',
    category: 'press_release',
    pdfFile: 'WILD SUPPER CLUB_ IFTAR EDITION.pdf'
  },
  {
    id: 'pr-2',
    title: 'Wild Supper Club: Wild & The Moon x Claire Sharryn Roberto',
    category: 'press_release',
    pdfFile: 'WILD SUPPER CLUB_WILD_THE MOON_CLAIRE SHARRYN ROBERTO.pdf'
  },
  {
    id: 'pr-3',
    title: 'Superfood Workshop with Respect: Wild & The Moon x Comptoir102 x Respect Superfoods',
    category: 'press_release',
    pdfFile: 'WILD & THE MOON_COMPTOIR102_RESPECT_ Superfood Workshop with Respect.pdf'
  },
  {
    id: 'pr-4',
    title: 'A Shroom Boom with Dirtea: Wild & The Moon x Comptoir102 x Dirtea',
    category: 'press_release',
    pdfFile: 'WILD & THE MOON_COMPTOIR102_DIRTEA_ A Shroom Boom with Fungi.pdf'
  },
  // Award Submissions
  {
    id: 'award-1',
    title: 'F&B Entrepreneur(s) of the Year',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_F_B Entrepreneurs of the Year.pdf'
  },
  {
    id: 'award-2',
    title: 'Leading Cafe',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_ Leading Cafe.pdf'
  },
  {
    id: 'award-3',
    title: 'Leading Healthy Restaurant',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_Leading Healthy Restaurant.pdf'
  },
  {
    id: 'award-4',
    title: 'Leading Sustainable Restaurant Category',
    category: 'award_submission',
    pdfFile: 'Wild_The Moon_Leading Sustainable Restaurant Category.pdf'
  },
  // Email Marketing
  {
    id: 'email-1',
    title: 'The Wildest Iftars are coming your way this Ramadan',
    category: 'email_marketing',
    pdfFile: 'Wildest Iftars Ramadan.eml'
  },
  {
    id: 'email-2',
    title: 'Wild & The Moon x Claire Sharryn Roberto',
    category: 'email_marketing',
    pdfFile: 'wild-moon-claire-sharryn-roberto.eml'
  },
  {
    id: 'email-3',
    title: 'Self-care is Quintessential!',
    category: 'email_marketing',
    pdfFile: 'Self-care is Quintessential.eml'
  },
  {
    id: 'email-4',
    title: 'Enter superfood heaven with us! Wild & The Moon x Respect Health x Comptoir102',
    category: 'email_marketing',
    pdfFile: 'Superfood Heaven Collaboration.eml'
  },
  {
    id: 'email-5',
    title: 'Get Summer Ready with Wild!',
    category: 'email_marketing',
    pdfFile: 'Get Summer Ready with Wild.eml'
  },
  {
    id: 'email-6',
    title: 'Easter brings you the Wildest treats!',
    category: 'email_marketing',
    pdfFile: 'Easter Treats Email.eml'
  },
  {
    id: 'email-7',
    title: 'Summer brings new Wild flavors!',
    category: 'email_marketing',
    pdfFile: 'Summer Wild Flavors Menu.eml'
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
                  <Card key={sample.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    {/* Content */}
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <h3 className="font-semibold text-lg mb-4 group-hover:text-primary transition-colors flex-grow">
                        {sample.title}
                      </h3>
                      
                      <Button 
                        asChild
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors mt-auto"
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
