# 🧪 Guia Completo de Testes - AutoContrato

## 🚀 Como Iniciar os Testes

### 1. **Teste Rápido (2 horas gratuitas)**
```bash
# Acesse a página de teste
http://localhost:5173/teste
```
- ✅ Sem necessidade de cartão de crédito
- ✅ Acesso completo por 2 horas
- ✅ Dados salvos automaticamente

### 2. **Login com Conta Existente**
```bash
# Acesse a página de login
http://localhost:5173/login
```

## 🔧 Configuração Inicial para Testes

### 1. **Configurar Supabase (Obrigatório)**
1. Clique no botão "Connect to Supabase" no canto superior direito
2. Configure suas credenciais do Supabase
3. Execute as migrações do banco de dados

### 2. **Variáveis de Ambiente (.env)**
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

## 🎯 Cenários de Teste por Funcionalidade

### 📊 **1. Teste do Dashboard**
**Acesso:** `/dashboard`
**O que testar:**
- [ ] Visualização de estatísticas
- [ ] Gráficos de performance
- [ ] Contratos recentes
- [ ] Ações rápidas
- [ ] Saldo de assinaturas

### 📄 **2. Teste de Gestão de Contratos**
**Acesso:** `/contratos`
**O que testar:**
- [ ] Listar contratos existentes
- [ ] Filtrar por status (DRAFT, SENT, SIGNED, etc.)
- [ ] Buscar contratos por título
- [ ] Organizar por pastas
- [ ] Visualizar detalhes do contrato

### ✏️ **3. Teste do Editor de Contratos**
**Acesso:** `/editor`
**O que testar:**
- [ ] Criar contrato do zero
- [ ] Usar modelo existente
- [ ] Editar variáveis dinâmicas ({{nome_cliente}})
- [ ] Adicionar signatários
- [ ] Salvar rascunho
- [ ] Enviar para assinatura

### 👥 **4. Teste do Painel Administrativo**
**Acesso:** `/admin` (requer permissão)
**O que testar:**
- [ ] Gerenciar usuários da equipe
- [ ] Criar/editar modelos de contratos
- [ ] Configurar marca da empresa
- [ ] Configurar agentes de IA
- [ ] Visualizar relatórios

### 🔌 **5. Teste de Integrações**
**Acesso:** `/integrations` (requer permissão)
**O que testar:**
- [ ] Configurar SMTP para e-mails
- [ ] Configurar Stripe para pagamentos
- [ ] Configurar WhatsApp (Evolution API)
- [ ] Configurar Google Workspace
- [ ] Testar conexões

### 🛡️ **6. Teste do Super Admin**
**Acesso:** `/super-admin` (apenas SUPER_ADMIN)
**O que testar:**
- [ ] Gerenciar todas as contas
- [ ] Criar/editar categorias
- [ ] Gerenciar pacotes de categorias
- [ ] Configurar planos de assinatura
- [ ] Configurações globais do sistema

## 🧪 Testes Específicos por Tipo de Usuário

### 👤 **Usuário Padrão (USER)**
```bash
# Permissões: create_contracts, view_contracts
```
**Pode testar:**
- ✅ Dashboard pessoal
- ✅ Criar contratos
- ✅ Visualizar próprios contratos
- ❌ Não pode gerenciar usuários
- ❌ Não pode acessar configurações

### 👨‍💼 **Supervisor (SUPERVISOR)**
```bash
# Permissões: manage_contracts, manage_templates, access_ai, view_reports
```
**Pode testar:**
- ✅ Tudo do usuário padrão
- ✅ Gerenciar todos os contratos da conta
- ✅ Criar/editar modelos
- ✅ Usar agentes de IA
- ✅ Visualizar relatórios

### 👨‍💻 **Administrador (ADMIN)**
```bash
# Permissões: manage_users + todas do supervisor
```
**Pode testar:**
- ✅ Tudo do supervisor
- ✅ Gerenciar usuários da equipe
- ✅ Configurar integrações
- ✅ Configurar marca da empresa

### 🔧 **Super Admin (SUPER_ADMIN)**
```bash
# Permissões: all (acesso total)
```
**Pode testar:**
- ✅ Todas as funcionalidades
- ✅ Gerenciar múltiplas contas
- ✅ Configurações globais do sistema
- ✅ Criar categorias e planos

