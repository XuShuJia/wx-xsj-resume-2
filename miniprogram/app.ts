// app.ts
App<IAppOption>({
  globalData: {
    statusBarHeight: 0,
    menuButtonRect: {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    },
  },
  onLaunch() {
    const { theme, statusBarHeight } = wx.getSystemInfoSync();
    const menuButtonRect = wx.getMenuButtonBoundingClientRect();
    this.onThemeChange({ theme: theme || "light" });
    this.globalData.statusBarHeight = statusBarHeight;
    this.globalData.menuButtonRect = menuButtonRect;
  },
  onThemeChange({ theme }) {
    if (theme === "dark") {
      wx.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: "#333333",
      });
    } else {
      wx.setNavigationBarColor({
        frontColor: "#333333",
        backgroundColor: "#ffffff",
      });
    }
  },
});
