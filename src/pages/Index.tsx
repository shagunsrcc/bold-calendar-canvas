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
      <div className="w-full h-full bg-gradient-to-bl from-[hsl(222,15%,12%)] to-[hsl(358,100%,20%)] clip-path-triangle"></div>
    </div>
    <div className="fixed bottom-32 right-1/3 w-18 h-18 geometric-shape floating-3d opacity-15 z-0" style={{animationDelay: '3s'}}>
      <div className="w-full h-full bg-gradient-to-tr from-[hsl(94,89%,84%)] to-[hsl(222,15%,12%)] rounded-lg transform -rotate-12"></div>
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
