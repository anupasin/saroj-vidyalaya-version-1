import { groq } from "next-sanity";

export const TOPIC_QUERY = groq`*[_type == "topic" && slug.current == $slug][0] {
  title,
  description,
  content,
  quiz->{
    title,
    questions
  }
}`;

export const TOPICS_QUERY = groq`*[_type == "topic"] {
  title,
  slug,
  description
}`;

export const COURSES_QUERY = groq`*[_type == "course"] {
  title,
  slug,
  subject,
  description,
  lessons[]->{
    title,
    slug,
    order
  }
}`;

export const COURSE_QUERY = groq`*[_type == "course" && slug.current == $slug][0] {
  title,
  slug,
  subject,
  description,
  lessons[]->{
    title,
    slug,
    content,
    analogy,
    example,
    order
  },
  quiz->{
    title,
    questions
  }
}`;
