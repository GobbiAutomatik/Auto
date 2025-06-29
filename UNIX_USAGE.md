# 🚀 How to Use AutoContrato (Unix/Linux/Mac)

## ⚡ Quick Start

### **Option 1: Using Scripts (Easiest)**
```bash
# Make scripts executable (first time only)
chmod +x start.sh install-deps.sh diagnose.sh

# Start the application
./start.sh
```

### **Option 2: Manual Commands**
```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

### **Option 3: Direct Node.js**
```bash
# If you have a simple server file
node server-simples.js
```

## 🔧 If It Doesn't Work

### **Problem: Node.js not found**
```bash
# Install Node.js
# Visit: https://nodejs.org/
# Recommended version: 18.x or higher

# On Ubuntu/Debian:
sudo apt update
sudo apt install nodejs npm

# On macOS with Homebrew:
brew install node

# On CentOS/RHEL:
sudo yum install nodejs npm
```

### **Problem: Permission denied**
```bash
# Make scripts executable
chmod +x *.sh

# Or run with bash directly
bash start.sh
```

### **Problem: Port 5173 occupied**
The server will automatically try alternative ports

## 📱 Access the Site

After the server starts, access:
- **Local:** http://localhost:5173
- **Alternative:** http://127.0.0.1:5173
- **If port 5173 occupied:** Check console for alternative port

## 🎯 Available Features

### **Main Pages:**
- **Home:** http://localhost:5173/
- **Login:** http://localhost:5173/login
- **Free Trial:** http://localhost:5173/teste
- **Dashboard:** http://localhost:5173/dashboard
- **Contracts:** http://localhost:5173/contratos
- **Editor:** http://localhost:5173/editor

### **Administration:**
- **Admin:** http://localhost:5173/admin
- **Super Admin:** http://localhost:5173/super-admin
- **Integrations:** http://localhost:5173/integrations

## 🧪 Test Mode

The system includes a user simulator for testing:

### **In Browser Console (F12):**
```javascript
// Simulate login as Super Admin
loginAsSuperAdmin()

// Simulate login as Admin
loginAsAdmin()

// Simulate login as Supervisor
loginAsSupervisor()

// Simulate login as User
loginAsUser()

// View available users list
listUsers()

// Logout
logout()
```

## 🔍 Troubleshooting

### **Server won't start:**
1. Check if Node.js is installed: `node --version`
2. Run diagnostics: `./diagnose.sh`
3. Check if port is not occupied

### **Page won't load:**
1. Check if server is running
2. Try http://127.0.0.1:5173
3. Clear browser cache (Ctrl+F5)

### **Dependency errors:**
```bash
# Clean and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

## 📞 Support

If it still doesn't work:
1. **Note the exact error message**
2. **Take a screenshot**
3. **Provide:** OS version, Node.js version, browser

---

**💡 Tip:** Use the `start.sh` script for convenience - it does everything automatically!