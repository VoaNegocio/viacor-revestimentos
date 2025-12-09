# 🎨 Recomendações de Tipografia - Via Cor Revestimentos

## Análise do Branding

Baseado na identidade visual da Via Cor, que possui **dualidade tipográfica** no logo:
- **"VIA"** (Geométrica/Reta) → Comunica: Obra, estrutura e base
- **"Cor"** (Serifada/Itálica) → Comunica: Decoração, acabamento e estilo

A marca é **sólida e tradicional**, não minimalista/moderna, focada em autoridade e confiança.

---

## 🎯 Recomendação Principal

### Opção 1: Playfair Display + Inter (Recomendada)

**Para Títulos/Headlines:**
- **Playfair Display** (Serifada)
  - Elegante, clássica, sofisticada
  - Reflete o "Cor" (decoração, acabamento)
  - Transmite premium e exclusividade
  - Boa legibilidade em tamanhos grandes

**Para Corpo de Texto:**
- **Inter** (Sans-serif)
  - Moderna mas sólida
  - Excelente legibilidade
  - Reflete o "VIA" (estrutura, confiança)
  - Profissional e confiável

**Por que funciona:**
- Combina elegância (serif) com solidez (sans-serif)
- Mantém tradição sem parecer antiquada
- Excelente hierarquia visual
- Legível em todos os dispositivos

---

### Opção 2: Lora + Source Sans Pro

**Para Títulos/Headlines:**
- **Lora** (Serifada)
  - Inspirada em fontes clássicas
  - Elegante mas mais acessível que Playfair
  - Boa para textos médios também

**Para Corpo de Texto:**
- **Source Sans Pro** (Sans-serif)
  - Criada pela Adobe
  - Profissional e versátil
  - Excelente legibilidade

**Por que funciona:**
- Mais neutra que a Opção 1
- Boa para marcas que querem tradição sem exageros
- Versátil para diferentes contextos

---

### Opção 3: Merriweather + Open Sans

**Para Títulos/Headlines:**
- **Merriweather** (Serifada)
  - Projetada para leitura na tela
  - Clássica mas otimizada para digital
  - Mais "amigável" que Playfair

**Para Corpo de Texto:**
- **Open Sans** (Sans-serif)
  - Uma das mais usadas na web
  - Extremamente legível
  - Neutra e profissional

**Por que funciona:**
- Combinação testada e aprovada
- Excelente para SEO e acessibilidade
- Familiar para usuários

---

## 📐 Hierarquia Tipográfica Sugerida

### Headlines (Títulos Principais)
```css
font-family: 'Playfair Display', serif;
font-size: 3rem - 4.5rem (mobile: 2rem - 3rem)
font-weight: 700 (bold)
line-height: 1.2
```

### Subtítulos
```css
font-family: 'Playfair Display', serif;
font-size: 1.5rem - 2rem
font-weight: 600 (semi-bold)
line-height: 1.3
```

### Corpo de Texto
```css
font-family: 'Inter', sans-serif;
font-size: 1rem - 1.125rem
font-weight: 400 (regular)
line-height: 1.6 - 1.7
```

### Textos Pequenos (Labels, Captions)
```css
font-family: 'Inter', sans-serif;
font-size: 0.875rem - 0.9375rem
font-weight: 400 ou 500
line-height: 1.5
```

### CTAs e Botões
```css
font-family: 'Inter', sans-serif;
font-size: 1rem - 1.125rem
font-weight: 600 (semi-bold)
letter-spacing: 0.025em (leve espaçamento)
```

---

## 🎨 Aplicação por Seção

### Hero Section
- **Título Principal:** Playfair Display, bold, 3.5rem - 4.5rem
- **Subtítulo:** Inter, regular, 1.25rem - 1.5rem
- **CTA:** Inter, semi-bold, 1.125rem

### Seções de Conteúdo
- **Títulos de Seção:** Playfair Display, bold, 2.5rem - 3.5rem
- **Corpo:** Inter, regular, 1rem - 1.125rem
- **Destaques:** Inter, semi-bold ou Playfair Display italic

### Footer
- **Títulos:** Inter, semi-bold, 1rem
- **Links:** Inter, regular, 0.9375rem
- **Copyright:** Inter, regular, 0.875rem

---

## 💡 Dicas de Implementação

1. **Contraste Adequado:**
   - Títulos em azul marinho (#1E3A5F) ou preto
   - Corpo de texto em cinza escuro (#374151 ou #4B5563)
   - Destaques em vermelho terracota (#C0392B)

2. **Espaçamento:**
   - Usar `letter-spacing` sutil em títulos grandes (0.01em - 0.02em)
   - Manter `line-height` generoso para legibilidade (1.6 - 1.7)

3. **Responsividade:**
   - Reduzir tamanhos em mobile (70-80% do desktop)
   - Manter proporções da hierarquia

4. **Itálico Estratégico:**
   - Usar Playfair Display italic para destacar palavras-chave
   - Reflete o "Cor" do logo

---

## 🚀 Implementação Rápida

### 1. Adicionar Google Fonts no `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 2. Configurar no `index.css`:
```css
body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
```

### 3. Configurar no Tailwind (opcional):
Adicionar no `tailwind.config.js` ou usar classes diretas:
```js
fontFamily: {
  'serif': ['Playfair Display', 'serif'],
  'sans': ['Inter', 'sans-serif'],
}
```

---

## ✅ Checklist de Implementação

- [ ] Adicionar links do Google Fonts no HTML
- [ ] Configurar font-family no CSS global
- [ ] Aplicar Playfair Display nos títulos
- [ ] Aplicar Inter no corpo de texto
- [ ] Ajustar tamanhos responsivos
- [ ] Testar legibilidade em diferentes dispositivos
- [ ] Verificar contraste de cores
- [ ] Otimizar carregamento (preload das fontes)

---

## 📊 Comparação Visual

| Aspecto | Playfair + Inter | Lora + Source Sans | Merriweather + Open Sans |
|---------|------------------|-------------------|-------------------------|
| **Elegância** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Legibilidade** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Tradição** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Modernidade** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Versatilidade** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎯 Recomendação Final

**Para a Via Cor Revestimentos, recomendo a Opção 1 (Playfair Display + Inter):**

✅ Reflete perfeitamente a dualidade do logo  
✅ Transmite elegância e solidez  
✅ Alinha com o posicionamento premium  
✅ Mantém tradição sem parecer antiquada  
✅ Excelente legibilidade e hierarquia  

Esta combinação reforça a mensagem: "Somos uma empresa séria (Inter) que entende de beleza (Playfair Display)".

