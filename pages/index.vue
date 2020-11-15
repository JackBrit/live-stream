<template>
  <div class="container">
    <div class="container-inner">
      <VideoPlayer v-if="streamUrl" :streamUrl="streamUrl" />
      <script v-if="!hideChat" id="cid0020000266467327920" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 100%;height: 100%;">
        {"handle":"streamscancometrue","arch":"js","styles":{"a":"000000","b":100,"c":"FFFFFF","d":"FFFFFF","k":"000000","l":"000000","m":"000000","n":"FFFFFF","p":"10","q":"000000","r":100,"surl":0,"fwtickm":1}}
      </script>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

import VideoPlayer from '@/components/VideoPlayer'
import fitvids from 'fitvids'

export default {
  components: {
    VideoPlayer
  },
  computed: {
    ...mapState({
      streamUrl: state => state.video.streamURL,
      hideChat: state => state.ui.hideChat
    }),
    ...mapMutations({
      toggleChat: 'ui/TOGGLE_CHAT'
    })
  },
  async asyncData({ store }) {
    const streamUrl = await store.dispatch('video/fetchStream');
  },
  mounted() {
    fitvids()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.container-inner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  width: 80%;
}

#cid0020000266467327920 {
  height: 100%;
}
</style>
