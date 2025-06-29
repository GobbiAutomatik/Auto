# 🔧 Solutions for Common Problems (Unix/Linux/Mac)

## 🚨 If the scripts don't work

### **Step 1: Diagnostics**
```bash
# Run diagnostics
./diagnose.sh

# If permission denied:
chmod +x diagnose.sh
./diagnose.sh
```

### **Step 2: Install Node.js (if needed)**
If you see "Node.js NOT FOUND":

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**macOS with Homebrew:**
```bash
brew install node
```

**CentOS/RHEL:**
```bash
sudo yum install nodejs npm
```

**Manual Installation:**
1. **Visit:** https://nodejs.org/
2. **Download** LTS version
3. **Install** with default settings
4. **Restart** terminal
5. **Test:** `node --version`

### **Step 3: Install Dependencies**
```bash
# Make script executable
chmod +x install-deps.sh

# Run installation
./install-deps.sh
```

### **Step 4: Start Manually**
```bash
# Make script executable
chmod +x start.sh

# Start application
./start.sh
```

## 🔧 Alternative Methods

### **Method 1: Direct Commands**
```bash
# Navigate to project directory
cd /path/to/your/project

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Method 2: Using yarn (if available)**
```bash
# Install dependencies
yarn install

# Start server
yarn dev
```

### **Method 3: VS Code Terminal**
1. **Open** project folder in VS Code
2. **Press** Ctrl + ` (backtick)
3. **Type:** npm run dev

## 🚨 Common Errors and Solutions

### **Error: "node: command not found"**
**Solution:** Install Node.js
- Visit: https://nodejs.org/
- Choose LTS version
- Restart terminal after installation

### **Error: "Permission denied"**
**Solution:** 
```bash
# Make scripts executable
chmod +x *.sh

# Or run with bash
bash start.sh
```

### **Error: "Port already in use"**
**Solution:** The server will try alternative ports automatically
- Check console output for the actual port
- Or kill existing process: `lsof -ti:5173 | xargs kill -9`

### **Error: "EACCES: permission denied"**
**Solution:** Fix npm permissions
```bash
# Option 1: Use npx
npx vite

# Option 2: Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

## 📱 Testing if it Works

After the server starts, you should see:
```
🚀 Server running!
📍 Access: http://localhost:5173
```

**Open browser** and go to: http://localhost:5173

If you see the AutoContrato page, it works! 🎉

## 📞 If Nothing Works

Please provide:
1. **Exact error message**
2. **Result** of `./diagnose.sh`
3. **OS version:** `uname -a`
4. **Node.js version:** `node --version`

---

**💡 Tip:** Always run `./diagnose.sh` first to identify the problem!