## 🔍 Testes de Funcionalidades Específicas

### 📝 **Teste de Variáveis Dinâmicas**
1. Crie um contrato com variáveis: `{{nome_cliente}}`, `{{valor_contrato}}`
2. Preencha as variáveis na aba "Variáveis"
3. Visualize a pré-visualização
4. Verifique se as variáveis foram substituídas

### 📧 **Teste de Notificações**
1. Configure SMTP nas integrações
2. Envie um contrato para assinatura
3. Verifique se o e-mail foi enviado
4. Teste notificações do WhatsApp (se configurado)

### 🤖 **Teste de Agentes de IA**
1. Acesse o editor de contratos
2. Vá para a aba "Assistentes IA"
3. Teste cada agente disponível:
   - Assistente Jurídico
   - Otimizador de Variáveis
   - Revisor de Compliance
   - Tradutor Contextual

### 📊 **Teste de Relatórios**
1. Crie alguns contratos de teste
2. Envie alguns para assinatura
3. Marque alguns como assinados
4. Verifique se as estatísticas estão corretas

## 🐛 Testes de Validação e Erros

### ✅ **Validações a Testar**
- [ ] Campos obrigatórios em formulários
- [ ] Formatos de e-mail válidos
- [ ] Permissões de acesso por role
- [ ] Limites de plano (assinaturas, usuários)
- [ ] Validação de CPF/CNPJ

### ❌ **Cenários de Erro**
- [ ] Tentar acessar página sem permissão
- [ ] Enviar formulário com dados inválidos
- [ ] Testar integração com credenciais incorretas
- [ ] Exceder limites do plano

## 📱 Teste de Responsividade

### 🖥️ **Desktop (1920x1080)**
- [ ] Layout completo
- [ ] Sidebar visível
- [ ] Tabelas com scroll horizontal

### 📱 **Mobile (375x667)**
- [ ] Menu hambúrguer
- [ ] Cards empilhados
- [ ] Formulários adaptados

### 📟 **Tablet (768x1024)**
- [ ] Layout híbrido
- [ ] Navegação adaptada

## 🔧 Comandos Úteis para Teste

### **Iniciar Servidor de Desenvolvimento**
```bash
npm run dev
```

### **Verificar Logs do Console**
```bash
# Abra o DevTools (F12)
# Vá para a aba Console
# Procure por erros em vermelho
```

### **Testar Build de Produção**
```bash
npm run build
npm run preview
```

## 📋 Checklist de Teste Completo

### **Funcionalidades Básicas**
- [ ] Login/Logout
- [ ] Navegação entre páginas
- [ ] Criação de conta de teste
- [ ] Dashboard carregando

### **Gestão de Contratos**
- [ ] Criar contrato
- [ ] Editar contrato
- [ ] Salvar rascunho
- [ ] Enviar para assinatura
- [ ] Visualizar lista de contratos

### **Administração**
- [ ] Gerenciar usuários
- [ ] Configurar integrações
- [ ] Testar conexões
- [ ] Visualizar relatórios

### **Super Admin**
- [ ] Gerenciar contas
- [ ] Configurar categorias
- [ ] Gerenciar planos
- [ ] Configurações globais

## 🚨 Problemas Comuns e Soluções

### **Erro de Conexão com Supabase**
```bash
# Verifique se as variáveis de ambiente estão corretas
# Confirme se o Supabase está configurado
# Execute as migrações do banco
```

### **Página em Branco**
```bash
# Verifique o console do navegador
# Confirme se o servidor está rodando
# Limpe o cache do navegador
```

### **Erro de Permissão**
```bash
# Verifique se o usuário tem a role correta
# Confirme se as políticas RLS estão ativas
# Teste com usuário SUPER_ADMIN
```

## 📞 Suporte para Testes

Se encontrar problemas durante os testes:

1. **Verifique o console do navegador** (F12)
2. **Confirme as configurações do Supabase**
3. **Teste com dados de exemplo**
4. **Verifique as permissões do usuário**

---

**💡 Dica:** Comece sempre pelo teste básico de 2 horas para ter uma visão geral da plataforma antes de configurar integrações complexas.