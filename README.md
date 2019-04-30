# vue_project01

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 部署遇到的问题
###1.首页可以访问，其它页面404
    解决办法：（1）apache服务器，需要在根目录创建.htaccess，然后写入一下代码：
                    <IfModule mod_rewrite.c>
                        RewriteEngine On
                        RewriteBase /
                        RewriteRule ^index\.html$ - [L]
                          RewriteCond %{REQUEST_FILENAME} !-f
                          RewriteCond %{REQUEST_FILENAME} !-d
                          RewriteRule . /index.html [L]
                    </IfModule>
            （2）nginx,需要修改nginx.conf,加入下面“*”号代码
                    location / {
                        root html;
                        index index.html index.htm;
                        *try_files $uri $uri/ @router;*
                    }
                    *location @router {
                        rewrite ^.*$ /index.html last;
                    }*