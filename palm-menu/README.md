# 🌴 Palm Beach Bar — QR Menu

Dynamic QR-code menu system for **Palm Beach Bar**, Saranda, Albania.

---

## 🛠️ Programs & Tools You Need

| Tool | What It Is | Download |
|------|-----------|----------|
| **Node.js** (v18+) | Runs the backend server | [nodejs.org](https://nodejs.org) |
| **VS Code** | Code editor | [code.visualstudio.com](https://code.visualstudio.com) |
| **Git** | Version control | [git-scm.com](https://git-scm.com) |
| **Terminal** | Run commands (built into Mac/Linux; use PowerShell on Windows) | Built-in |

---

## 📁 Project Structure

```
palm-menu/
├── server.js              ← Express backend (API + serves frontend)
├── package.json           ← Project config & dependencies
├── README.md              ← This file
├── src/
│   └── data/
│       └── menu.js        ← All menu items & prices ← EDIT THIS
└── public/
    ├── index.html         ← Customer-facing menu (mobile UI)
    ├── admin.html         ← Admin dashboard + QR code generator
    └── logo.jpg           ← Bar logo
```

---

## 🚀 How to Run (Step by Step)

### 1. Install Node.js
Go to **[nodejs.org](https://nodejs.org)** and download the LTS version. Install it.

Verify it works:
```bash
node --version   # should print v18.x.x or higher
npm --version    # should print 9.x.x or higher
```

### 2. Open the project
Open a terminal (or VS Code terminal) and navigate to this folder:
```bash
cd palm-menu
```

### 3. Install dependencies
```bash
npm install
```
This installs: `express` (web server), `cors` (cross-origin), `qrcode` (QR generator).

### 4. Start the server
```bash
npm start
```

You'll see:
```
🌴 Palm Beach Bar Menu running at http://localhost:3000
📱 API: http://localhost:3000/api/menu
🔲 QR:  http://localhost:3000/api/qr?url=http://localhost:3000
```

### 5. Open in browser
- **Customer menu**: http://localhost:3000
- **Admin panel**:   http://localhost:3000/admin.html

---

## 🌍 Deploy Online (Free, Permanent URL)

### Option A: Railway (easiest — one click)
1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. Click **New Project → Deploy from GitHub repo**
3. Push this folder to a GitHub repo first:
   ```bash
   git init
   git add .
   git commit -m "Initial Palm Beach Bar menu"
   # create a repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/palm-menu.git
   git push -u origin main
   ```
4. Railway auto-detects Node.js and deploys
5. You get a URL like `https://palm-menu-production.up.railway.app`

### Option B: Render (also free)
1. Go to [render.com](https://render.com), sign up
2. New → Web Service → Connect GitHub repo
3. Build command: `npm install`
4. Start command: `node server.js`
5. Done — gets a `.onrender.com` URL

### Option C: VPS (your own server)
If you have a VPS (DigitalOcean, Contabo, etc.):
```bash
# On the server:
git clone https://github.com/you/palm-menu.git
cd palm-menu
npm install
# Install PM2 to keep it running:
npm install -g pm2
pm2 start server.js --name "palm-menu"
pm2 startup  # auto-start on reboot
```

---

## 📱 Generate the QR Code

Once deployed, visit:
```
https://YOUR-URL.com/admin.html
```

The admin panel automatically generates a QR code pointing to your live menu.
- Click **Download QR** to save as PNG
- Print it on table cards, stickers, or a sign at the bar

---

## ✏️ Update the Menu

All menu items are in **`src/data/menu.js`**.

To add an item:
```js
{ id: 98, name: "New Cocktail", price: 750, description: "Vodka, lime, mint", tags: ["popular"] }
```

To change a price, just edit the `price` value.

Available tags: `"popular"`, `"strong"` (or add your own in the CSS)

After editing, restart the server:
```bash
npm start
```
If deployed on Railway/Render, just push to GitHub — it auto-redeploys.

---

## 🔧 Development Mode (auto-restart on file changes)
```bash
npm run dev
```

---

## 📡 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/menu` | Full menu JSON |
| `GET /api/menu/:category` | Single category |
| `GET /api/search?q=mojito` | Search items |
| `GET /api/qr?url=https://...` | Generate QR code |
| `GET /api/health` | Server status check |

---

## 🎨 Customization

- **Colors**: Edit the `:root` CSS variables at the top of `index.html`
- **Logo**: Replace `public/logo.jpg` with your own file
- **Font**: Change the Google Fonts import in `index.html`
- **Bar name / tagline**: Edit the `<h1>` and `<p>` in the hero section

---

*Made for Palm Beach Bar · Saranda, Albania 🌴*
