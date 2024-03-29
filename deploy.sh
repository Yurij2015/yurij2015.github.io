#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
git push -f git@github.com:Yurij2015/yurij2015.github.io.git master

#  https://github.com/Yurij2015/yurij2015.github.io
# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:Yurij2015/yurij2015.github.io.git master:gh-pages

# if error "npm run build" in Node.js v18.13.0 - run command - export NODE_OPTIONS=--openssl-legacy-provider


cd -