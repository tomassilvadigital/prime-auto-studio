# Prime Auto Studio — Fase 4: ajustes de conteúdo e contactos

## Base
`prime-auto-studio(2).zip` enviado pelo utilizador. Apenas os ficheiros listados abaixo foram alterados.

## Alterações
- `index.html`: removidos avisos internos desatualizados de autorização das fotografias, já concedida pelo cliente; removida a ressalva de confirmação da experiência (+14 anos na Suíça) do texto apresentado ao visitante, conservando o valor já comunicado no projeto.
- `contactos.html`: explicação mais clara de que o pedido de orçamento prepara texto e depende de envio manual através do Instagram.
- `js/contactos.js`: comentários corrigidos e mensagem de cópia manual melhorada quando a API da área de transferência não está disponível.

## Preservado
- Cinco páginas, design, imagens, galeria, mapa, menus e URLs de Instagram.
- Sem telefone, email ou horário inventados. O domínio e o DNS não foram alterados.
- Identificação de serviços específicos em fotografias não confirmadas mantém-se pendente.

## Verificações
- JavaScript validado por `node --check`.
- Sintaxe e ligações HTML inspecionadas por script.
- Não foram realizados testes visuais reais em navegador ou telemóvel, nem testes de deploy.

## Instalação
Copiar os três ficheiros do ZIP para as mesmas pastas no projeto existente. Não substituir as restantes páginas e não mexer na pasta `.git`. Testar `index.html`, `contactos.html` e a função «Copiar mensagem» no Live Server antes do commit.
