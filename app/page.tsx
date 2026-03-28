import AnimatedLogo from '@/components/AnimatedLogo';

export default function Page() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      
      <AnimatedLogo />
    </main>
  );
}
