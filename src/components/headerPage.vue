<template>
    <div class="nav">
        <div class="middle">
            <a class="logo" href="/"><img src="../assets/logo.png"></a>
            <ul>
                <!-- <li><a :class="{ 'crt-menu': isIndex }" style="border-left: none;"  href="/" title="推荐">推荐</a></li> -->
                <li><a :class="{ 'crt-menu': isAuthor }" style="border-left: none;"  href="/author" title="诗人">诗人</a></li>
                <!-- <li><a :class="{ 'crt-menu': isOpus }"  href="/Opus" title="古诗词">古诗词</a></li> -->
                <!-- <li id="menu_toggle" class="menu-toggle"><div><span></span><span></span><span></span></div></li> -->
                <!-- <li><a :class="{ 'crt-menu': isGuwen }"  href="/Guwen" title="古文">古文</a></li> -->
                <!-- <li><a :class="{ 'crt-menu': isShuji }"  style="border-right: none;" href="/Shuji" title="书籍">书籍</a></li> -->
            </ul>
            <dl id="menu_box">
                <dd><a class="crt-menu" style="border-left: none;"  href="/" title="推荐">推荐</a></dd>
                <dd><a  href="/Author" title="诗人">诗人</a></dd>
                <dd><a  href="/Opus" title="古诗词">古诗词</a></dd>
                <dd><a  href="/Guwen" title="古文">古文</a></dd>
                <dd><a  style="border-right: none;" href="/Shuji" title="书籍">书籍</a></dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
  created () {
    switch (this.$route.name) {
      case 'author':
      case 'author_detail':
        this.isAuthor = true
        break
      case 'index':
        this.isIndex = true
        break
    }
    console.log(this.$route)
  },
  mouted () {
    console.log(44)
  },
  data () {
    return {
      isAuthor: false,
      isOpus: false,
      isGuwen: false,
      isShuji: false,
      isIndex: false
    }
  }

}
</script>
