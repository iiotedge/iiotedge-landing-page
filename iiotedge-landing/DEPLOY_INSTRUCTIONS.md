# Step-by-Step Deployment Instructions

## Quick Start: Docker Deployment (Recommended)

### Prerequisites Check
```bash
# Verify Docker is installed
docker --version

# Verify Docker Compose is installed
docker-compose --version
```

If not installed, install Docker and Docker Compose for your OS.

---

## Deployment Steps

### Step 1: Navigate to Project Directory
```bash
cd iiotedge-landing
```

### Step 2: Build and Start Services
```bash
docker-compose up -d --build
```

This will:
- Build the Next.js application
- Create Docker images for Next.js and nginx
- Start both containers in the background

### Step 3: Verify Deployment
```bash
# Check if containers are running
docker-compose ps

# View logs
docker-compose logs -f
```

### Step 4: Access Your Application
Open your browser and navigate to:
- `http://localhost` (or your server's IP address)

---

## Manual Deployment (Without Docker)

### Step 1: Install Prerequisites
```bash
# Install Node.js 20+ (if not already installed)
# Visit: https://nodejs.org/

# Install pnpm
npm install -g pnpm
```

### Step 2: Build the Application
```bash
cd iiotedge-landing

# Install dependencies
pnpm install

# Build for production
pnpm build
```

### Step 3: Set Up Production Server

#### Option A: Using PM2 (Recommended for Node.js)

```bash
# Install PM2 globally
npm install -g pm2

# Navigate to standalone build
cd .next/standalone

# Install production dependencies
pnpm install --prod

# Start the application
pm2 start server.js --name iiotedge-landing

# Save PM2 configuration
pm2 save

# Set up PM2 to start on system boot
pm2 startup
# Follow the instructions shown
```

#### Option B: Using systemd

```bash
# Create systemd service file
sudo nano /etc/systemd/system/iiotedge-landing.service
```

Paste the following content:
```ini
[Unit]
Description=IIoTEdge Landing Page
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/iiotedge-landing/.next/standalone
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/node server.js
Restart=always

[Install]
WantedBy=multi-user.target
```

Then:
```bash
# Replace /path/to/iiotedge-landing with your actual path
# Reload systemd
sudo systemctl daemon-reload

# Enable service to start on boot
sudo systemctl enable iiotedge-landing

# Start the service
sudo systemctl start iiotedge-landing

# Check status
sudo systemctl status iiotedge-landing
```

### Step 4: Install and Configure Nginx

```bash
# Install nginx (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install nginx -y

# Install nginx (CentOS/RHEL)
sudo yum install nginx -y
```

### Step 5: Configure Nginx

```bash
# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/iiotedge-landing

# Edit the configuration to use localhost instead of nextjs
sudo nano /etc/nginx/sites-available/iiotedge-landing
```

Change all instances of:
```nginx
proxy_pass http://nextjs:3000;
```
to:
```nginx
proxy_pass http://localhost:3000;
```

### Step 6: Enable Nginx Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/iiotedge-landing /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

### Step 7: Configure Firewall (if applicable)

```bash
# Allow HTTP traffic
sudo ufw allow 80/tcp

# Allow HTTPS traffic (if setting up SSL)
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable
```

### Step 8: Set Up SSL Certificate (Recommended)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx -y

# Obtain SSL certificate (replace yourdomain.com with your domain)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Certbot will automatically configure nginx and set up auto-renewal
```

---

## Verification Checklist

After deployment, verify:

- [ ] Application is accessible at `http://your-domain` or `http://localhost`
- [ ] All pages load correctly
- [ ] Contact form works (test submission)
- [ ] Static assets (images, CSS) load properly
- [ ] No console errors in browser
- [ ] SSL certificate is active (if configured)

---

## Troubleshooting

### Application Not Loading

```bash
# Check if Next.js is running
curl http://localhost:3000

# Check Next.js logs
# For PM2:
pm2 logs iiotedge-landing

# For systemd:
sudo journalctl -u iiotedge-landing -f

# For Docker:
docker-compose logs nextjs
```

### Nginx Not Working

```bash
# Check nginx status
sudo systemctl status nginx

# Check nginx configuration
sudo nginx -t

# View nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### Port Already in Use

```bash
# Check what's using port 80
sudo lsof -i :80

# Check what's using port 3000
sudo lsof -i :3000

# Stop conflicting services or change ports in configuration
```

---

## Updating the Application

### For Docker:
```bash
cd iiotedge-landing
git pull
docker-compose up -d --build
```

### For Manual Deployment:
```bash
cd iiotedge-landing
git pull
pnpm install
pnpm build

# Restart the service
# For PM2:
pm2 restart iiotedge-landing

# For systemd:
sudo systemctl restart iiotedge-landing
```

---

## Stopping the Application

### Docker:
```bash
docker-compose down
```

### Manual:
```bash
# PM2
pm2 stop iiotedge-landing

# systemd
sudo systemctl stop iiotedge-landing
```

---

## Need Help?

- Check the full deployment guide: `DEPLOYMENT.md`
- View application logs for errors
- Verify all prerequisites are installed
- Ensure ports 80 and 3000 are not blocked by firewall






