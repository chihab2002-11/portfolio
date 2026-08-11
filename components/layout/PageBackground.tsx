"use client";

export function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-page-base" />

      <div className="absolute -left-24 top-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,45,117,0.2)_0%,transparent_68%)] blur-3xl" />
      <div className="absolute -right-20 top-[22%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,107,74,0.16)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute left-[18%] top-[48%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,92,147,0.14)_0%,transparent_72%)] blur-3xl" />
      <div className="absolute -right-10 bottom-[8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,182,193,0.22)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[30%] left-[55%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(255,140,120,0.12)_0%,transparent_72%)] blur-3xl" />
    </div>
  );
}
