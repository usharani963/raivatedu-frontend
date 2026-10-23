import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BookOpen, Check, Play, Sparkles, Star } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { categories, courses, faqs, mentors } from "@/data/courses";

export const metadata = {
  title: "Learn skills that move you forward",
  description: "Explore practical online courses, learn with supportive mentors, and take your next step with Raivatedu.",
  openGraph: { title: "Learn skills that move you forward | Raivatedu", description: "Practical courses and supportive mentors for your next step." }
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow"><Sparkles size={15} /> Your next chapter starts here</span>
            <h1>Curiosity looks good <span>on you.</span></h1>
            <p className="hero-copy">Learn practical skills, meet mentors who get it, and turn the things you want to do into things you can do.</p>
            <div className="hero-actions"><Link href="/courses" className="btn btn-primary">Explore courses <ArrowRight size={17} /></Link><a href="#how-it-works" className="btn btn-secondary"><Play size={15} /> How it works</a></div>
            <form action="/courses" className="search-box" role="search">
              <BookOpen size={20} style={{ margin: "auto 0 auto 10px", color: "var(--muted)" }} aria-hidden="true" />
              <input name="q" aria-label="Search for a course" placeholder="What would you love to learn?" />
              <button className="btn btn-primary" type="submit">Find a course</button>
            </form>
            <div className="hero-note" style={{ marginTop: 22 }}><div className="avatar-stack" aria-hidden="true"><span>👩🏽</span><span>👨🏻</span><span>👩🏻</span><span>👨🏽</span></div><span><strong style={{ color: "var(--ink)" }}>Friendly faces, useful skills.</strong><br />A learning community built around your goals.</span></div>
          </div>
          <div className="hero-art" aria-label="Illustration of a learner building new skills">
            <div className="art-orbit" aria-hidden="true"></div>
            <div className="float-chip one">✨ One lesson at a time</div>
            <Image src="/learning-illustration.svg" alt="A student learning beside books, a laptop, and a growing plant" width={440} height={440} priority style={{ position: "relative", zIndex: 1, width: "min(100%, 440px)", height: "auto", filter: "drop-shadow(0 22px 25px rgba(52,47,130,.10))" }} />
            <div className="float-chip two">🌱 Progress over perfection</div>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">A better way to grow</span><h2>Make learning fit your life.</h2><p>Big goals feel easier when you have a clear next step. We help you find it, practise it, and keep going.</p></div>
          <div className="grid-3">
            {[{ n: "01", icon: "🧭", title: "Find your direction", text: "Explore courses by skill and choose a path that fits your interests and goals." }, { n: "02", icon: "🛠️", title: "Learn by doing", text: "Build understanding with practical lessons, guided exercises, and projects." }, { n: "03", icon: "🚀", title: "Put skills to work", text: "Reflect on your progress and take your next step with more confidence." }].map((item) => <article className="category-card" key={item.n}><span className="pill">{item.n}</span><div className="category-icon" style={{ background: "var(--soft)", fontSize: "1.6rem", marginTop: 20 }}>{item.icon}</div><h3>{item.title}</h3><p className="muted" style={{ lineHeight: 1.75, marginBottom: 0 }}>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">Find your thing</span><h2>Room to grow in every direction.</h2><p>Start with a skill you are curious about. You can always branch out later.</p></div>
          <div className="grid-4">{categories.slice(0, 4).map((category) => <Link className="category-card" key={category.name} href={`/courses?category=${encodeURIComponent(category.name)}`}><div className="category-icon" style={{ background: category.color }}>{category.emoji}</div><h3 style={{ margin: "0 0 7px" }}>{category.name}</h3><p className="muted" style={{ margin: 0, fontSize: ".85rem" }}>{category.count}</p></Link>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, marginBottom: 32, flexWrap: "wrap" }}><div><span className="eyebrow">Popular right now</span><h2 style={{ margin: "12px 0 0", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-.045em" }}>Good places to begin.</h2></div><Link className="text-link" href="/courses">Browse all courses <ArrowUpRight size={18} /></Link></div>
          <div className="grid-3">{courses.slice(0, 3).map((course) => <CourseCard key={course.slug} course={course} />)}</div>
        </div>
      </section>

      <section className="stats-band"><div className="container stats-grid">{[{ value: "40+", label: "practical learning paths" }, { value: "25+", label: "industry mentors" }, { value: "4.8/5", label: "average learner rating" }, { value: "Learn", label: "at your own pace" }].map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>

      <section className="section section-soft" id="mentors">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">People who help you grow</span><h2>Learn from people who do the work.</h2><p>Meet the kind of mentors who make big topics feel approachable and practical.</p></div>
          <div className="grid-4">{mentors.map((mentor) => <article className="mentor-card" key={mentor.name}><div className="mentor-avatar" aria-hidden="true">{mentor.emoji}</div><h3>{mentor.name}</h3><p style={{ color: "var(--brand)", fontWeight: 750, marginBottom: 8 }}>{mentor.role}</p><p>{mentor.detail}</p></article>)}</div>
        </div>
      </section>

      <section className="section" id="stories">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">A little learner love</span><h2>Small wins are worth celebrating.</h2><p>Learning looks different for everyone. Here is what progress can feel like.</p></div>
          <div className="grid-3">{[{ quote: "I stopped waiting until I felt ready. The short lessons helped me start building and learn as I went.", name: "Nisha K.", role: "Python learner", emoji: "👩🏽" }, { quote: "The course structure gave me a plan. I could fit learning around college without feeling overwhelmed.", name: "Rahul S.", role: "Web development learner", emoji: "👨🏻" }, { quote: "I learned to explain my design choices, not just make screens look good. That changed how I approach projects.", name: "Aditi M.", role: "UI/UX learner", emoji: "👩🏻" }].map((item) => <article className="quote-card" key={item.name}><div className="quote-stars" aria-label="5 out of 5 stars"><Star size={15} fill="currentColor" style={{ display: "inline" }} /><Star size={15} fill="currentColor" style={{ display: "inline" }} /><Star size={15} fill="currentColor" style={{ display: "inline" }} /><Star size={15} fill="currentColor" style={{ display: "inline" }} /><Star size={15} fill="currentColor" style={{ display: "inline" }} /></div><blockquote>“{item.quote}”</blockquote><div className="quote-person"><span style={{ fontSize: "1.7rem" }} aria-hidden="true">{item.emoji}</span><div>{item.name}<span>{item.role}</span></div></div></article>)}</div>
        </div>
      </section>

      <section className="section section-soft" id="faq">
        <div className="container"><div className="section-heading"><span className="eyebrow">Good to know</span><h2>Questions, meet answers.</h2><p>A few details to help you get started with confidence.</p></div><div className="faq-list">{faqs.map((faq) => <details className="faq-item" key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="section"><div className="container"><div className="cta-panel"><div><h2>Your next skill is closer than you think.</h2><p>Pick a course, take the first lesson, and see where it leads.</p></div><Link className="btn btn-primary" href="/courses">Find your next course <ArrowRight size={17} /></Link></div></div></section>
    </main>
  );
}
