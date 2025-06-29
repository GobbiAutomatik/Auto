# 👥 Guia de Usuários de Teste - AutoContrato

## 🎯 Usuários Criados para Teste

### 🔧 **SUPER_ADMIN (Acesso Total)**
- **Nome:** Super Administrador
- **Email:** `superadmin@autocontrato.com.br`
- **Conta:** TechCorp Solutions
- **Permissões:** Todas (acesso total ao sistema)
- **Pode testar:**
  - ✅ Painel Super Admin (`/super-admin`)
  - ✅ Gerenciar todas as contas
  - ✅ Configurações globais
  - ✅ Criar categorias e planos
  - ✅ Todas as funcionalidades

---

## 🏢 **Conta: Silva & Associados (Plano Professional)**

### 👨‍💼 **ADMIN - Maria Santos**
- **Email:** `maria.admin@silvaassociados.com.br`
- **Permissões:** Gerenciar usuários, contratos, templates, IA, relatórios, integrações
- **Pode testar:**
  - ✅ Painel Admin (`/admin`)
  - ✅ Gerenciar equipe
  - ✅ Configurar integrações (`/integrations`)
  - ✅ Usar agentes de IA
  - ✅ Criar/editar templates
  - ✅ Visualizar relatórios

### 👨‍💼 **SUPERVISOR - Carlos Costa**
- **Email:** `carlos.supervisor@silvaassociados.com.br`
- **Permissões:** Gerenciar contratos, templates, IA, relatórios
- **Pode testar:**
  - ✅ Gerenciar todos os contratos da conta
  - ✅ Criar/editar templates
  - ✅ Usar agentes de IA
  - ✅ Visualizar relatórios
  - ❌ Não pode gerenciar usuários
  - ❌ Não pode configurar integrações

### 👤 **USER - Ana Paula**
- **Email:** `ana.user@silvaassociados.com.br`
- **Permissões:** Criar e visualizar próprios contratos
- **Pode testar:**
  - ✅ Dashboard pessoal
  - ✅ Criar contratos (`/editor`)
  - ✅ Visualizar próprios contratos
  - ❌ Não pode gerenciar outros usuários
  - ❌ Não pode acessar configurações

---

## 👤 **Conta: João Silva (Plano Básico - Pessoa Física)**

### 👨‍💼 **ADMIN - João Silva**
- **Email:** `joao.silva@email.com`
- **Permissões:** Gerenciar usuários, contratos, templates, relatórios
- **Limitações do Plano Básico:**
  - ❌ Sem acesso a IA
  - ❌ Limite de 50 assinaturas/mês
  - ❌ Apenas 1 usuário admin
  - ✅ Templates básicos
  - ✅ Notificações por email

---

## 🏢 **Conta: TechCorp Solutions (Plano Empresarial)**

### 👨‍💼 **ADMIN 1 - Roberto Tech**
- **Email:** `roberto.admin@techcorp.com.br`
- **Permissões:** Todas as permissões de admin

### 👨‍💼 **ADMIN 2 - Fernanda Tech**
- **Email:** `fernanda.admin@techcorp.com.br`
- **Permissões:** Todas as permissões de admin

### 👨‍💼 **SUPERVISOR 1 - Paulo Supervisor**
- **Email:** `paulo.supervisor@techcorp.com.br`
- **Permissões:** Gerenciar contratos, templates, IA, relatórios

### 👨‍💼 **SUPERVISOR 2 - Juliana Supervisor**
- **Email:** `juliana.supervisor@techcorp.com.br`
- **Permissões:** Gerenciar contratos, templates, IA, relatórios

### 👤 **USER 1 - Pedro Usuário**
- **Email:** `pedro.user@techcorp.com.br`
- **Permissões:** Criar e visualizar próprios contratos

### 👤 **USER 2 - Carla Usuário**
- **Email:** `carla.user@techcorp.com.br`
- **Permissões:** Criar e visualizar próprios contratos

---

## 🧪 **Como Testar com Diferentes Usuários**

### **Método 1: Simulação de Login (Recomendado para Testes)**

Como não temos sistema de autenticação real configurado, você pode simular diferentes usuários:

1. **Acesse o console do navegador (F12)**
2. **Execute este código para simular login:**

