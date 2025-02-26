import Navbar from "@/components/Navbar";
// import Hero from "@/app/components/Hero";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {/* <Hero /> */}
      {children}
    </main>
  );
}
