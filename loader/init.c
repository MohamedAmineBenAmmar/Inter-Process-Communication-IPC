#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <sys/wait.h>

// void handler()
// {
//     printf("going to kill my self %d\n", getpid());
//     system("lsof -i tcp:8000 | awk 'NR!=1 {print $2}' | xargs kill ");
// }

int main()
{

    int child;
    int status;
    // signal(SIGINT, handler);
    // signal(SIGQUIT, handler);
    if (child = fork() == 0)
    {
        // In the child process
        system("./client/dist/linux-unpacked/my-app");
    }
    else
    {
        system("cd server && . ./venv/bin/activate && cd app && uvicorn main:app --reload");
    }
    return 0;
}