// Port v3 case-study content into Magic Portfolio MDX (uses template components only)
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const src = path.resolve("../portfolio-v3/src/content/projects");
const dst = path.resolve("src/app/work/projects");
for (const f of fs.readdirSync(dst)) fs.unlinkSync(path.join(dst, f));

const slides = {
  gsa: ["gsa-1-v2.jpg", "gsa-2.jpg", "gsa-3-v2.jpg"],
  toss: ["toss-1.jpg", "toss-2.jpg"],
  adguard: ["adguard-1.jpg"],
  hoerang: ["hoerang-1.jpg"],
  jandi: ["jandi-1.jpg"],
  ads: ["ads-1.jpg", "ads-2.jpg", "ads-3.jpg"],
  sightcheck: ["sightcheck-1.jpg"],
  kdt: ["kdt-1.jpg"],
};
// publishedAt drives ordering on the site (newest first) -> map from v3 `order`
const short = {
  gsa: ["GSA 중앙대 캠페인", "합산 조회 48만 회, 전국 2위"],
  toss: ["토스 포리너 브릿지 크루", "일본인 관광객 콘텐츠 26건, 실사 중심으로 전환"],
  adguard: ["AdGuard", "광고 심의부터 대체 문구 추천까지"],
  hoerang: ["회랑", "걸으며 외우는 3D 학습 공간"],
  jandi: ["온라인 잔디광장", "중앙대 캠퍼스를 3D 웹으로"],
  ads: ["AI 광고 영상", "A.INUS 본상, 구리시 우수상"],
  sightcheck: ["시야체크 AI", "공연 좌석 시야를 3D로 비교"],
  kdt: ["오늘도 안녕", "KDT 해커톤, 판정 오차 0.29 → 0.05"],
};
const base = new Date("2026-11-10");

const esc = (s) => s.replace(/"/g, "&quot;");

for (const f of fs.readdirSync(src)) {
  const slug = f.replace(/\.md$/, "");
  const { data: d0, content } = matter(fs.readFileSync(path.join(src, f), "utf8"));
  const d = { results: [], notes: [], tools: [], links: [], ...d0 };
  const date = new Date(base.getTime() - d.order * 86400000).toISOString().slice(0, 10);

  const tags = [d.period, d.role, d.kind]
    .map((t, i) => `  <Tag size="l" ${i === 1 ? 'scheme="brand"' : 'scheme="neutral"'} label="${esc(t)}" />`)
    .join("\n");

  const results = d.results.length
    ? `<Grid fillWidth columns="${d.results.length === 4 ? 2 : Math.min(d.results.length, 3)}" gap="12" marginTop="24" marginBottom="8">\n${d.results
        .map(
          (r) =>
            `  <Card fillWidth direction="column" padding="20" radius="l" gap="4" border="neutral-alpha-weak" background="surface">\n    <Text variant="display-strong-xs" onBackground="brand-strong">${r.value}</Text>\n    <Text variant="body-default-s" onBackground="neutral-weak">${r.label}</Text>\n  </Card>`
        )
        .join("\n")}\n</Grid>`
    : "";

  const notes = d.notes.length
    ? `<Column gap="8" marginTop="16" marginBottom="16">\n${d.notes
        .map((n) => `  <Feedback variant="success" icon="sparkle" title="작업 메모" description="${esc(n)}" />`)
        .join("\n")}\n</Column>`
    : "";

  const tools = d.tools.length
    ? `\n## 쓴 도구\n\n<Row gap="8" wrap>\n${d.tools.map((t) => `  <Tag size="m" scheme="neutral" label="${esc(t)}" />`).join("\n")}\n</Row>\n`
    : "";

  // place notes right before "## 남은 것"
  let body = content.trim();
  body = body.includes("## 남은 것") ? body.replace("## 남은 것", `${notes}\n\n## 남은 것`) : `${body}\n\n${notes}`;

  const link = d.links[0]?.href || "";
  const linksMd = d.links.length ? `\n## 직접 보기\n\n${d.links.map((l) => `- [${l.text}](${l.href})`).join("\n")}\n` : "";

  const out = `---
title: "${short[slug][0]}"
publishedAt: "${date}"
summary: "${short[slug][1]}"
images:
${slides[slug].map((s) => `  - "/images/w/${s}"`).join("\n")}
${link ? `link: "${link}"\n` : ""}---

<Row gap="8" wrap marginBottom="8">
${tags}
</Row>

${results}

${body}
${tools}${linksMd}`;
  fs.writeFileSync(path.join(dst, `${slug}.mdx`), out);
  console.log("wrote", slug, date);
}
