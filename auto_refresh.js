//↓メソッドを設定
const auto_refresh_30s = () => {
  setInterval(() => {
      //↓ボタンのIDから押したいボタンを指定
      const button = document.getElementById('')
      
      //↓ボタンをクリック
      button.click()
      //↓〇ミリ秒ごとに繰り返す※1000ミリ秒＝1秒
    },30000
  )
}
//↓auto_refresh_30sメソッドを起動
//2回目以降は↓だけで起動する
auto_refresh_30s()

//↓メソッドの停止
//リフレッシュで案件が表示後はconsoleで↓を実行後、案件をピックアップすること！！エラーが出ます！！
clearInterval(auto_refresh_30s)


