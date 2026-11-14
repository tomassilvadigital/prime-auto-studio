# Prime Auto Studio — Fase 5: SEO técnico

Base: `prime-auto-studio(3).zip` (versão mais recente disponibilizada).

## Alterado
- `index.html`, `servicos.html`, `projetos.html`, `sobre.html`, `contactos.html`: canonical, etiquetas Open Graph e Twitter, ícones (sem alterar conteúdo visual). Na homepage foi adicionado JSON-LD do tipo `Organization` com os dados confirmados.

## Criado
- `sitemap.xml`: cinco URLs principais, sem URLs inventados.
- `robots.txt`: rastreio permitido e localização do sitemap.
- `assets/favicon-32.png`, `assets/favicon-192.png`, `assets/apple-touch-icon.png`: ícones derivados do logótipo que já estava no projeto.

## Preservado
- HTML visível, CSS, JavaScript, animações, galerias, mapa, formulários e fotografias.

## Atenção antes de publicar
- Os metadados utilizam o domínio oficial `https://primeautostudio.pt/`, **que ainda depende da configuração DNS/HTTPS na OVH e no GitHub Pages**. Não divulgar nem submeter o sitemap até o domínio abrir normalmente com HTTPS.
- A fotografia Open Graph é um ficheiro existente (`mclaren-frente.webp`). Confirmar como a pré-visualização aparece no Instagram/WhatsApp depois de publicar; poderá beneficiar de uma imagem horizontal específica futuramente.
- `robots.txt` não exige acesso a dados privados, e não altera o DNS nem o email.

## Validações efetuadas
- Verificação sintática dos ficheiros XML e JSON-LD, contagem de URLs, existência das referências locais, ficheiros PNG válidos e integridade do ZIP.
- **Não foi efetuado** teste visual ou de partilha nas redes sociais num website publicado.

## Instalação
Extrair este ZIP na pasta principal do projeto, respeitando os caminhos. Guardar a `.git` atual. Depois abrir as cinco páginas localmente, fazer commit e push. Confirmar DNS e HTTPS antes de solicitar indexação no Google Search Console.
