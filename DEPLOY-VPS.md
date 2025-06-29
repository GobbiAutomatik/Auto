# 🚀 Deploy AutoContrato em VPS - Guia Completo

## 📋 Pré-requisitos

### **No seu VPS:**
- Ubuntu 20.04+ ou CentOS 7+ (recomendado)
- Acesso root ou sudo
- Pelo menos 1GB RAM
- 10GB espaço em disco

### **Domínio (opcional mas recomendado):**
- Domínio próprio (ex: meusite.com.br)
- DNS apontando para o IP do VPS

## 🔧 Passo 1: Preparar o VPS

### **Conectar ao VPS:**
```bash
# Via SSH
ssh root@SEU_IP_DO_VPS
# ou
ssh usuario@SEU_IP_DO_VPS
```

### **Atualizar sistema:**
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y
```

### **Instalar dependências básicas:**
```bash
# Ubuntu/Debian
sudo apt install -y curl wget git nginx certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install -y curl wget git nginx certbot python3-certbot-nginx
```

## 📦 Passo 2: Instalar Node.js

### **Método 1: Via NodeSource (Recomendado)**
```bash
# Baixar script de instalação
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Instalar Node.js
sudo apt-get install -y nodejs

# Verificar instalação
node --version
npm --version
```

### **Método 2: Via NVM (Alternativo)**
```bash
# Instalar NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Recarregar terminal
source ~/.bashrc

