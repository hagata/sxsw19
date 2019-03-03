/**
 * Mock Data
 *  Default podcasts[0] streams podcast episode from Libsyn.
 *  To dest without streamin, use podcasts[1] for a local audio file
 */

const podcasts = [

    {
        podcast: 'The GaryVee Audio Experience',
        episodeTitle: 'The Future Of Voice: A Keynote and Q&A',
        audioSource: 'http://hwcdn.libsyn.com/p/9/5/d/95d3b9bfeb2f71a9/FutureOfVoice_mixdown.mp3?c_id=17635765&cs_id=17635765&destination_id=224974&expiration=1551572007&hwt=f729e4934990fcc03da5baa1ea79760c',
        description: 'They keynote in Seattle exemplifies exactly why I\'m so forward towards the world of audio and the direction that it\'s headed in. I loved answering questions for this Techstars group, and diving into the nitty gritty behind Alexa, voice, future AI, and podcasting - everything future of audio related. Really hope that you guys like this talk - as many of you know, I really do think that voice (Amazon Alexa/Echo, Google Home, etc.) is going to be huge because of how much time it saves in our lives. Enjoy',
        artwork: './assets/podcast-artwork-garyvee.jpg'
    },
    {
        podcast: 'The GaryVee Audio Experience',
        episodeTitle: '5 pieces of advice for starting a new business',
        audioSource: './assets/GaryVee-5-tips-podcast.mp3',
        description: 'Really really excited about this one - I give some tactical tips to folks who came through for the #pickmegaryvee contest I did - and we dive in to help out new business owners. Anyone starting out should get massive value from this <3',
        artwork: './assets/podcast-artwork-garyvee.jpg'
    }
]

export default podcasts