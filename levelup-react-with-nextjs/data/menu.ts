export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const menus: { name: string; items: Item[] }[] = [
  {
    name: "라우팅: 레이아웃",
    items: [
      {
        name: "라우팅 기본",
        slug: "route",
        description: "파일 시스템 기반 라우팅 기본",
      },
      {
        name: "동적 라우팅",
        slug: "dynamic-routing",
        description: "동적으로 생성되는 라우팅",
      },
      {
        name: "라우팅 그룹",
        slug: "route-groups",
        description: "URL 경로에 영향을 주지 않고 라우트를 조직",
      },
    ],
  },
  {
    name: "라우팅: UI",
    items: [
      {
        name: "로딩",
        slug: "loading",
        description:
          "Create meaningful Loading UI for specific parts of an app",
      },
      {
        name: "에러 처리",
        slug: "error-handling",
        description: "Create Error UI for specific parts of an app",
      },
      {
        name: "페이지 없음(404)",
        slug: "not-found",
        description: "Create Not Found UI for specific parts of an app",
      },
    ],
  },
  {
    name: "다양한 기법",
    items: [
      {
        name: "CSS 스타일링",
        slug: "styling",
        description: "다양한 CSS 스타일링 라이브러리 및 방법론을 탐구",
      },
    ],
  },
  {
    name: '렌더링: 데이터 가져오기',
    items: [
      {
        name: '정적 사이트 생성',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: '증분적 정적 재생성',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
      {
        name: '서버 사이드 렌더링',
        slug: 'ssr',
        description: 'Server-render pages',
      },

      {
        name: '서스펜스 스트리밍',
        slug: 'streaming',
        description:
            'Streaming data fetching from the server with React Suspense',
      },
    ],
  },
];