# Instalar Node.js LTS
nvm install --lts
nvm use --lts
```

## 📁 Passo 3: Preparar a Aplicação

### **Criar diretório:**
```bash
sudo mkdir -p /var/www/autocontrato
sudo chown -R $USER:$USER /var/www/autocontrato
cd /var/www/autocontrato
```

### **Fazer upload dos arquivos:**

**Opção A: Via Git (se tiver repositório)**
```bash
git clone https://github.com/seu-usuario/autocontrato.git .
```

**Opção B: Via SCP (do seu computador)**
```bash
# No seu computador local
scp -r * usuario@SEU_IP:/var/www/autocontrato/
```

**Opção C: Via FTP/SFTP**
- Use FileZilla ou WinSCP
- Conecte ao VPS
- Faça upload de todos os arquivos

### **Instalar dependências:**
```bash
cd /var/www/autocontrato
npm install
```

### **Fazer build da aplicação:**
```bash
npm run build
```

## 🌐 Passo 4: Configurar Nginx

### **Criar configuração do site:**
```bash
sudo nano /etc/nginx/sites-available/autocontrato
```

**Cole esta configuração:**
```nginx
server {
    listen 80;
    server_name SEU_DOMINIO.com.br www.SEU_DOMINIO.com.br;
    # Se não tiver domínio, use apenas: server_name SEU_IP_DO_VPS;
    
    root /var/www/autocontrato/dist;
    index index.html;
    
    # Configuração para SPA (Single Page Application)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Compressão
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### **Ativar o site:**
```bash
# Criar link simbólico
sudo ln -s /etc/nginx/sites-available/autocontrato /etc/nginx/sites-enabled/

# Remover site padrão (opcional)
sudo rm /etc/nginx/sites-enabled/default

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

## 🔒 Passo 5: Configurar SSL (HTTPS)

### **Se você tem domínio:**
```bash
# Obter certificado SSL gratuito
sudo certbot --nginx -d SEU_DOMINIO.com.br -d www.SEU_DOMINIO.com.br

# Configurar renovação automática
sudo crontab -e
# Adicione esta linha:
0 12 * * * /usr/bin/certbot renew --quiet
```

### **Se não tem domínio:**
Por enquanto, use HTTP. Depois configure um domínio.

## 🔥 Passo 6: Configurar Firewall

```bash
# Ubuntu (UFW)
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable

# CentOS (firewalld)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## 🗄️ Passo 7: Configurar Banco de Dados (Supabase)

### **Opção A: Usar Supabase Cloud (Recomendado)**
1. Acesse https://supabase.com
2. Crie um projeto
3. Configure as variáveis de ambiente

### **Opção B: PostgreSQL Local**
```bash
# Instalar PostgreSQL
sudo apt install postgresql postgresql-contrib

# Configurar banco
sudo -u postgres psql
CREATE DATABASE autocontrato;
CREATE USER autocontrato_user WITH PASSWORD 'senha_forte';
GRANT ALL PRIVILEGES ON DATABASE autocontrato TO autocontrato_user;
\q
```

## ⚙️ Passo 8: Configurar Variáveis de Ambiente

```bash
# Criar arquivo de ambiente
sudo nano /var/www/autocontrato/.env.production
```

**Adicione suas configurações:**
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
NODE_ENV=production
```

## 🔄 Passo 9: Configurar PM2 (Gerenciador de Processos)

### **Instalar PM2:**
```bash
sudo npm install -g pm2
```

### **Se precisar de servidor Node.js:**
```bash
# Criar arquivo de configuração
nano ecosystem.config.js
```

```javascript
module.exports = {
  apps: [{
    name: 'autocontrato',
    script: 'server-simples.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

```bash
# Iniciar aplicação
pm2 start ecosystem.config.js

# Configurar para iniciar automaticamente
pm2 startup
pm2 save
```

## 🧪 Passo 10: Testar a Aplicação

### **Verificar se está funcionando:**
```bash
# Verificar status do Nginx
sudo systemctl status nginx

# Verificar logs
sudo tail -f /var/log/nginx/error.log

# Testar no navegador
curl -I http://SEU_IP_OU_DOMINIO
```

### **Acessar no navegador:**
- **Com domínio:** https://seudominio.com.br
- **Sem domínio:** http://SEU_IP_DO_VPS

## 🔧 Comandos Úteis para Manutenção

### **Atualizar aplicação:**
```bash
cd /var/www/autocontrato
git pull origin main  # se usando git
npm install
npm run build
sudo systemctl reload nginx
```

### **Ver logs:**
```bash
# Logs do Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Logs do PM2 (se usando)
pm2 logs autocontrato
```

### **Reiniciar serviços:**
```bash
sudo systemctl restart nginx
pm2 restart autocontrato  # se usando PM2
```

## 🚨 Solução de Problemas

### **Erro 502 Bad Gateway:**
- Verificar se a aplicação Node.js está rodando
- Verificar configuração do Nginx

### **Erro 404 em rotas:**
- Verificar configuração `try_files` no Nginx
- Confirmar que é uma SPA

### **Erro de permissões:**
```bash
sudo chown -R www-data:www-data /var/www/autocontrato
sudo chmod -R 755 /var/www/autocontrato
```

## 📊 Monitoramento

### **Instalar ferramentas de monitoramento:**
```bash
# htop para monitorar recursos
sudo apt install htop

# Verificar uso de recursos
htop
df -h  # espaço em disco
free -h  # memória
```

## 🔐 Segurança Adicional

### **Configurar fail2ban:**
```bash
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### **Atualizar regularmente:**
```bash
# Criar script de atualização
sudo nano /usr/local/bin/update-system.sh
```

```bash
#!/bin/bash
apt update && apt upgrade -y
npm update -g
certbot renew --quiet
```

```bash
sudo chmod +x /usr/local/bin/update-system.sh

# Agendar atualizações semanais
sudo crontab -e
# Adicionar: 0 2 * * 0 /usr/local/bin/update-system.sh
```

---

## 🎉 Pronto!

Sua aplicação AutoContrato agora está rodando em produção no VPS!

**Próximos passos:**
1. Configurar backup automático
2. Monitorar performance
3. Configurar domínio personalizado
4. Implementar CI/CD para deploys automáticos

**💡 Dica:** Mantenha sempre backups dos dados e configurações importantes!