```javascript
// Simular login como Super Admin
localStorage.setItem('test_user', JSON.stringify({
  id: 'user-super-admin',
  email: 'superadmin@autocontrato.com.br',
  name: 'Super Administrador',
  role: 'SUPER_ADMIN',
  account_id: 'acc-techcorp'
}));
window.location.reload();

// Simular login como Admin (Silva & Associados)
localStorage.setItem('test_user', JSON.stringify({
  id: 'user-maria-admin',
  email: 'maria.admin@silvaassociados.com.br',
  name: 'Maria Santos',
  role: 'ADMIN',
  account_id: 'acc-silva-associados'
}));
window.location.reload();

// Simular login como Supervisor
localStorage.setItem('test_user', JSON.stringify({
  id: 'user-carlos-supervisor',
  email: 'carlos.supervisor@silvaassociados.com.br',
  name: 'Carlos Costa',
  role: 'SUPERVISOR',
  account_id: 'acc-silva-associados'
}));
window.location.reload();

// Simular login como Usuário
localStorage.setItem('test_user', JSON.stringify({
  id: 'user-ana-user',
  email: 'ana.user@silvaassociados.com.br',
  name: 'Ana Paula',
  role: 'USER',
  account_id: 'acc-silva-associados'
}));
window.location.reload();
```

### **Método 2: Configurar Supabase Auth (Produção)**

Para testes mais realistas:

1. **Configure o Supabase Auth**
2. **Crie usuários reais com os emails listados**
3. **Vincule os `auth_user_id` na tabela `users`**

---

## 📊 **Dados de Teste Incluídos**

### **Planos Disponíveis:**
- 🥉 **Básico:** R$ 49/mês, 50 assinaturas, sem IA
- 🥈 **Professional:** R$ 149/mês, 200 assinaturas, com IA
- 🥇 **Empresarial:** R$ 349/mês, ilimitado, IA completa

### **Categorias Criadas:**
- 🛒 Contratos de Compra e Venda
- 🛠️ Prestação de Serviços
- 🏠 Contratos Imobiliários
- 💼 Contratos Societários
- 📄 Termos e Condições

### **Templates Disponíveis:**
- **Globais:** Compra e Venda, Prestação de Serviços, Locação
- **Silva & Associados:** Serviços Jurídicos, Confidencialidade

### **Contratos de Exemplo:**
- 📄 Consultoria Empresarial (Rascunho)
- 📄 Venda Equipamentos (Enviado)
- 📄 Serviços Consultoria (Assinado)

---

## 🎯 **Cenários de Teste por Perfil**

### **🔧 SUPER_ADMIN**
```bash
# Teste completo do sistema
1. Acesse /super-admin
2. Gerencie contas, categorias, planos
3. Configure integrações globais
4. Visualize analytics da plataforma
```

### **👨‍💼 ADMIN**
```bash
# Gestão completa da conta
1. Acesse /admin
2. Gerencie usuários da equipe
3. Configure integrações /integrations
4. Crie templates personalizados
5. Use agentes de IA
```

### **👨‍💼 SUPERVISOR**
```bash
# Gestão de contratos e templates
1. Acesse /contratos
2. Gerencie todos os contratos
3. Crie/edite templates
4. Use agentes de IA
5. Visualize relatórios
```

### **👤 USER**
```bash
# Uso básico da plataforma
1. Acesse /dashboard
2. Crie contratos /editor
3. Visualize próprios contratos
4. Preencha variáveis
5. Envie para assinatura
```

---

## 🚨 **Importante para Testes**

### **⚠️ Dados de Teste**
- Estes são dados fictícios para teste
- Em produção, remova este arquivo de migração
- CPF/CNPJs são fictícios

### **🔐 Autenticação**
- Use o método de simulação para testes rápidos
- Configure Supabase Auth para testes completos
- Senhas não estão definidas (apenas para simulação)

### **📱 Responsividade**
- Teste em diferentes dispositivos
- Verifique menu mobile
- Confirme adaptação de layouts

---

## 🎉 **Começar a Testar**

1. **Execute a migração:** Os dados serão criados automaticamente
2. **Escolha um usuário:** Use o método de simulação
3. **Explore as funcionalidades:** Conforme as permissões
4. **Teste diferentes cenários:** Mude entre usuários

**💡 Dica:** Comece com o Super Admin para ter visão completa, depois teste com perfis mais restritivos para validar as permissões.