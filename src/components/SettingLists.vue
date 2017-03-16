<template>
  <div id="settings">

    <h2 class="h4">Setting</h2>
    <div class="form-group row">
      <label for="spring-security-version" class="col-5 col-form-label">Spring Security Version</label>
      <div class="col-7">
        <select class="form-control form-control-sm" id="spring-security-version">
          <option value="4.x.x">4.x.x</option>
        </select>
      </div>
      <label for="config-template" class="col-5 col-form-label">Template</label>
      <div class="col-7">
        <select class="form-control form-control-sm" id="config-template">
          <option value="terasoluna-gfw-web-(multi-)blank">terasoluna-gfw-web-(multi-)blank</option>
        </select>
      </div>
    </div>

    <h3 class="h5">Resources</h3>
    <table class="table table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Directory or File</th>
        <th scope="col">Security</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(entry, index) in setting.resources.patterns">
        <td>{{ index + 1}}</td>
        <td v-for="key in setting.resources.column">
          <input v-model="entry[key]" :value="entry[key]" type="text" class="form-control form-control-sm">
        </td>
        <td>
          <button v-on:click="setting.resources.patterns.splice(index, 1)" type="button" class="delbtn btn btn-danger btn-sm float-right">del</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="clearfix">
      <button v-on:click="$emit('add-new-resource');" type="button" class="addbtn btn btn-outline-primary btn-sm float-right">add</button>
    </div>

    <h3 class="h5">Login</h3>
    <div class="form-group row">
      <label for="login-page" class="col-5 col-form-label">Login Page</label>
      <div class="col-7">
        <input v-model="setting.formLogin.loginPage" :value="setting.formLogin.loginPage" class="form-control form-control-sm" type="text" id="login-page">
      </div>
      <label for="login-failure" class="col-5 col-form-label">Login Failure Url</label>
      <div class="col-7">
        <input v-model="setting.formLogin.failureUrl" :value="setting.formLogin.failureUrl" class="form-control form-control-sm" type="text" id="login-failure">
      </div>
    </div>

    <h3 class="h5">Logout</h3>
    <div class="form-group row">
      <label for="logout-success-url" class="col-5 col-form-label">Logout Success Url</label>
      <div class="col-7">
        <input v-model="setting.logout.successUrl" :value="setting.logout.successUrl" class="form-control form-control-sm" type="text" id="logout-success-url">
      </div>
      <label for="delete-cookies" class="col-5 col-form-label">Delete Cookies</label>
      <div class="col-7">
        <input v-model="setting.logout.deleteCookies" :value="setting.logout.deleteCookies" class="form-control form-control-sm" type="text" id="delete-cookies">
      </div>
    </div>

    <h3 class="h5">Access Policies</h3>
    <table class="table table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Directory or File</th>
        <th scope="col">Permissions</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(entry, index) in setting.interceptUrls.patterns">
        <td>{{ index + 1 }}</td>
        <td v-for="key in setting.interceptUrls.column">
          <input v-model="entry[key]" :value="entry[key]" type="text" class="form-control form-control-sm">
        </td>
        <td>
          <button v-on:click="setting.interceptUrls.patterns.splice(index, 1)" type="button" class="delbtn btn btn-danger btn-sm float-right">del</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="clearfix">
      <button v-on:click="$emit('add-new-policy');" type="button" class="addbtn btn btn-outline-primary btn-sm float-right">add</button>
    </div>

    <h3 class="h5">Exception Handler</h3>
    <div class="form-group row">
      <label for="exception-url" class="col-5 col-form-label">Exception URL</label>
      <div class="col-7">
        <input class="form-control" type="text" placeholder="/error" id="exception-url">
      </div>
    </div>

    <h3 class="h5">CSRF Protection</h3>
    <div class="form-check">
      <div class="alert" v-bind:class="{'alert-danger': !setting.enableCSRFProtection}">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="setting.enableCSRFProtection" />
          <span v-if="!setting.enableCSRFProtection"><strong>Enable CSRF protection</strong>&ensp;</strong>
          <span class="badge badge-pill badge-danger">Danger!</span></span>
          <span v-else>Enable CSRF protection&ensp;<span class="badge badge-pill badge-success">Good!</span></span>
        </label>
      </div>
    </div>

    <h3 class="h5">Misc</h3>
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" v-model="setting.putUserIdIntoMDC" />
        Put UserID into MDC
      </label>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'setting-lists',
    props: ['setting'],
    data() {
      return {
      };
    },
  };
</script>

<style>
.table > tbody > tr > td {
  vertical-align: middle;
}
.table-sm {
  line-height: .8rem;
}
.form-control {
  font-size: .9rem;
  font-family: Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
.delbtn {
  margin-left: -.8rem;
  margin-right: -.2rem;
}
.addbtn {
  margin-top: -.8rem;
}
</style>
