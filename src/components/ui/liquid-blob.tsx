'use client';

export function LiquidBlob() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient - Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      
      {/* Soft gradient orbs */}
      <div 
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 40%, transparent 70%)',
        }}
      />
      <div 
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(244,114,182,0.12) 0%, rgba(244,114,182,0.04) 40%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%)',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100,100,100,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,100,100,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}
