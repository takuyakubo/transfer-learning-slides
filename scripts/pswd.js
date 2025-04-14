
// パスワード保護機能
const correctPassword = "transfer2025"; // パスワードはここで設定

document.addEventListener('DOMContentLoaded', function() {
    const passwordOverlay = document.getElementById('password-overlay');
    const contentContainer = document.getElementById('content-container');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordMessage = document.getElementById('password-message');
    
    // ローカルストレージからログイン状態を確認
    const isAuthenticated = localStorage.getItem('transferLearningAuth');
    
    if (isAuthenticated) {
        // 認証済みの場合はコンテンツを表示
        passwordOverlay.style.display = 'none';
        contentContainer.style.display = 'block';
    }
    
    // パスワード入力欄でEnterキーを押した場合も送信
    passwordInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            verifyPassword();
        }
    });
    
    // 送信ボタンをクリック
    passwordSubmit.addEventListener('click', verifyPassword);
    
    function verifyPassword() {
        const inputPassword = passwordInput.value;
        
        if (inputPassword === correctPassword) {
            // パスワードが正しい場合
            localStorage.setItem('transferLearningAuth', 'true');
            passwordOverlay.style.display = 'none';
            contentContainer.style.display = 'block';
        } else {
            // パスワードが間違っている場合
            passwordMessage.textContent = 'パスワードが正しくありません。もう一度お試しください。';
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
});