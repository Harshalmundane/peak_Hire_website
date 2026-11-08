import { notFound } from "next/navigation";
import { courses, getCourse } from "@/data/courses";
import CourseDetail from "@/components/CourseDetail";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
export function generateMetadata({ params }) {
  const c = getCourse(params.slug);
  if (!c) return {};
  return { title: c.page.seoTitle, description: c.page.metaDesc };
}
export default function TrainingPage({ params }) {
  const course = getCourse(params.slug);
  if (!course) notFound();
  return <CourseDetail course={course} />;
}
