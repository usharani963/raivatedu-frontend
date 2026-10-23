import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock3, GraduationCap, Star, UsersRound } from "lucide-react";
import { courses } from "@/data/courses";
import EnrollmentForm from "@/components/EnrollmentForm";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.summary,
    openGraph: { title: `${course.title} | Raivatedu`, description: course.summary, type: "website" }
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  return (
    <main>
      <section className="page-hero"><div className="container">
        <Link href="/courses" className="text-link" style={{ marginBottom: 22 }}><ArrowLeft size={16} /> All courses</Link>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(100px,220px)", gap: 24, alignItems: "center" }}>
          <div><span className="pill">{course.category}</span><h1>{course.title}</h1><p>{course.summary}</p><div className="course-meta"><span><Star size={15} fill="currentColor" style={{ display: "inline", color: "#d99b00", verticalAlign: "middle" }} /> {course.rating} rating</span><span><UsersRound size={15} style={{ display: "inline", verticalAlign: "middle" }} /> {course.students} learners</span><span><Clock3 size={15} style={{ display: "inline", verticalAlign: "middle" }} /> {course.duration}</span></div></div>
          <div style={{ minHeight: 150, display: "grid", placeItems: "center", borderRadius: 25, background: course.color, fontSize: "5rem" }} aria-hidden="true">{course.emoji}</div>
        </div>
      </div></section>

      <section className="section"><div className="container detail-layout">
        <div className="detail-main">
          <section style={{ marginBottom: 42 }}><h2>What you will learn</h2><p>{course.description}</p><div className="grid-3" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 12, marginTop: 22 }}>{["Understand the core concepts", "Practise with guided exercises", "Build confidence through projects", "Create a clear next-step plan"].map((item) => <div key={item} style={{ display: "flex", alignItems: "start", gap: 9, fontSize: ".9rem", lineHeight: 1.6 }}><CheckCircle2 size={18} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />{item}</div>)}</div></section>

          <section style={{ marginBottom: 42 }}><h2>Course syllabus</h2><p>Explore the modules and see how the course builds step by step.</p>{course.syllabus.map((module, index) => <details className="syllabus-item" key={module.title} open={index === 0}><summary><span>Module {index + 1}: {module.title}</span><span className="muted" style={{ fontSize: ".82rem", whiteSpace: "nowrap" }}>{module.lessons.length} lessons</span></summary><ul>{module.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></details>)}</section>

          <section style={{ marginBottom: 42 }}><h2>Your instructor</h2><div className="instructor-box"><div className="instructor-avatar" aria-hidden="true">{course.instructorEmoji}</div><div><h3 style={{ margin: "0 0 5px" }}>{course.instructor}</h3><p style={{ margin: 0 }}>{course.instructorRole}</p><p style={{ margin: "8px 0 0", fontSize: ".88rem" }}>A practical, supportive approach focused on helping learners build skills they can use.</p></div></div></section>

          <section><h2>Learner reviews</h2><p>Feedback from learners who have explored this learning path.</p>{course.reviews.map((review) => <div className="review-item" key={review.name}><div className="quote-stars" aria-label="5 out of 5 stars">★★★★★</div><p style={{ margin: "8px 0" }}>“{review.text}”</p><strong>{review.name}</strong></div>)}</section>
        </div>

        <aside className="detail-side" aria-label="Course enrolment">
          <div style={{ background: course.color, minHeight: 100, borderRadius: 15, display: "grid", placeItems: "center", fontSize: "3rem", marginBottom: 20 }} aria-hidden="true">{course.emoji}</div>
          <div className="muted" style={{ fontSize: ".88rem" }}>Course fee</div><div className="big-price">₹{course.price.toLocaleString("en-IN")}</div><div className="muted" style={{ textDecoration: "line-through", fontSize: ".86rem" }}>₹{course.oldPrice.toLocaleString("en-IN")}</div>
          <div style={{ display: "grid", gap: 13, margin: "22px 0", padding: "18px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", fontSize: ".9rem" }}><span><Clock3 size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />{course.duration}, self-paced</span><span><GraduationCap size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />{course.level} level</span><span><CheckCircle2 size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: 8, color: "var(--green)" }} />Practical lessons</span></div>
          <h3 style={{ margin: "0 0 4px" }}>Interested in this course?</h3><p className="muted" style={{ margin: 0, fontSize: ".86rem", lineHeight: 1.6 }}>Leave your details to see the demo confirmation state.</p>
          <EnrollmentForm courseTitle={course.title} />
        </aside>
      </div></section>
    </main>
  );
}
