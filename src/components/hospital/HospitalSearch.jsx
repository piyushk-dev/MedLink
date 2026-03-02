import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Search,
  MapPin,
  BedDouble,
  Star,
  Phone,
  Filter,
  X,
  Activity,
  Wind,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cities, API_BASE } from '../../lib/mock-data';
import { BedTicker } from './BedTicker';

const specialtyFilters = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Oncology',
  'Pediatrics',
  'Dermatology',
  'ENT',
  'Gastroenterology',
];

const allSpecialties = [
  'Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Pediatrics',
  'Dermatology', 'ENT', 'Gastroenterology', 'Pulmonology', 'Nephrology',
];

const allAmenities = [
  'Parking', 'Pharmacy', 'Cafeteria', 'WiFi', 'Emergency',
  'Blood Bank', 'Helipad', 'Lab',
];

const amenityFilters = ['Parking', 'Pharmacy', 'Cafeteria', 'WiFi', 'Emergency', 'Helipad', 'Blood Bank'];

function enrichHospital(h) {
  const totalBeds = h.beds || 100;
  const seed = h.id || 1;
  const available = Math.floor(totalBeds * (0.3 + (seed % 5) * 0.05));
  const icu = Math.floor(totalBeds * 0.1) + (seed % 3);
  const oxygen = Math.floor(totalBeds * 0.15) + (seed % 4);
  const rating = (3.5 + (seed % 15) * 0.1).toFixed(1);

  const specCount = 3 + (seed % 4);
  const specialties = [];
  for (let i = 0; i < specCount; i++) {
    specialties.push(allSpecialties[(seed + i) % allSpecialties.length]);
  }

  const amenCount = 3 + (seed % 3);
  const amenities = [];
  for (let i = 0; i < amenCount; i++) {
    amenities.push(allAmenities[(seed + i) % allAmenities.length]);
  }

  return {
    ...h,
    city: h.location || '',
    phone: h.contactInfo || '',
    rating: parseFloat(rating),
    specialties: [...new Set(specialties)],
    amenities: [...new Set(amenities)],
    bedInfo: { total: totalBeds, available, icu, oxygen },
  };
}

