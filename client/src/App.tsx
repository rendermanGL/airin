import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import StrategicMarketing from "@/pages/StrategicMarketing";
import CustomerEngagement from "@/pages/CustomerEngagement";
import BrandStorytelling from "@/pages/BrandStorytelling";
import AwardsRecognition from "@/pages/AwardsRecognition";
import { motion, AnimatePresence } from "framer-motion";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/strategic-marketing" component={StrategicMarketing} />
        <Route path="/portfolio/customer-engagement" component={CustomerEngagement} />
        <Route path="/portfolio/brand-storytelling" component={BrandStorytelling} />
        <Route path="/portfolio/awards-recognition" component={AwardsRecognition} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
