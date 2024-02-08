function main() {
    function settingUI() {
        /* https://logseq.github.io/plugins/types/SettingSchemaDesc.html */
        // TODO: 自動生成。アカウント増やしてって言われたら書き直す
        logseq.useSettingsSchema([
            {
                key: "",
                title: "LogseqMisskeyPluginの設定",
                type: "heading",
                description: "LogseqMisskeyPluginの設定を行います。",
                default: "",
            },
            {
                key: "IsRemoveTimestamp",
                title: "HH:MM表記の時間を削除するかどうか",
                description: "チェックマークが入っている場合、文頭 or タスクの次にある時間(HH:MM)が投稿ノートから削除されます。(Logseqに書いてある文章に影響はありません。)",
                type: "boolean",
                default: false
            },
            {
                key: "IsRemoveTask",
                title: "DONEなどのタスクを削除するかどうか",
                description: "チェックマークが入っている場合、文頭にあるタスク(`CANCELED TODO NOW LATER DONE DOING IN-PROGRESS WAITING CANCELLED WAIT`)が投稿ノートから削除されます。(Logseqに書いてある文章に影響はありません。)",
                type: "boolean",
                default: false
            },
            {
                key: "IsRemoveProperty",
                title: "プロパティを削除するかどうか",
                description: "チェックマークが入っている場合、`example:: value`のように書かれているプロパティを削除します。これは文章に色などをつけている場合などいくつかの状況において自動で追記されるものでありLogseqのアプリから確認することはできません。(Logseqに書いてある文章に影響はありません。)",
                type: "boolean",
                default: true
            },
            {
                key: "IsRemoveLogbook",
                title: "Logbookを削除するかどうか",
                description: "チェックマークが入っている場合、Logbookを削除します。これはNOWなどのタスクを書いたときに、経過時間をLogseqが追跡するために自動で追記されるものでありLogseqのアプリからその内容を直接確認することはできません。例えばNOWでの時間計測時に使用されるLogbookは次のような形式をとります。```\n:LOGBOOK:\n CLOCK: [2024-01-13 Sat 03:50:30]--[2024-01-13 Sat 03:50:36] =>  00:00:06\n		  CLOCK: [2024-01-13 Sat 03:50:39]--[2024-01-13 Sat 03:50:42] =>  00:00:03\n		  :END:\n```(Logseqに書いてある文章に影響はありません。)",
                type: "boolean",
                default: true
            },
            {
                key: "uploadExtensionAllowList",
                title: "アップロードするファイルの拡張子",
                description: "アップロードするファイルの拡張子を指定します。カンマ区切りで複数指定できます。",
                type: "string",
                default: "png,jpg,jpeg,gif,mp4,webm,mp3,wav,mov"
            },
            {
                key: "",
                title: "Misskeyの設定",
                type: "heading",
                description: "Misskeyの設定を行います。Misskeyについては[MisskeyのGitHubリポジトリ](https://github.com/misskey-dev/misskey)をご覧ください。",
                default: "",
            },
            {
                key: "CurrentMisskeyProfile",
                type: "enum",
                title: "現在使用しているMisskeyアクセストークン",
                description: "使用したいアカウントを選択してください。",
                enumPicker: "select",
                enumChoices: ["1つ目のアカウント", "2つ目のアカウント", "3つ目のアカウント"],
                default: "1つ目のアカウント"
            },
            {
                key: "",
                title: "MisskeyProfile1(必須)",
                description: "Misskeyに登録しているアカウントの1つ目の設定です",
                type: "heading",
            },
            {
                key: "MisskeyAccountMemo1",
                title: "アカウント1についてのメモ",
                description: "プログラムから使用しません。メモを残せます。アカウント区別用のメモ欄として用意してあります。",
                type: "string",
                default: ""
            },
            {
                key: "MisskeyAccessToken1",
                type: "string",
                title: "Misskeyアクセストークン",
                description: "1つ目のアカウントで発行したMisskeyアクセストークンを入力してください。Misskeyアクセストークンの取得方法は [README](https://github.com/minimarimo3/logseq-plugin-for-misskey) をご覧ください。",
                default: ""
            },
            {
                key: "MisskeyHostedDomain1",
                type: "string",
                title: "Misskeyがホストされているドメイン",
                description: "Misskey がホストされているドメインを入力してください。[Acct](https://misskey-hub.net/en/docs/for-users/resources/glossary/#acct)の後ろに表示されている文字のことです。[@minimarimo3@misskey.io](https://misskey.io/@minimarimo3)ならmisskey.ioになります。",
                default: ""
            },
            {
                key: "MisskeyNotePrevText1",
                type: "string",
                title: "Misskeyノートの前につける文字列",
                description: "Misskeyノートの前につける文字列です。改行は\\nで表現してください",
                default: ""
            },
            {
                key: "MisskeyNotePostText1",
                type: "string",
                title: "Misskeyノートの後につける文字列",
                description: "Misskeyノートの後につける文字列です。改行は\\nで表現してください",
                default: ""
            },
            {
                key: "MisskeyNoteVisibility1",
                type: "enum",
                title: "Misskeyノートの公開範囲",
                description: "Misskeyノートの公開範囲を選択してください。",
                enumPicker: "select",
                enumChoices: ["public", "home", "followers"],
                default: "public"
            }, {
                key: "",
                title: "MisskeyProfile2(任意)",
                description: "Misskeyに登録しているアカウントの2つ目の設定です",
                type: "heading",
            },
            {
                key: "MisskeyAccountMemo2",
                title: "アカウント2についてのメモ",
                description: "プログラムから使用しません。メモを残せます。アカウント区別用のメモ欄として用意してあります。",
                type: "string",
                default: ""
            },
            {
                key: "MisskeyAccessToken2",
                type: "string",
                title: "Misskeyアクセストークン",
                description: "2つ目のアカウントで発行したMisskeyアクセストークンを入力してください。Misskeyアクセストークンの取得方法は [README](https://github.com/minimarimo3/logseq-plugin-for-misskey) をご覧ください。",
                default: ""
            },
            {
                key: "MisskeyHostedDomain2",
                type: "string",
                title: "Misskeyがホストされているドメイン",
                description: "Misskey がホストされているドメインを入力してください。[Acct](https://misskey-hub.net/en/docs/for-users/resources/glossary/#acct)の後ろに表示されている文字のことです。[@minimarimo3@misskey.io](https://misskey.io/@minimarimo3)ならmisskey.ioになります。",
                default: ""
            },
            {
                key: "MisskeyNotePrevText2",
                type: "string",
                title: "Misskeyノートの前につける文字列",
                description: "Misskeyノートの前につける文字列です。改行は\\nで表現してください",
                default: ""
            },
            {
                key: "MisskeyNotePostText2",
                type: "string",
                title: "Misskeyノートの後につける文字列",
                description: "Misskeyノートの後につける文字列です。改行は\\nで表現してください",
                default: ""
            },
            {
                key: "MisskeyNoteVisibility2",
                type: "enum",
                title: "Misskeyノートの公開範囲",
                description: "Misskeyノートの公開範囲を選択してください。",
                enumPicker: "select",
                enumChoices: ["public", "home", "followers"],
                default: "public"
            }, {
                key: "",
                title: "MisskeyProfile3(任意)",
                description: "Misskeyに登録しているアカウントの1つ目の設定です",
                type: "heading",
            },
            {
                key: "MisskeyAccountMemo3",
                title: "アカウント3についてのメモ",
                description: "プログラムから使用しません。メモを残せます。アカウント区別用のメモ欄として用意してあります。",
                type: "string",
                default: ""
            },
            {
                key: "MisskeyAccessToken3",
                type: "string",
                title: "Misskeyアクセストークン",
                description: "3つ目のアカウントで発行したMisskeyアクセストークンを入力してください。Misskeyアクセストークンの取得方法は [README](https://github.com/minimarimo3/logseq-plugin-for-misskey) をご覧ください。",
                default: ""
            },
            {
                key: "MisskeyHostedDomain3",
                type: "string",
                title: "Misskeyがホストされているドメイン",
                description: "Misskey がホストされているドメインを入力してください。[Acct](https://misskey-hub.net/en/docs/for-users/resources/glossary/#acct)の後ろに表示されている文字のことです。[@minimarimo3@misskey.io](https://misskey.io/@minimarimo3)ならmisskey.ioになります。",
                default: ""
            },
            {
                key: "MisskeyNotePrevText3",
                type: "string",
                title: "Misskeyノートの前につける文字列",
                description: "Misskeyノートの前につける文字列です。改行は\\nで表現してください",
                default: ""
            },
            {
                key: "MisskeyNotePostText3",
                type: "string",
                title: "Misskeyノートの後につける文字列",
                description: "Misskeyノートの後につける文字列です。改行は\\nで表現してください",
                default: ""
            },
            {
                key: "MisskeyNoteVisibility3",
                type: "enum",
                title: "Misskeyノートの公開範囲",
                description: "Misskeyノートの公開範囲を選択してください。",
                enumPicker: "select",
                enumChoices: ["public", "home", "followers"],
            },
        ]);
    }


    async function uploadMediaFromMarkdown(markdownText, misskeyAccessToken, misskeyHostedDomain, uploadExtensionAllowList) {
        // ![alt](path)をすべて検索する
        const matches = markdownText.matchAll(/!\[(.*?)]\((.*?)\)/g);

        let imageIDList = [];

        await Promise.all(Array.from(matches).map(async match => {
            if (match[2].startsWith("data:") || match[2].startsWith("http://") || match[2].startsWith("https://")) {
                return;
            }

            try {
                const filePath = `file://${(await logseq.App.getCurrentGraph()).path}/${match[2].replace(/\.\.\//, "")}`;
                const fileExtension = filePath.split('.').pop().toLowerCase();

                if (!uploadExtensionAllowList.includes(fileExtension)) {
                    // FIXME: awaitする必要ないだろこれ
                    await logseq.UI.showMsg(`投稿が許可されてない拡張子だったのでスキップしました。(このプラグインの設定から投稿可能な拡張子は変更できます): ${fileExtension}`, "error", { timeout: 10000 })
                    return;
                }
                const response = await fetch(filePath);
                const blob = await response.blob();

                await logseq.UI.showMsg("アップロード中...", "success", { timeout: 3000 });

                let formData = new FormData();
                formData.append('i', misskeyAccessToken);
                formData.append('file', blob, match[1]);

                const uploadResponse = await fetch(`https://${misskeyHostedDomain}/api/drive/files/create`, {
                    method: 'POST',
                    body: formData
                });

                const data = await uploadResponse.json();
                let message = data.error ? ("Error:" + data.error.message) : ("アップロード完了!");
                logseq.UI.showMsg(message, data.error ? "error" : "success", { timeout: 3000 });

                if (!data.error) {
                    imageIDList.push(data.id);
                }
            } catch (error) {
                console.error('Error:', error);
                logseq.UI.showMsg('Error:' + error.toString(), "error", { timeout: 3000 });
            }
        }));

        return imageIDList;
    }


    async function postNote(accessToken, misskeyHostedDomain, note, noteVisibility = "public", fileIds = []) {
        // repliesNoteとほぼ同じ処理だが、APIのURLや投げるJSONが少し違うので別にしている
        if (misskeyHostedDomain === "" || accessToken === "") {
            logseq.UI.showMsg("Misskeyの設定がされていません。設定->プラグイン設定->logseq_misskey_pluginからMisskeyProfile1を埋めてください。", "error", { timeout: 10000 });
            return;
        }
        let bodyObject = {
            i: accessToken,
            text: note,
            visibility: noteVisibility
        };
        if (fileIds.length > 0) {
            bodyObject.fileIds = fileIds;
        }

        // FIXME: https
        return await fetch(`http://${misskeyHostedDomain}/api/notes/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(bodyObject)
        })
            .then(response => response.json())
            .then(data => {
                let message = data.error ? ("Error:" + data.error.message) : ("ノートを送信しました。")
                logseq.UI.showMsg(message, data.error ? "error" : "success", { timeout: 3000 });

                return data;
            }).catch((error) => {
                console.error('Error:', error);
                logseq.UI.showMsg('Error:' + error.toString(), { timeout: 3000 });
            });
    }

    async function repliesNote(accessToken, misskeyHostedDomain, note, replieNoteId, noteVisibility = "public", fileIds = []) {
        // postNoteとほぼ同じ処理だが、APIのURLや投げるJSONが少し違うので別にしている
        if (misskeyHostedDomain === "" || accessToken === "") {
            logseq.UI.showMsg("Misskeyの設定がされていません。設定->プラグイン設定->logseq_misskey_pluginからMisskeyProfile1を埋めてください。", "error", { timeout: 10000 });
            return;
        }
        let bodyObject = {
            i: accessToken,
            text: note,
            visibility: noteVisibility,
            replyId: replieNoteId
        };
        if (fileIds.length > 0) {
            bodyObject.fileIds = fileIds;
        }

        // FIXME: https
        return await fetch(`http://${misskeyHostedDomain}/api/notes/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(bodyObject)
        })
            .then(response => response.json())
            .then(data => {
                let message = data.error ? ("Error:" + data.error.message) : ("ノートを送信しました。")
                logseq.UI.showMsg(message, data.error ? "error" : "success", { timeout: 3000 });

                return data;
            }).catch((error) => {
                console.error('Error:', error);
                logseq.UI.showMsg('Error:' + error.toString(), { timeout: 3000 });
            });
    }


    async function getBlockContentFromBlocks(blocks) {
        let contents = [];

        // ブロックの順番を保持しながら再帰的に探索
        async function searchBlocks(a_blocks) {
            for (const blockUUID of a_blocks) {
                const block = await logseq.Editor.getBlock(blockUUID);
                contents.push(block);

                if (block?.children && block.children.length > 0) {
                    // childrenが存在する場合は、そのブロックIDの配列を渡す
                    await searchBlocks(block.children.map(([_, uuid]) => uuid));
                }
            }
        }

        await searchBlocks(blocks.map(([_, uuid]) => uuid)); // トップレベルのブロックIDの配列を渡す
        return contents;
    }



    function normalizeText(text, isRemoveTimestamp, isRemoveTask, isRemoveProperty) {
        const taskKeywords = [
            "CANCELED", "TODO", "NOW", "LATER", "DONE", "DOING", "IN-PROGRESS",
            "WAITING", "CANCELLED", "WAIT"
        ];
        // 数字2桁:数字2桁を検索する
        const timestampRegex = /\b\d{2}:\d{2}\b/;
        // プロパティ(hoge:: fuga形式、色付けやidの管理時に作成されている)を検索する
        const propertyRegex = /^.+:: .+/;
        // httpから始まらない画像のURLを検索する
        const imageRegex = /!\[.*?]\((?!http)(.*?)\)/g;
        // LOGBOOKを削除します。これはNOWなどで時間経過を記録するために使用されています。
        text = text.replaceAll(/:LOGBOOK:([\s\S]*?):END:/g, '')

        return text.split('\n').map(line => {
            line = line.replace(imageRegex, '');
            // {{コマンド テキスト}} を テキスト に変換します。これはYouTubeやTwitterの埋め込みを行うために使用されています。
            line = line.replace(/\{\{.*?\s(.*?)}}/g, '$1')

            if (isRemoveProperty && propertyRegex.test(line)) {
                return '';
            }

            const taskKeyword = taskKeywords.find(keyword => line.startsWith(keyword));
            if (isRemoveTask && taskKeyword) {
                line = line.substring(taskKeyword.length).trim();
            }

            if (isRemoveTimestamp && timestampRegex.test(line)) {
                line = line.replace(timestampRegex, '').trim();
            }

            return line;
        }).filter(line => line !== '').join('\n');
    }

    // FIXME: ↓画像のサイズを文字と同じ大きさにしたいので
    //   こうやってfontSizeを取得してるるけど、多分もっといい方法がある
    async function getCurrentImageSize(imageUrl) {
        // 一時的なtextarea要素を作成する
        let tempTextarea = document.createElement("textarea");

        // 一時的なtextareaをbodyに追加する
        document.body.appendChild(tempTextarea);

        // 計算されたスタイルを取得して、フォントサイズを調べる
        const fontSize = window.getComputedStyle(tempTextarea).fontSize;

        // 一時的なtextareaを破棄する
        document.body.removeChild(tempTextarea);

        const image = await new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`画像の読み込みに失敗しました: ${imageUrl}`));
            img.src = imageUrl;
        });
        let aspectRatio = image.width / image.height;
        let newHeight = parseFloat(fontSize) * 2;
        let newWidth = newHeight * aspectRatio;

        return [newWidth, newHeight]
    }



    async function parseMisskeyEmoji(text, emojiHostedDomain, emojis) {
        const emojiRegex = /:(\w+):/g;
        let promises = [];

        let match;
        while ((match = emojiRegex.exec(text)) !== null) {
            const emojiName = match[1];
            const url = `https://${emojiHostedDomain}/api/emoji?name=${emojiName}`;
            const promise = (async () => {
                try {
                    let imageUrl = "";
                    if (Object.keys(emojis).includes(emojiName)) {
                        imageUrl = emojis[emojiName];
                    } else {
                        const response = await fetch(url);
                        if (response.status !== 200) {
                            return text;
                        }
                        const data = await response.json();
                        imageUrl = data.url;
                    }

                    const [newWidth, newHeight] = await getCurrentImageSize(imageUrl);
                    // imgタグは(おそらく)logseqにより制御されており、よくわからん動き方をするのでこんなになってる
                    // @@htmlみたいなのはLogseqのemdeded HTML記法。前後のスペース(\u2000)忘れないでね。
                    text = text.replace(`:${emojiName}:`,
                        `\u0020@@html: <span class="emoji-${emojiName}"></span><style>.emoji-${emojiName}{background-image:url("${imageUrl}");width:${newWidth}px;height:${newHeight}px;background-size:cover;display:inline-block;}</style>@@\u2000`);
                } catch (error) {
                    console.error('Error fetching emoji:', error);
                }
            })();
            promises.push(promise);
        }

        await Promise.all(promises);
        return text;
    }


    settingUI();
    function getSettings() {
        return {
            isRemoveTimestamp: logseq.settings["IsRemoveTimestamp"],
            isRemoveTask: logseq.settings["IsRemoveTask"],
            isRemoveProperty: logseq.settings["IsRemoveProperty"],
            uploadExtensionAllowList: logseq.settings["uploadExtensionAllowList"].replace(/\s+/g, '').split(","),
            currentMisskeyProfile: logseq.settings["CurrentMisskeyProfile"][0],
            misskeyAccessToken: logseq.settings[`MisskeyAccessToken${logseq.settings["CurrentMisskeyProfile"][0]}`],
            misskeyHostedDomain: logseq.settings[`MisskeyHostedDomain${logseq.settings["CurrentMisskeyProfile"][0]}`],
            misskeyNotePrevText: logseq.settings[`MisskeyNotePrevText${logseq.settings["CurrentMisskeyProfile"][0]}`],
            misskeyNotePostText: logseq.settings[`MisskeyNotePostText${logseq.settings["CurrentMisskeyProfile"][0]}`],
            misskeyNoteVisibility: logseq.settings[`MisskeyNoteVisibility${logseq.settings["CurrentMisskeyProfile"][0]}`]
        };
    }
    logseq.Editor.registerSlashCommand(
        `misskeyに現在のブロック(current)を投稿する`,
        async () => {
            const {
                isRemoveTimestamp,
                isRemoveTask,
                isRemoveProperty,
                uploadExtensionAllowList,
                _currentMisskeyProfile,
                misskeyAccessToken,
                misskeyHostedDomain,
                misskeyNotePrevText,
                misskeyNotePostText,
                misskeyNoteVisibility
            } = getSettings();
            postNote(
                misskeyAccessToken,
                misskeyHostedDomain,
                normalizeText(misskeyNotePrevText.replaceAll("\\n", "\n") + (await logseq.Editor.getCurrentBlock()).content + misskeyNotePostText.replaceAll("\\n", "\n")
                    , isRemoveTimestamp, isRemoveTask, isRemoveProperty),
                misskeyNoteVisibility,
                (await uploadMediaFromMarkdown((await logseq.Editor.getCurrentBlock()).content,
                    misskeyAccessToken, misskeyHostedDomain, uploadExtensionAllowList))
            );
        });

    logseq.Editor.registerSlashCommand(
        `misskeyに子ブロック(children)をツリーとして投稿する`,
        async () => {
            const {
                isRemoveTimestamp,
                isRemoveTask,
                isRemoveProperty,
                uploadExtensionAllowList,
                _currentMisskeyProfile,
                misskeyAccessToken,
                misskeyHostedDomain,
                misskeyNotePrevText,
                misskeyNotePostText,
                misskeyNoteVisibility
            } = getSettings();
            let contents = await getBlockContentFromBlocks((await logseq.Editor.getCurrentBlock()).children);
            contents.map(async content => postNote(
                misskeyAccessToken,
                misskeyHostedDomain,
                normalizeText(misskeyNotePrevText.replaceAll("\\n", "\n") + content.content + misskeyNotePostText.replaceAll("\\n", "\n")
                    , isRemoveTimestamp, isRemoveTask, isRemoveProperty),
                misskeyNoteVisibility,
                (await uploadMediaFromMarkdown(content.content, misskeyAccessToken, misskeyHostedDomain, uploadExtensionAllowList))
            ));
        });

    logseq.Editor.registerSlashCommand(
        `test`,
        async () => {

            const {
                _isRemoveTimestamp, _isRemoveTask, _isRemoveProperty, _uploadExtensionAllowList, _currentMisskeyProfile,
                misskeyAccessToken,
                misskeyHostedDomain,
                _misskeyNotePrevText, _misskeyNotePostText,
                misskeyNoteVisibility
            } = getSettings();
            postNote(misskeyAccessToken, misskeyHostedDomain, "This is a test")

            async function searchBlocks(a_blocks, replieNoteID=undefined) {
                for (const blockUUID of a_blocks) {
                    const block = await logseq.Editor.getBlock(blockUUID);
                    let postedNoteID;
                    if (replieNoteID !== undefined){
                        postedNoteID = (await repliesNote(misskeyAccessToken, misskeyHostedDomain, block.content, replieNoteID, misskeyNoteVisibility))['createdNote'].id;
                    } else {
                        postedNoteID = (await postNote(misskeyAccessToken, misskeyHostedDomain, block.content, misskeyNoteVisibility))['createdNote'].id;
                    }

                    if (block?.children && block.children.length > 0) {
                        // childrenが存在する場合は、そのブロックIDの配列を渡す
                        await searchBlocks(block.children.map(([_, uuid]) => uuid), postedNoteID);
                    }
                }
            }

            const currentBlock = (await logseq.Editor.getCurrentBlock());
            const replieNoteID = (await postNote(misskeyAccessToken, misskeyHostedDomain, currentBlock.content, misskeyNoteVisibility))['createdNote'].id;
            await searchBlocks((await logseq.Editor.getCurrentBlock()).children.map(([_, uuid]) => uuid), replieNoteID); // トップレベルのブロックIDの配列を渡す
        }
    );


    logseq.Editor.registerSlashCommand(
        `misskeyのノート(note)を埋め込む`,
        async () => {
            const {
                _isRemoveTimestamp,
                _isRemoveTask,
                _isRemoveProperty,
                _uploadExtensionAllowList,
                _currentMisskeyProfile,
                misskeyAccessToken,
                misskeyHostedDomain,
                _misskeyNotePrevText,
                _misskeyNotePostText,
                _misskeyNoteVisibility
            } = getSettings();

            const block = await logseq.Editor.getCurrentBlock();
            let newBlockContent = block.content;

            const regex = /https?:\/\/([a-zA-Z0-9.-]+)\/notes\/([a-zA-Z0-9]+)(?=[^a-zA-Z0-9]|$)/g;
            let matches = [];
            let match;

            while ((match = regex.exec(newBlockContent)) !== null) {
                const [, domain, notesPart] = match;
                matches.push([`https://${domain}/notes/${notesPart}`, match[1], match[2]]);
            }

            const fetchPromises = matches.map(async ([originalURL, misskeyDomain, noteId]) => {
                try {
                    let bodyObject = {
                        noteId: noteId
                    };
                    if (misskeyDomain === misskeyHostedDomain) {
                        bodyObject.i = misskeyAccessToken;
                    }
                    const response = await fetch(`https://${misskeyDomain}/api/notes/show`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(bodyObject)
                    });

                    if (response.status !== 200) {
                        // FIXME: awaitする必要ないだろこれ
                        await logseq.UI.showMsg(`データの取得に失敗したノートがあります(${response.status})。ノート: ${originalURL}`, "error", { timeout: 10000 });
                        return;
                    }
                    const data = await response.json();
                    let replaceText = data.text ? data.text + "\n" : "";

                    // 添付ファイルがある場合は対象のURLを取得し、メディアとして埋め込む
                    for (const file of (data.files || [])) {
                        if (file.type.startsWith('image') || file.type.startsWith('video') || file.type.startsWith('audio')) {
                            replaceText += `![${file.name}](${file.url})\n`;
                        } else {
                            replaceText += `[${file.name}](${file.url})\n`
                        }
                    }
                    replaceText += "\n";
                    const [newWidth, newHeight] = await getCurrentImageSize(data.user.avatarUrl);
                    // 初期アイコンはidenticon(一度移動する必要がある)なので、それ以外の場合のみアイコンを埋め込む
                    if (new URL(data.user.avatarUrl).pathname.split('/')[1] !== 'identicon') {
                        replaceText += `\u0020@@html: <span class="avatar-${data.user.username}"></span><style>.avatar-${data.user.username}{background-image:url("${data.user.avatarUrl}");width:${newWidth * 1.3}px;height:${newHeight * 1.3}px;background-size:cover;display:inline-block;}</style>@@\u2000`
                    }
                    // data.user.nameはバージョンによってはnullの場合がある。少なくともv2023.11ではnull。空文字にしとく
                    replaceText += `${data.user.name || ""}[(@${data.user.username})さんの元ノートを開く](${originalURL})`;

                    replaceText = (await parseMisskeyEmoji("\n" + replaceText.split("\n").map(line => `> ${line}`).join("\n") + "\n\n", misskeyDomain, data.emojis || {}));
                    return [originalURL, replaceText];
                } catch (error) {
                    console.error('Error:', error);
                }
            });

            let replaceURLList = (await Promise.all(fetchPromises)).filter(result => result !== undefined);
            const uniqueURLList = [];

            replaceURLList.forEach(item => {
                if (!uniqueURLList.some(array => array[0] === item[0])) {
                    uniqueURLList.push(item);
                }
            });
            uniqueURLList.map(([originalURL, replaceText]) => {
                newBlockContent = newBlockContent.replaceAll(originalURL, replaceText);
            });
            logseq.Editor.updateBlock(block.uuid, newBlockContent);
        }
    );
}



logseq.ready(main).catch(console.error);
