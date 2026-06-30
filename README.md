## Visão Geral
Este projeto é um site responsivo para a confeitaria Lu Doces, feito com HTML5, CSS3 e JavaScript puro. O foco é UX/UI moderno, responsividade total e interatividade leve.

## Estrutura Principal
- `index.html`: Página principal, contém todas as seções (header, hero, sobre, produtos, contato, footer).
- `churrasco.html`: Página secundária para oferta especial (churrasco a bafo).
- `styles.css`: Estilos globais e responsivos, com breakpoints e animações.
- `script.js`: JS para navegação suave, animações de scroll, exibição de botões flutuantes e manipulação do navbar.
- `logo.png/`: Pasta de imagens do site.

## Padrões e Convenções
 **Mobile-first**: O CSS prioriza layouts para dispositivos móveis.
 **Navbar**: Fixa no topo, fundo branco por padrão, escurece ao rolar (classe `.scrolled` via JS).
 **Botões Flutuantes**: WhatsApp e Churrasco aparecem animados ao rolar a página, ocultos por padrão (classe `.visible` via JS).
 **Fontes**: Google Fonts (Dancing Script, Poppins) e ícones Font Awesome via CDN.
 **Seções**: Cada seção tem uma classe específica para facilitar customização.
 **Imagens**: Use a pasta `img/` para todas as imagens do site.
 **Nunca misture estilos ou códigos entre páginas diferentes (ex: `index.html` e `churrasco.html`). Cada página deve ter seus próprios estilos e scripts, separados para melhor visualização, manutenção e organização. Se necessário, acrescente arquivos ou classes específicas para cada página.

## Fluxo de Desenvolvimento
- Edite o conteúdo em `index.html` e `churrasco.html`.
- Estilize usando `styles.css`, respeitando os breakpoints e as classes de animação.
- Adicione interatividade e animações em `script.js`.
- Para adicionar novos botões flutuantes, siga o padrão: oculto por padrão, visível com `.visible` via JS ao rolar.

## Testes e Debug
- Para testar responsividade, use DevTools (F12) e o modo dispositivo móvel.
- O site pode ser aberto diretamente no navegador ou via servidor local (ex: `python -m http.server`).
- Não há testes automatizados; validação é visual/manual.
