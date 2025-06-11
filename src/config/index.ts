import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export const defaultLanguage: string = "it"

export const common = {
  domain: "https://www.linuxdaymottola.it",
  logo: "/images/logo.jpg",
  meta: {
    favicon: "/avatar.png",
    url: "https://www.linuxdaymottola.it",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://x.com/linuxdaymottola",
    },
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://facebook.com/linuxdaymottola",
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://instagram.com/linuxdaymottola",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/linuxdaymottola",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    events: true,
    archive: false,
    // custom: [
    //   {
    //     label: "CamLife",
    //     link: "https://camlife.cn",
    //   },
    // ],
    links: true,
    about: true,
  },
  latestPosts: 8,
  latestEvents: 5,
  comments: {
    enabled: true,
    twikoo: {
      enabled: false,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const it = {
  ...common,
  siteName: "Linux Day Mottola",
  meta: {
    ...common.meta,
    title: "Linux Day Mottola",
    slogan: "Il Linux Day più piccolo di Puglia",
    description: "Edizione mottolese del Linux Day, un evento dedicato al software libero e alla cultura informatica.",
  },
  navigation: {
    ...common.navigation,
    custom: [] as Array<{ link: string; label: string }>,
  },
  pageMeta: {
    archive: {
      title: "Posts",
      description: "I blog posts",
      ogImage: "/preview.png",
    },
    events: {
      title: "Eventi",
      description: "Gli eventi del Linux Day Mottola",
      ogImage: "/preview.png",
    },
    links: {
      title: "Links",
      description: "Link utili",
      ogImage: "/preview.png",
    },
    about: {
      title: "Chi siamo",
      description: "Chi siamo?",
      ogImage: "/preview.png",
    },
  },
}

export const getConfigByLang = (lang: string) => {
  switch (lang) {
    case "it":
      return it;
    default:
      return it; // Default to Chinese if language is not recognized
  }
}