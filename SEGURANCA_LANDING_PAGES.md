# Segurança para Landing Pages - Guia Completo

## 📋 Índice
1. [Fundamentos de Segurança Web](#fundamentos)
2. [Proteção de Dados e Privacidade](#protecao-dados)
3. [Segurança no Frontend](#seguranca-frontend)
4. [Segurança no Backend (se aplicável)](#seguranca-backend)
5. [Proteção contra Ataques Comuns](#protecao-ataques)
6. [Checklist de Segurança](#checklist)
7. [Ferramentas e Recursos](#ferramentas)

---

## 🔒 Fundamentos de Segurança Web

### 1. HTTPS (SSL/TLS)
**O que é:** Protocolo seguro que criptografa a comunicação entre o navegador e o servidor.

**Por que é importante:**
- Protege dados transmitidos (formulários, informações pessoais)
- Melhora SEO (Google prioriza sites HTTPS)
- Aumenta confiança do usuário
- Previne ataques de "man-in-the-middle"

**Como implementar:**
- Obter certificado SSL (Let's Encrypt é gratuito)
- Configurar redirecionamento HTTP → HTTPS
- Usar HSTS (HTTP Strict Transport Security)

**Exemplo de configuração (Nginx):**
```nginx
server {
    listen 80;
    server_name seudominio.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
```

---

## 🛡️ Proteção de Dados e Privacidade

### 2. LGPD (Lei Geral de Proteção de Dados)
**O que fazer:**
- ✅ Política de Privacidade clara e acessível
- ✅ Termos de Uso
- ✅ Consentimento explícito para coleta de dados
- ✅ Opção de exclusão de dados (direito ao esquecimento)
- ✅ Criptografia de dados sensíveis

**Exemplo de Política de Privacidade:**
```
- Quais dados coletamos
- Como usamos os dados
- Com quem compartilhamos
- Como protegemos os dados
- Direitos do usuário
- Contato do responsável (DPO)
```

### 3. Proteção de Dados Sensíveis
- **Nunca exponha:** Senhas, tokens, chaves API no código frontend
- **Criptografe:** Dados sensíveis em trânsito e em repouso
- **Valide:** Entradas do usuário antes de processar
- **Limite:** Acesso apenas ao necessário (princípio do menor privilégio)

---

## 🎨 Segurança no Frontend

### 4. Content Security Policy (CSP)
**O que é:** Política que controla quais recursos o navegador pode carregar.

**Como implementar:**
```html
<!-- No <head> do HTML -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://trusted-cdn.com; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:; 
               connect-src 'self' https://api.trusted.com;">
```

**Ou via servidor (Nginx):**
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline';" always;
```

### 5. Validação de Formulários

#### Frontend (Primeira Camada)
```javascript
// Exemplo de validação de email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Exemplo de validação de telefone (Brasil)
function validatePhone(phone) {
    // Remove caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '');
    // Valida formato brasileiro (11 dígitos com DDD)
    return /^[1-9]{2}9?[0-9]{8}$/.test(cleanPhone);
}

// Sanitização de inputs
function sanitizeInput(input) {
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove tags HTML
        .replace(/javascript:/gi, '') // Remove javascript:
        .substring(0, 255); // Limita tamanho
}
```

#### Backend (Segunda Camada - OBRIGATÓRIA)
```javascript
// Node.js/Express exemplo
const validator = require('validator');

app.post('/contato', (req, res) => {
    const { email, telefone, mensagem } = req.body;
    
    // Validação e sanitização
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }
    
    const cleanPhone = validator.isMobilePhone(telefone, 'pt-BR');
    if (!cleanPhone) {
        return res.status(400).json({ error: 'Telefone inválido' });
    }
    
    const cleanMessage = validator.escape(mensagem);
    
    // Processar dados...
});
```

### 6. Proteção XSS (Cross-Site Scripting)

**O que é:** Ataque onde código malicioso é injetado no site.

**Prevenção:**
```javascript
// ❌ NUNCA faça isso:
element.innerHTML = userInput; // PERIGOSO!

// ✅ Faça isso:
element.textContent = userInput; // Seguro
// ou
element.innerHTML = DOMPurify.sanitize(userInput); // Com biblioteca
```

**Bibliotecas recomendadas:**
- `DOMPurify` - Sanitização de HTML
- `xss` - Proteção XSS

### 7. Headers de Segurança

```html
<!-- Meta tags no <head> -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
```

**Ou via servidor (recomendado):**
```nginx
# Prevenir MIME type sniffing
add_header X-Content-Type-Options "nosniff" always;

# Prevenir clickjacking
add_header X-Frame-Options "DENY" always;

# Proteção XSS (navegadores antigos)
add_header X-XSS-Protection "1; mode=block" always;

# Controlar referrer
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

---

## 🔐 Segurança no Backend

### 8. Rate Limiting
**O que é:** Limitar número de requisições por IP/tempo.

**Por que:** Previne spam, DDoS, brute force.

**Exemplo (Node.js/Express):**
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // máximo 5 requisições por IP
    message: 'Muitas tentativas. Tente novamente em 15 minutos.'
});

app.use('/api/contato', limiter);
```

### 9. Validação e Sanitização no Backend
```javascript
// Sempre valide no backend, mesmo que já validou no frontend
const { body, validationResult } = require('express-validator');

app.post('/contato', [
    body('email').isEmail().normalizeEmail(),
    body('telefone').isMobilePhone('pt-BR'),
    body('mensagem').trim().escape().isLength({ min: 10, max: 1000 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Processar...
});
```

### 10. Proteção CSRF (Cross-Site Request Forgery)
```javascript
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
const csrfProtection = csrf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
    res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/process', csrfProtection, (req, res) => {
    // Requisição validada
});
```

---

## 🚨 Proteção contra Ataques Comuns

### 11. SQL Injection (se usar banco de dados)
**❌ NUNCA:**
```javascript
const query = `SELECT * FROM users WHERE email = '${email}'`;
```

**✅ SEMPRE:**
```javascript
// Usar prepared statements
const query = 'SELECT * FROM users WHERE email = ?';
db.query(query, [email], (err, results) => {
    // ...
});
```

### 12. Proteção de APIs
```javascript
// Validar origem das requisições
const allowedOrigins = ['https://seudominio.com'];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    next();
});

// Autenticação de API (se necessário)
const apiKey = process.env.API_KEY;
app.use('/api', (req, res, next) => {
    if (req.headers['x-api-key'] !== apiKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
});
```

### 13. Logs e Monitoramento
```javascript
// Log de tentativas suspeitas
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'security.log' })
    ]
});

