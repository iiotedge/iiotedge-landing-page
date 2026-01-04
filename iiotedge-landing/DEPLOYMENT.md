# Deployment Guide for IIoTEdge Landing Page with Nginx

This guide explains how to build and deploy the Next.js landing page using nginx as a reverse proxy.

## Prerequisites

- Node.js 20+ and pnpm installed (for local builds)
- Docker and Docker Compose (for containerized deployment)
- nginx installed (for non-Docker deployment)

## Architecture

The deployment uses nginx as a reverse proxy in front of the Next.js application:
- **nginx**: Handles incoming requests, serves static files, and proxies to Next.js
- **Next.js**: Runs the application server on port 3000 (handles API routes and SSR)

## Option 1: Docker Deployment (Recommended)

### Build and Run with Docker Compose

1. **Build and start the services:**
   ```bash
   cd iiotedge-landing
   docker-compose up -d --build
   ```

2. **View logs:**
   ```bash
   docker-compose logs -f
   ```

3. **Stop the services:**
   ```bash
   docker-compose down
   ```

4. **Access the application:**
   - Open `http://localhost` in your browser

### Manual Docker Build

1. **Build the Next.js image:**
   ```bash
   docker build -t iiotedge-nextjs .
   ```

2. **Run the Next.js container:**
   ```bash
   docker run -d --name nextjs -p 3000:3000 iiotedge-nextjs
   ```

3. **Run nginx container:**
   ```bash
   docker run -d --name nginx \
     -p 80:80 \
     -v $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
     --link nextjs:nextjs \
     nginx:alpine
   ```

## Option 2: Manual Deployment (Without Docker)

### Step 1: Build the Next.js Application

1. **Install dependencies:**
   ```bash
   cd iiotedge-landing
   pnpm install
   ```

2. **Build the application:**
   ```bash
   pnpm build
   ```

   This creates a `.next/standalone` directory with the production build.

### Step 2: Set Up Next.js Server

1. **Copy the standalone build to your server:**
   ```bash
   # On your server
   mkdir -p /var/www/iiotedge-landing
   cp -r .next/standalone/* /var/www/iiotedge-landing/
   cp -r .next/static /var/www/iiotedge-landing/.next/
   cp -r public /var/www/iiotedge-landing/
   ```

2. **Install production dependencies:**
   ```bash
   cd /var/www/iiotedge-landing
   pnpm install --prod
   ```

3. **Run the Next.js server (using PM2 or systemd):**

   **With PM2:**
   ```bash
   npm install -g pm2
   pm2 start server.js --name iiotedge-landing
   pm2 save
   pm2 startup
   ```

   **With systemd:**
   Create `/etc/systemd/system/iiotedge-landing.service`:
   ```ini
   [Unit]
   Description=IIoTEdge Landing Page
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/var/www/iiotedge-landing
   Environment=NODE_ENV=production
   Environment=PORT=3000
   ExecStart=/usr/bin/node server.js
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

   Then:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable iiotedge-landing
   sudo systemctl start iiotedge-landing
   ```

### Step 3: Configure Nginx

1. **Copy the nginx configuration:**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/iiotedge-landing
   ```

2. **Update the nginx.conf file:**
   Edit `/etc/nginx/sites-available/iiotedge-landing` and change:
   ```nginx
   proxy_pass http://nextjs:3000;
   ```
   to:
   ```nginx
   proxy_pass http://localhost:3000;
   ```

3. **Enable the site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/iiotedge-landing /etc/nginx/sites-enabled/
   sudo nginx -t  # Test configuration
   sudo systemctl reload nginx
   ```

### Step 4: Set Up SSL (Optional but Recommended)

1. **Install Certbot:**
   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. **Obtain SSL certificate:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

3. **Auto-renewal is set up automatically**

## Environment Variables

If you need to set environment variables:

**For Docker:**
Add to `docker-compose.yml`:
```yaml
services:
  nextjs:
    environment:
      - NODE_ENV=production
      - PORT=3000
      - YOUR_VAR=value
```

**For manual deployment:**
Create a `.env.production` file or export variables before starting the server.

## Troubleshooting

### Check Next.js logs
```bash
# Docker
docker-compose logs nextjs

# PM2
pm2 logs iiotedge-landing

# systemd
sudo journalctl -u iiotedge-landing -f
```

### Check nginx logs
```bash
# Docker
docker-compose logs nginx

# Manual
sudo tail -f /var/log/nginx/error.log
```

### Test nginx configuration
```bash
sudo nginx -t
```

### Verify Next.js is running
```bash
curl http://localhost:3000
```

## Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure proper domain name in nginx
- [ ] Set up SSL certificates (HTTPS)
- [ ] Configure firewall rules
- [ ] Set up monitoring/logging
- [ ] Configure backup strategy
- [ ] Test contact form API endpoint
- [ ] Verify all static assets load correctly
- [ ] Check performance with Lighthouse

## Updating the Application

1. **Pull latest changes:**
   ```bash
   git pull
   ```

2. **Rebuild:**
   ```bash
   # Docker
   docker-compose up -d --build

   # Manual
   pnpm build
   pm2 restart iiotedge-landing  # or systemctl restart
   ```

## Port Configuration

- **nginx**: Listens on port 80 (HTTP) and 443 (HTTPS)
- **Next.js**: Runs on port 3000 (internal, proxied by nginx)

To change ports, update:
- `docker-compose.yml` (ports mapping)
- `nginx.conf` (listen directive)
- Next.js server (PORT environment variable)



