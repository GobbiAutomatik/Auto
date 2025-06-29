# 🔧 Soluções para Problemas Comuns

## 🚨 Se o duplo clique não funcionou

### **Passo 1: Diagnóstico**
1. **Duplo clique** em `diagnostico.bat`
2. **Leia** todas as mensagens
3. **Anote** o que está ❌ (vermelho)

### **Passo 2: Instalar Node.js (se necessário)**
Se aparecer "Node.js NÃO ENCONTRADO":
1. **Acesse:** https://nodejs.org/
2. **Baixe** a versão LTS (recomendada)
3. **Instale** com configurações padrão
4. **Reinicie** o computador
5. **Teste** novamente

### **Passo 3: Instalar Dependências**
1. **Duplo clique** em `instalar-dependencias.bat`
2. **Aguarde** a instalação terminar

### **Passo 4: Iniciar Manualmente**
1. **Duplo clique** em `iniciar-manual.bat`
2. **Aguarde** aparecer "Servidor rodando!"
3. **Abra** http://localhost:3000

## 🔧 Métodos Alternativos

### **Método 1: Prompt de Comando**
1. **Pressione** Windows + R
2. **Digite:** cmd
3. **Pressione** Enter
4. **Digite:** cd "C:\caminho\para\sua\pasta"
5. **Digite:** node server-simples.js

### **Método 2: PowerShell**
1. **Clique direito** na pasta do projeto
2. **Selecione:** "Abrir no PowerShell"
3. **Digite:** node server-simples.js

### **Método 3: Terminal do VS Code**
1. **Abra** a pasta no VS Code
2. **Pressione** Ctrl + `
3. **Digite:** node server-simples.js

## 🚨 Erros Comuns e Soluções

### **Erro: "node não é reconhecido"**
**Solução:** Instalar Node.js
- Baixe em: https://nodejs.org/
- Escolha versão LTS
- Reinicie o computador após instalar

### **Erro: "Porta já está em uso"**
**Solução:** O servidor tentará porta 3001 automaticamente

### **Erro: "Acesso negado"**
**Solução:** 
1. Clique direito no .bat
2. "Executar como administrador"

### **Erro: "Arquivo não encontrado"**
**Solução:** Certifique-se de estar na pasta correta do projeto

## 📱 Testando se Funcionou

Depois que o servidor iniciar, você deve ver:
```
🚀 Servidor rodando!
📍 Acesse: http://localhost:3000
```

**Abra o navegador** e acesse: http://localhost:3000

Se aparecer a página do AutoContrato, funcionou! 🎉

## 📞 Se Nada Funcionar

Me informe:
1. **Qual erro** apareceu exatamente
2. **Resultado** do `diagnostico.bat`
3. **Versão** do Windows
4. **Se Node.js** está instalado

---

**💡 Dica:** Use sempre o `diagnostico.bat` primeiro para identificar o problema!