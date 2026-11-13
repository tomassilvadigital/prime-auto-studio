# Prime Auto Studio — Auditoria e ajustes finais (12/11/2026)

## Base de trabalho
Auditoria realizada sobre o ZIP `prime-auto-studio(1).zip` com as atualizações anteriores aplicadas por ordem: V4 de Projetos, Fase 2 de localização e Fase 3 de homepage/serviços. **Esta é uma reconstrução da versão de trabalho a partir dos pacotes enviados na conversa, não uma confirmação da versão atualmente integrada no computador do utilizador.**

## Alterações efetuadas
- `index.html`: título/descrição para a marca contratada; removida a indicação desatualizada de morada por confirmar; nota do mapa mantém o marcador aproximado.
- `servicos.html`: título da página e linguagem comercial sem referências à demonstração.
- `projetos.html`: título e descrições ajustadas; substituída nota interna de produção por aviso discreto sobre trabalhos ainda não atribuídos a categorias.
- `sobre.html`: título e texto de percurso sem linguagem de demonstração nem novas alegações sobre experiência.
- `contactos.html`: título, informação sobre a forma como a mensagem de orçamento funciona e nota de localização revista.
- Nos cinco HTML: removida do rodapé a indicação «Website de demonstração, não oficial».

## Verificações automáticas feitas
- Cinco HTML com um H1 por página.
- Ficheiros locais referenciados por `src` e `href` presentes na versão composta.
- Referências `#âncora` para identificadores existentes.
- `node --check` nos scripts `js/main.js`, `js/contactos.js`, `js/projetos.js`.

## Já existente e preservado
- Cinco páginas, menus e navegação.
- Galeria/lightbox com zoom, filtros e múltiplas imagens de McLaren e Porsche.
- Mapa de Portugal com marcador aproximado de Cantanhede e botão «Como chegar».
- Formulário de orçamento que **prepara texto localmente** e não envia dados; Instagram permanece o canal de contacto.
- Fotografias e estilos anteriores não incluídos neste pacote de alterações.

## Antes de publicar
1. Confirmar manualmente em Live Server a versão para PC e telemóvel; esta auditoria não inclui testes visuais ou de browser.
2. Verificar links externos (Instagram e Google Maps) em dispositivos reais.
3. Confirmar quais trabalhos concretos são atribuíveis aos modelos na galeria (Urus, Chrysler e restantes dúvidas).
4. Quando houver domínio definitivo, definir canonicals, Open Graph, sitemap e robots adequados ao domínio publicado; **não foram inventados nesta etapa**.
5. Quando chegarem telefone e email profissional, acrescentar apenas após confirmação; não publicar horários (cliente pediu para omitir).
6. Rever textos de política de privacidade se o website passar a recolher dados online.
7. Fazer auditoria final ao ZIP integrado mais recente antes de publicar, para evitar conflitos com edições locais.
