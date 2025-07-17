<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>ToDoアプリ</title>
    @vite(['resources/js/main.tsx'])
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>