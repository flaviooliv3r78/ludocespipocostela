# 🧪 Guia de Teste - Lu Doces PWA

Este guia te ajudará a testar se o PWA está funcionando corretamente.

## 🚀 Como Testar Localmente

### 1. Iniciar Servidor Local
```bash
# Opção 1: Usando npm (se tiver Node.js instalado)
npm start

# Opção 2: Usando Python
python -m http.server 8080

# Opção 3: Usando PHP
php -S localhost:8080

# Opção 4: Usando Live Server (VS Code)
# Instale a extensão "Live Server" e clique em "Go Live"
```

### 2. Acessar o Site
Abra seu navegador e acesse: `http://localhost:8080`

## 📱 Testando Funcionalidades do PWA

### ✅ Checklist de Testes

#### 1. Manifest e Instalação
- [ ] Abra o DevTools (F12)
- [ ] Vá para Application → Manifest
- [ ] Verifique se o manifest está carregado
- [ ] Procure pelo botão "Instalar App" no canto superior direito
- [ ] Teste a instalação do app

#### 2. Service Worker
- [ ] Vá para Application → Service Workers
- [ ] Verifique se o SW está registrado
- [ ] Teste o modo offline:
  - Desconecte a internet
  - Recarregue a página
  - Verifique se o conteúdo ainda carrega

#### 3. Funcionalidades Mobile
- [ ] Teste em dispositivo móvel ou modo responsivo
- [ ] Verifique se o menu hambúrguer funciona
- [ ] Teste navegação por gestos (swipe)
- [ ] Verifique feedback tátil (vibração)

#### 4. Performance
- [ ] Execute o Lighthouse audit
- [ ] Verifique a pontuação PWA (deve ser 90+)
- [ ] Teste o tempo de carregamento

## 🔍 Testes Específicos

### Teste de Instalação
1. **Chrome Desktop:**
   - Procure pelo ícone de instalação na barra de endereços
   - Clique e confirme a instalação
   - Verifique se o app aparece no desktop

2. **Chrome Mobile:**
   - Toque no menu (3 pontos)
   - Selecione "Adicionar à tela inicial"
   - Confirme a instalação
   - Verifique se o app aparece na tela inicial

3. **Safari iOS:**
   - Toque no botão de compartilhar
   - Selecione "Adicionar à Tela de Início"
   - Confirme a instalação

### Teste de Funcionamento Offline
1. Abra o site
2. Desconecte a internet
3. Recarregue a página
4. Verifique se:
   - O conteúdo ainda carrega
   - As imagens aparecem
   - A navegação funciona
   - O formulário de contato funciona

### Teste de Gestos
1. **Swipe Horizontal:**
   - Faça swipe para esquerda (próxima seção)
   - Faça swipe para direita (seção anterior)

2. **Pull-to-Refresh:**
   - Puxe a página para baixo no topo
   - Verifique se a página recarrega

### Teste de Feedback Tátil
1. Toque nos botões principais
2. Verifique se há vibração (em dispositivos compatíveis)
3. Verifique se há feedback visual

## 🛠️ Ferramentas de Desenvolvimento

### Chrome DevTools
1. **Application Tab:**
   - Manifest: Verificar configuração
   - Service Workers: Verificar registro
   - Storage: Verificar cache

2. **Network Tab:**
   - Verificar cache de recursos
   - Testar modo offline

3. **Performance Tab:**
   - Medir tempo de carregamento
   - Verificar otimizações

### Lighthouse Audit
1. Abra DevTools → Lighthouse
2. Selecione "Progressive Web App"
3. Clique em "Generate report"
4. Verifique a pontuação e sugestões

## 📊 Métricas de Sucesso

### Pontuação Lighthouse
- **PWA Score:** 90-100
- **Performance:** 80-100
- **Accessibility:** 90-100
- **Best Practices:** 90-100
- **SEO:** 90-100

### Funcionalidades
- [ ] Instalação funciona em todos os dispositivos
- [ ] Funcionamento offline completo
- [ ] Navegação por gestos funciona
- [ ] Feedback tátil funciona
- [ ] Notificações aparecem (se configuradas)

## 🐛 Problemas Comuns

### PWA não instala
- Verifique se está usando HTTPS (ou localhost)
- Verifique se o manifest.json está correto
- Verifique se o Service Worker está registrado

### Não funciona offline
- Verifique se o Service Worker está ativo
- Verifique se os recursos estão sendo cacheados
- Verifique a console para erros

### Gestos não funcionam
- Verifique se está testando em dispositivo móvel
- Verifique se o JavaScript está carregando
- Verifique a console para erros

## 📱 Teste em Dispositivos Reais

### Android
1. Abra o Chrome
2. Acesse o site
3. Teste instalação
4. Teste funcionalidades offline
5. Teste gestos

### iOS
1. Abra o Safari
2. Acesse o site
3. Teste instalação
4. Teste funcionalidades básicas

### Desktop
1. Abra Chrome/Edge
2. Teste instalação
3. Teste funcionalidades básicas

## 🎯 Próximos Passos

Após os testes:
1. Corrija problemas encontrados
2. Otimize performance se necessário
3. Configure notificações push (opcional)
4. Deploy para produção
5. Teste em produção

---

**Dica:** Mantenha o DevTools aberto durante os testes para verificar erros e logs!

