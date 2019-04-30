<template>
  <div>
    <headerPage />
    <div class="content">
      <div class="container">
        <div class="fl left">
          <div class="left-content">
            <div class="col-main">
              <ul class="author-item">
                <li v-for="(author,index) in authList" :key="index">
                    <div class="cont">
                      <div class="img">
                          <a href="/Author/detail_10"><img :src="author.imgUrl" :alt="author.authorName">
                          </a>
                        </div>
                        <div class="name-desc">
                        <a :href="'/author/detail_' + author.id" class="author-name">{{ author.authorName }}</a>
                        <div class="author-desc" v-html="author.authorDesc"></div>
                      </div>
                    </div>
                </li>
              </ul>
              <div class="page_info">
                <div>
                  <a class="num" href="/author?page=1">首页</a>
                  <a class="num" v-if="page > 1" :href="'/author?page=' + prevPage">上一页</a>
                  <span class="current">{{page}}</span>
                  <a class="next" v-if="page < lastPage2" :href="'/author?page=' + nextPage2">下一页</a>
                  <a class="end" :href="'/author?page=' + lastPage2">末页</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerPage />
  </div>
</template>
<script>
import axios from '../../store/index'
import * as api from '../../store/api'
import headerPage from '../headerPage.vue'
import footerPage from '../footerPage.vue'
export default {
  components: {
    footerPage, headerPage
  },
  created () {
    this.getAuthorData()
    this.prevPage = (this.page <= 1) ? 1 : this.page - 1
    this.nextPage = (this.page >= this.lastPage2) ? this.page : this.page + 1
  },
  computed: {
    lastPage2: function () {
      return this.lastPage
    },
    nextPage2: function () {
      return (this.page >= this.lastPage2) ? this.page : this.page + 1
    }
  },
  methods: {
    getPage (val) {
      if (val === 'pre') {
        // 上一页
        if (this.page === 1) {
          return 1
        }
      }
    },
    getAuthorData () {
      let _this = this
      let apiUrl = api.listAuthor
      let apiParam = {
        page: this.page
      }
      axios.promisePost(apiUrl, apiParam).then((res) => {
        console.log(res)
        if (res.status !== 1) {
          return
        }
        let data = res.data.list.map(it => {
          return {
            imgUrl: (it.img_url !== '') ? (it.img_url).replace('/Uploads', '/static') : '/static/default.jpg',
            authorName: it.author_name,
            authorDesc: it.author_desc,
            id: it.id
          }
        })
        console.log(data)
        _this.authList = data
        _this.lastPage = Math.ceil(res.data.total / 10)
      })
      // console.log(api.userUrl)
    }
  },
  data () {
    return {
      page: this.$route.query.page ? parseInt(this.$route.query.page) : 1,
      prevPage: 1,
      nextPage: this.page + 1,
      lastPage: 1,
      authList: []
    }
  }
}
</script>
