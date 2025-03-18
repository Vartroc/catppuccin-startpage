// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Roßtal",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "app.element.io",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "element",
              url: "https://app.element.io",
              icon: "device-landline-phone",
              icon_color: palette.green,
            },
            {
              name: "music",
              url: "https://open.spotify.com",
              icon: "music",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "mail",
              url: "https://email.ionos.de/appsuite/",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "ebook",
              url: "https://schueler.klett.de/arbeitsplatz#/",
              icon: "book",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.peach,
            },
            {
              name: "mynixos",
              url: "https://mynixos.com",
              icon: "snowflake",
              icon_color: palette.red,
            },

          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "openscad",
              url: "https://openscad.org/documentation.html",
              icon: "sphere",
              icon_color: palette.peach,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.red,
            },
            {
              name: "steamdb",
              url: "https://steamdb.info/",
              icon: "stack-2",
              icon_color: palette.peach,
            },

          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anisearch",
              url: "https://www.anisearch.de/usercp/favorites",
              icon: "brand-funimation",
              icon_color: palette.red,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.lavender);
