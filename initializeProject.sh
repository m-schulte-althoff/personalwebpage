#!/bin/bash

# Step 1: Create the main project folder
mkdir -p schopenhauer_says_no

# Step 2: Create subfolders inside the main project folder
mkdir -p schopenhauer_says_no/html
mkdir -p schopenhauer_says_no/css
mkdir -p schopenhauer_says_no/assets

# Step 3: Create index.html with minimal HTML5 boilerplate
cat <<EOL > schopenhauer_says_no/html/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Schopenhauer Says No</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
</body>
</html>
EOL

# Step 4: Create styles.css with a placeholder comment
echo "/* Base Styles */" > schopenhauer_says_no/css/styles.css

echo "Project structure created successfully."