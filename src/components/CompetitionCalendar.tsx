import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

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
        registerLink: "#",
      },
 {
        name: "Commerce Challenge 2025",
        organizer: "SRCC",
        tags: ["Finance", "Social Impact"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Hero Campus Challenge",
        organizer: "Hero MotoCorp",
        tags: ["Strategy", "Ops"],
        deadline: "",
        registerLink: "#",
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
        registerLink: "#",
      },
      {
        name: "Mondelēz Maestros 2024",
        organizer: "Mondelēz International",
        tags: ["Finance"],
        deadline: "",
        registerLink: "#",
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
        registerLink: "#",
      },
      {
        name: "KIRIT 4.0",
        organizer: "Kirloskar Institute",
        tags: ["Product", "B-Schools"],
        deadline: "",
        registerLink: "#",
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
        registerLink: "#",
      },
      {
        name: "L'Oréal Sustainability Challenge 2024",
        organizer: "L'Oréal India",
        tags: ["Sustainability", "Strategy"],
        deadline: "",
        registerLink: "#",
      }
    ]
  },
  {
    name: "May",
    competitions: [
      {
        name: "JSW Challenge 2024",
        organizer: "JSW",
        tags: ["Ops", "Strategy"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "HDFC Life Aspire",
        organizer: "HDFC Life",
        tags: ["Insurance", "Sales"],
        deadline: "",
        registerLink: "#",
      }
    ]
  },
  {
    name: "June",
    competitions: [
      {
        name: "AdXiaomi 2.0",
        organizer: "Xiaomi",
        tags: ["Marketing", "Innovation"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Thoucentric Bottoms Up 3.0",
        organizer: "Thoucentric",
        tags: ["Strategy"],
        deadline: "",
        registerLink: "#",
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
        registerLink: "#",
      },
      {
        name: "Reckitt Career Compass 2024",
        organizer: "Reckitt",
        tags: ["Marketing", "Sales"],
        deadline: "",
        registerLink: "#",
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
        registerLink: "#",
      },
      {
        name: "AB InBev 100+ Challenge 2024",
        organizer: "AB InBev",
        tags: ["Sustainability"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "NationBuilding Case Study",
        organizer: "Nation with NaMo",
        tags: ["Policy"],
        deadline: "",
        registerLink: "#",
      }
    ]
  },
  {
    name: "September",
    competitions: [
      {
        name: "Bharti FinPRO 5.0",
        organizer: "Bharti Enterprises",
        tags: ["Finance"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Kotak Life Growth Manager Challenge",
        organizer: "Kotak Life",
        tags: ["Sales"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Dexter Capital Challenge",
        organizer: "Dexter Capital",
        tags: ["VC"],
        deadline: "",
        registerLink: "#",
      }
    ]
  },
  {
    name: "October",
    competitions: [
      {
        name: "PwC Campus Contender",
        organizer: "PwC",
        tags: ["Strategy"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Asian Paints Spectrum",
        organizer: "Asian Paints",
        tags: ["Design"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Governance Challenge 2024",
        organizer: "Samagra Governance",
        tags: ["Public Policy"],
        deadline: "",
        registerLink: "#",
      }
    ]
  },
  {
    name: "November",
    competitions: [
      {
        name: "Dabur Verve Season 3",
        organizer: "Dabur",
        tags: ["FMCG", "Sales"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Asian Paints CANVAS",
        organizer: "Asian Paints",
        tags: ["Design"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Cummins Redefine 2024",
        organizer: "Cummins India",
        tags: ["Engineering"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Flipkart WiRED 8.0",
        organizer: "Flipkart",
        tags: ["Strategy"],
        deadline: "",
        registerLink: "#",
      }
    ]
  },
  {
    name: "December",
    competitions: [
      {
        name: "Samsung E.D.G.E. 8.0",
        organizer: "Samsung India",
        tags: ["Innovation"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "TAS Imagination Challenge 2024",
        organizer: "Tata Group",
        tags: ["Leadership"],
        deadline: "",
        registerLink: "#",
      },
      {
        name: "Amazon ACE",
        organizer: "Amazon",
        tags: ["Ops", "Customer Experience"],
        deadline: "",
        registerLink: "#",
      }
    ]
  }
];

const CompetitionCard: React.FC<{ competition: Competition }> = ({ competition }) => {
  return (
    <div className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden">
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating decoration */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-calendar-mint/20 to-calendar-maroon/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex-grow">
          <h3 className="font-inter font-black text-xl text-calendar-text mb-3 leading-tight group-hover:text-calendar-maroon transition-colors duration-300">
            {competition.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 font-inter font-semibold">
            {competition.organizer}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {competition.tags.map((tag, index) => (
              <Badge 
                key={index} 
                className="bg-gradient-to-r from-calendar-mint to-calendar-mint/80 text-calendar-text border-0 font-inter text-xs px-4 py-2 rounded-full hover:from-calendar-maroon hover:to-calendar-maroon/80 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          {competition.deadline && (
            <p className="text-muted-foreground text-xs mb-4 font-inter">
              Deadline: {competition.deadline}
            </p>
          )}
        </div>
        
        <Button 
          variant="calendar"
          size="sm"
          className="w-full bg-gradient-to-r from-calendar-maroon to-calendar-maroon/90 hover:from-calendar-maroon/90 hover:to-calendar-maroon text-white group-hover:shadow-xl group-hover:shadow-calendar-maroon/30 transition-all duration-500 rounded-full font-bold py-3 transform hover:scale-105"
          onClick={() => window.open(competition.registerLink, '_blank')}
        >
          Register Now
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

const MonthSection: React.FC<{ month: Month; monthIndex: number }> = ({ month, monthIndex }) => {
  const gradientClasses = [
    'bg-gradient-to-br from-color-1 via-color-1/90 to-color-1/80', // January
    'bg-gradient-to-br from-color-2 via-color-2/90 to-color-2/80', // February  
    'bg-gradient-to-br from-color-3 via-color-3/90 to-color-3/80', // March
    'bg-gradient-to-br from-color-4 via-color-4/90 to-color-4/80', // April
    'bg-gradient-to-br from-color-5 via-color-5/90 to-color-5/80', // May
  ];
  
  const glowClasses = [
    'shadow-[0_0_50px_rgba(64,123,91,0.4)]', // Dark slate gray glow
    'shadow-[0_0_50px_rgba(101,2,0,0.4)]',   // Blood red glow
    'shadow-[0_0_50px_rgba(208,252,179,0.6)]', // Tea green glow
    'shadow-[0_0_50px_rgba(2,2,3,0.4)]',     // Black glow
    'shadow-[0_0_50px_rgba(61,59,64,0.4)]',  // Jet glow
  ];
  
  const backgroundClass = gradientClasses[monthIndex % 5];
  const glowClass = glowClasses[monthIndex % 5];
  const textClass = (monthIndex % 5 === 2) ? 'text-black' : 'text-white';

  return (
    <section className={`${backgroundClass} ${glowClass} w-full py-20 relative overflow-hidden`}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-current animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border border-current animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rotate-45 border border-current animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 rotate-12 border border-current animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`font-inter text-6xl md:text-8xl font-black ${textClass} mb-4 tracking-wider transform transition-all duration-500 hover:scale-105`}>
            {month.name}
          </h2>
          <div className={`w-24 h-1 ${textClass === 'text-white' ? 'bg-white/30' : 'bg-black/30'} mx-auto rounded-full`}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {month.competitions.map((competition, index) => (
            <CompetitionCard key={index} competition={competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompetitionCalendar: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-calendar-bg via-white to-calendar-mint/20 py-24 px-4 md:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-calendar-maroon/20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-calendar-mint/30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-calendar-maroon/10 to-calendar-mint/10 animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-inter text-6xl md:text-8xl font-black text-calendar-text mb-6 tracking-wider">
            Competition
            <span className="block text-calendar-maroon drop-shadow-lg">Calendar</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-calendar-maroon to-calendar-mint mx-auto rounded-full mb-8"></div>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover and register for the most prestigious B-school competitions and challenges
          </p>
        </div>
      </div>
      
      {competitionData.map((month, index) => (
        <MonthSection key={index} month={month} monthIndex={index} />
      ))}
    </div>
  );
};

export default CompetitionCalendar;