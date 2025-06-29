# 🚀 Como Usar o AutoContrato

## ⚡ Início Rápido

### **Opção 1: Duplo Clique (Mais Fácil)**
1. **Duplo clique** no arquivo `iniciar.bat`
2. **Aguarde** o servidor iniciar
3. **Acesse:** http://localhost:3000

### **Opção 2: Terminal**
```bash
# Instalar dependências (só na primeira vez)
npm install

# Iniciar servidor
npm run server
```

### **Opção 3: Node.js Direto**
```bash
node server-simples.js
```

## 🔧 Se Não Funcionar

### **Problema: Node.js não encontrado**
```bash
# Baixar e instalar Node.js
# https://nodejs.org/
# Versão recomendada: 18.x ou superior
```

### **Problema: Porta 3000 ocupada**
O servidor tentará automaticamente a porta 3001

### **Problema: Permissões**
1. **Clique com botão direito** no `iniciar.bat`
2. **Selecione:** "Executar como administrador"

## 📱 Acessar o Site

Depois que o servidor iniciar, acesse:
- **Local:** http://localhost:3000
- **Alternativo:** http://127.0.0.1:3000
- **Se porta 3000 ocupada:** http://localhost:3001

## 🎯 Funcionalidades Disponíveis

### **Páginas Principais:**
- **Home:** http://localhost:3000/
- **Login:** http://localhost:3000/login
- **Teste Grátis:** http://localhost:3000/teste
- **Dashboard:** http://localhost:3000/dashboard
- **Contratos:** http://localhost:3000/contratos
- **Editor:** http://localhost:3000/editor

### **Administração:**
- **Admin:** http://localhost:3000/admin
- **Super Admin:** http://localhost:3000/super-admin
- **Integrações:** http://localhost:3000/integrations

## 🧪 Modo de Teste

O sistema inclui um simulador de usuários para testes:

### **No Console do Navegador (F12):**
```javascript
// Simular login como Super Admin
loginAsSuperAdmin()

// Simular login como Admin
loginAsAdmin()

// Simular login como Supervisor
loginAsSupervisor()

// Simular login como Usuário
loginAsUser()

// Ver lista de usuários disponíveis
listUsers()

// Fazer logout
logout()
```

## 🔍 Solução de Problemas

### **Servidor não inicia:**
1. Verificar se Node.js está instalado
2. Executar como administrador
3. Verificar se a porta não está ocupada

### **Página não carrega:**
1. Verificar se o servidor está rodando
2. Tentar http://127.0.0.1:3000
3. Limpar cache do navegador (Ctrl+F5)

### **Erro de dependências:**
```bash
# Limpar e reinstalar
rmdir /s node_modules
del package-lock.json
npm install
```

## 📞 Suporte

Se ainda não funcionar:
1. **Anote a mensagem de erro** exata
2. **Tire print** da tela
3. **Informe:** versão do Windows, Node.js, navegador

---

**💡 Dica:** Use o arquivo `iniciar.bat` para facilitar - ele faz tudo automaticamente!