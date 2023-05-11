// components/container/container.ts
Component({
  externalClasses: ["class"],
  options: {
    virtualHost: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    styles: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {},
  /**
   * 生命周期
   */
  lifetimes: {
    attached() {
      const { globalData } = getApp<IAppOption>();
      const { statusBarHeight, menuButtonRect } = globalData;
      const paddingTop =
        menuButtonRect.bottom + (menuButtonRect.top - statusBarHeight);
      this.setData({
        styles: [`padding-top:${paddingTop}px;`].join(""),
      });
    },
  },
});
