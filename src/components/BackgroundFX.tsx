// src/components/BackgroundFX.tsx
export default function BackgroundFX() {
    return (
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-20 mask-fade" />
        <div className="absolute -top-24 -left-24 h-[50vh] w-[50vw] rounded-full aurora glow-emerald animate-blob" />
        <div className="absolute -bottom-24 -right-24 h-[55vh] w-[55vw] rounded-full aurora glow-blue animate-blob-delayed" />
        <div className="absolute top-1/3 left-1/3 h-[40vh] w-[40vw] rounded-full aurora glow-pink animate-blob-slower" />
      </div>
    )
  }