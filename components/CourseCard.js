import Link from "next/link";
import { ArrowUpRight, Clock3, Star, UsersRound } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-art" style={{ background: course.color }}>
        <span className="pill" style={{ background: "rgba(255,255,255,.8)" }}>{course.category}</span>
        <span className="art-emoji" aria-hidden="true">{course.emoji}</span>
      </div>
      <div className="course-body">
        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#a87900", fontSize: ".83rem", fontWeight: 800 }}><Star size={15} fill="currentColor" /> {course.rating} <span style={{ color: "var(--muted)", fontWeight: 500 }}>({course.students} learners)</span></div>
        <h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3>
        <p>{course.summary}</p>
        <div className="course-meta"><span><Clock3 size={14} style={{ display: "inline", verticalAlign: "middle" }} /> {course.duration}</span><span><UsersRound size={14} style={{ display: "inline", verticalAlign: "middle" }} /> {course.level}</span></div>
        <div className="course-bottom"><div><span className="price">₹{course.price.toLocaleString("en-IN")}</span> <span className="muted" style={{ textDecoration: "line-through", fontSize: ".82rem" }}>₹{course.oldPrice.toLocaleString("en-IN")}</span></div><Link className="text-link" href={`/courses/${course.slug}`} aria-label={`View ${course.title} course`}>View <ArrowUpRight size={17} /></Link></div>
      </div>
    </article>
  );
}
