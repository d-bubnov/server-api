# server-api

It is a Backend API in Node.js

`server.js` file is a main file in this project.
Go to the terminal and start the node server using the following command: 

    nodemon server

P.S.: we are using `nodemon`


### Debug (only for Visual Studio Code IDE):

If you want to debug `server-api` application then you need to do next points:

  1. Clone lates version of the `server-api` repository from GitHab: https://github.com/d-bubnov/server-api.git (current project)
  2. Install next extension for debug in VSCode: https://github.com/Microsoft/vscode-chrome-debug
  3. You should have `TypeScript` library installed globally. (just run command `npm install -g typescript`)
  4. Stop docker container with name `bubnov_server-api` (just use command `docker stop [container-ID]`)
  5. Run `Debug server API` command for debug (it run typescript build for `server-api` project and attach to process)
  6. Enjoy!

### versions:

 - 1.0.0 - First stable published version
 - 1.0.1 - Migrate from JavaScript to TypeScript
