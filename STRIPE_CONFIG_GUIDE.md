# 🔧 Guia de Configuração do Stripe - AutoContrato

## 📍 **Onde Configurar**

### **Opção 1: Painel de Integrações (Recomendado)**
- **URL:** `/integrations`
- **Acesso:** Admin ou Super Admin
- **Escopo:** Configuração específica da conta

### **Opção 2: Super Admin Panel**
- **URL:** `/super-admin` → aba "Integrações"
- **Acesso:** Apenas Super Admin
- **Escopo:** Configuração global do sistema

## 🔑 **Credenciais Necessárias**

### **1. Chaves da API (Obrigatórias)**
```
Chave Pública (Publishable Key):
- Teste: pk_test_51ABC123...
- Produção: pk_live_51ABC123...

Chave Secreta (Secret Key):
- Teste: sk_test_51ABC123...
- Produção: sk_live_51ABC123...
```

### **2. Webhook Secret (Opcional)**
```
Webhook Secret:
- whsec_1234567890abcdef...
```

## 📋 **Passo a Passo Detalhado**

### **Etapa 1: Obter Credenciais no Stripe**

1. **Acesse:** https://dashboard.stripe.com/apikeys
2. **Faça login** na sua conta Stripe
3. **Copie as chaves:**
   - Para testes: Use as chaves de **Teste**
   - Para produção: Use as chaves **Ativas**

### **Etapa 2: Configurar na Plataforma**

1. **Acesse a plataforma AutoContrato**
2. **Faça login** como Admin ou Super Admin
3. **Navegue para:** `/integrations`
4. **Clique na aba:** "Pagamentos (Stripe)"

### **Etapa 3: Preencher Formulário**

```
┌─────────────────────────────────────┐
│ Configuração Stripe                 │
├─────────────────────────────────────┤
│ Modo: [Teste ▼]                     │
│                                     │
│ Chave Pública:                      │
│ pk_test_51ABC123...                 │
│                                     │
│ Chave Secreta:                      │
│ ••••••••••••••••••••••••••••••••    │
│                                     │
│ Webhook Secret:                     │
│ ••••••••••••••••••••••••••••••••    │
│                                     │
│ [Testar] [Salvar]                   │
└─────────────────────────────────────┘
```

### **Etapa 4: Testar Conexão**

1. **Clique:** "Testar"
2. **Aguarde:** Verificação da conexão
3. **Resultado esperado:** ✅ "Conexão com Stripe estabelecida"

### **Etapa 5: Salvar Configuração**

1. **Clique:** "Salvar"
2. **Confirmação:** "Integração salva com sucesso!"

## 🔄 **Configurar Webhooks (Opcional)**

### **1. No Stripe Dashboard:**
```
https://dashboard.stripe.com/webhooks
```

### **2. Criar Endpoint:**
- **URL:** `https://sua-app.com/webhook/stripe`
- **Eventos:** Selecionar eventos necessários:
  - `payment_intent.succeeded`
  - `payment_intent.payment_failed`
  - `invoice.payment_succeeded`
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

### **3. Copiar Webhook Secret:**
- Após criar o endpoint, copie o **Signing Secret**
- Cole no campo "Webhook Secret" da plataforma

## ⚠️ **Importante**

### **🔒 Segurança:**
- ✅ **NUNCA** compartilhe suas chaves secretas
- ✅ Use chaves de **teste** durante desenvolvimento
- ✅ Use chaves de **produção** apenas em ambiente live
- ✅ Rotacione as chaves periodicamente

### **🧪 Ambiente de Teste:**
- ✅ Use `pk_test_` e `sk_test_` para testes
- ✅ Transações de teste não são cobradas
- ✅ Use cartões de teste do Stripe

### **🚀 Ambiente de Produção:**
- ✅ Use `pk_live_` e `sk_live_` para produção
- ✅ Transações reais serão processadas
- ✅ Configure webhooks para eventos importantes

## 🎯 **Após Configurar**

### **Funcionalidades Disponíveis:**
1. **Sincronização de Planos** → Stripe Products
2. **Criação de Preços** → Stripe Prices
3. **Processamento de Pagamentos**
4. **Gestão de Assinaturas**
5. **Webhooks para atualizações automáticas**

### **Próximos Passos:**
1. ✅ Configurar credenciais
2. ✅ Testar conexão
3. ✅ Sincronizar planos existentes
4. ✅ Criar produtos no Stripe
5. ✅ Testar fluxo de pagamento

## 🆘 **Problemas Comuns**

### **❌ "Chave do Stripe inválida"**
- Verifique se copiou a chave completa
- Confirme se está usando o modo correto (teste/produção)
- Verifique se a chave não expirou

### **❌ "Erro de conexão"**
- Verifique sua conexão com internet
- Confirme se o Stripe não está em manutenção
- Tente novamente em alguns minutos

### **❌ "Webhook não funciona"**
- Verifique se a URL está acessível
- Confirme se o secret está correto
- Verifique os logs do webhook no Stripe

## 📞 **Suporte**

Se encontrar problemas:
1. **Verifique** este guia novamente
2. **Teste** com credenciais de teste primeiro
3. **Consulte** a documentação do Stripe
4. **Entre em contato** com o suporte técnico