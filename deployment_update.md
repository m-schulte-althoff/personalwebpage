# Deploying Your Website to a Server with ~/public_html Directory

Here's a step-by-step guide to deploy your "Schopenhauer Says No" website to your web server and set up automatic updates from GitHub.

## Initial Deployment

1. **Connect to your server via SSH**:
   ```bash
   ssh username@your-server.com
   ```

2. **Clone your GitHub repository**:
   ```bash
   # Navigate to your home directory
   cd ~
   
   # Clone the repository
   git clone https://github.com/yourusername/personalwebpage.git
   ```

3. **Copy website files to public_html**:
   ```bash
   # Create a backup of any existing content (optional)
   mkdir -p ~/public_html_backup
   cp -r ~/public_html/* ~/public_html_backup/
   
   # Clear the public_html directory
   rm -rf ~/public_html/*
   
   # Copy the website files
   cp -r ~/personalwebpage/schopenhauer_says_no/* ~/public_html/
   ```

## Setting Up Automatic Deployment with Git

To make future deployments easier, create a simple deployment script:

1. **Create a deployment script**:
   ```bash
   nano ~/deploy_website.sh
   ```

2. **Add the following content to the script**:
   ```bash
   #!/bin/bash
   
   # Change to the repository directory
   cd ~/personalwebpage
   
   # Pull latest changes from GitHub
   git pull origin main
   
   # Copy website files to public_html
   cp -r schopenhauer_says_no/* ~/public_html/
   
   echo "Website deployed successfully at $(date)"
   ```

3. **Make the script executable**:
   ```bash
   chmod +x ~/deploy_website.sh
   ```

4. **Test the deployment script**:
   ```bash
   ~/deploy_website.sh
   ```

## Alternative: Using Git Post-Receive Hook for Automatic Deployment

For a more automated approach:

1. **Create a bare Git repository on your server**:
   ```bash
   mkdir -p ~/git/personalwebpage.git
   cd ~/git/personalwebpage.git
   git init --bare
   ```

2. **Create a post-receive hook**:
   ```bash
   nano ~/git/personalwebpage.git/hooks/post-receive
   ```

3. **Add the following content**:
   ```bash
   #!/bin/bash
   
   # The directory where you want to checkout the website files
   WORK_TREE=~/personalwebpage
   
   # The public_html directory
   PUBLIC_HTML=~/public_html
   
   # Checkout the latest code into the working tree
   git --work-tree=$WORK_TREE --git-dir=~/git/personalwebpage.git checkout -f main
   
   # Copy the website files to public_html
   cp -r $WORK_TREE/schopenhauer_says_no/* $PUBLIC_HTML/
   
   echo "Website deployed automatically at $(date)"
   ```

4. **Make the hook executable**:
   ```bash
   chmod +x ~/git/personalwebpage.git/hooks/post-receive
   ```

5. **Add the server as a remote on your local machine**:
   ```bash
   # Run this on your local development machine
   git remote add server username@your-server.com:git/personalwebpage.git
   ```

6. **To deploy, simply push from your local machine**:
   ```bash
   # Run this on your local development machine
   git push server main
   ```

## Checking and Fixing Permissions

Make sure your web server can read all files:

```bash
# Set appropriate permissions
find ~/public_html -type d -exec chmod 755 {} \;
find ~/public_html -type f -exec chmod 644 {} \;
```

## Setup for File Upload (Alternative to Git)

If you prefer manual uploads:

```bash
# On your local machine, create a script to sync your local files
echo '#!/bin/bash
rsync -avz --delete ./schopenhauer_says_no/ username@your-server.com:~/public_html/' > upload.sh
chmod +x upload.sh
```

## Testing Your Deployment

After deployment, open your browser and visit your website URL to verify everything is working correctly. Check that:

1. All pages load properly
2. CSS is applied correctly
3. JavaScript functionality works (like the dark mode toggle)
4. Images and assets are displayed correctly

If you encounter any issues, check your web server error logs for clues.

## Important Notes

1. **Path References**: Ensure all path references in your HTML/CSS/JS files use relative paths, not absolute paths.
2. **Assets Directory**: Make sure the assets directory with your fonts and images is correctly copied to public_html.
3. **Server Configuration**: Your server needs to be configured to properly serve HTML, CSS, JavaScript, and font files.

By following these steps, you'll have a smooth workflow for deploying updates to your website by simply pulling from GitHub or pushing to your server's repository.