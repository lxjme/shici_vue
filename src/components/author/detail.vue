<template>
  <div>
    <headerPage />
    <div class="content">
      <div class="container">
        <div class="fl left">
          <div class="left-content">
            <div class="col-main">
              <ul class="author-item">
                <li>
                  <div class="cont">
                      <div class="img">
                        <img :src="authorInfo.imgUrl" :alt="authorInfo.name">
                      </div>
                    <div class="name-desc">
                      <a href="#" class="author-name" style="color: #0F0F0F; cursor: text;"><b>{{authorInfo.name}}</b></a>
                      <div class="author-desc" v-html="authorInfo.desc">
                      </div>
                    </div>
                  </div>
                </li>
                  <li v-for="(info, index) in infoData" :key="index">
                    <div class="cont">
                      <div class="name-desc">
                        <div class="author-desc" v-show="!info.show"  @click="toggle($event, true)" :id="'short_' + index" v-html="info.otherShort"></div>
                        <div class="author-desc" :id="'long_' + index" @click="toggle($event, false)" v-show="info.show" v-html="info.other">
                        </div>
                      </div>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerPage />
  </div>
</template>
<script>
import headerPage from '../headerPage'
import footerPage from '../footerPage'
import axios from '../../store/index'
import * as api from '../../store/api'
export default {
  components: {
    headerPage, footerPage
  },
  created () {
    this.getAuthorInfo()
  },
  methods: {
    // 获取作者简介
    getAuthorInfo () {
      let apiUrl = api.getAuthorById
      let apiParam = {
        id: this.id
      }
      axios.promisePost(apiUrl, apiParam).then(res => {
        if (res.status !== 1) {
          return
        }
        let data = {
          name: res.data.info.author_name,
          imgUrl: (res.data.info.img_url !== '') ? (res.data.info.img_url).replace('/Uploads', '/static') : '/static/default.jpg',
          desc: res.data.info.author_desc
        }
        document.title = data.name
        this.authorInfo = data
        // 作者其它生平
        let listData = res.data.list.map(it => {
          return {
            otherShort: it.author_other_short,
            other: it.author_other,
            show: false
          }
        })
        this.infoData = listData
      })
    },
    toggle (event, type) {
      if ((event.srcElement.localName === 'a' || event.srcElement.localName === 'div') && event.srcElement.dataset) {
        let index = event.srcElement.dataset.index
        this.infoData[index].show = type
      }
    }
  },
  data () {
    return {
      authorInfo: {},
      infoData: [],
      id: this.$route.params.id
    }
  }
}
</script>
