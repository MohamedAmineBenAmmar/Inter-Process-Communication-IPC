#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main()
{

    int child;
    int status;

    if (child = fork() == 0)
    {
        // In the child process
        system("cd server && . ./venv/bin/activate && cd app && uvicorn main:app --reload");
    }
    else
    {
        // system("./client/dist/linux-unpacked/my-app"); 
        system("cd client && npm run electron:dev");  
    }
    return 0;
}