// Voice interface class
import Artyom from 'artyom.js';

class VoiceInterface {
    constructor() {
        this.listener = new Artyom();
        this.init();
    }

    /**
     * Creates a new Artyom instance
     */
    init() {
        this.listener.initialize({
            lang: 'en-US', // Language to listen for
            continuous: true, // Listen forever
            soundex: true, // Use the soundex algorithm to increase accuracy
            debug: true, // Show messages in the console
            listen: true, // Start to listen commands !

            // If providen, you can only trigger a command if you say its name
            // e.g to trigger Good Morning, you need to say 'Jarvis Good Morning'
            // name: 'Jarvis'
        })
    }
}

export default VoiceInterface;