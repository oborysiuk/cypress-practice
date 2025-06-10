const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/'
  },

  env:{
    TEST_USER_EMAIL: 'olga.borysiuk2012+0202@gmail.com',
    TEST_USER_PASSWORD: 'Password',
  }
});
