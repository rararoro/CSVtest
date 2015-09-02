            var $id = function(id) { return document.getElementById(id); }
            var $class = function(c, n) { n=n||0; return document.getElementsByClassName(c)[n]; }
            var $classes = function(c)  { return document.getElementsByClassName(c); }
            
            window.onload = function()
            {
                // read ボタンを押した際に実行する関数を登録
                $id("ta").addEventListener("dragover", onCancel, false);
                $id("ta").addEventListener("dragenter", onCancel, false);
                $id("ta").addEventListener("drop", onDropFile, false);
            };
            
            // ファイル変更時イベント
            var onChangeFile = function(e)
            {
                // File オブジェクトを取得
                var file = e.target.files[0];
                // ファイル読み込み
                readFile(file);
            };
            
            // ファイルドロップ時イベント
            var onDropFile = function(e)
            {
                e.preventDefault();
                // File オブジェクトを取得
                var file = e.dataTransfer.files[0];
                // ファイル読み込み
                readFile(file);
            };
            
            // デフォル処理をキャンセル
            var onCancel = function(e)
            {
                if(e.preventDefault) { e.preventDefault(); }
                return false;
            };
            
            // ファイル読み込み
            var readFile = function(file)
            {
                // ファイルの情報を表示
                $id("file-name").innerHTML = file.name; // ファイル名
                $id("file-size").innerHTML = file.size; // ファイルサイズ
                $id("file-type").innerHTML = file.type; // ファイルタイプ
                
                // 中身を読み込む
                var reader = new FileReader();                  // ファイルリーダー生成
                // ロード関数登録
                reader.onload = function(e) {
                    // 読み込んだファイルの中身をテキストエリアにセット
                    $id("ta").value = e.target.result;
                };
                
                reader.readAsText(file);
   
            };