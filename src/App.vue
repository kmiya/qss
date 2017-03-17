<template>
  <div id="app">
    <div class="row">
      <div class="col-md-6">
        <setting-lists
          :setting="settingTree"
          v-on:add-new-resource="addNewResource"
          v-on:focus-on="focusOn"
          v-on:focus-out="focusOut"
          v-on:add-new-policy="addNewPolicy">
        </setting-lists>
      </div>
      <div class="col-md-6">
        <preview
          :setting="settingTree"
          :focuses="focuses">
        </preview>
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
            'pattern', 'access',
          ],
          patterns: [
            { pattern: '/login.jsp', access: 'permitAll' },
            { pattern: '/**', access: 'isAuthenticated()' },
          ],
        },
        enableCSRFProtection: true,
        putUserIdIntoMDC: true,
      },
      focuses: {
        resources: false,
        login: false,
        logout: false,
        policies: false,
        csrf: false,
        misc: false,
      },
    };
  },
  methods: {
    focusOn(target) {
      this.focuses[target] = true;
    },
    focusOut(target) {
      this.focuses[target] = false;
    },
    addNewResource() {
      this.settingTree.resources.patterns.push({ pattern: '', security: '' });
    },
    addNewPolicy() {
      this.settingTree.interceptUrls.patterns.push({ pattern: '', access: '' });
    },
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
