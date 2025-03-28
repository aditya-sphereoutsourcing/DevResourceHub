import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CodePlaygroundPage from "@/pages/CodePlaygroundPage";
import ComparisonPage from "@/pages/ComparisonPage";
import PracticeGroundPage from "@/pages/PracticeGroundPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/playground" component={CodePlaygroundPage} />
      <Route path="/compare" component={ComparisonPage} />
      <Route path="/practice" component={PracticeGroundPage} />
      <Route path="/practice-embed/:problemId" component={PracticeGroundPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
