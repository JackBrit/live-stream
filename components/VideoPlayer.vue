<template>
    <div>
        <video id="live-video" class="video-js vjs-stream" controls></video>
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import 'dashjs'
import 'videojs-contrib-dash'

export default {
    mounted() {
        const options = {
            controlBar: {
                volumePanel: {
                    inline: false,
                    vertical: true
                }
            }
        }
        const player = videojs('live-video', options)
        player.src({ type: 'application/dash+xml', src: this.streamUrl });
        player.ready( () => {
            player.play()
        })
    },
    props: {
        streamUrl: {
            type: String
        }
    }
}
</script>

<style>
/* Change the color of various "bars". */
.vjs-stream .vjs-volume-level,
.vjs-stream .vjs-play-progress,
.vjs-stream .vjs-slider-bar {
  background: #ffffff;
}

.vjs-stream .vjs-control-bar,
.vjs-stream .vjs-volume-vertical {
  background-color: black !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
}
</style>