app.post('/contato', (req, res) => {
    logger.info('Form submission', {
        ip: req.ip,
        email: req.body.email,
        timestamp: new Date()
    });
    
    // Verificar padrões suspeitos
    if (isSuspicious(req.body)) {
        logger.warn('Suspicious activity detected', {
            ip: req.ip,
            data: req.body
        });
    }
});
```

---

## ✅ Checklist de Segurança

### Configuração Básica
- [ ] HTTPS configurado e funcionando
- [ ] Certificado SSL válido
- [ ] Redirecionamento HTTP → HTTPS
- [ ] HSTS habilitado

### Headers de Segurança
- [ ] Content-Security-Policy configurado
- [ ] X-Frame-Options configurado
- [ ] X-Content-Type-Options configurado
- [ ] X-XSS-Protection configurado
- [ ] Referrer-Policy configurado

### Formulários
- [ ] Validação no frontend
- [ ] Validação no backend (OBRIGATÓRIA)
- [ ] Sanitização de inputs
- [ ] Rate limiting implementado
- [ ] Proteção CSRF (se aplicável)
- [ ] CAPTCHA para formulários públicos (opcional, mas recomendado)

### Dados e Privacidade
- [ ] Política de Privacidade publicada
- [ ] Termos de Uso publicados
- [ ] Consentimento explícito para coleta de dados
- [ ] Dados sensíveis criptografados
- [ ] Conformidade com LGPD

### Código
- [ ] Nenhuma chave API exposta no frontend
- [ ] Variáveis de ambiente configuradas
- [ ] Dependências atualizadas
- [ ] Código sem vulnerabilidades conhecidas

### Monitoramento
- [ ] Logs de segurança configurados
- [ ] Alertas para atividades suspeitas
- [ ] Backup regular dos dados
- [ ] Plano de resposta a incidentes

---

## 🛠️ Ferramentas e Recursos

### Ferramentas de Teste
1. **SSL Labs** - https://www.ssllabs.com/ssltest/
   - Testa configuração SSL/TLS

2. **Security Headers** - https://securityheaders.com/
   - Analisa headers de segurança

3. **OWASP ZAP** - https://www.zaproxy.org/
   - Scanner de vulnerabilidades

4. **Snyk** - https://snyk.io/
   - Verifica vulnerabilidades em dependências

### Bibliotecas Recomendadas

**Node.js/Express:**
- `helmet` - Configura headers de segurança automaticamente
- `express-validator` - Validação e sanitização
- `express-rate-limit` - Rate limiting
- `csurf` - Proteção CSRF
- `bcrypt` - Hash de senhas
- `jsonwebtoken` - JWT para autenticação

**Frontend:**
- `DOMPurify` - Sanitização HTML
- `validator.js` - Validação de dados

### Recursos de Aprendizado
- **OWASP Top 10** - https://owasp.org/www-project-top-ten/
- **MDN Web Security** - https://developer.mozilla.org/en-US/docs/Web/Security
- **Web.dev Security** - https://web.dev/secure/

---

## 📝 Exemplo Prático: Implementação Completa

### 1. Configuração do Servidor (Nginx)
```nginx
server {
    listen 443 ssl http2;
    server_name seudominio.com;
    
    # SSL
    ssl_certificate /etc/ssl/certs/cert.pem;
    ssl_certificate_key /etc/ssl/private/key.pem;
    
    # Headers de Segurança
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.trusted.com;" always;
    
    # Redirecionar HTTP para HTTPS
    if ($scheme != "https") {
        return 301 https://$server_name$request_uri;
    }
}
```

### 2. Backend Seguro (Node.js/Express)
```javascript
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const app = express();

