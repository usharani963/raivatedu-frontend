import CourseCatalog from "@/components/CourseCatalog";

export const metadata = {
  title: "Explore courses",
  description: "Browse Raivatedu courses by category, level, duration, and price to find your next skill.",
  openGraph: { title: "Explore courses | Raivatedu", description: "Find a practical course that fits your goals." }
};

export default async function CoursesPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "All";
  const query = params?.q || "";
  return (
    <main>
      <section className="page-hero"><div className="container"><span className="eyebrow">The course library</span><h1>Find a skill worth<br />getting curious about.</h1><p>Practical courses, thoughtful instructors, and clear next steps. Choose a category, explore the options, and find your starting point.</p></div></section>
      <section className="section"><div className="container"><CourseCatalog initialCategory={category} initialSearch={query} /></div></section>
      <section className="section section-soft"><div className="container"><div className="cta-panel"><div><h2>Not sure where to start?</h2><p>Try a beginner course and build momentum one lesson at a time.</p></div><a className="btn btn-primary" href="/#how-it-works">See how it works →</a></div></div></section>
    </main>
  );
}