export function HospitalSearch() {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [showICU, setShowICU] = useState(false);
  const [showOxygen, setShowOxygen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    const fetchHospitals = async () => {
      setIsLoading(true);
      try {
        // Try fetching from all cities we know about
        const cityList = cities.filter((c) => c !== 'All Cities');
        const promises = cityList.map((city) =>
          fetch(`${API_BASE}/hospitals/${encodeURIComponent(city)}`)
            .then((r) => (r.ok ? r.json() : []))
            .catch(() => [])
        );
        const results = await Promise.all(promises);
        const all = results.flat();

        // Deduplicate by ID
        const seen = new Set();
        const unique = all.filter((h) => {
          if (seen.has(h.id)) return false;
          seen.add(h.id);
          return true;
        });

        setHospitals(unique.map(enrichHospital));
      } catch {
        setHospitals([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHospitals();
    // Refresh every 30s
    const interval = setInterval(fetchHospitals, 30000);
    return () => clearInterval(interval);
  }, []);

  const filtered = useMemo(() => {
    return hospitals.filter((h) => {
      if (searchTerm && !h.name.toLowerCase().includes(searchTerm.toLowerCase()) && !h.city.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (selectedCity !== 'All Cities' && h.city !== selectedCity) return false;
      if (selectedSpecialties.length > 0 && !selectedSpecialties.some((s) => h.specialties.includes(s))) return false;
      if (selectedAmenities.length > 0 && !selectedAmenities.every((a) => h.amenities.includes(a))) return false;
      if (showICU && h.bedInfo.icu <= 0) return false;
      if (showOxygen && h.bedInfo.oxygen <= 0) return false;
      return true;
    });
  }, [hospitals, searchTerm, selectedCity, selectedSpecialties, selectedAmenities, showICU, showOxygen]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCity, selectedSpecialties, selectedAmenities, showICU, showOxygen]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginatedHospitals = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('All Cities');
    setSelectedSpecialties([]);
    setSelectedAmenities([]);
    setShowICU(false);
    setShowOxygen(false);
  };

  const activeFilterCount =
    selectedSpecialties.length +
    selectedAmenities.length +
    (showICU ? 1 : 0) +
    (showOxygen ? 1 : 0) +
    (selectedCity !== 'All Cities' ? 1 : 0);

  return (
    <div className="bg-background">
      <BedTicker hospitals={hospitals} />

      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Find Hospitals & Beds</h1>
          <p className="mt-2 text-muted-foreground">
            Real-time bed availability across partner hospitals
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search hospitals by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="gap-2 md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-1">{activeFilterCount}</Badge>
            )}
          </Button>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} w-full shrink-0 md:block md:w-64`}>
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Filters</h3>
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-medium text-foreground">Bed Availability</h4>
                <div className="flex flex-col gap-2.5">
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Checkbox checked={showICU} onCheckedChange={(v) => setShowICU(!!v)} />
                    ICU Beds Available
                  </label>
                  <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Checkbox checked={showOxygen} onCheckedChange={(v) => setShowOxygen(!!v)} />
                    Oxygen Beds Available
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-medium text-foreground">Specialties</h4>
                <div className="flex flex-col gap-2.5">
                  {specialtyFilters.map((s) => (
                    <label key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Checkbox
                        checked={selectedSpecialties.includes(s)}
                        onCheckedChange={(checked) => {
                          setSelectedSpecialties((prev) =>
                            checked ? [...prev, s] : prev.filter((x) => x !== s)
                          );
                        }}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-medium text-foreground">Amenities</h4>
                <div className="flex flex-col gap-2.5">
                  {amenityFilters.map((a) => (
                    <label key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Checkbox
                        checked={selectedAmenities.includes(a)}
                        onCheckedChange={(checked) => {
                          setSelectedAmenities((prev) =>
                            checked ? [...prev, a] : prev.filter((x) => x !== a)
                          );
                        }}
                      />
                      {a}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Hospital List */}
          <div className="flex-1">
            {activeFilterCount > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Active:</span>
                {selectedCity !== 'All Cities' && (
                  <Badge variant="secondary" className="gap-1">
                    {selectedCity}
                    <button onClick={() => setSelectedCity('All Cities')}><X className="h-3 w-3" /></button>
                  </Badge>
                )}
                {showICU && (
                  <Badge variant="secondary" className="gap-1">
                    ICU
                    <button onClick={() => setShowICU(false)}><X className="h-3 w-3" /></button>
                  </Badge>
                )}
                {showOxygen && (
                  <Badge variant="secondary" className="gap-1">
                    Oxygen
                    <button onClick={() => setShowOxygen(false)}><X className="h-3 w-3" /></button>
                  </Badge>
                )}
                {selectedSpecialties.map((s) => (
                  <Badge key={s} variant="secondary" className="gap-1">
                    {s}
                    <button onClick={() => setSelectedSpecialties((p) => p.filter((x) => x !== s))}><X className="h-3 w-3" /></button>
                  </Badge>
                ))}
              </div>
            )}

            <p className="mb-4 text-sm text-muted-foreground">
              {isLoading ? 'Loading hospitals...' : `${filtered.length} hospital${filtered.length !== 1 ? 's' : ''} found${filtered.length > ITEMS_PER_PAGE ? ` — page ${currentPage} of ${totalPages}` : ''}`}
            </p>

            <div className="flex flex-col gap-4">
              {paginatedHospitals.map((hospital) => (
                <Link key={hospital.id} to={`/hospital/${hospital.id}`} className="block">
                <Card className="overflow-hidden border-border transition-shadow hover:shadow-md cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Activity className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">{hospital.name}</h3>
                            <p className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5" /> {hospital.address}
                            </p>
                            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                              <span className="flex items-center gap-1 text-amber-500">
                                <Star className="h-3.5 w-3.5 fill-amber-400" /> {hospital.rating}
                              </span>
                              <span className="flex items-center gap-1 text-muted-foreground">
                                <Phone className="h-3.5 w-3.5" /> {hospital.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {hospital.specialties.map((s) => (
                            <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 lg:gap-4">
                        <div className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
                          <BedDouble className="mx-auto h-5 w-5 text-primary" />
                          <div className="mt-1 text-lg font-bold text-foreground">{hospital.bedInfo.available}</div>
                          <div className="text-xs text-muted-foreground">General</div>
                        </div>
                        <div className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
                          <Activity className="mx-auto h-5 w-5 text-destructive" />
                          <div className="mt-1 text-lg font-bold text-foreground">{hospital.bedInfo.icu}</div>
                          <div className="text-xs text-muted-foreground">ICU</div>
                        </div>
                        <div className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
                          <Wind className="mx-auto h-5 w-5 text-accent" />
                          <div className="mt-1 text-lg font-bold text-foreground">{hospital.bedInfo.oxygen}</div>
                          <div className="text-xs text-muted-foreground">Oxygen</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              ))}

              {!isLoading && filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16">
                  <Search className="h-10 w-10 text-muted-foreground/40" />
                  <p className="mt-4 font-medium text-foreground">No hospitals found</p>
                  <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters</p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" /> Prev
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? 'default' : 'outline'}
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="gap-1"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
