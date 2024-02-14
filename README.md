# Misskey Plugin(logseq-plugin-for-misskey)

## 拡張機能の説明

ジャーナルすぐ書き忘れるのにノートはポンポン投稿してる。ならいっそLogseqからノート投稿できるようにしたらジャーナルが埋まるんじゃないかという考えで作られた拡張機能。Logseqに以下の機能を追加します。

1. 現在のカーソルにある文章とメディアをMisskeyへ投稿するコマンド(`Misskeyに現在のブロック(current)を投稿する`)
    ![ノートを投稿](./document/t_投稿(現在のブロックのみ).gif)
2. 現在のカーソルの子ブロックをブロックごとに別ノートとしてMisskeyへ投稿するコマンド(`Misskeyに子ブロック(children)をツリーとして投稿する`)
    ![ノートを子ブロックごと投稿](./document/t_投稿(子ブロックを含む).gif)
3. LogseqからMisskeyで表示可能な投稿を引用状態で埋め込むコマンド。(`Misskeyのノート(note)を埋め込む`)
    ![ノートを埋め込む](./document/embed_note.gif)
5. その他ノート投稿時タグ付け、プロパティ削除など小さな機能

## 設定方法

### 拡張機能(Logseq)側の設定

コマンド使用時、Misskeyとの連携が住んでいない場合ブラウザが起動し[MiAuth](https://misskey-hub.net/ja/docs/for-developers/api/token/miauth/)による権限のリクエストが行われます。
![MiAuth](./document/MiAuth.gif)
許可すると次回以降この手順はいりません

#### これは何をしてるの?

この拡張機能はMisskeyと連携しており、ノート投稿のために"ノートの作成・削除"権限を、ファイルのアップロード機能のために"ドライブの操作"権限を求めます。逆に言うと他人のブロックやフォローなどは権限不足で不可能です。より詳しく知りたい場合は [Misskey APIについて書かれたmisskey-hub.netのページ](https://misskey-hub.net/en/docs/for-developers/api/) や [権限の一覧があるmisskey-hub.netのページ](https://misskey-hub.net/en/docs/for-developers/api/permission/)、[MiAuth(今回使用した認証方法)の説明があるmisskey-hub.netのページ](https://misskey-hub.net/ja/docs/for-developers/api/token/miauth/) などを確認してください。

## そのうちやるかも

トゥートの埋め込み時に絵文字パースが入るせいで時間とかおかしくなるのの修正(show.user.instance.softwareName見ればいいと思うんだけど過去のバージョンどうなってるのか調べるの面倒)  

## その他

連絡はGitHubか[@minimarimo3@misskey.io](https://misskey.io/@minimarimo3@misskey.io)、もしくは[Googleフォーム(匿名アンケート)](https://forms.gle/ZK5mSZSFQKakXoaA6)までお願いします。

~~ジャーナルへの書き込みは増えたけどDOINGの消し忘れは... :otaku_cry:~~
