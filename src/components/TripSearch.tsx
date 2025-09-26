import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MapPin, Users, DollarSign, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { SearchCriteria, destinations } from "@/lib/mockData";

interface TripSearchProps {
  onSearch: (criteria: SearchCriteria) => void;
  isLoading?: boolean;
}

export function TripSearch({ onSearch, isLoading = false }: TripSearchProps) {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [people, setPeople] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !budget || !people || !duration) {
      return;
    }

    const criteria: SearchCriteria = {
      destination,
      budget: parseInt(budget),
      people: parseInt(people),
      duration: parseInt(duration),
      startDate
    };

    onSearch(criteria);
  };

  return (
    <div className="search-form-container w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="heading-section mb-4">Plan Your Perfect Trip</h2>
        <p className="text-muted-foreground text-lg">
          Tell us your preferences and we'll find the perfect adventure for you
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Destination */}
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Where to?
            </Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Choose destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest}>
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Budget (USD)
            </Label>
            <Input
              id="budget"
              type="number"
              placeholder="e.g. 1000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="h-12"
              min="100"
              max="5000"
            />
          </div>

          {/* Number of People */}
          <div className="space-y-2">
            <Label htmlFor="people" className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Travelers
            </Label>
            <Select value={people} onValueChange={setPeople}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="How many?" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Person' : 'People'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration" className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Duration
            </Label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="How long?" />
              </SelectTrigger>
              <SelectContent>
                {[3, 4, 5, 6, 7, 8, 9, 10, 12, 14].map((days) => (
                  <SelectItem key={days} value={days.toString()}>
                    {days} Days
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-primary" />
              Departure Date (Optional)
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button
              type="submit"
              className="btn-hero w-full h-12 text-lg font-semibold"
              disabled={isLoading || !destination || !budget || !people || !duration}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="loading-travel">🔍</div>
                  Searching...
                </div>
              ) : (
                "Find My Trip"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}