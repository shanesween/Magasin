module.exports = (grunt) => {
  grunt.initConfig({
    sass: {
      development: {
        options: {},
        files: {
          "public/main.css": "public/main.scss",
        },
      },
      production: {
        options: {},
        files: {
          "public/main.css": "public/main.scss",
        },
      },
    },
    watch: {
      files: ["<%= sass.files %>"],
      tasks: ["sass"],
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["sass"]);
  grunt.registerTask("heroku:production", "sass");
};
