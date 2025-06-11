import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "it"

export const common = {
  domain: "https://www.linuxdaymottola.it",
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
      icon: Github,
      label: "GitHub",
      link: "https://github.com/linuxdaymottola",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
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
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

const zh = {
  ...common,
  siteName: "Linux Day Mottola",
  meta: {
    ...common.meta,
    title: "小孙同学",
    slogan: "一个浪漫的理性主义者",
    description: "读书、摄影、编程、旅行",
  },
  navigation: {
    ...common.navigation,
    custom: [
      {
        label: "影集",
        link: "https://camlife.cn",
      },
    ],
  },
  pageMeta: {
    archive: {
      title: "归档",
      description: "小孙同学的所有文章",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "朋友们",
      description: "小孙同学的和他朋友们",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "关于我",
      description: "小孙同学的自我介绍",
      ogImage: "/images/page-meta/zh/about.png",
    },
  },
}

const en = {
  ...common,
  siteName: "Linux Day Mottola",
  meta: {
    ...common.meta,
    title: "Guoqi Sun",
    slogan: "A Romantic Rationalist",
    description: "Reading, Photography, Programming, Traveling",
  },
  navigation: {
    ...common.navigation,
    custom: [
      // {
      //   label: "CamLife",
      //   link: "https://camlife.cn",
      // },
    ],
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are Guoqi Sun's all posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are Guoqi Sun's friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is Guoqi Sun's self-introduction",
      ogImage: "/images/page-meta/en/about.png",
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
    // custom: [
    //   {
    //     label: "CamLife",
    //     link: "https://camlife.cn",
    //   },
    // ],
  },
  pageMeta: {
    archive: {
      title: "Posts",
      description: "I blog posts",
      ogImage: "/images/page-meta/it/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are Guoqi Sun's friends",
      ogImage: "/images/page-meta/it/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is Guoqi Sun's self-introduction",
      ogImage: "/images/page-meta/it/about.png",
    },
  },
}

export const getConfigByLang = (lang: string) => {
  switch (lang) {
    case "zh":
      return zh;
    case "en":
      return en;
    case "it":
      return it;
    default:
      return en; // Default to Chinese if language is not recognized
  }
}