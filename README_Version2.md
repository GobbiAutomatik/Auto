# 🚀 AutoContrato - Plataforma Completa de Gestão de Contratos

Bem-vindo ao **AutoContrato**! Esta plataforma permite criar, gerenciar, editar, assinar e integrar contratos digitais de maneira simples, rápida e segura.

---

## ⚡ Início Rápido

### **Windows**
1. **Duplo clique** no arquivo `iniciar.bat`
2. Acesse: [http://localhost:3000](http://localhost:3000)

### **Linux/Mac (Unix)**
```bash
chmod +x start.sh
./start.sh
# Ou:
npm install
npm run dev
```
Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Instalação Manual

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/LFD1979/Auto.git
    cd Auto
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Inicie o servidor:**
    - **Windows:** `npm run server` ou `node server-simples.js`
    - **Unix:** `npm run dev` ou `./start.sh`

---

## 📁 Estrutura de Pastas

- `src/` - Código-fonte principal (React + Vite)
- `public/` - Arquivos estáticos
- `server-simples.js` - Servidor Node.js simples para testes
- `iniciar.bat` / `start.sh` - Inicialização fácil para cada sistema
- `.env` - Variáveis de ambiente (Supabase)

---

## 📋 Funcionalidades

- 📝 Criação e edição de contratos digitais
- 🔐 Assinatura eletrônica
- 👥 Gestão de usuários e permissões (Admin, Supervisor, User, etc.)
- 📊 Painel de controle (Dashboard)
- 🏢 Integração com Supabase e Stripe (configuração em `/integrations`)
- 📦 Scripts de diagnóstico e instalação automática

---

## 🧪 Testes

Modo de teste rápido disponível em [http://localhost:5173/teste](http://localhost:5173/teste)

Usuários de teste e cenários: veja o arquivo `TEST_USERS_GUIDE.md`

---

## ⚙️ Configuração

1. **Variáveis de ambiente (.env):**
    ```
    VITE_SUPABASE_URL=sua_url_do_supabase
    VITE_SUPABASE_ANON_KEY=sua_chave_anonima
    ```

2. **Stripe:** Consulte o arquivo `STRIPE_CONFIG_GUIDE.md` para integração de pagamentos.

---

## 🆘 Solução de Problemas

- **Node.js não encontrado?**  
  Instale em: [https://nodejs.org/](https://nodejs.org/)

- **Porta ocupada?**  
  O servidor tentará usar outra porta automaticamente (3000 ou 3001).

- **Erros comuns:**  
  Consulte `SOLUCOES.md` e os scripts de diagnóstico (`diagnostico.bat`, `diagnose.sh`).

---

## 📄 Documentação Extra

- [COMO-USAR.md](COMO-USAR.md): Passo a passo detalhado
- [DEPLOY-VPS.md](DEPLOY-VPS.md): Deploy em VPS Linux
- [UNIX_USAGE.md](UNIX_USAGE.md): Uso em sistemas Unix
- [SOLUTIONS_UNIX.md](SOLUTIONS_UNIX.md): Soluções para Unix/Linux/Mac
- [TESTING_GUIDE.md](TESTING_GUIDE.md): Guia completo de testes

---

## 💻 Contribuição

Pull requests são bem-vindos!  
Para grandes mudanças, por favor abra uma issue primeiro para discutir o que deseja modificar.

---

## 📃 Licença

Este projeto é privado. Para uso comercial, entre em contato.

---

**Dúvidas?**  
Abra uma issue ou consulte os guias do repositório.
