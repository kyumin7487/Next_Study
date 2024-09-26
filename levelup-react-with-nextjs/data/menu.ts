export type Item = {
    name: string;
    slug: string;
    description?: string;
};

export const menus: { name: string; items: Item[] }[] = [
    {
        name: '라우팅: 기법',
        items: [
            {
                name: '라우팅 기본',
                slug: 'route',
                description: '파일 시스템 기반 라우팅 기본',
            },
            {
                name: '동적 라우팅',
                slug: 'dynamic-routing',
                description: '동적으로 생성되는 라우팅',
            },
            {
                name: '라우팅 그룹',
                slug: 'route-groups',
                description: 'URL 경로에 영향을 주지 않고 라우트를 조직',
            },
            {
                name: '병렬 라우팅',
                slug: 'parallel-routes',
                description: '동일한 레이아웃에서 여러 페이지 렌더링하기',
            },
        ],
    },
    {
        name: '라우팅: UI',
        items: [
            {
                name: '로딩',
                slug: 'loading',
                description:
                    'Create meaningful Loading UI for specific parts of an app',
            },
            {
                name: '에러 처리',
                slug: 'error-handling',
                description: 'Create Error UI for specific parts of an app',
            },
            {
                name: '페이지 없음(404)',
                slug: 'not-found',
                description: 'Create Not Found UI for specific parts of an app',
            },
        ],
    },
];