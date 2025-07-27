import CompetitionCalendar from '@/components/CompetitionCalendar';

const GeometricShapes = () => (
  <>
    {/* Floating 3D geometric shapes */}
    <div className="fixed top-10 left-10 w-16 h-16 geometric-shape floating-3d opacity-20 z-0">
      <div className="w-full h-full bg-gradient-to-br from-[hsl(94,89%,84%)] to-[hsl(358,100%,20%)] rounded-lg transform rotate-45"></div>
    </div>
    <div className="fixed top-32 right-20 w-12 h-12 geometric-shape floating-3d opacity-15 z-0" style={{animationDelay: '2s'}}>
      <div className="w-full h-full bg-gradient-to-tl from-[hsl(358,100%,20%)] to-[hsl(222,15%,12%)] rounded-full"></div>
    </div>
    <div className="fixed bottom-20 left-1/4 w-20 h-20 geometric-shape floating-3d opacity-10 z-0" style={{animationDelay: '4s'}}>
      <div className="w-full h-full bg-gradient-to-r from-[hsl(94,89%,84%)] to-transparent border-2 border-[hsl(94,89%,84%)] rounded-xl transform rotate-12"></div>
    </div>
    <div className="fixed top-1/2 right-10 w-14 h-14 geometric-shape floating-3d opacity-20 z-0" style={{animationDelay: '1s'}}>
      <div className="w-full h-full bg-gradient-to-bl from-[hsl(222,15%,12%)] to-[hsl(358,100%,20%)] rounded-full transform rotate-45"></div>
    </div>
    <div className="fixed bottom-32 right-1/3 w-18 h-18 geometric-shape floating-3d opacity-15 z-0" style={{animationDelay: '3s'}}>
      <div className="w-full h-full bg-gradient-to-tr from-[hsl(94,89%,84%)] to-[hsl(222,15%,12%)] rounded-lg transform -rotate-12"></div>
    </div>
    
    {/* Additional geometric patterns */}
    <div className="fixed top-1/4 left-1/2 w-24 h-2 geometric-shape floating-3d opacity-8 z-0" style={{animationDelay: '5s'}}>
      <div className="w-full h-full bg-gradient-to-r from-[hsl(94,89%,84%)] to-[hsl(358,100%,20%)] transform rotate-12"></div>
    </div>
    <div className="fixed top-3/4 left-16 w-10 h-24 geometric-shape floating-3d opacity-12 z-0" style={{animationDelay: '6s'}}>
      <div className="w-full h-full bg-gradient-to-b from-[hsl(358,100%,20%)] to-transparent border-l-4 border-[hsl(94,89%,84%)] transform -rotate-6"></div>
    </div>
    <div className="fixed top-16 left-1/3 w-8 h-8 geometric-shape floating-3d opacity-18 z-0" style={{animationDelay: '7s'}}>
      <div className="w-full h-full bg-[hsl(94,89%,84%)] transform rotate-45 rounded-sm"></div>
    </div>
    <div className="fixed bottom-16 right-16 w-6 h-32 geometric-shape floating-3d opacity-10 z-0" style={{animationDelay: '8s'}}>
      <div className="w-full h-full bg-gradient-to-t from-[hsl(222,15%,12%)] to-[hsl(358,100%,20%)] rounded-full transform rotate-12"></div>
    </div>
    <div className="fixed top-2/3 right-1/4 w-16 h-4 geometric-shape floating-3d opacity-14 z-0" style={{animationDelay: '9s'}}>
      <div className="w-full h-full bg-gradient-to-l from-[hsl(94,89%,84%)] via-transparent to-[hsl(358,100%,20%)] transform -rotate-45"></div>
    </div>
  </>
);

const Index = () => {
  return (
    <div className="min-h-screen relative diamond-pattern">
      <GeometricShapes />
      <div className="relative z-10">
        <CompetitionCalendar />
      </div>
    </div>
  );
};

export default Index;
