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

const sampleData: Month[] = [
  {
    name: "March",
    competitions: [
      {
        name: "PwC Future of Work",
        organizer: "PwC India",
        tags: ["HR", "Strategy"],
        deadline: "March 15, 2024",
        registerLink: "#",
      },
      {
        name: "McKinsey Forward Program",
        organizer: "McKinsey & Company",
        tags: ["Consulting", "Leadership"],
        deadline: "March 20, 2024",
        registerLink: "#",
      },
      {
        name: "Google Product Challenge",
        organizer: "Google",
        tags: ["Product", "Technology"],
        deadline: "March 25, 2024",
        registerLink: "#",
      }
    ]
  },
  {
    name: "April",
    competitions: [
      {
        name: "Deloitte Case Competition",
        organizer: "Deloitte",
        tags: ["Strategy", "Finance"],
        deadline: "April 10, 2024",
        registerLink: "#",
      },
      {
        name: "Bain Capability Network",
        organizer: "Bain & Company",
        tags: ["Consulting", "Analytics"],
        deadline: "April 18, 2024",
        registerLink: "#",
      }
    ]
  },
  {
    name: "May",
    competitions: [
      {
        name: "BCG Gamma Challenge",
        organizer: "Boston Consulting Group",
        tags: ["Data Science", "AI"],
        deadline: "May 5, 2024",
        registerLink: "#",
      },
      {
        name: "Goldman Sachs Trading Competition",
        organizer: "Goldman Sachs",
        tags: ["Finance", "Trading"],
        deadline: "May 15, 2024",
        registerLink: "#",
      },
      {
        name: "Amazon Supply Chain Challenge",
        organizer: "Amazon",
        tags: ["Operations", "Logistics"],
        deadline: "May 22, 2024",
        registerLink: "#",
      }
    ]
  }
];

const CompetitionCard: React.FC<{ competition: Competition }> = ({ competition }) => {
  return (
    <div className="group bg-calendar-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="font-playfair font-semibold text-xl text-calendar-text mb-2 leading-tight">
            {competition.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3 font-inter">
            {competition.organizer}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {competition.tags.map((tag, index) => (
              <Badge 
                key={index} 
                className="bg-calendar-mint text-calendar-text border-0 font-inter text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <p className="text-muted-foreground text-xs mb-4 font-inter">
            Deadline: {competition.deadline}
          </p>
        </div>
        
        <Button 
          variant="calendar"
          size="sm"
          className="w-full group-hover:shadow-lg transition-all duration-300"
          onClick={() => window.open(competition.registerLink, '_blank')}
        >
          Register Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const MonthSection: React.FC<{ month: Month }> = ({ month }) => {
  return (
    <div className="mb-16">
      <h2 className="font-dancing text-6xl md:text-7xl font-bold text-calendar-text mb-8 text-center md:text-left transform -rotate-1">
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
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Competition Calendar
          </h1>
          <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
            Discover and register for the most prestigious B-school competitions and challenges
          </p>
        </div>
        
        {sampleData.map((month, index) => (
          <MonthSection key={index} month={month} />
        ))}
      </div>
    </section>
  );
};

export default CompetitionCalendar;