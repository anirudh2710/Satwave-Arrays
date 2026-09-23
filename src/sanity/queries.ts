import { groq } from "next-sanity";

export const NEWS_TICKER_QUERY = groq`*[_type == "news"] | order(publishedAt desc)[0...5] {
  title,
  "slug": slug.current,
  publishedAt,
  category,
  "excerpt": pt::text(body)
}`;

export const ALL_NEWS_QUERY = groq`*[_type == "news"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  category,
  body
}`;

export const SINGLE_NEWS_QUERY = groq`*[_type == "news" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  category,
  body
}`;

export const ALL_JOBS_QUERY = groq`*[_type == "job" && (isActive == true || !defined(isActive))] | order(publishedAt desc) {
  _id,
  positionTitle,
  "slug": slug.current,
  department,
  location,
  employmentType,
  aboutSatwave,
  aboutRole,
  education,
  responsibilities,
  skillsAndExperience,
  publishedAt
}`;

export const SINGLE_JOB_QUERY = groq`*[_type == "job" && slug.current == $slug][0] {
  _id,
  positionTitle,
  "slug": slug.current,
  department,
  location,
  employmentType,
  aboutSatwave,
  aboutRole,
  education,
  responsibilities,
  skillsAndExperience,
  publishedAt
}`;
