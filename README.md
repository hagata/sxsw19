# Podversation (voice interface) Workshop
What this is:
This is a prototype example for a voice interface.

What this covers
- Get microphone input.
- Convert speech audio to text. (API layer)
- Work with different types of voice processing–push to talk vs. always listening.
- Do something with the text, e.g., trigger commands
- BONUS* make it look good and useful


## Local Project setup
Install prerequisites for your machine, or use [Docker](https://www.docker.com/products/docker-desktop) See [Running in Docker](#Docker-setup)

### Prerequisites
- Code Editor, I love [VSCode](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node/npm](https://nodejs.org/en/download/)
- [Vue Cli](https://cli.vuejs.org/guide/installation.html)

Install the Vue Cli with:
```
npm install -g @vue/cli @vue/cli-service-global
```

## Run Locally
```
npm run serve
```
For the purposes of local development, we'll be using the vue server from the Vue Cli.


## Docker setup
With Docker Desktop installed (or [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) for older Windows or Windows 10 Home), build the docker image and start the development server with
```
docker-compose up
```
