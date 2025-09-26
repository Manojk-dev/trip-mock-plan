import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, Star, Clock, Users, MapPin, Calendar, 
  CheckCircle, XCircle, Thermometer, Mountain, 
  Utensils, Bed, Camera, Heart
} from "lucide-react";
import { TripPackage } from "@/lib/mockData";

interface TripDetailsProps {
  trip: TripPackage;
  onBack: () => void;
  onBookTrip: (trip: TripPackage) => void;
}

export function TripDetails({ trip, onBack, onBookTrip }: TripDetailsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Button onClick={onBack} variant="outline" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Results
        </Button>
        
        <div className="travel-card-featured">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="aspect-video bg-gradient-to-br from-travel-sky to-primary/20 rounded-lg mb-6 flex items-center justify-center text-8xl">
                {getDestinationEmoji(trip.destination)}
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{trip.destination}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{trip.title}</h1>
              
              <p className="text-lg text-muted-foreground mb-6">{trip.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{trip.duration} days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Up to {trip.maxPeople} people</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <span>{trip.bestTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-primary" />
                  <span>{trip.difficulty}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(trip.rating)
                          ? 'fill-travel-gold text-travel-gold'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {trip.rating}/5 ({trip.totalReviews} reviews)
                  </span>
                </div>
                <Badge className={getCategoryBadgeClass(trip.category)}>
                  {trip.category}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-primary">
                    ${trip.budget.min}-${trip.budget.max}
                  </span>
                  <span className="text-muted-foreground ml-2">per person</span>
                </div>
                <Button className="btn-hero" size="lg" onClick={() => onBookTrip(trip)}>
                  <Heart className="h-4 w-4 mr-2" />
                  Book This Trip
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="highlights" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="highlights">Highlights</TabsTrigger>
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
          <TabsTrigger value="includes">What's Included</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="highlights" className="mt-6">
          <div className="travel-card">
            <h3 className="text-xl font-semibold mb-4">Trip Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {trip.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="itinerary" className="mt-6">
          <div className="space-y-4">
            {trip.itinerary.map((day, index) => (
              <div key={day.day} className="travel-card">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{day.title}</h4>
                    <p className="text-muted-foreground mb-3">{day.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <Camera className="h-4 w-4" />
                          Activities
                        </h5>
                        <ul className="space-y-1 text-muted-foreground">
                          {day.activities.map((activity, i) => (
                            <li key={i}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <Utensils className="h-4 w-4" />
                          Meals
                        </h5>
                        <ul className="space-y-1 text-muted-foreground">
                          {day.meals.map((meal, i) => (
                            <li key={i}>• {meal}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {day.accommodation && (
                        <div>
                          <h5 className="font-medium mb-2 flex items-center gap-2">
                            <Bed className="h-4 w-4" />
                            Accommodation
                          </h5>
                          <p className="text-muted-foreground">{day.accommodation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="includes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="travel-card">
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ What's Included</h3>
              <ul className="space-y-2">
                {trip.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="travel-card">
              <h3 className="text-lg font-semibold mb-4 text-red-600">❌ Not Included</h3>
              <ul className="space-y-2">
                {trip.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-6">
          <div className="travel-card text-center py-8">
            <Star className="h-12 w-12 text-travel-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellent Reviews</h3>
            <p className="text-muted-foreground mb-4">
              This trip has received {trip.totalReviews} reviews with an average rating of {trip.rating}/5 stars.
            </p>
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(trip.rating)
                      ? 'fill-travel-gold text-travel-gold'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-lg font-semibold">{trip.rating}/5</span>
            </div>
            <Button variant="outline">Read All Reviews</Button>
          </div>
        </TabsContent>
      </Tabs>
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

function getCategoryBadgeClass(category: string): string {
  const classes: { [key: string]: string } = {
    'Adventure': 'bg-orange-100 text-orange-800',
    'Relaxation': 'bg-green-100 text-green-800',
    'Culture': 'bg-purple-100 text-purple-800',
    'Nature': 'bg-emerald-100 text-emerald-800',
    'City': 'bg-blue-100 text-blue-800',
    'Beach': 'bg-cyan-100 text-cyan-800'
  };
  
  return classes[category] || '';
}