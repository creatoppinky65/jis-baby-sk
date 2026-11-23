// 「一秒隱藏」遮罩：上次離開時遮罩是開著的，就在網站程式載入前先把網頁藏起來，重新整理時才不會先露出內容一下。
// 由 src/index.html 的 <head> 用一般 <script src> 載入（不加 async／defer，才會在畫面出來前執行）。
// 放成外部檔而不是寫在 index.html 裡，是為了內容安全政策（CSP）不用允許內嵌程式（階段 13 A7-02、A7-10）。
// localStorage 的名稱 maskVisible、class 名稱 mask-on 要跟 src/app/shared/state/mask/mask.state.ts 一樣，改了要一起改。
// 讀不到 localStorage（例如瀏覽器封鎖）時什麼都不做，網頁照常顯示。
try {
  if (localStorage.getItem('maskVisible') === '1') {
    document.documentElement.classList.add('mask-on');
  }
} catch (e) {
  // 讀取失敗就不遮，不影響網站其他功能
}
