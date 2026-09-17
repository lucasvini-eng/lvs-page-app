# Documentação Técnica do Projeto - LVS Page

Este documento reúne a documentação técnica completa, detalhando a arquitetura, componentes, estilos, scripts e integrações do projeto. Todos os arquivos de código-fonte (`index.html`, `styles.css`, `script.js`, `tailwind.config.js`) são mantidos sem comentários inline, garantindo um código limpo, consistente e otimizado para produção.

---

## 1. Visão Geral da Arquitetura

- **Objetivo**: Landing page de alta conversão desenvolvida para conectar potenciais clientes que descobrem o negócio no Instagram diretamente ao atendimento e fechamento de vendas no WhatsApp.
- **Proposta Comercial**: Pacote único de **R$ 750,00** com domínio, hospedagem, manutenção vitalícia e adaptação para dispositivos móveis, sem mensalidades recorrentes.
- **Tecnologias**:
  - **HTML5**: Estrutura semântica, acessibilidade e metatags para SEO/Open Graph.
  - **CSS3 / Tailwind CSS**: Design dark mode moderno com acentos em ciano/azul neon (`#00c8ff`, `#30d4ff`), gradientes e tipografia fluida (`DM Sans` e `Manrope`).
  - **JavaScript (Vanilla)**: Manipulação não invasiva do DOM, geração dinâmica de links de WhatsApp e validação nativa de formulários.
  - **Node.js**: Servidor HTTP local leve para testes e desenvolvimento (`script.js`).

---

## 2. Estrutura de Arquivos

```text
lvs-page-app/
│
├── index.html            # Estrutura semântica principal da aplicação
├── package.json          # Metadados e scripts de inicialização (npm start)
├── script.js             # Servidor de desenvolvimento local em Node.js (porta 4174)
├── tailwind.config.js    # Configuração de temas e tokens do Tailwind CSS
├── DOCUMENTACAO.md       # Documentação técnica centralizada do projeto
│
└── src/
    ├── css/
    │   └── styles.css    # Estilização completa, variáveis CSS, componentes e responsividade
    └── js/
        └── script.js     # Lógica do formulário de captura e formatação de links WhatsApp
```

---

## 3. Documentação do `index.html`

### 3.1. Cabeçalho do Documento (`<head>`)
- **Metadados Principais**: `charset="UTF-8"`, `viewport` responsivo e `X-UA-Compatible`.
- **SEO & Social**:
  - `title`: `LVS Page | Seu próximo cliente começa aqui`
  - `description` e `og:description`: Detalham o pacote de R$ 750 com domínio, hospedagem e manutenção vitalícia.
  - `og:type` (`website`), `og:title`, `og:locale` (`pt_BR`).
  - `theme-color`: `#09090b` (integração com a barra de navegação em navegadores mobile).
- **Favicon**: Vetorial inline em formato SVG (`data:image/svg+xml,...`).
- **Otimização de Performance**: Preconexão (`preconnect`) aos domínios `fonts.googleapis.com`, `fonts.gstatic.com` e `cdn.jsdelivr.net`.
- **Estilos**: Tailwind CSS CDN Browser 4 e `src/css/styles.css`.

### 3.2. Estrutura Semântica do `<body>`
- **`<header>`**:
  - Logomarca tipográfica (`.wordmark`) com gradiente no monograma `strong`.
  - Navegação desktop (`<nav aria-label="Menu principal">`) com links de âncora suave para `#servicos`, `#sobre`, `#avaliacoes` e `#contato`.
  - Botão CTA (`.small-cta`): "Quero implementar ↗".
  - Navegação mobile (`.mobile-nav`): Menu secundário simplificado para telas menores (`md:hidden`).
