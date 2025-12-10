# 🏗️ Dev Log - Via Cor Revestimentos Landing Page

## Sobre o Projeto

**Cliente:** Via Cor Revestimentos  
**Tipo:** Landing Page Premium  
**Objetivo:** Conversão via WhatsApp e agendamento de visitas ao showroom  
**Nicho:** Acabamentos e revestimentos premium  
**Localização:** Zona Sul de São Paulo  

**Descrição:**
Boutique especializada em acabamentos de alto padrão, com 40 anos de experiência no mercado. Showroom sensorial de 450m² na Granja Julieta, oferecendo curadoria de produtos exclusivos, marcas premium e atendimento consultivo personalizado.

## Conceito de Design: "Premium Glassmorphism"

**Filosofia de Design:**
- **Sólido e Tradicional:** Estética que reflete 40 anos de autoridade no mercado
- **Glassmorphism Premium:** Efeito de vidro fosco para sofisticação visual
- **Dualidade Visual:** Combina solidez (azul) com paixão (vermelho)
- **Boutique Especializada:** Visual que transmite exclusividade e curadoria

### Paleta de Cores

- **Azul Marinho (#1E3A5F):** Cor principal "VIA" - Confiança, seriedade, tradição
- **Vermelho Terracota (#C0392B):** Cor "Cor" - Paixão, decoração, elemento humano
- **Gradiente de Azuis:** #3498DB, #5DADE2, #85C1E9 - Água, higiene, variedade

### Tipografia

- **Playfair Display (Serif):** Títulos e headlines - Reflete o "Cor" (elegância, decoração)
- **Inter (Sans-serif):** Corpo de texto - Reflete o "VIA" (estrutura, confiança)

**Hierarquia:**
- H1: Playfair Display, 700, 3.5rem - 4.5rem
- H2-H4: Playfair Display, 600, 2.5rem - 3.5rem
- Corpo: Inter, 400, 1rem - 1.125rem, line-height 1.6-1.7
- CTAs: Inter, 600, 1rem - 1.125rem

## Estrutura da Landing Page

1. **Header** - Navegação fixa com glassmorphism
2. **Hero Section** - Abertura com proposta de valor e CTA principal
3. **Marcas** - Autoridade com marcas premium (Portinari, Castellato, Eliane, Atlas)
4. **Depoimentos** - Prova social (Google Reviews)
5. **Benefícios** - Diferenciais e vantagens
6. **CTA Final** - Chamada para ação com informações de contato
7. **Footer** - Informações complementares
8. **WhatsApp Button** - Botão flutuante fixo

## Tecnologias Utilizadas

- **React 19.2.0** - Framework JavaScript
- **Vite 7.2.4** - Build tool e dev server
- **Tailwind CSS v4** - Framework CSS utility-first (via @tailwindcss/vite)
- **Google Fonts** - Playfair Display + Inter

## Estratégias de Conversão Implementadas

1. **WhatsApp como CTA Principal:**
   - Botão flutuante sempre visível
   - CTAs em múltiplas seções
   - Mensagens pré-formatadas

2. **Glassmorphism Premium:**
   - Header e Hero com efeito de vidro fosco
   - Transmite sofisticação e modernidade

3. **Animações Premium:**
   - Botão CTA com pulse, shimmer e glow
   - Destaque visual para conversão

4. **Prova Social:**
   - Seção de depoimentos (Google Reviews)
   - Marcas premium destacadas

5. **Hierarquia Visual Clara:**
   - Tipografia premium (Playfair + Inter)
   - Contraste otimizado para legibilidade

## Componentes Principais

### Header.jsx
- Navegação fixa com glassmorphism
- Logo da Via Cor
- Links de navegação com hover em vermelho terracota
- Responsivo (menu oculto em mobile)

### Hero.jsx
- Background com imagem do showroom
- Título em container glassmorphism
- Parágrafo com contraste otimizado
- Botão CTA centralizado com animações premium
- Informação de localização

### Brands.jsx
- Seção de autoridade com marcas premium
- Lista de marcas (Portinari, Castellato, Eliane, Atlas + outras)
- Espaço para imagens de projetos

### Testimonials.jsx
- Grid para prints do Google Reviews
- Prova social dos clientes

### Benefits.jsx
- Lista de 5 benefícios com checkmarks
- Espaço para carrossel do showroom

### CTA.jsx
- Chamada para ação final
- Informações de contato (endereço, horários, estacionamento)
- Espaço para foto e mapa

### Footer.jsx
- Fundo azul marinho
- Links rápidos
- Informações de contato

### WhatsAppButton.jsx
- Botão flutuante fixo
- Link direto com mensagem pré-formatada
- Tooltip no hover

## Responsividade

### Abordagem: Mobile-First
- Layouts otimizados para mobile
- Breakpoints: mobile (< 768px), desktop (≥ 768px), large (≥ 1024px)

### Adaptações Específicas
- Header: Menu oculto em mobile
- Hero: Tamanhos de fonte reduzidos em mobile
- Glassmorphism: Mantido em todos os dispositivos
- Botões: Tamanhos adequados para touch

## Aprendizados Aplicados de Projetos Anteriores

1. **WhatsApp como CTA principal:** Estratégia validada de projetos anteriores
2. **Glassmorphism:** Efeito premium aplicado com sucesso
3. **Tipografia dual:** Reflete a identidade visual do logo
4. **Animações sutis:** Pulse e shimmer para destaque sem exageros
5. **Paleta de cores da marca:** Aplicação consistente em todos os componentes

## Erros Encontrados e Soluções

### ✅ Erro 1: Tailwind CSS não estava funcionando
**Data:** Início do projeto  
**Problema:** Tailwind CSS não estava sendo processado corretamente  
**Causa:** 
- Plugin do Tailwind não estava configurado no vite.config.js
- Import do Tailwind não estava no arquivo correto

**Solução:**
- Instalado: `npm install -D tailwindcss @tailwindcss/vite`
- Adicionado plugin no `vite.config.js`: `tailwindcss()`
- Adicionado `@import "tailwindcss"` no `index.css`

**Status:** ✅ Resolvido

---

### ✅ Erro 2: Imagem do logo com espaço no nome
**Data:** Durante implementação do Header  
**Problema:** Arquivo `viacor-logo-instagram .jpg` tem espaço no nome  
**Causa:** Nome do arquivo com espaço antes da extensão  

**Solução:**
- Mantido nome original do arquivo
- Caminho usado exatamente como está: `/viacor-logo-instagram .jpg`

**Status:** ✅ Resolvido (funcionando com nome original)

---

## Acertos e Melhorias Implementadas

### ✅ Configuração do Tailwind CSS
- Tailwind v4 configurado corretamente com plugin do Vite
- Funcionando perfeitamente em todos os componentes

### ✅ Tipografia Premium (Playfair Display + Inter)
- Implementada Opção 1 conforme recomendação
- Reflete perfeitamente a dualidade do logo
- Hierarquia visual clara e legível

### ✅ Glassmorphism no Header e Hero
- Efeito de vidro fosco aplicado
- Background semi-transparente com backdrop-blur
- Bordas sutis e sombras para profundidade

### ✅ Animações Premium no Botão CTA
- Pulse contínuo sutil
- Shimmer effect no hover
- Glow effect no hover
- Scale e translateY para feedback visual

### ✅ Paleta de Cores da Marca
- Azul marinho aplicado consistentemente
- Vermelho terracota em CTAs e destaques
- Variáveis CSS criadas para reutilização

### ✅ Contraste Otimizado
- Textos com 100% de opacidade
- Drop-shadows para legibilidade
- Glassmorphism com opacidade aumentada (25%)

### ✅ Centralização do Botão CTA
- Botão centralizado no Hero
- Layout equilibrado e profissional

## Implementações Especiais

### Implementação: Glassmorphism Premium
**Data:** Durante desenvolvimento do Hero e Header  
**Objetivo:** Criar efeito visual sofisticado que transmite premium e modernidade  

**Pensamento e Decisões:**
- Glassmorphism combina com o posicionamento de boutique especializada
- Efeito de vidro fosco cria profundidade visual
- Backdrop-blur mantém legibilidade sobre imagens

**Código/Exemplo:**
```css
/* Header */
bg-white/10 backdrop-blur-md border border-white/20

/* Hero Title Container */
bg-white/25 backdrop-blur-lg border border-white/30 rounded-2xl
```

**Resultado:** ✅ Implementado e funcionando perfeitamente

---

### Implementação: Animações Premium no Botão CTA
**Data:** Durante desenvolvimento do Hero  
**Objetivo:** Criar botão CTA que se destaque visualmente e atraia atenção  

**Pensamento e Decisões:**
- Animações sutis mas impactantes
- Pulse contínuo para sempre chamar atenção
- Shimmer no hover para feedback imediato
- Glow para intensificar no hover

**Código/Exemplo:**
```css
@keyframes premium-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(192, 57, 43, 0.4);
  }
  50% {
    box-shadow: 0 0 30px rgba(192, 57, 43, 0.6);
  }
}

.btn-premium::before {
  /* Shimmer effect */
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
}
```

**Resultado:** ✅ Implementado com múltiplas animações funcionando

---

### Implementação: Tipografia Dual (Playfair Display + Inter)
**Data:** Após análise do branding  
**Objetivo:** Refletir a dualidade do logo (VIA geométrica + Cor serifada)  

**Pensamento e Decisões:**
- Playfair Display (serif) para títulos = "Cor" (elegância, decoração)
- Inter (sans-serif) para corpo = "VIA" (estrutura, confiança)
- Combinação transmite tradição + modernidade

**Resultado:** ✅ Implementado e alinhado com identidade visual

---

## Status do Projeto

✅ **Estrutura completa implementada**  
✅ **Design "Premium Glassmorphism" aplicado**  
✅ **Tipografia premium configurada**  
✅ **Paleta de cores da marca aplicada**  
✅ **Animações premium implementadas**  
✅ **Glassmorphism no Header e Hero**  
✅ **Responsividade completa**  
⏳ **Aguardando conteúdo real (imagens, depoimentos)**  
⏳ **Configurar número de WhatsApp real**  
⏳ **Adicionar Google Maps**  

## Próximos Passos

### Implementações Pendentes
- [ ] Substituir placeholders por imagens reais dos projetos
- [ ] Adicionar prints reais do Google Reviews
- [ ] Configurar número de WhatsApp real (atualmente placeholder)
- [ ] Adicionar Google Maps na seção de contato
- [ ] Implementar carrossel de fotos do showroom
- [ ] Adicionar foto do showroom na seção CTA
- [ ] Otimizar imagens para performance (lazy loading, compressão)
- [ ] Configurar SEO e meta tags completas
- [ ] Adicionar Google Tag Manager / Analytics
- [ ] Testes de acessibilidade

### Melhorias Futuras (Opcional)
- [ ] Adicionar animações de scroll reveal
- [ ] Implementar menu mobile hamburger
- [ ] Adicionar mais interatividade nas seções
- [ ] Criar versão dark mode (se necessário)
- [ ] A/B testing de CTAs
- [ ] Análise de conversão e otimizações baseadas em dados

---

## Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
cd viacorrevestimentos-lp
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Verificar status do Git
git status

# Commit e push
git add .
git commit -m "mensagem"
git push origin main
```

---

## Estrutura de Arquivos

```
viacorrevestimentos-lp/
├── public/
│   ├── viacor-hero1.jpg
│   ├── viacor-logo-instagram .jpg
│   ├── fotos/ (12 imagens)
│   └── marcas/ (4 logos)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Brands.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Benefits.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── branding.md
├── TIPOGRAFIA_RECOMENDACOES.md
├── APRENDIZADODEV_Log.md
└── DEV-viacor_Log.md (este arquivo)
```

---

## Notas de Desenvolvimento

### Dependências Instaladas
- `react@^19.2.0`
- `react-dom@^19.2.0`
- `vite@^7.2.4`
- `tailwindcss@latest`
- `@tailwindcss/vite@latest`

### Configurações Importantes
- Tailwind v4 usando plugin do Vite (não precisa de `tailwind.config.js`)
- Google Fonts carregadas via CDN no `index.html`
- Variáveis CSS customizadas no `index.css`

### Decisões de Design
- Glassmorphism escolhido para transmitir premium sem ser minimalista
- Cores da marca aplicadas consistentemente
- Tipografia dual reflete identidade visual do logo
- Animações sutis mas impactantes

---

## Referências

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/installation/using-vite)
- [Google Fonts - Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Glassmorphism Design Trend](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)

---

## Implementação: Sistema de Galeria por Marcas com Modal Premium

### Data: Dezembro 2024
### Objetivo
Criar um sistema interativo onde o usuário clica em uma marca para ver sua galeria de projetos, e ao clicar em uma foto da galeria, abre um modal premium para visualização em tamanho maior.

### Pensamento e Decisões de Design

#### 1. Fluxo de Interação em Duas Etapas
- **Decisão**: Separar seleção de marca e abertura do modal
- **Por quê**: 
  - Permite ao usuário explorar todas as fotos da marca antes de abrir o modal
  - Melhor UX: usuário vê preview antes de decidir qual foto ver em detalhes
  - Reduz sobrecarga visual: modal só abre quando necessário

#### 2. Estados Separados
```javascript
const [selectedBrand, setSelectedBrand] = useState(null) // Marca selecionada
const [isBrandModalOpen, setIsBrandModalOpen] = useState(false) // Modal aberto/fechado
const [brandModalIndex, setBrandModalIndex] = useState(0) // Índice da imagem no modal
```

**Decisão**: Separar estados permite:
- Manter marca selecionada mesmo com modal fechado
- Navegação independente no modal
- Melhor controle de estado e performance

#### 3. Estrutura de Dados por Marca
```javascript
const brandImages = {
  Portinari: [...],
  Castellato: [...],
  Eliane: [...],
  Atlas: [...]
}
```

**Decisão**: Objeto com chaves por marca porque:
- Fácil acesso: `brandImages[selectedBrand]`
- Escalável: fácil adicionar novas marcas
- Organizado: cada marca tem seu próprio array de imagens

### Implementação do Código

#### Componente GalleryModal Reutilizável
Criado componente `GalleryModal.jsx` com:
- Backdrop blur premium
- Navegação com setas (anterior/próximo)
- Indicadores clicáveis (dots)
- Contador de imagens (1/3, 2/3, etc.)
- Fechar com ESC ou clicando fora
- Suporte a teclado (setas direita/esquerda)
- Verificações de segurança para evitar erros

#### Funções Principais
```javascript
// Seleciona marca e mostra sua galeria
const selectBrand = (brandName) => {
  setSelectedBrand(brandName)
  setIsBrandModalOpen(false) // Fecha modal se estiver aberto
}

// Abre modal com foto específica da marca selecionada
const openBrandModal = (imageIndex) => {
  if (selectedBrand && brandImages[selectedBrand]) {
    setBrandModalIndex(imageIndex)
    setIsBrandModalOpen(true)
  }
}
```

#### Renderização Condicional da Galeria
```jsx
{selectedBrand && getSelectedBrandImages().length > 0 ? (
  // Galeria da marca selecionada
  <div>
    <h3>Projetos {selectedBrand}</h3>
    {getSelectedBrandImages().map((image, index) => (
      <div onClick={() => openBrandModal(index)}>
        {/* Foto clicável */}
      </div>
    ))}
  </div>
) : (
  // Galeria geral (quando nenhuma marca está selecionada)
  <div>
    <h3>Projetos Realizados</h3>
    {/* Fotos gerais */}
  </div>
)}
```

### Funcionalidades Implementadas

✅ **Seleção de marca**: Clicar em logo da marca muda a galeria  
✅ **Destaque visual**: Logo selecionado fica com borda vermelha (#C0392B)  
✅ **Galeria dinâmica**: Mostra fotos da marca selecionada  
✅ **Modal premium**: Abre ao clicar em foto da galeria  
✅ **Navegação completa**: Setas, indicadores, teclado no modal  
✅ **Responsivo**: Funciona em desktop e mobile  
✅ **Carrossel mobile de marcas**: 2 marcas por vez com dots de navegação  
✅ **Estado inicial**: Mostra galeria geral quando nenhuma marca está selecionada  

### Estrutura de Estados

| Estado | Propósito |
|--------|-----------|
| `selectedBrand` | Controla qual marca está selecionada (null = nenhuma) |
| `isBrandModalOpen` | Controla se o modal está aberto (true/false) |
| `brandModalIndex` | Índice da imagem atual no modal |
| `brandsMobileIndex` | Índice do grupo de marcas visível no mobile |

### Fluxo de Navegação

1. **Usuário clica em uma marca**:
   - `selectBrand('Portinari')` → `setSelectedBrand('Portinari')`
   - Galeria atualiza para mostrar fotos do Portinari
   - Logo do Portinari fica destacado (borda vermelha)

2. **Usuário clica em uma foto da galeria**:
   - `openBrandModal(0)` → `setBrandModalIndex(0)` + `setIsBrandModalOpen(true)`
   - Modal abre mostrando a primeira foto do Portinari

3. **Usuário navega no modal**:
   - Setas ou teclado mudam `brandModalIndex`
   - Modal mostra foto correspondente

4. **Usuário fecha o modal**:
   - `closeBrandModal()` → `setIsBrandModalOpen(false)`
   - Marca continua selecionada, galeria permanece visível

5. **Usuário clica em outra marca**:
   - `selectBrand('Castellato')` → Galeria muda para fotos do Castellato
   - Modal fecha automaticamente se estiver aberto

### Diferenças entre Desktop e Mobile

| Aspecto | Desktop | Mobile |
|---------|---------|--------|
| **Logos das marcas** | Grid flexível, todos visíveis | Carrossel com 2 por vez + dots |
| **Galeria de fotos** | Grid 3-4 colunas | Carrossel com 4 fotos por grupo + dots |
| **Modal** | Mesmo componente | Mesmo componente |

### Componentes Criados

1. **GalleryModal.jsx** - Componente reutilizável de modal premium
   - Props: `isOpen`, `onClose`, `images`, `currentIndex`, `onNext`, `onPrev`, `onSelectImage`
   - Funcionalidades: backdrop blur, navegação completa, acessibilidade

### Problemas Encontrados e Soluções

#### ⚠️ Problema: Tela branca após implementação
**Causa**: Possível erro de runtime ou loop infinito no useEffect  
**Solução Aplicada**:
- Adicionadas verificações de segurança no GalleryModal
- Uso de `useCallback` para funções `nextImage` e `prevImage`
- Verificações de array vazio e índices fora dos limites
- Early returns para evitar renderização quando dados inválidos

**Status**: ✅ Resolvido

#### ✅ Melhoria: Carrossel Mobile de Marcas
**Problema**: Scroll automático infinito não era ideal  
**Solução**: 
- Removido `animate-scroll-infinite`
- Implementado carrossel estático com scroll horizontal
- Adicionados dots de navegação
- 2 marcas por grupo no mobile

**Status**: ✅ Implementado

### Estrutura de Dados

**brandImages** (Objeto):
```javascript
{
  Portinari: [
    { src: '/fotos/img1.jpg', alt: '...' },
    { src: '/fotos/img2.jpg', alt: '...' },
    { src: '/fotos/img3.jpg', alt: '...' }
  ],
  Castellato: [...],
  Eliane: [...],
  Atlas: [...]
}
```

**Nota**: Atualmente usando imagens existentes distribuídas entre marcas. Substituir por imagens específicas de cada marca quando disponíveis.

### Classes CSS Utilizadas

- `border-[#C0392B]`: Borda vermelha para marca selecionada
- `backdrop-blur-md`: Efeito de vidro fosco no modal
- `scrollbar-hide`: Oculta scrollbar no carrossel
- `scroll-snap-type: x mandatory`: Snap scroll no mobile

### Status
✅ **Implementado e funcionando**

### Próximas Melhorias Possíveis
- [ ] Adicionar mais marcas ao sistema
- [ ] Substituir imagens placeholder por fotos reais de cada marca
- [ ] Adicionar animação de transição entre galerias
- [ ] Adicionar filtro "Todas as marcas" para mostrar todas as fotos
- [ ] Adicionar busca por marca
- [ ] Otimizar imagens com lazy loading específico por marca

---

**Última atualização:** Dezembro 2024  
**Versão:** 1.1.0  
**Status:** ⏳ Em desenvolvimento

