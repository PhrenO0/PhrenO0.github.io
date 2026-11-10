// Convert Dante markdown projects to Magic Portfolio MDX
import fs from "node:fs";
import path from "node:path";

const src = path.resolve("../portfolio-site/src/content/projects");
const dst = path.resolve("src/app/work/projects");
fs.mkdirSync(dst, { recursive: true });

const extraImages = {
  "gsa-campus-campaign": ["/images/p/cover-gsa.jpg", "/images/p/toss-banner.png".replace("toss-banner.png","gsa-puang.png")],
  "toss-tossto": ["/images/p/cover-toss.jpg", "/images/p/toss-banner.png"],
  "ai-ad-films": ["/images/p/cover-ads.jpg", "/images/p/ainus.jpg", "/images/p/musinsa.jpg"],
};

for (const f of fs.readdirSync(src)) {
  if (!f.endsWith(".md")) continue;
  const slug = f.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(src, f), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const fm = m[1];
  let body = m[2];
  const get = (k) => (fm.match(new RegExp(`^${k}: '([^']*)'`, "m")) || [])[1] || "";
  const title = get("title");
  const description = get("description");
  const period = get("period");
  const role = get("role");
  const publishDate = get("publishDate");
  const cover = (fm.match(/src: '\.\.\/\.\.\/assets\/images\/p\/([^']+)'/) || [])[1];
  const images = extraImages[slug] || [`/images/p/${cover}`];
  // drop inline images (shown in carousel) and convert link-only lines
  body = body.replace(/^!\[[^\]]*\]\([^)]*\)\s*$/gm, "").replace(/\n{3,}/g, "\n\n").trim();
  const linkMatch = body.match(/^\[[^\]]+\]\((https?:[^)]+)\)\s*$/m);
  const link = linkMatch ? linkMatch[1] : "";
  const meta = [`${period}`, `${role}`].filter(Boolean).join(" · ");
  const out = `---
title: "${title}"
publishedAt: "${publishDate}"
summary: "${description.replace(/"/g, '\\"')}"
images:
${images.map((i) => `  - "${i}"`).join("\n")}
${link ? `link: "${link}"\n` : ""}---

**${meta}**

${body}
`;
  fs.writeFileSync(path.join(dst, `${slug}.mdx`), out);
  console.log("wrote", slug, images.length);
}