// Helmet configura headers de segurança automaticamente
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://trusted-cdn.com"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Muitas tentativas. Tente novamente em 15 minutos.'
});

app.use(express.json());
app.use('/api/contato', limiter);

// Rota de contato com validação
app.post('/api/contato', [
    body('nome').trim().escape().isLength({ min: 2, max: 100 }),
    body('email').isEmail().normalizeEmail(),
    body('telefone').isMobilePhone('pt-BR'),
    body('mensagem').trim().escape().isLength({ min: 10, max: 1000 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // Processar dados...
    // Enviar email, salvar no banco, etc.
    
    res.json({ success: true, message: 'Mensagem enviada com sucesso!' });
});

app.listen(3000);
```

### 3. Frontend Seguro (React/JavaScript)
```javascript
// utils/validation.js
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return /^[1-9]{2}9?[0-9]{8}$/.test(cleanPhone);
};

export const sanitizeInput = (input) => {
    return input
        .trim()
        .replace(/[<>]/g, '')
        .replace(/javascript:/gi, '')
        .substring(0, 255);
};

// Componente de formulário
import { useState } from 'react';
import { validateEmail, validatePhone, sanitizeInput } from './utils/validation';

function ContactForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validação frontend
        const newErrors = {};
        if (!formData.nome || formData.nome.length < 2) {
            newErrors.nome = 'Nome deve ter pelo menos 2 caracteres';
        }
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        if (!validatePhone(formData.telefone)) {
            newErrors.telefone = 'Telefone inválido';
        }
        if (!formData.mensagem || formData.mensagem.length < 10) {
            newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Sanitizar dados
        const sanitizedData = {
            nome: sanitizeInput(formData.nome),
            email: formData.email.toLowerCase().trim(),
            telefone: formData.telefone.replace(/\D/g, ''),
            mensagem: sanitizeInput(formData.mensagem)
        };

        // Enviar para backend
        try {
            const response = await fetch('/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sanitizedData)
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar mensagem');
            }

            const data = await response.json();
            alert('Mensagem enviada com sucesso!');
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Campos do formulário */}
        </form>
    );
}
```

---

## 🎯 Resumo: Prioridades

### Alta Prioridade (Implementar Imediatamente)
1. ✅ HTTPS/SSL
2. ✅ Validação backend de formulários
3. ✅ Headers de segurança básicos
4. ✅ Sanitização de inputs
5. ✅ Rate limiting

### Média Prioridade (Implementar em Breve)
1. ⚠️ Content Security Policy completo
2. ⚠️ Logs de segurança
3. ⚠️ Política de Privacidade e LGPD
4. ⚠️ Proteção CSRF (se aplicável)

### Baixa Prioridade (Melhorias Contínuas)
1. 📊 Monitoramento avançado
2. 📊 Testes de segurança regulares
3. 📊 Auditorias periódicas
4. 📊 Atualização de dependências

---

## 💡 Dicas Finais

1. **Segurança é um processo contínuo**, não um estado final
2. **Sempre valide no backend**, mesmo que já validou no frontend
3. **Mantenha dependências atualizadas** - use `npm audit` regularmente
4. **Use variáveis de ambiente** para dados sensíveis
5. **Monitore logs** para detectar atividades suspeitas
6. **Teste regularmente** com ferramentas de segurança
7. **Eduque sua equipe** sobre práticas seguras
8. **Tenha um plano de resposta** a incidentes de segurança

---

**Última atualização:** 2024
**Autor:** Guia de Segurança para Landing Pages
**Versão:** 1.0


