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
    <div className="group bg-calendar-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100/50">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="font-inter font-bold text-lg text-calendar-text mb-2 leading-tight">
            {competition.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3 font-inter">
            {competition.organizer}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {competition.tags.map((tag, index) => (
              <Badge 
                key={index} 
                className="bg-calendar-mint text-calendar-text border-0 font-inter text-xs px-3 py-1 rounded-full hover:bg-calendar-mint/80 transition-colors"
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
          className="w-full group-hover:shadow-md transition-all duration-300 rounded-full"
          onClick={() => window.open(competition.registerLink, '_blank')}
        >
          Register
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const MonthSection: React.FC<{ month: Month; monthIndex: number }> = ({ month, monthIndex }) => {
  const colorClasses = [
    'bg-color-1', // January - Dark slate gray
    'bg-color-2', // February - Blood red  
    'bg-color-3', // March - Tea green
    'bg-color-4', // April - Black
    'bg-color-5', // May - Jet
  ];
  
  const backgroundClass = colorClasses[monthIndex % 5];
  const textClass = (monthIndex % 5 === 1 || monthIndex % 5 === 3) ? 'text-white' : 'text-black';

  return (
    <div className={`${backgroundClass} p-8 rounded-2xl mb-16 transition-all duration-300`}>
      <h2 className={`font-inter text-5xl md:text-6xl font-bold ${textClass} mb-8 text-center md:text-left`}>
        {month.name}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {month.competitions.map((competition, index) => (
          <CompetitionCard key={index} competition={competition} />
        ))}
      </div>
    </div>
  );
};

const CompetitionCalendar: React.FC = () => {
  return (
    <section className="min-h-screen bg-calendar-bg py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-inter text-5xl md:text-6xl font-bold text-calendar-text mb-4">
            Competition Calendar
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and register for the most prestigious B-school competitions and challenges
          </p>
        </div>
        
        {competitionData.map((month, index) => (
          <MonthSection key={index} month={month} monthIndex={index} />
        ))}
      </div>
    </section>
  );
};

export default CompetitionCalendar;