- **`<main>`**:
  - **Seção Hero (`.hero-back`, `.hero`)**:
    - Tag de público-alvo (`.audience`) com bullet ciano.
    - Título (`<h1>`): Headline expressiva com destaque tipográfico em `<em>`.
    - Chamadas de ação: Botão principal (`.button` - R$ 750) e botão de contorno (`.outline-button`).
    - Mockup do Chat (`.chat-wrap` / `.chat-demo`): Demonstração visual de uma jornada de compra iniciando no Instagram e concluindo no WhatsApp.
  - **Barra de Benefícios (`.benefit-bar`)**: Lista horizontal de garantias inclusas (Domínio, Hospedagem, Manutenção vitalícia e Mobile-friendly).
  - **Seção de Serviços (`#servicos`)**: Grade com 3 cards (`<article class="service">`): Site vitrine para Instagram, Botão direto para WhatsApp e Infraestrutura inclusa (R$ 750,00).
  - **Seção Sobre (`#sobre`)**: Apresentação institucional da LVS Page com layout em duas colunas.
  - **Seção de Oferta e Preços (`#oferta`)**:
    - Coluna de benefícios com marcadores circulares de verificação (`.included li`).
    - Card de preço (`.price-card`): Destaque para o valor único de R$ 750,00 e botão de contratação direta via WhatsApp (`data-wa`).
  - **Seção de Avaliações (`#avaliacoes`)**: Prova social e convite para clientes enviarem feedback (`.review-box`).
  - **Seção de Contato e Formulário (`#contato`)**:
    - Apresentação e link para o perfil oficial no Instagram: [`@lvspage.site`](https://www.instagram.com/lvspage.site).
    - Formulário (`#lead-form`): Campos para nome (`#name`), nome da empresa (`#business`) e Instagram (`#instagram`).
- **`<footer>`**:
  - Rodapé minimalista com borda sutil, marca institucional, link para o Instagram oficial [`@lvspage.site`](https://www.instagram.com/lvspage.site) e link rápido para contato.
- **`<script>`**:
  - Importação de `src/js/script.js` com o atributo `defer` ao final do documento.

---

## 4. Documentação do `src/css/styles.css`

O arquivo CSS reúne a identidade visual do projeto e está organizado nos seguintes blocos lógicos:

1. **Importação Tipográfica**:
   - Famílias `DM Sans` (corpo e títulos) e `Manrope` (monogramas e numerais) via Google Fonts.
2. **Variáveis Globais (`:root`)**:
   - `--orange`: `#00c8ff` (cor primária em ciano neon).
   - `--gradient`: Gradiente linear horizontal (`#54e8ff` -> `#00b9ff` -> `#3873ff`).
3. **Reset e Base**:
   - Fundo `#09090b`, cor de texto `#f6f6f6`, scroll suave (`scroll-behavior: smooth`) com recuo para navegação fixa (`scroll-padding-top: 28px`).
4. **Componentes e Utilitários**:
   - `.wrap`: Largura máxima responsiva (`min(1320px, calc(100% - 80px))`).
   - `.wordmark`: Tipografia em negrito com gradiente clipado ao texto e sombra neon (`drop-shadow`).
   - `.button` e `.small-cta`: Formato arredondado estilo cápsula (`border-radius: 999px`) com gradiente e transição de hover.
   - `.hero-back`: Gradientes radiais sobrepostos simulando iluminação atmosférica e malha de pontos sutis.
   - `.chat-demo`: Card estilizado imitando uma interface de aplicativo móvel moderno com balões de mensagem e status de confirmação.
   - `.price-card`: Card com borda gradiente construída com `padding-box` e `border-box` e brilho neon suave (`box-shadow`).
   - `.lead-form`: Painel com campos de texto escuros (`#101010`), bordas suaves e foco acentuado em ciano.
5. **Responsividade (`@media`)**:
   - Ajustes refinados para tablets (`max-width: 1000px`) e smartphones (`max-width: 767px`).
   - Suporte a acessibilidade de movimento (`prefers-reduced-motion: reduce`).

---

## 5. Documentação do `src/js/script.js`

O script do cliente adiciona comportamento sem dependências externas:

1. **Formatação Dinâmica de Links WhatsApp (`[data-wa]`)**:
   - Seleciona todos os elementos com o atributo `data-wa`.
   - Gera o link codificado: `https://wa.me/5582996402650?text=<mensagem_codificada>`.
   - Aplica os atributos de segurança `target="_blank"` e `rel="noopener noreferrer"`.
2. **Interceptação e Envio do Formulário (`#lead-form`)**:
   - Intercepta o evento de `submit` e previne o reload da página.
   - Valida o preenchimento obrigatório de Nome e Empresa.
   - Monta dinamicamente a mensagem de lead incluindo o nome, empresa, Instagram (se fornecido) e o interesse no pacote de R$ 750,00.
   - Redireciona o usuário diretamente para o WhatsApp via `window.location.href`.

---

## 6. Documentação do `script.js` (Servidor Local)

- **Módulo**: Node.js nativo (`http`, `fs/promises`, `path`).
- **Endereço**: `http://127.0.0.1:4174`.
- **Funcionalidades**:
  - Resolução de rotas estáticas (redireciona `/` para `/index.html`).
  - Tratamento de tipos MIME (`.html`, `.css`, `.js`, `.svg`, `.json`).
  - Proteção contra Directory Traversal (`filePath.startsWith(root + path.sep)`).
  - Resposta HTTP 404 para arquivos inexistentes e 403 para acessos negados.

---

## 7. Documentação do `tailwind.config.js`

- Arquivo de configuração compatível com o ecossistema Tailwind CSS.
- Mapeia o conteúdo (`index.html` e `src/js/**/*.js`) para compilações locais futuras caso o projeto migre de CDN para build process.
- Estende a paleta com a cor customizada `neon: '#00c8ff'`.
