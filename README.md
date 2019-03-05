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

### Launching the Docker containers interactive shell.
If you need to access the running container to run other `npm` scripts or similar, first you will need the container ID, then you can connect to it with `docker exec`, ex:
Get the image NAME with
```shell
docker ps

# CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
f7411a6d2e0e        podversation_vue    "npm run serve"     2 hours ago         Up 7 minutes        0.0.0.0:8080->8080
```
then attach with:
```shell
docker exec -it [container name] /bin/ash
```
You can exit the conainer with `ctrl+p, q` (in succession, `p` then `q` while holding `ctrl`)

# Chapter 1 - Podcast player
The key feature of this application is to be able to listen to voice commands while listening to a podcast, in order to get there, we'll first hook up a basic audio file player.

## Podcast data
We're mocking data that we would get back from a backend service or some other component.
See, the new file, `src/data/podcast-data.js`.

We'll be referencing a podcast episode from this dataset. The first option, `podcasts[0]` is a streamed audio file from Libsyn, the second, `podcasts[1]` is a local mp3 file in `public/assets/`

## Todo's
This part of the prototype is simply getting the basics of a UI built for presentation and setting us up for the next step with a couple custom UI elements with event methods attached to them.

- Build UI with Podcast image, title, episode name, and description (in `components/PodcastPlayer.vue`)
- Create a new `Controls` component in `components/Controls.vue`
    - Create a custom Controls UI with a seekbar, timestamps, and play button.
- Add basic event handling to the new Controls component for, `play()`


# Chapter 2 - Speech to text API
The key component to our prototype is getting voice input and listening to that input for commands. There are a handful of services that are all good, for this one, we'll be using [Artyom](https://github.com/sdkcarlos/artyom.js). It is Open Source, can listen to a stream for commands, and doesn't require an API call. Build on the [WebkitSpeechRecognition API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API), **Only available in Chrome**


## Todo's
- New Artyom based VoiceInterface class
    - Add an instance to `App.vue`
    - Add a play command to play the podcast (*hint, access grandchild component through `$refs`)

- Listen for "bookmark" and "new note" commands
    - `console.log()` for now

### Snippets
Artyom Settings
```js
{
    lang: 'en-US', // Language to listen for
    continuous: true, // Listen forever
    soundex: true, // Use the soundex algorithm to increase accuracy
    debug: true, // Show messages in the console
    listen: true, // Start to listen commands !

    // If providen, you can only trigger a command if you say its name
    // e.g to trigger Good Morning, you need to say 'Jarvis Good Morning'
    // name: 'Jarvis'
}
```

# Chapter 3 - Bookmark Component
Now that we have the voice commands working, we need to hook up the first of the core features, Bookmarking.

The controls are already done as far as voice goes, and this is where we can experiment with "what feels right" as far as what the commands are and whether or not we use a command `name` e.g., `Jarvis`.

Todo’s
When you say "bookmark" (or other commands) a clickable bookmark should be added to a bookmark list, and on the seekbar that moves the podcast to that point.

- Create a bookmark component
- Add storage of bookmarks, `data()` object is OK. (Bonus, LocalStorage)
- Create new bookmarks with a voice command
- Show all bookmarks on App.vue as well as on the `seeker` in Controls.vue
	- SVG icons in `src/icons` *from [Material Icons](https://material.io/tools/icons/?style=baseline)*. *Tip: quickly test events from child and grandchild components with `$emit` and `this.$root.$on`. (Bonus, implement a porper store, like Vuex)
    - Refactor `Controls.vue` methods to have a `getCurrentPercentage` and `getCurrentTime` method for use by other components.
- Bonus: Add a voice command to 'go to next bookmark' *Hint, find the "next" bookmark based on current time and you can reusue the `bookmarkJumpHandler` method.

### Snippets
Sample Bookmark data
```js
{
    id: 0,
    timestring: '06:22',
    seconds: 382.662643,
}
```

# Chapter 4 - Voice Notes
To make voice notes, we need to use a different type of speech-to-text that is generally called “Dictation”. Where we were previously just passively listening for certain commands, we’ll now use a command to start the Dictation Object in the SpeechRecognition API, through Artyom.

Todo’s
- Create a new Note component
- Add storage of Notes data object is OK, again. (Bonus, LocalStorage)
- Create a new note on a “new note” command.
- Handle the note dictation
	- use convenient wildcard functions in Artyom
	- output the text to the note component
