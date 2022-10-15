const app = {
  data() {
    return {
      hours: "",
      minutes: "",
      seconds: "",
      milliseconds: "",
      endDatetime: "",
      ymd: "",
    };
  },
  methods: {
    dateFormat(date, fmt) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString(), // 秒
        "L+": date.getMilliseconds().toString(), // 毫秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },
    getDatetime() {
      var date = new Date();
      this.endDatetime = this.dateFormat(date, "YYYY-mm-dd 22:00止")
      this.ymd = this.dateFormat(date, 'YYYY年mm月dd日')
    },
    startTimer() {
      this.timer = setInterval(() => {
        let now = new Date()
        this.hours = this.dateFormat(now, "HH")
        this.minutes = this.dateFormat(now, "MM")
        this.seconds = this.dateFormat(now, "SS")
        this.milliseconds = this.dateFormat(now, "LLL")
      }, 5);
    },
  },
  mounted() {
    this.getDatetime();
    this.startTimer();
  },
};

Vue.createApp(app).mount("#app");
