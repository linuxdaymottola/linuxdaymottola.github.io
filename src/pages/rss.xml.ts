import rss from "@astrojs/rss"
import { it } from "~/config"
import { getEventsByLocale } from "~/utils"
import { getLanguagePaths } from "~/utils/langs"

export function getStaticPaths() {
  return getLanguagePaths()
}

export async function GET(request: { url: URL }) {
  // const isEn = request.url.pathname.includes("en")

  const lang = "it"
  const config = it

  const events = await getEventsByLocale(lang)

  return rss({
    title: config.meta.title,
    description: config.meta.description,
    site:
      process.env.NODE_ENV === "development"
        ? "http://localhost:4321"
        : config.meta.url,
    items: events.map((event: any) => ({
      title: event.data.title,
      description: event.data.description,
      pubDate: event.data.pubDate,
      link: `/posts/${event.id}/`,
      content: event.rendered ? event.rendered.html : event.data.description,
    })),
    customData: "",
  })
}
