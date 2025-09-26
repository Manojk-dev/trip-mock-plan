import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, MapPin, Calendar, Sparkles } from "lucide-react";
import { TripPackage } from "@/lib/mockData";

interface TripResultsProps {
  trips: TripPackage[];
  onSelectTrip: (trip: TripPackage) => void;
  onBackToSearch: () => void;
}

export function TripResults({ trips, onSelectTrip, onBackToSearch }: TripResultsProps) {
  if (trips.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="status-error rounded-lg p-8 max-w-md mx-auto">
          <div className="text-4xl mb-4">🚫</div>
          <h3 className="text-xl font-semibold mb-2">No Trips Found</h3>
          <p className="text-muted-foreground mb-4">
            Something went wrong! Please try again with different search criteria.
          </p>
          <Button onClick={onBackToSearch} variant="outline">
            Try Different Search
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="heading-section">Perfect Trips Found</h2>
          <p className="text-muted-foreground">
            {trips.length} amazing {trips.length === 1 ? 'trip' : 'trips'} matching your preferences
          </p>
        </div>
        <Button onClick={onBackToSearch} variant="outline">
          New Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip, index) => (
          <div
            key={trip.id}
            className={`${index === 0 ? 'travel-card-featured' : 'travel-card'} cursor-pointer group`}
            onClick={() => onSelectTrip(trip)}
          >
            {index === 0 && (
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Best Match
                </Badge>
              </div>
            )}
            
            <div className="aspect-video bg-gradient-to-br from-travel-sky to-primary/20 rounded-lg mb-4 flex items-center justify-center text-6xl">
              {getDestinationEmoji(trip.destination)}
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {trip.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-3 w-3" />
                  {trip.destination}
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {trip.description}
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {trip.duration} days
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Users className="h-3 w-3 mr-1" />
                  Up to {trip.maxPeople}
                </Badge>
                <Badge variant="outline" className={`text-xs ${getCategoryColor(trip.category)}`}>
                  {trip.category}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(trip.rating)
                            ? 'fill-travel-gold text-travel-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {trip.rating} ({trip.totalReviews})
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="price-display">
                      ${trip.budget.min}-${trip.budget.max}
                    </span>
                    <span className="price-currency ml-1">per person</span>
                  </div>
                  <Button className="btn-hero" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getDestinationEmoji(destination: string): string {
  const emoji: { [key: string]: string } = {
    'Bali': '🏝️',
    'Paris': '🗼',
    'Tokyo': '🏯',
    'Iceland': '🏔️',
    'Thailand': '🏛️',
    'New York': '🗽',
    'Rome': '🏛️',
    'London': '🇬🇧',
    'Barcelona': '🏰',
    'Sydney': '🏄‍♂️'
  };

  for (const [key, value] of Object.entries(emoji)) {
    if (destination.includes(key)) return value;
  }
  
  return '✈️';
}

function getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    'Adventure': 'text-orange-600',
    'Relaxation': 'text-green-600',
    'Culture': 'text-purple-600',
    'Nature': 'text-emerald-600',
    'City': 'text-blue-600',
    'Beach': 'text-cyan-600'
  };
  
  return colors[category] || '';
}