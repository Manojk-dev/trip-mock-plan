import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TripSearch } from "@/components/TripSearch";
import { TripResults } from "@/components/TripResults";
import { TripDetails } from "@/components/TripDetails";
import { useToast } from "@/hooks/use-toast";
import { SearchCriteria, TripPackage, searchTrips } from "@/lib/mockData";
import heroImage from "@/assets/hero-travel.jpg";

type ViewMode = 'search' | 'results' | 'details';

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('search');
  const [searchResults, setSearchResults] = useState<TripPackage[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<TripPackage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (criteria: SearchCriteria) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = searchTrips(criteria);
      setSearchResults(results);
      setViewMode('results');
      setIsLoading(false);
    }, 1500);
  };

  const handleSelectTrip = (trip: TripPackage) => {
    setSelectedTrip(trip);
    setViewMode('details');
  };

  const handleBackToSearch = () => {
    setViewMode('search');
    setSearchResults([]);
  };

  const handleBackToResults = () => {
    setViewMode('results');
    setSelectedTrip(null);
  };

  const handleBookTrip = (trip: TripPackage) => {
    toast({
      title: "Trip Booked Successfully! 🎉",
      description: `Your ${trip.title} adventure has been reserved. Check your email for confirmation.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {viewMode === 'search' && (
        <div 
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-75"></div>
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="heading-hero mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
              Plan the perfect trip with our curated travel experiences. 
              From tropical beaches to mountain peaks, find your dream destination.
            </p>
            <div className="mb-12">
              <TripSearch onSearch={handleSearch} isLoading={isLoading} />
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      {viewMode === 'results' && (
        <div className="py-12 px-4">
          <TripResults
            trips={searchResults}
            onSelectTrip={handleSelectTrip}
            onBackToSearch={handleBackToSearch}
          />
        </div>
      )}

      {/* Details Section */}
      {viewMode === 'details' && selectedTrip && (
        <div className="py-12 px-4">
          <TripDetails
            trip={selectedTrip}
            onBack={handleBackToResults}
            onBookTrip={handleBookTrip}
          />
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center max-w-sm mx-4">
            <div className="text-4xl mb-4 loading-travel">🔍</div>
            <h3 className="text-lg font-semibold mb-2">Finding Perfect Trips</h3>
            <p className="text-muted-foreground">
              Searching through thousands of amazing destinations...
            </p>
          </div>
        </div>
      )}

      {/* Features Section (only on search page) */}
      {viewMode === 'search' && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="heading-section mb-12">Why Choose Our Trip Planner?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="travel-card text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Personalized Matching</h3>
                <p className="text-muted-foreground">
                  Our smart algorithm finds trips that perfectly match your budget, 
                  group size, and travel preferences.
                </p>
              </div>
              <div className="travel-card text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-3">Curated Experiences</h3>
                <p className="text-muted-foreground">
                  Every trip is carefully selected and designed by travel experts 
                  to ensure unforgettable experiences.
                </p>
              </div>
              <div className="travel-card text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-3">Best Value</h3>
                <p className="text-muted-foreground">
                  Get the most out of your travel budget with our competitive 
                  pricing and included amenities.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h3>
          <p className="text-background/80 mb-6">
            Join thousands of travelers who have discovered their perfect trip with us.
          </p>
          {viewMode !== 'search' && (
            <Button 
              onClick={handleBackToSearch}
              className="bg-white text-foreground hover:bg-white/90"
            >
              Plan Another Trip
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Index;
