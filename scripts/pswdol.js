/// ページ読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    // パスワードオーバーレイのHTMLを定義
    const passwordOverlayHTML = `
        <div id="password-overlay">
            <div class="password-container">
                <h2 class="password-title">転移学習スライド</h2>
                <p>このコンテンツはパスワードで保護されています。</p>
                <input type="password" id="password-input" class="password-input" placeholder="パスワードを入力してください">
                <div class="password-message" id="password-message"></div>
                <button id="password-submit" class="password-button">アクセス</button>
            </div>
        </div>
    `;
    
    // 定義したHTMLを挿入する場所を指定
    document.getElementById('password-container').innerHTML = passwordOverlayHTML;
});