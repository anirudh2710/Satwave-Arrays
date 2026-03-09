import { client } from '../sanity/client';
import { NEWS_TICKER_QUERY } from '../sanity/queries';
import HomeContent from './components/HomeContent';

interface NewsItem {
    title: string;
    slug: string;
    publishedAt: string;
    category: string;
    excerpt?: string;
}

export default async function Home() {
    // Fetch news data server-side — no loading delay for the user
    let news: NewsItem[] = [];
    try {
        news = await client.fetch(NEWS_TICKER_QUERY);
    } catch (error) {
        console.error("Failed to fetch news ticker data:", error);
    }

    return <HomeContent news={news} />;
}
