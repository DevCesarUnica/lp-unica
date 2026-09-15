# Por que saímos do WordPress/Elementor

O site institucional da Única Promotora era construído em WordPress com o page builder Elementor. Este documento registra os motivos técnicos da migração para uma stack estática (React + TypeScript + Vite), com PHP mínimo apenas para persistência de formulários.

## Resumo

| Critério | WordPress + Elementor | Stack atual |
|---|---|---|
| Performance (payload/JS) | Alto — CSS/JS do core + Elementor + plugins, mesmo em páginas simples | Baixo — bundle por rota, code splitting, sem runtime de page builder |
| Superfície de ataque | Grande — core, tema, dezenas de plugins, todos com CVEs próprios | Pequena — 6 scripts PHP sem dependências, sem banco de dados, sem painel admin exposto |
| Versionamento de mudanças | Nenhum real — edições no painel, sem diff, sem revisão | Git completo — todo o histórico, PRs revisáveis, possível CI |
| Custo de hospedagem/licenças | Banco MySQL + licença Elementor Pro + plugins premium (SEO, formulários, cache) | Hospedagem estática comum + PHP básico, sem licenças |
| Consistência visual | Markup gerado pelo builder, inconsistente entre seções | Design system próprio (Tailwind + tokens), mesmo padrão em todo o site |
| Portabilidade | Atada a um banco de dados MySQL + estrutura de tabelas do WP | Conteúdo é código versionado; mover de hospedagem é copiar arquivos |
| Dependência de atualizações | Core, tema e cada plugin precisam de patch de segurança recorrente | Sem plugins; poucas dependências, todas auditáveis via `npm audit` |

## Detalhamento

### 1. Performance

Elementor renderiza cada seção com CSS/JS próprios carregados por página, além do runtime do próprio builder e do tema base. Isso resulta em payloads grandes e métricas de Core Web Vitals (LCP, CLS, TBT) ruins mesmo em páginas de conteúdo simples — o que penaliza SEO e a taxa de conversão do formulário de lead, que é o objetivo comercial central do site.

Na stack atual, o Vite faz code splitting por rota (`React.lazy`), o CSS é gerado sob demanda pelo Tailwind (sem folhas de estilo não usadas) e não há runtime de page builder para interpretar em tempo de execução.

### 2. Segurança

Um site WordPress típico com Elementor + plugins de formulário + SEO + cache tem dezenas de pontos de entrada, cada um com seu próprio histórico de vulnerabilidades (CVEs). Manter isso seguro exige atualização constante do core, do tema e de cada plugin — e uma falha em manter isso em dia é a causa mais comum de comprometimento de sites WordPress.

A stack atual não expõe painel administrativo público, não usa banco de dados, e a única superfície de API são 6 scripts PHP sem framework, cada um validando o próprio input e escrevendo em um CSV local (bloqueado por `.htaccess` contra leitura direta via URL). Menos código exposto, menos superfície de ataque.

### 3. Manutenção e versionamento

Mudanças no Elementor são feitas diretamente no painel, sem histórico de versão real, sem possibilidade de revisão antes de publicar, e sem forma simples de reverter uma alteração indesejada.

Com o código em Git, toda mudança de layout, copy ou funcionalidade passa por commit/PR, pode ser revisada e tem histórico completo — inclusive este documento é resultado desse processo.

### 4. Custo

O modelo anterior dependia de licença do Elementor Pro e, dependendo dos plugins de formulário/SEO/cache usados, de assinaturas adicionais recorrentes, além de um plano de hospedagem com banco de dados MySQL dimensionado para o WordPress. A stack atual roda sobre hospedagem estática comum com suporte a PHP básico (o mesmo plano Hostgator já contratado), sem custo de licença de software.

### 5. Fidelidade visual e consistência

A reconstrução seguiu a paleta, tipografia e estrutura de conteúdo do site original (extraídas do HTML/CSS público), mas usando um design system próprio (tokens no `tailwind.config.ts`) em vez de depender do markup gerado pelo builder — o que garante que todas as seções sigam o mesmo padrão visual, em vez de cada uma ter peculiaridades de como foi montada no Elementor.

## O que se perde

Vale registrar o trade-off, não só os ganhos: no WordPress, uma pessoa não-técnica conseguia editar textos e imagens direto no painel, sem precisar de um desenvolvedor. Na stack atual, qualquer alteração de conteúdo passa por código e deploy. Isso foi um trade-off aceito conscientemente em favor de performance, segurança e custo — e pode ser mitigado no futuro com um CMS headless, se a necessidade de edição frequente por não-desenvolvedores justificar a complexidade adicional.
