# 🚀 Como Fazer Push no Terminal - Guia Rápido

## 📦 Repositório do Projeto

**GitHub:** https://github.com/VoaNegocio/viacor-revestimentos

---

## ⚠️ IMPORTANTE: Execute estes comandos no SEU terminal, não deixe o assistente fazer!

---

## 📋 Passo a Passo para Fazer Push

### 1️⃣ Abra o Terminal
Abra o Terminal no seu Mac (Spotlight: Cmd + Espaço, digite "Terminal")

### 2️⃣ Navegue até a pasta do projeto
```bash
cd /Users/victormazoni/Desktop/voa-digital-lps/viacor-revestimentos
```

### 3️⃣ Verifique o status (veja o que mudou)
```bash
git status
```
**O que você vai ver:**
- Arquivos modificados (em vermelho)
- Arquivos novos (em vermelho)
- Arquivos prontos para commit (em verde)

### 4️⃣ Adicione TODOS os arquivos ao stage
```bash
git add .
```
**O que isso faz:** Prepara todos os arquivos para serem commitados

### 5️⃣ Faça o commit (salve as mudanças)
```bash
git commit -m "feat: Melhorias na landing page - backgrounds premium e animações"
```
**O que isso faz:** Salva as mudanças com uma mensagem descritiva

**💡 Dica:** Você pode mudar a mensagem para o que quiser, por exemplo:
- `git commit -m "Atualiza landing page"`
- `git commit -m "Adiciona backgrounds premium"`
- `git commit -m "Melhorias de UI"`

### 6️⃣ Envie para o GitHub
```bash
git push origin main
```
**O que isso faz:** Envia suas mudanças para o GitHub

---

## 🔐 Se pedir autenticação (usuário/senha):

### Opção A: Personal Access Token (Mais fácil)

1. Vá em: https://github.com/settings/tokens
2. Clique em "Generate new token" → "Generate new token (classic)"
3. Dê um nome (ex: "Meu Mac")
4. Marque a opção `repo` (todas as permissões de repositório)
5. Clique em "Generate token"
6. **COPIE O TOKEN** (você só vê uma vez!)
7. Quando o Git pedir senha, cole o token (não sua senha do GitHub)

### Opção B: SSH Key (Mais seguro, mas mais trabalhoso)

1. Gere uma chave SSH:
```bash
ssh-keygen -t ed25519 -C "seu.email@exemplo.com"
```
(Pressione Enter para aceitar o local padrão, depois Enter para senha vazia ou crie uma)

2. Copie a chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
```
(Copie tudo que aparecer)

3. No GitHub: Settings → SSH and GPG keys → New SSH key
4. Cole a chave e salve

5. Mude o remote para SSH:
```bash
git remote set-url origin git@github.com:VoaNegocio/viacor-revestimentos.git
```

---

## ✅ Sequência Completa (Copie e Cole)

```bash
# 1. Ir para a pasta
cd /Users/victormazoni/Desktop/voa-digital-lps/viacor-revestimentos

# 2. Ver o que mudou
git status

# 3. Adicionar tudo
git add .

# 4. Fazer commit
git commit -m "feat: Melhorias na landing page"

# 5. Enviar para GitHub
git push origin main
```

---

## 🆘 Problemas Comuns

### "fatal: not a git repository"
**Solução:** Você não está na pasta certa. Execute:
```bash
cd /Users/victormazoni/Desktop/voa-digital-lps/viacor-revestimentos
```

### "Permission denied" ou "Authentication failed"
**Solução:** Configure autenticação (veja seção acima sobre Personal Access Token)

### "Everything up-to-date"
**Solução:** Não há nada para enviar. Todas as mudanças já estão no GitHub.

### "fatal: remote origin already exists"
**Solução:** Tudo certo! O remote já está configurado. Continue normalmente.

---

## 📝 Comandos Úteis para o Dia a Dia

```bash
# Ver o que mudou
git status

# Ver histórico de commits
git log --oneline

# Ver diferenças (o que foi alterado)
git diff

# Desfazer mudanças em um arquivo (antes de adicionar)
git restore nome-do-arquivo.jsx

# Atualizar do GitHub (puxar mudanças)
git pull origin main
```

---

## 🎯 Lembre-se:

1. **Sempre execute `git status` primeiro** para ver o que vai ser commitado
2. **Use mensagens de commit descritivas** - ajuda a entender o histórico
3. **Faça commits frequentes** - não deixe acumular muitas mudanças
4. **Antes de fazer push, certifique-se** que está tudo funcionando

---

**Agora é com você! Abra o terminal e execute os comandos! 🚀**

---

## 🔗 Links Úteis

- **Repositório no GitHub:** https://github.com/VoaNegocio/viacor-revestimentos
- **Deploy (Vercel):** https://viacor-revestimentos.vercel.app
- **Ver commits:** https://github.com/VoaNegocio/viacor-revestimentos/commits/main

