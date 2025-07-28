import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ExternalLink, Search, Filter } from 'lucide-react';

interface Competition {
  name: string;
  organizer: string;
  tags: string[];
  deadline: string;
  registerLink: string;
  logo?: string;
}

interface Month {
  name: string;
  competitions: Competition[];
}

const competitionData: Month[] = [
  {
    name: "January",
    competitions: [
      {
        name: "Muthoot Finclusion Challenge 2025",
        organizer: "Muthoot Finance",
        tags: ["Finance", "Social Impact"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/muthoot-finclusion-challenge-2025-muthoot-finance-1285698",
      },
      {
        name: "Hero Campus Challenge",
        organizer: "Hero MotoCorp",
        tags: ["Strategy", "Ops"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/hero-campus-challenge-season-9-hero-motocorp-limited-840491?refId=Xo47NQe",
      },
      {
        name: "KIRIT 4.0",
        organizer: "Kirloskar Institute",
        tags: ["Product", "B-Schools"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/kirit-40-kirloskar-institute-of-management-kim-852976?refId=Xo47NQe",
      }
    ]
  },
  {
    name: "February",
    competitions: [
      {
        name: "L'Oréal Brandstorm 2024",
        organizer: "L'Oréal India",
        tags: ["Innovation", "Marketing"],
        deadline: "",
        registerLink: "https://unstop.com/o/cVR3MJA?lb=XRsQ5pg&utm_medium=Share&utm_source=shortUrl",
      },
      {
        name: "Mondelēz Maestros 2024",
        organizer: "Mondelēz International",
        tags: ["Finance"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/mondelez-maestros-2024-finance-track-mondelez-maestros-2024-mondelez-international-1210008",
      },
      {
        name: "L'Oréal Sustainability Challenge 2024",
        organizer: "L'Oréal India",
        tags: ["Sustainability", "Strategy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/loreal-sustainability-challenge-2024-loreal-1114541",
      },
      {
        name: "NationBuilding Case Study",
        organizer: "Nation with NaMo",
        tags: ["Policy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/nationbuilding-case-study-competition-nation-with-namo-882518?refId=Xo47NQe",
      }
    ]
  },
  {
    name: "March",
    competitions: [
      {
        name: "Eurogrip TORQ Challenge 3.0",
        organizer: "Eurogrip",
        tags: ["Marketing", "Business"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/eurogrip-torq-challenge-30-eurogrip-1391351",
      }
    ]
  },
  {
    name: "April",
    competitions: [
      {
        name: "Acuwar - Acuvon Consulting Case Comp",
        organizer: "Acuvon",
        tags: ["Consulting"],
        deadline: "",
        registerLink: "https://www.linkedin.com/posts/acuvon_acuwar-casecompetition-consulting-activity-7238114763224858625-3sWL?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy",
      }
    ]
  },
  {
    name: "June",
    competitions: [
      {
        name: "AdXiaomi 2.O Competition",
        organizer: "Xiaomi",
        tags: ["Marketing", "Innovation"],
        deadline: "",
        registerLink: "https://careers.event.mi.com/adxiaomi",
      },
      {
        name: "Thoucentric Bottoms Up 3.0",
        organizer: "Thoucentric",
        tags: ["Strategy"],
        deadline: "",
        registerLink: "https://bottomsup.thoucentric.com/register/",
      },
      {
        name: "ITC Limited | Interrobang Season 14",
        organizer: "ITC Limited",
        tags: ["Strategy", "Marketing"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Xiaomi Summit 6.0",
        organizer: "Xiaomi",
        tags: ["Innovation", "Strategy"],
        deadline: "",
        registerLink: "https://careers.event.mi.com/misummit",
      },
      {
        name: "Women of Mettle_2024",
        organizer: "Mettl",
        tags: ["Leadership", "Women Empowerment"],
        deadline: "",
        registerLink: "https://xathon.mettl.com/event/women-of-mettle-2024",
      }
    ]
  },
  {
    name: "July",
    competitions: [
      {
        name: "MMT Young Turks",
        organizer: "MakeMyTrip",
        tags: ["Product"],
        deadline: "",
        registerLink: "https://careers.makemytrip.com/prod/campus/competitions",
      },
      {
        name: "Reckitt Career Compass 2024",
        organizer: "Reckitt",
        tags: ["Marketing", "Sales"],
        deadline: "",
        registerLink: "https://insidekampus.com/competition/reckitt-career-compass-2024-iift-delhi",
      },
      {
        name: "Airtel iCreate 2024",
        organizer: "Airtel",
        tags: ["Innovation", "Strategy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/airtel-icreate-2024-2nd-year-b-school-track-airtel-icreate-2024-airtel-1064640?refId=Xo47NQe",
      },
      {
        name: "Accenture B-School Strategy Challenge",
        organizer: "Accenture",
        tags: ["Strategy", "Consulting"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/accenture-b-school-strategy-challenge-season-8-accenture-1070711?refId=Xo47NQe",
      },
      {
        name: "TVS Credit E.P.I.C 6.0",
        organizer: "TVS Credit",
        tags: ["Finance", "Strategy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/tvs-credit-epic-60-strategy-challenge-epic-season-6-tvs-credit-1067471?refId=Xo47NQe",
      }
    ]
  },
  {
    name: "August",
    competitions: [
      {
        name: "GE HealthCare ThinkAloud 2024",
        organizer: "GE HealthCare",
        tags: ["Healthcare"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/ge-healthcare-thinkaloud-2024-ge-healthcare-1139308",
      },
      {
        name: "ABInBev 100+ Challenge 2024",
        organizer: "AB InBev",
        tags: ["Sustainability"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/abinbev-100-challenge-2024-ab-inbev-1125718",
      },
      {
        name: "Steel-a-thon Season 11",
        organizer: "Mettl",
        tags: ["Strategy", "Steel Industry"],
        deadline: "",
        registerLink: "https://xathon.mettl.com/event/steelathon2024",
      },
      {
        name: "Asian Paints Spectrum",
        organizer: "Asian Paints",
        tags: ["Design"],
        deadline: "",
        registerLink: "https://insidekampus.com/competition/asian-paints-spectrum-season-1",
      },
      {
        name: "Rebel Foods' EatSure Cloud",
        organizer: "Rebel Foods",
        tags: ["Product", "Strategy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/rebel-foods-eatsure-cloud-2024-rebel-foods-1116221?refId=Xo47NQe",
      },
      {
        name: "Asian Paints CANVAS",
        organizer: "Asian Paints",
        tags: ["Design"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/asian-paints-canvas-2024-asian-paints-1102474?refId=Xo47NQe",
      },
      {
        name: "Flipkart WiRED 8.0",
        organizer: "Flipkart",
        tags: ["Strategy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/flipkart-wired-80-business-track-flipkart-wired-80-flipkart-1088343?refId=Xo47NQe",
      },
      {
        name: "TAS- Tata Imagination Challenge 2024",
        organizer: "Tata Group",
        tags: ["Leadership"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/tata-imagination-challenge-2024-student-track-tata-imagination-challenge-2024-tata-group-1096490?refId=Xo47NQe",
      },
      {
        name: "Amazon Customer Excellence (ACE)",
        organizer: "Amazon",
        tags: ["Ops", "Customer Experience"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/amazon-customer-excellence-ace-challenge-2024-amazon-1008875",
      }
    ]
  },
  {
    name: "September",
    competitions: [
      {
        name: "Kotak Life Growth Manager Hiring Challenge Case Competition",
        organizer: "Kotak Life",
        tags: ["Sales"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/kotak-life-growth-manager-hiring-challenge-season-2-kotak-life-insurance-kotak-742051",
      },
      {
        name: "Bharti FinPRO 5.0",
        organizer: "Bharti Enterprises",
        tags: ["Finance"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Over The Wall Season 12",
        organizer: "Marico",
        tags: ["Strategy", "FMCG"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/over-the-wall-season-12-marico-1100615",
      },
      {
        name: "Galderma Rising Achievers",
        organizer: "Galderma",
        tags: ["Healthcare", "Strategy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/grad-galderma-rising-achievers-in-dermatology-galderma-1122281",
      },
      {
        name: "TrenDSetter 3.0",
        organizer: "Mettl",
        tags: ["Data Science", "Analytics"],
        deadline: "",
        registerLink: "https://xathon.mettl.com/event/TrenDSetter03",
      },
      {
        name: "Dabur Verve Season 3",
        organizer: "Dabur",
        tags: ["FMCG", "Sales"],
        deadline: "",
        registerLink: "https://xathon.mettl.com/event/daburVerve2024",
      },
      {
        name: "Cummins Redefine 2024",
        organizer: "Cummins India",
        tags: ["Engineering"],
        deadline: "",
        registerLink: "https://insidekampus.com/competition/cummins-redefine-2024",
      }
    ]
  },
  {
    name: "October",
    competitions: [
      {
        name: "PwC India Campus Contender",
        organizer: "PwC",
        tags: ["Strategy"],
        deadline: "",
        registerLink: "https://apna.co/contests/pwc-campus-contender-2024",
      },
      {
        name: "Dexter Capital Challenge",
        organizer: "Dexter Capital",
        tags: ["VC"],
        deadline: "",
        registerLink: "https://www.linkedin.com/posts/devendra-agrawal-85144598_next-time-i-want-to-hire-freshers-i-shall-activity-7264132627144585217-b3fh",
      },
      {
        name: "VOIS Vantage 2023",
        organizer: "Vodafone Idea",
        tags: ["Strategy", "B-Schools"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/vantage-2023-1st-year-b-school-track-vantage-2023-other-organization-not-listed-here-772333?refId=Xo47NQe",
      }
    ]
  },
  {
    name: "November",
    competitions: [
      {
        name: "The JSW Challenge 2024",
        organizer: "JSW",
        tags: ["Ops", "Strategy"],
        deadline: "",
        registerLink: "https://insidekampus.com/competition/the-jsw-challenge-2024",
      },
      {
        name: "The Governance Challenge 2024",
        organizer: "Samagra Governance",
        tags: ["Public Policy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/the-governance-challenge-2024-samagra-governance-1148681",
      },
      {
        name: "Reliance TUP",
        organizer: "Reliance Industries Limited",
        tags: ["Strategy", "Leadership"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/reliance-tup-90-reliance-industries-limited-ril-814583?refId=Xo47NQe",
      }
    ]
  },
  {
    name: "December",
    competitions: [
      {
        name: "HDFC Life's Aspire",
        organizer: "HDFC Life",
        tags: ["Insurance", "Sales"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/hdfc-lifes-aspire-hdfc-life-1167692",
      }
    ]
  }
];

const CompetitionCard: React.FC<{ competition: Competition }> = ({ competition }) => {
  return (
    <div className="group relative bg-gradient-card rounded-3xl p-8 transition-all duration-700 hover:-translate-y-3 border border-accent/20 overflow-hidden transform-gpu perspective-1000 shadow-card hover:shadow-glow-red"
         style={{ 
           background: 'var(--gradient-card)'
         }}>
      
      {/* 3D depth layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
      
      {/* Spotlight glow effect */}
      <div className="absolute -inset-1 shadow-glow-spotlight rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Floating decoration with red accent glow */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-glow-red"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex-grow">
          <h3 className="font-inter font-black text-2xl text-foreground mb-4 leading-tight group-hover:text-accent transition-colors duration-500 drop-shadow-sm">
            {competition.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-6 font-inter font-semibold tracking-wide">
            {competition.organizer}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {competition.tags.map((tag, index) => (
              <Badge 
                key={index} 
                className="bg-gradient-to-r from-accent/20 to-accent/10 text-accent border border-accent/20 font-inter text-xs px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-accent hover:to-accent/90 hover:text-background hover:border-accent transition-all duration-500 shadow-lg hover:shadow-glow-red transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          {competition.deadline && (
            <p className="text-muted-foreground text-xs mb-6 font-inter font-medium opacity-75">
              Deadline: {competition.deadline}
            </p>
          )}
        </div>
        
        <Button 
          className="w-full bg-gradient-primary hover:shadow-glow-white text-primary-foreground font-bold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl border border-primary/20 backdrop-blur-sm group-hover:shadow-primary/30"
          onClick={() => window.open(competition.registerLink, '_blank')}
        >
          <span className="flex items-center justify-center gap-3">
            Register Now
            <ExternalLink className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-500" />
          </span>
        </Button>
      </div>
    </div>
  );
};

const MonthSection: React.FC<{ month: Month; monthIndex: number; competitions: Competition[] }> = ({ month, monthIndex, competitions }) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  if (competitions.length === 0) return null;

  return (
    <section 
      ref={sectionRef}
      className="w-full py-24 relative overflow-hidden bg-gradient-hero scroll-fade-in"
    >
      {/* Premium 3D background effects with spotlight */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border-2 border-accent/30 animate-pulse shadow-glow-red"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-accent/20 animate-pulse delay-1000 shadow-glow-spotlight"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rotate-45 border border-accent/15 animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-40 h-40 rotate-12 border border-accent/25 animate-pulse delay-700"></div>
      </div>
      
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 scroll-slide-left">
          <h2 className="font-inter text-7xl md:text-9xl font-black text-foreground mb-6 tracking-wider transform transition-all duration-700 hover:scale-105 drop-shadow-2xl">
            {month.name}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full opacity-60 shadow-glow-red"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {competitions.map((competition, index) => (
            <div key={index} className="scroll-scale-up">
              <CompetitionCard competition={competition} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompetitionCalendar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Get all unique tags for filtering
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    competitionData.forEach(month => 
      month.competitions.forEach(comp => 
        comp.tags.forEach(tag => tags.add(tag))
      )
    );
    return Array.from(tags).sort();
  }, []);

  // Filter competitions based on search and tag
  const filteredMonths = useMemo(() => {
    return competitionData.map(month => ({
      ...month,
      competitions: month.competitions.filter(competition => {
        const matchesSearch = competition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             competition.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             competition.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesTag = !selectedTag || competition.tags.includes(selectedTag);
        
        return matchesSearch && matchesTag;
      })
    })).filter(month => month.competitions.length > 0);
  }, [searchTerm, selectedTag]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Premium Hero Section */}
      <div className="relative overflow-hidden py-32 px-4 md:px-8 bg-gradient-hero">
        
        {/* Premium animated background with spotlight effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-32 left-32 w-96 h-96 rounded-full bg-accent/10 animate-pulse blur-3xl shadow-glow-spotlight"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 rounded-full bg-accent/15 animate-pulse delay-1000 blur-2xl shadow-glow-red"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/5 to-accent/8 animate-pulse delay-500 blur-3xl shadow-glow-spotlight"></div>
        </div>
        
        {/* Floating elements with red accent */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full animate-pulse shadow-glow-red"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-primary rounded-full animate-pulse delay-300 shadow-glow-white"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse delay-700 shadow-glow-red"></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-primary rounded-full animate-pulse delay-1000 shadow-glow-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="scroll-fade-in">
            <h1 className="font-inter text-7xl md:text-9xl font-black text-foreground mb-8 tracking-wider leading-tight drop-shadow-2xl">
              Competition
              <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent drop-shadow-none">
                Calendar
              </span>
            </h1>
          </div>
          
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-12 opacity-80 shadow-glow-red scroll-slide-left"></div>
          
          <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-16 opacity-90 scroll-slide-right">
            Discover and register for the most prestigious B-school competitions and challenges with our premium search experience
          </p>

          {/* Premium Search Section */}
          <div className="max-w-4xl mx-auto mb-8 scroll-scale-up">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search competitions, organizers, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-4 bg-card/80 border border-accent/20 rounded-2xl text-foreground placeholder-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20 backdrop-blur-sm shadow-card transition-all duration-300 hover:shadow-glow-red"
                />
              </div>

              {/* Tag Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="pl-12 pr-8 py-4 bg-card/80 border border-accent/20 rounded-2xl text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 backdrop-blur-sm shadow-card transition-all duration-300 appearance-none cursor-pointer hover:shadow-glow-red"
                >
                  <option value="">All Categories</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag} className="bg-card text-foreground">
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Results Summary */}
            {(searchTerm || selectedTag) && (
              <p className="text-muted-foreground text-sm mt-4 opacity-75">
                Found {filteredMonths.reduce((total, month) => total + month.competitions.length, 0)} competitions
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedTag && ` in ${selectedTag}`}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Competition Sections */}
      {filteredMonths.map((month, index) => (
        <MonthSection 
          key={index} 
          month={month} 
          monthIndex={index} 
          competitions={month.competitions}
        />
      ))}

      {filteredMonths.length === 0 && (searchTerm || selectedTag) && (
        <div className="py-24 text-center">
          <p className="text-muted-foreground text-xl">No competitions found matching your criteria.</p>
          <Button 
            onClick={() => {
              setSearchTerm('');
              setSelectedTag('');
            }}
            className="mt-6 bg-accent text-background hover:bg-accent/90 transition-colors duration-300 shadow-glow-red"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CompetitionCalendar;