# Manage client
cd client
echo "Installing all the needed react and electron packages"
npm install
echo "Building the GUI"
npm run electron:build
cd ..

# Manage the FastAPI server
cd server
echo "Creating python virtual env"
python3 -m venv venv
echo "Activating the python virtual env"
. ./venv/bin/activate
echo "Installing the needed FastAPI packages"
pip install -r requirements.txt

# Manage the core
echo "Building the main executables"
cd core
mkdir build
make
cd ../..

# Manage loaser
echo "Building the loader"
gcc loader/init.c -o IPC

echo "Installation is done successfully."