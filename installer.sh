# Build the client GUI
cd client
node_modules=node_modules
if [ ! -f "$node_modules" ]; then
    echo "$node_modules does not exist"
    echo "Going to install it for you, please wait"
    npm install
    # echo "Building the GUI"
    # npm run electron:build
fi
cd ..

# Create a venv inside the server
cd server
venv=venv
if [ ! -f "$venv" ]; then
    echo "$venv does not exist"
    echo "Going to install a python virtual environment for you, please wait"
    python -m venv venv
    echo "Going to install python deps"
    pip install -r requirements.txt  
fi
cd core
mkdir build
echo "Building the core executable files"
make

# Creating the main executable
cd ../..
echo "Building the loader"
gcc loader.c -o IPC

echo "Installation is done successfully."