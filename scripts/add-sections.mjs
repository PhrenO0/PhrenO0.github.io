import fs from "node:fs";
import path from "node:path";
const dir = path.resolve("../portfolio-v3/src/content/projects");
const add = {
  gsa: {
    choice: "처음 계획은 가상 페르소나 ‘김젬니’가 AI 소식을 전하는 매거진과 전국 단위 공모전 TAKE ONE이었습니다. 매거진은 학우들이 당장 펼쳐 볼 이유가 약했고, 전국 공모전은 3인 팀이 감당하기에 규모가 컸습니다. 두 계획을 접고 학우들이 매일 겪는 통학과 마스코트 푸앙이 소재에 집중했습니다. 그 대신 자세한 기능 설명은 뒤로 미뤘고, 조회수가 상위 몇 건에 쏠리는 구조도 감수했습니다.",
    miss: "조회수는 많이 나왔지만 그 반응이 실제 가입으로 이어졌는지는 확인할 수 없었습니다. 구글 측 가입자 집계를 직접 볼 방법이 없었고, 따로 진행한 인증 이벤트 응답은 54건에 그쳤습니다. 2차 캠페인에서는 기획 단계부터 인증 방식을 함께 넣어 가입 흐름을 직접 셀 수 있게 바꿨습니다.",
  },
  toss: {
    choice: "초반에는 손이 많이 가는 카드뉴스와 AI 상황극 릴스에 힘을 실었습니다. 카드뉴스는 디자인과 검수에 시간이 오래 걸린 데 비해 일본인에게 거의 닿지 않았고, AI 상황극도 조회수 257회에 머물렀습니다. 매끈하게 다듬은 제작물보다 한국에 있는 사람이 직접 찍어 올리는 현장 정보 릴스가 맞다고 보고 방향을 틀었습니다. 화면 완성도를 내려놓고 발행 속도와 현장감을 택했습니다.",
    miss: "초반에는 인스타그램 도달이 대부분 한국인에게 흘러갔습니다. 추천 알고리즘을 제대로 이해하지 못한 탓이었습니다. 팀 Threads 계정은 여행 질문을 받는 방식으로 팔로워 2,568명과 합산 조회 34만 회까지 모았지만, 정작 그 뒤에 올린 토스 관련 게시물 7건은 합산 조회 2,633회와 반응 74회에 그쳤습니다. 모은 관심을 실제 카드 발급까지 잇는 고리는 끝내 약했습니다.",
  },
  adguard: {
    choice: "법 위반 여부만 판정하는 도구로 범위를 좁혔다면 개발 일정은 훨씬 여유로웠을 것입니다. 하지만 판정만 던져주면 마케터는 결국 혼자 문장을 다시 고쳐 써야 합니다. 대체 문구 추천과 재검증까지 범위에 넣는 쪽을 택했고, 그만큼 만들어야 할 단계가 두 개 더 늘었습니다.",
    miss: "처음에는 법령 문서를 일정한 길이로 잘라 넣었더니 조항 중간이 끊겨 엉뚱한 근거가 검색됐습니다. 조항을 의미 단위로 다시 나누는 작업에 시간을 많이 썼고, 결국 실제 현업 마케터에게 써보게 하는 사용성 테스트까지는 나아가지 못했습니다.",
  },
};
for (const [slug, a] of Object.entries(add)) {
  const f = path.join(dir, `${slug}.md`);
  let t = fs.readFileSync(f, "utf8");
  if (t.includes("## 고민한 선택지")) continue;
  t = t.replace("## 결과", `## 고민한 선택지\n\n${a.choice}\n\n## 어긋난 것\n\n${a.miss}\n\n## 결과`);
  fs.writeFileSync(f, t);
  console.log("updated", slug);
}
// toss: final-week numbers
const tf = path.join(dir, "toss.md");
let tt = fs.readFileSync(tf, "utf8");
tt = tt.replace(/results:\n[\s\S]*?\ntools:/, `results:
  - { value: '34만 회', label: '팀 Threads 계정 합산 조회 (팔로워 2,568명)' }
  - { value: '26건', label: '3주간 인스타그램·X·Threads 발행' }
  - { value: '1,762회', label: '실사 정보형 릴스 최고 조회 (홍대)' }
  - { value: '257회', label: 'AI 상황극 릴스 조회' }
tools:`);
if (!tt.includes("팔로워 2,568명, 합산 조회 34만")) tt = tt.replace("- 3주간 콘텐츠 26건 발행", "- 팀 Threads 계정 팔로워 2,568명, 합산 조회 34만 회 (최고 게시물 20만 회 이상)\n- 3주간 콘텐츠 26건 발행");
fs.writeFileSync(tf, tt);
console.log("toss results updated");
