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
    },
  },
});
