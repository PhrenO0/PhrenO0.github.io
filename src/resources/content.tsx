import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "준상",
  lastName: "오",
  name: "오준상",
  role: "서비스 기획 · 콘텐츠 마케팅",
  avatar: "/images/avatar.svg",
  email: "phren0219@gmail.com",
  location: "Asia/Seoul",
  languages: ["한국어", "English"],
  locale: "ko",
};

const newsletter: Newsletter = {
  display: false,
  title: <>뉴스레터</>,
  description: <></>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PhrenO0",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@by.phren",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "홈",
  title: "오준상 — 포트폴리오",
  description: "만든 것이 실제로 쓰이는지 확인하는 기획자 오준상의 포트폴리오",
  headline: <>쓰이는 걸 만듭니다</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">GSA</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          전국 2위
        </Text>
      </Row>
    ),
    href: "/work/gsa",
  },
  subline: <>서비스 기획 · 콘텐츠 마케팅 · AI 프로토타이핑</>,
};

const about: About = {
  path: "/about",
  label: "소개",
  title: "소개 – 오준상",
  description: "서비스 기획과 콘텐츠 마케팅, AI 프로토타이핑을 하는 오준상",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "소개",
    description: (
      <>
        미디어커뮤니케이션과 도시계획·부동산학을 함께 공부하며 온라인의 메시지와 오프라인의 공간을 나란히 읽는 연습을 해 왔습니다. 시작은 영상 제작이었고, 지금은 서비스를 기획하고 사람들에게 닿게 하는 캠페인까지 맡고 있습니다.
        <br /><br />
        Microsoft AI School에서 세 번의 팀 프로젝트를 거치며 웹 프로토타입과 제작 도구를 직접 만들 수 있게 됐습니다. 기능을 늘리기 전에 사용자가 어느 화면에서 왜 멈추는지부터 보고, 데이터 기준과 입출력 구조를 먼저 맞추려 합니다.
        <br /><br />
        결과가 기대보다 작거나 수상하지 못한 작업도 무엇이 부족했는지 숫자로 남겨 다음 기획의 기준으로 씁니다.
      </>
    ),
  },
  work: {
    display: true,
    title: "경험",
    experiences: [
      {
        company: "Google Student Ambassador 2기 · 중앙대 서울캠퍼스",
        timeframe: "2026.08 – 현재",
        role: "3인 팀 팀장",
        achievements: [
          <>Phase 1 전국 평가 'The Twin Maker (Top Performance Team)' 2위</>,
          <>캠퍼스 일상 소재로 방향을 바꿔 인스타그램 24건 합산 조회 482,621회, 오프라인 캠페인과 예산 145만 원 정산</>,
          <>Phase 2: 학생 AI 활용 수준별 3개 타깃으로 재설계 — 게임 공모전, 사인업 인증 이벤트, 수능 응원 릴스</>,
        ],
        images: [],
      },
      {
        company: "토스 포리너 브릿지 크루 2기 · TOSSTO",
        timeframe: "2026.08",
        role: "9팀 팀장",
        achievements: [
          <>일본인 관광객 대상 토스 비지터카드 콘텐츠 26건 발행, 인스타그램·X·Threads를 인지·신뢰·전환 역할로 운영</>,
          <>실사 정보형 릴스(최고 1,762회)가 AI 상황극(257회)보다 반응이 높아 실사 중심으로 전환</>,
        ],
        images: [],
      },
      {
        company: "Microsoft AI School 9기",
        timeframe: "2025.12 – 2026.06",
        role: "수료 · AdGuard 팀장 · 회랑 3D/UI 담당",
        achievements: [
          <>AdGuard: 광고 심의부터 대체 문구 추천까지 5단계, 내부 통합 테스트 10건 중 9건 정확</>,
          <>회랑: 3D 공간 기억법 학습 서비스, 프론트·3D 저장소 커밋 팀 내 최다</>,
        ],
        images: [],
      },
      {
        company: "리피스(Re:Piece) 예비창업 팀",
        timeframe: "2026.09 – 현재",
        role: "사업계획서 · 웹 목업",
        achievements: [<>모두의창업 2기 1라운드 진출 팀에서 PSST 사업계획서와 웹 목업 담당</>],
        images: [],
      },
      {
        company: "시야체크 AI",
        timeframe: "2026.09 – 10",
        role: "팀장",
        achievements: [<>공연장 도면을 3D로 바꿔 두 좌석 시야를 비교하는 MVP, AI 활용 아이디어 공모전 출품(미수상)</>],
        images: [],
      },
      {
        company: "KDT 해커톤 「오늘도 안녕」",
        timeframe: "2026.07 – 08",
        role: "6인 팀 팀장·PM",
        achievements: [<>사람마다 기준을 따로 두는 판정으로 바꿔 비대칭 오차 0.29 → 0.05, 예선 탈락</>],
        images: [],
      },
      {
        company: "‘우리함께’ 외국인 유학생 멘토링",
        timeframe: "2025.09 – 12",
        role: "멘토",
        achievements: [<>멘티 5명과 10회 모임</>],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "학력 · 자격",
    institutions: [
      {
        name: "중앙대학교",
        description: <>미디어커뮤니케이션학부 재학 · 도시계획·부동산학 복수전공</>,
      },
      {
        name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
        description: <>2026.05 취득</>,
      },
      {
        name: "수상",
        description: (
          <>
            A.INUS AI 광고 공모전 영상 부문 본상(2025.11, 팀장) · 2025 구리시 숏폼 영상 공모전 우수상(2025.09)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "일하는 방식",
    skills: [
      {
        title: "멈추는 지점부터",
        description: <>기능 목록을 세우기 전에 사용자가 왜 다음 행동으로 넘어가지 못하는지부터 봅니다. 경고만 띄우고 끝나는 화면이라면 바로 고쳐 쓸 수정안까지 범위에 넣습니다.</>,
        tags: [],
        images: [],
      },
      {
        title: "만들어서 확인",
        description: <>가설을 오래 다듬기보다 작동하는 화면이나 콘텐츠를 먼저 내놓고 반응을 봅니다. 숫자가 기대와 다르면 반응이 확인된 쪽으로 방향을 바꿉니다.</>,
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Next.js", icon: "nextjs" },
        ],
        images: [],
      },
      {
        title: "모르는 것도 적기",
        description: <>집계하지 못한 지표와 어긋난 가설도 그대로 적어 둡니다. 무엇을 확인했고 무엇을 아직 모르는지 분명해야 팀이 다음 판단을 정확히 내릴 수 있습니다.</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "글",
  title: "글",
  description: "",
};

const work: Work = {
  path: "/work",
  label: "프로젝트",
  title: "프로젝트 – 오준상",
  description: "오준상이 기획하고 만든 프로젝트",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "작업물",
  title: "작업물 – 오준상",
  description: "캠페인과 광고 작업에서 만든 이미지",
  images: [
    { src: "/images/p/gsa-poster.png", alt: "GSA 사인업 포스터", orientation: "vertical" },
    { src: "/images/p/ainus.jpg", alt: "Every Masterpiece Needs Wings", orientation: "horizontal" },
    { src: "/images/p/toss-1.jpg", alt: "TOSSTO 카드뉴스", orientation: "vertical" },
    { src: "/images/p/musinsa.jpg", alt: "피드백샌드백 키 비주얼", orientation: "horizontal" },
    { src: "/images/p/gsa-game.jpg", alt: "게임 공모전 포스터", orientation: "vertical" },
    { src: "/images/p/toss-banner.png", alt: "TOSSTO X 배너", orientation: "horizontal" },
    { src: "/images/p/toss-2.jpg", alt: "TOSSTO 카드뉴스", orientation: "vertical" },
    { src: "/images/p/gsa-puang.png", alt: "캠퍼스 마스코트 캠페인", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
