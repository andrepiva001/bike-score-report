bike-score-report/          ← raiz do repositório
└── vercel.json               ← configura os 5 crons automáticos
└── package.json              ← lista de dependências do projeto
└── next.config.js            ← configuração do Next.js
└── app/
│   └── page.tsx              ← o dashboard (seu arquivo .jsx atual)
│   └── layout.tsx            ← estrutura base da página
│   └── api/
│       └── cron/
│       │   └── route.ts      ← motor automático 5×/dia
│       └── score/
│           └── route.ts      ← endpoint de scoring manual
└── lib/
    └── supabase.ts           ← conexão com banco de dados
    └── social-publish.ts     ← publica nas redes via webhook
