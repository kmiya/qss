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
        interceptUrls: {
          column: [
            'no', 'pattern', 'access',
          ],
          patterns: [
            { no: 1, pattern: '/secure/**', access: 'hasAnyRoles(\'ROLE_ADMIN\',\'ROLE_USER\'' },
            { no: 2, pattern: '/**', access: 'hasAnyRole(\'ROLE_DEVELOPER\',\'ROLE_USER\')' },
          ],
        },
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
  margin-top: 60px;
}
</style>
