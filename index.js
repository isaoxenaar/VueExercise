let app = new Vue({
  el: "#app",
  data: {
    frameworks: [
      { name: "Vue.js", votes: 0 },
      { name: "React", votes: 0 },
      { name: "Angular", votes: 0 },
    ],
  },
  methods: {
    voteFor: function (f) {
      f.votes += 1;
      this.save();
    },
    addNew: function (event) {
      this.frameworks.push({
        name: event.target.value,
        votes: 0,
      });
      event.target.value = "";
      this.save();
    },
    remove: function (f) {
      this.frameworks = this.frameworks.filter((i) => i != f);
      this.save();
    },
    load: function () {
      let data = localStorage.getItem("saved");
      if (data) {
        this.frameworks = JSON.parse(data);
      }
    },
    save: function () {
      let data = JSON.stringify(this.frameworks);
      localStorage.setItem("saved", data);
    },
  },
  created: function () {
    this.load();
  },
});
