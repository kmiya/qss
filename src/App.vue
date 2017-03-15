<template>
  <div id="app">
    <div class="row">
      <div class="col-md-6">
        <setting-lists :setting="settingTree"></setting-lists>
      </div>
      <div class="col-md-6">
        <preview :setting="settingTree"></preview>
      </div>
    </div>
  </div>
</template>

<script>
import SettingLists from './components/SettingLists';
import Preview from './components/Preview';

export default {
  name: 'app',
  data() {
    return {
      settingTree: {
        resources: {
          column: [
            'pattern', 'security',
          ],
          patterns: [
            { pattern: '/resources/**', security: 'none' },
          ],
        },
        formLogin: {
          loginPage: '/login.jsp',
          failureUrl: '/login.jsp?error=true',
        },
        logout: {
          successUrl: '/',
          deleteCookies: 'JSESSIONID',
        },
        interceptUrls: {
          column: [
            'no', 'pattern', 'access',
          ],
          patterns: [
            { no: 1, pattern: '/login.jsp', access: 'permitAll' },
            { no: 2, pattern: '/**', access: 'isAuthenticated()' },
          ],
        },
        enableCSRFProtection: true,
        putUserIdIntoMDC: true,
      },
    };
  },
  components: {
    SettingLists, Preview,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
