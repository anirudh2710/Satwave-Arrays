import { groq } from "next-sanity";

export const NEWS_TICKER_QUERY = groq`*[_type == "news"] | order(publishedAt desc)[0...5] {
  title,
  "slug": slug.current,
  publishedAt,
  category
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
