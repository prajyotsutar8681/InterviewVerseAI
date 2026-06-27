import Navbar from "@/components/layout/Navbar";

const Home = () => {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      <section className="flex h-screen items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          InterviewVerse AI
        </h1>
      </section>
    </main>
  );
};

export default Home;