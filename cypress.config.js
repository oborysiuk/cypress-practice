const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/'
  },

  env:{
    TEST_USER_EMAIL: 'olga.borysiuk2012+0101@gmail.com',
    TEST_USER_PASSWORD: 'Password1234',
  }
});
