"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const categories = ["All", "Technology", "Design", "Business", "Marketing", "Personal Growth"];

export default function CourseCatalog({ initialCategory = "All", initialSearch = "" }) {
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : "All");
  const [query, setQuery] = useState(initialSearch);
  const [sort, setSort] = useState("popular");

  const filteredCourses = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const list = courses.filter((course) => {
      const matchesCategory = category === "All" || course.category === category;
      const matchesQuery = !normalized || `${course.title} ${course.category} ${course.summary} ${course.level}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => Number(b.rating) - Number(a.rating));
    return list;
  }, [category, query, sort]);

  return (
    <>
      <div className="catalog-toolbar">
        <div className="filter-pills" aria-label="Filter courses by category">
          {categories.map((item) => <button type="button" key={item} className="filter-btn" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <SlidersHorizontal size={17} aria-hidden="true" />
          <span className="muted" style={{ fontSize: ".88rem" }}>Sort</span>
          <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort courses">
            <option value="popular">Recommended</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
      <form className="search-box" style={{ maxWidth: "100%", margin: "0 0 26px", boxShadow: "none" }} onSubmit={(event) => event.preventDefault()} role="search">
        <Search size={20} style={{ margin: "auto 0 auto 10px", color: "var(--muted)" }} aria-hidden="true" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search courses, skills, or topics..." aria-label="Search courses" />
        {query && <button className="btn btn-secondary" type="button" onClick={() => setQuery("")}>Clear</button>}
      </form>
      <p className="muted" aria-live="polite" style={{ marginBottom: 20 }}>{filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"} to explore</p>
      <div className="grid-3">
        {filteredCourses.length ? filteredCourses.map((course) => <CourseCard key={course.slug} course={course} />) :
          <div className="empty-state"><div style={{ fontSize: "2rem" }}>🔎</div><h2>No courses found</h2><p className="muted">Try a different keyword or select another category.</p><button className="btn btn-primary" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div>}
      </div>
    </>
  );
}
