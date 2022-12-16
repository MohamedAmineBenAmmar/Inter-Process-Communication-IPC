# Build the client GUI
cd client
node_modules=node_modules
if [ ! -f "$node_modules" ]; then
    echo "$node_modules does not exist."
    echo "Going to install it for you, please wait :D"
    # npm install
fi
echo "building front"
# npm run electron:build
cd ..

# Create a venv inside the server
# cd server && python -m venv venv
cd server
ls
echo "going to install python deps"

# pip install -r requirements.txt
cd ..

# Creating the main executable
ls
echo "going to build the loader"
# gcc loader.c -o IPC