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
    },
    {
        podcast: 'Creative Pep Talk',
        episodeTitle: '221 - How Personal Life Experience Leads to Deeply Authentic Work w/ Suzy Ultman PART 2',
        audioSource: 'http://cf-media.sndcdn.com/5zs9mP6YfVP3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vNXpzOW1QNllmVlAzIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTUyMDk4NTI3fX19XX0_&Signature=IU~FcB~p99f7Byl1GG2DY~MVa1WGoPMWGODu-APYrxsKKvjQKTTRerHAjZarynF9uJuluJP0aw~OmpaNxsAJZUxEjuxSGQ3fSwDv0Tf~qESWIsIMlerq0jZuRcIbausA~dRTLFQp0pKFONfo~4bAApoHQLgGPTx1hqcmvVoR80L6voAMqAyM-D700T6ETf0Jy2HczCv2IyY5u0LYNQLtgif4NsbGYOYWJf4-zNM02p-DknzFd12DiSy1mqUMV~P5no~eKsAh7k7yUdLbcBjsALRWAp2tvs0nfcKQ588k2DF6frkOn49vWEoWGwzYtQFbI8m6qWpAhYTLSdubxN39LQ__&Key-Pair-Id=APKAJAGZ7VMH2PFPW6UQ',
        description: 'PART 2 of my conversation with my friend Suzy Ultman! THIS IS THE PART WHERE we go DEEP into Suzy\'s life story as she graciously shares her experiences with having a sibling with terminal cancer, moving through a divorce and finding a self worth fighting for. We also talk about how these formative life experiences translate to new',
        artwork: './assets/podcast-artwork-creative-pep-talk.jpg'
    }
]

export default podcasts