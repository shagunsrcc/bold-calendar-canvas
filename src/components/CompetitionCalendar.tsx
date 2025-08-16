import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ExternalLink, Search, Filter, Building2 } from 'lucide-react';
import companyLogos from '@/assets/logos/company-logos.png';

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
      },
      {
        name: "Cushman & Wakefield Consulting Challenge",
        organizer: "Ashoka Consulting",
        tags: ["Business Plan", "Case Study", "Data Analytics", "Finance", "Strategy"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/cushman-wakefield-consulting-challenge-ashoka-consulting-club-1384158",
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
      },
      {
        name: "Bain Brainwars (BrAINWARS) 2025",
        organizer: "Bain & Company's Bain Capability Network (BCN)",
        tags: ["Consulting", "Case Study", "Mentorship", "PPI Opportunity"],
        deadline: "",
        registerLink: "Committees/POCs for the link",
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
      },
      {
        name: "EY CAFTA Case Championship 2025",
        organizer: "EY",
        tags: ["Financial services", "Consulting", "Risk"],
        deadline: "",
        registerLink: "https://www.ey.com/en_in/services/consulting/cafta-case-championship-2025",
      },
      {
        name: "ZS Associates - Campus Beats 2025",
        organizer: "ZS Associates",
        tags: ["Coding"],
        deadline: "",
        registerLink: "https://www.linkedin.com/posts/zs-associates_zscampusbeats-activity-7187329184493367296-GoY9/",
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
      },
      {
        name: "Ideation X 2.0",
        organizer: "SBI Life",
        tags: ["Finance", "Social Impact"],
        deadline: "",
        registerLink: "https://unstop.com/competition/ideationx-2-unstop-1142539",
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
      },
      {
        name: "Deloitte USI - Deloitte Graduate School Maverick",
        organizer: "Deloitte USI",
        tags: ["Business", "Case Study"],
        deadline: "",
        registerLink: "https://unstop.com/competitions/graduate-school-maverick-2017-deloitte-consulting-llp-60927",
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
    <div className="group relative bg-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 border border-accent/20 overflow-hidden shadow-card"
         style={{ 
           backgroundColor: 'hsl(var(--card))'
         }}>
      
      {/* 3D depth layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex-grow">
          {/* Company Logo */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden">
              <Building2 className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-inter font-black text-lg text-primary leading-tight group-hover:text-accent transition-colors duration-300 drop-shadow-sm line-clamp-2">
                {competition.name}
              </h3>
            </div>
          </div>
          
          <p className="text-card-foreground text-sm mb-4 font-inter font-semibold tracking-wide">
            {competition.organizer}
          </p>
          
           <div className="flex flex-wrap gap-2 mb-4">
             {competition.tags.slice(0, 3).map((tag, index) => (
                <Badge 
                 key={index} 
                 className="bg-accent/20 text-primary border border-accent/30 font-inter text-xs px-3 py-1 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-sm transform hover:scale-105"
               >
                 {tag}
               </Badge>
            ))}
            {competition.tags.length > 3 && (
              <Badge className="bg-muted/50 text-muted-foreground border border-muted/20 font-inter text-xs px-3 py-1 rounded-full">
                +{competition.tags.length - 3}
              </Badge>
            )}
          </div>
          
          {competition.deadline && (
            <p className="text-card-foreground text-xs mb-4 font-inter font-medium opacity-75">
              Deadline: {competition.deadline}
            </p>
          )}
        </div>
        
        <Button 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg border border-accent/20"
          onClick={() => window.open(competition.registerLink, '_blank')}
        >
          <span className="flex items-center justify-center gap-2">
            Register Now
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </span>
        </Button>
      </div>
    </div>
  );
};

const MonthSection: React.FC<{ month: Month; monthIndex: number; competitions: Competition[] }> = ({ month, monthIndex, competitions }) => {
  if (competitions.length === 0) return null;

  return (
    <section 
      className="w-full py-16 relative overflow-hidden bg-background z-10"
    >
      {/* Simplified background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-accent/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-accent/15 animate-pulse delay-500"></div>
      </div>
      
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-inter text-5xl md:text-7xl font-black text-primary mb-4 tracking-wider transform transition-all duration-300 hover:scale-105 drop-shadow-2xl">
            {month.name}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-60"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {competitions.map((competition, index) => (
            <div key={index}>
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large stars */}
        <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-accent rounded-full animate-pulse shadow-glow-red opacity-80"></div>
        <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500 shadow-glow-white opacity-70"></div>
        <div className="absolute top-[45%] left-[10%] w-2.5 h-2.5 bg-accent rounded-full animate-pulse delay-1000 shadow-glow-red opacity-90"></div>
        <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-primary rounded-full animate-pulse delay-700 shadow-glow-white opacity-60"></div>
        <div className="absolute top-[80%] left-[25%] w-2 h-2 bg-accent rounded-full animate-pulse delay-300 shadow-glow-red opacity-75"></div>
        <div className="absolute top-[35%] right-[30%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1200 shadow-glow-white opacity-80"></div>
        
        {/* Medium stars */}
        <div className="absolute top-[20%] left-[40%] w-1 h-1 bg-accent rounded-full animate-pulse delay-800 shadow-glow-red opacity-60"></div>
        <div className="absolute top-[55%] right-[40%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-400 shadow-glow-white opacity-70"></div>
        <div className="absolute top-[15%] right-[50%] w-1 h-1 bg-accent rounded-full animate-pulse delay-600 shadow-glow-red opacity-50"></div>
        <div className="absolute top-[70%] left-[50%] w-2 h-2 bg-primary rounded-full animate-pulse delay-900 shadow-glow-white opacity-85"></div>
        <div className="absolute top-[40%] left-[60%] w-1 h-1 bg-accent rounded-full animate-pulse delay-200 shadow-glow-red opacity-65"></div>
        
        {/* Small scattered stars */}
        <div className="absolute top-[12%] left-[70%] w-0.5 h-0.5 bg-primary rounded-full animate-pulse delay-1100 opacity-40"></div>
        <div className="absolute top-[28%] right-[60%] w-0.5 h-0.5 bg-accent rounded-full animate-pulse delay-1500 opacity-50"></div>
        <div className="absolute top-[48%] left-[80%] w-1 h-1 bg-primary rounded-full animate-pulse delay-350 opacity-45"></div>
        <div className="absolute top-[65%] right-[70%] w-0.5 h-0.5 bg-accent rounded-full animate-pulse delay-750 opacity-35"></div>
        <div className="absolute top-[85%] left-[75%] w-1 h-1 bg-primary rounded-full animate-pulse delay-450 opacity-55"></div>
        <div className="absolute top-[30%] left-[85%] w-0.5 h-0.5 bg-accent rounded-full animate-pulse delay-1300 opacity-40"></div>
        <div className="absolute top-[50%] right-[80%] w-1 h-1 bg-primary rounded-full animate-pulse delay-650 opacity-60"></div>
        
        {/* Corner stars */}
        <div className="absolute top-[5%] left-[5%] w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-1000 shadow-glow-red opacity-70"></div>
        <div className="absolute top-[8%] right-[8%] w-1 h-1 bg-primary rounded-full animate-pulse delay-500 shadow-glow-white opacity-60"></div>
        <div className="absolute bottom-[10%] left-[8%] w-2 h-2 bg-accent rounded-full animate-pulse delay-800 shadow-glow-red opacity-75"></div>
        <div className="absolute bottom-[12%] right-[10%] w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-300 shadow-glow-white opacity-80"></div>
      </div>

      {/* Premium Hero Section */}
      <div className="relative overflow-hidden py-24 px-4 md:px-8 bg-background z-10">
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div>
            <h1 className="font-inter text-5xl md:text-7xl font-black text-primary mb-6 tracking-wider leading-tight drop-shadow-2xl">
              Competition
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-none">
                Calendar
              </span>
            </h1>
          </div>
          
          <div className="w-32 h-1 bg-accent mx-auto rounded-full mb-8 opacity-80"></div>
          
          <p className="font-inter text-lg md:text-xl text-card-foreground max-w-3xl mx-auto leading-relaxed mb-12 opacity-90">
            Discover and register for the most prestigious undergraduate and B-school competitions and challenges
          </p>

          {/* Premium Search Section */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search competitions, organizers, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-4 bg-card border border-accent/20 rounded-2xl text-card-foreground placeholder-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20 shadow-card transition-all duration-300"
                />
              </div>

              {/* Tag Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-accent h-5 w-5" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="pl-12 pr-8 py-4 bg-card border border-accent/20 rounded-2xl text-card-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 shadow-card transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">All Categories</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag} className="bg-card text-card-foreground">
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Results Summary */}
            {(searchTerm || selectedTag) && (
              <p className="text-card-foreground text-sm mt-4 opacity-75">
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
          <p className="text-card-foreground text-xl">No competitions found matching your criteria.</p>
          <Button 
            onClick={() => {
              setSearchTerm('');
              setSelectedTag('');
            }}
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CompetitionCalendar;