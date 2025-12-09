# 🔧 Guia de Configuração do Git

## Configuração Inicial do Git (Primeira vez)

### 1. Verificar se o Git está instalado
```bash
git --version
```

Se não estiver instalado, instale com:
```bash
# macOS (via Homebrew)
brew install git
```

---

### 2. Configurar suas credenciais (uma vez só)
```bash
# Seu nome (aparece nos commits)
git config --global user.name "Seu Nome"

# Seu email (aparece nos commits)
git config --global user.email "seu.email@exemplo.com"
```

**Exemplo:**
```bash
git config --global user.name "Victor Mazoni"
git config --global user.email "victor@exemplo.com"
```

---

### 3. Verificar configurações
```bash
git config --global --list
```

---

## Configuração do Repositório Via Cor

### 1. Navegar até a pasta do projeto
```bash
cd /Users/victormazoni/Desktop/voa-digital-lps/viacor-revestimentos
```

---

### 2. Verificar status do Git
```bash
git status
```

Mostra:
- Arquivos modificados
- Arquivos não rastreados
- Branch atual

---

### 3. Verificar se o remote está configurado
```bash
git remote -v
```

Deve mostrar:
```
origin  https://github.com/VoaNegocio/viacor-revestimentos.git (fetch)
origin  https://github.com/VoaNegocio/viacor-revestimentos.git (push)
```

---

### 4. Se o remote não estiver configurado, adicione:
```bash
git remote add origin https://github.com/VoaNegocio/viacor-revestimentos.git
```

---

## Fluxo de Trabalho Diário

### 1. Ver o que mudou
```bash
git status
```

---

### 2. Adicionar arquivos ao stage
```bash
# Adicionar arquivo específico
git add nome-do-arquivo.jsx

# Adicionar todos os arquivos modificados
git add .

# Adicionar todos os arquivos de uma pasta
git add src/components/
```

---

### 3. Fazer commit (salvar as mudanças)
```bash
git commit -m "Descrição do que foi feito"
```

**Exemplos de mensagens:**
```bash
git commit -m "feat: Adiciona galeria de projetos na seção Brands"
git commit -m "fix: Corrige contraste no Hero"
git commit -m "style: Substitui emojis por ícones do react-icons"
```

**Convenções de mensagem:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `style:` - Mudanças de estilo/design
- `docs:` - Documentação
- `refactor:` - Refatoração de código

---

### 4. Enviar para o GitHub
```bash
git push origin main
```

Se for a primeira vez, pode pedir autenticação:
```bash
git push -u origin main
```

---

## Comandos Úteis

### Ver histórico de commits
```bash
git log
git log --oneline  # Versão compacta
```

### Ver diferenças antes de commitar
```bash
git diff
git diff nome-do-arquivo.jsx
```

### Desfazer mudanças (antes de adicionar ao stage)
```bash
# Desfazer mudanças em um arquivo
git restore nome-do-arquivo.jsx

# Desfazer todas as mudanças
git restore .
```

### Remover arquivo do stage (mas manter as mudanças)
```bash
git restore --staged nome-do-arquivo.jsx
```

### Ver branch atual
```bash
git branch
```

### Criar nova branch
```bash
git branch nome-da-branch
git checkout nome-da-branch
# ou
git checkout -b nome-da-branch  # Cria e muda para a branch
```

### Atualizar repositório local (puxar mudanças do GitHub)
```bash
git pull origin main
```

---

## Fluxo Completo (Exemplo)

```bash
# 1. Ver o que mudou
git status

# 2. Adicionar arquivos
git add .

# 3. Fazer commit
git commit -m "feat: Implementa modal nos reviews"

# 4. Enviar para GitHub
git push origin main
```

---

## Autenticação no GitHub

### Opção 1: Personal Access Token (Recomendado)

1. Vá em: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Gere um novo token com permissões `repo`
3. Use o token como senha quando o Git pedir

### Opção 2: SSH Key (Mais seguro)

1. Gerar chave SSH:
```bash
ssh-keygen -t ed25519 -C "seu.email@exemplo.com"
```

2. Copiar a chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```

3. Adicionar no GitHub: Settings → SSH and GPG keys → New SSH key

4. Mudar remote para SSH:
```bash
git remote set-url origin git@github.com:VoaNegocio/viacor-revestimentos.git
```

---

## Troubleshooting

### Erro: "fatal: not a git repository"
**Solução:** Você não está em uma pasta com Git inicializado
```bash
cd /Users/victormazoni/Desktop/voa-digital-lps/viacor-revestimentos
```

### Erro: "fatal: remote origin already exists"
**Solução:** O remote já está configurado. Para mudar:
```bash
git remote set-url origin https://github.com/VoaNegocio/viacor-revestimentos.git
```

### Erro: "Permission denied"
**Solução:** Problema de autenticação. Configure Personal Access Token ou SSH Key.

### Desfazer último commit (mas manter as mudanças)
```bash
git reset --soft HEAD~1
```

### Desfazer último commit (e perder as mudanças)
```bash
git reset --hard HEAD~1
```

---

## Checklist de Configuração

- [ ] Git instalado (`git --version`)
- [ ] Nome configurado (`git config --global user.name`)
- [ ] Email configurado (`git config --global user.email`)
- [ ] Remote configurado (`git remote -v`)
- [ ] Autenticação configurada (Token ou SSH)

---

**Dica:** Sempre execute `git status` antes de fazer commit para ver o que será salvo!

