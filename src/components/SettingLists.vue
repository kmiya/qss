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
    </div>

    <!-- Resources -->
    <span class="fold float-left">
      <a class="fold text-muted" @click="res.open = !res.open">{{ res.open ? '[-]' : '[+]' }}</a>
    </span>
    <span class="guideline float-right">
      <a href="https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-http-attributes" class="guideline text-muted">[doc]</a>
    </span>
    <h3 class="h5">Resources</h3>
    <div v-show="res.open">
      <table  class="table table-sm">
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
            <input v-model="entry[key]"
              @focus="$emit('focus-on', 'resources');" @blur="$emit('focus-out', 'resources')"
              type="text" class="form-control form-control-sm">
          </td>
          <td class="tddelbtn">
            <button @click="setting.resources.patterns.splice(index, 1)"
              type="button" class="delbtn btn btn-danger btn-sm">
              del
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="clearfix">
        <button @click="$emit('add-new-resource');"
          type="button" class="addbtn btn btn-outline-primary btn-sm float-right">
          add
        </button>
      </div>
    </div>

    <!-- login -->
    <span class="fold float-left">
      <a class="fold text-muted" @click="login.open = !login.open">{{ login.open ? '[-]' : '[+]' }}</a>
    </span>
    <span class="guideline float-right">
      <a href="https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-form-login" class="guideline text-muted">[doc]</a>
    </span>
    <h3 class="h5">Login</h3>
    <div v-show="login.open">
      <div class="form-group row">
      <label for="login-page" class="col-5 col-form-label">Login Page</label>
      <div class="col-7">
        <input v-model="setting.formLogin.loginPage"
          @focus="$emit('focus-on', 'login');" @blur="$emit('focus-out', 'login')"
          class="form-control form-control-sm" type="text" id="login-page">
      </div>
      <label for="login-failure" class="col-5 col-form-label">Login Failure Url</label>
      <div class="col-7">
        <input v-model="setting.formLogin.failureUrl"
          @focus="$emit('focus-on', 'login');" @blur="$emit('focus-out', 'login')"
          class="form-control form-control-sm" type="text" id="login-failure">
      </div>
    </div>
    </div>

    <!-- logout -->
    <span class="fold float-left">
      <a class="fold text-muted" @click="logout.open = !logout.open">{{ logout.open ? '[-]' : '[+]' }}</a>
    </span>
    <span class="guideline float-right">
      <a href="https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-logout" class="guideline text-muted">[doc]</a>
    </span>
    <h3 class="h5">Logout</h3>
    <div v-show="logout.open">
      <div class="form-group row">
      <label for="logout-success-url" class="col-5 col-form-label">Logout Success Url</label>
      <div class="col-7">
        <input v-model="setting.logout.successUrl"
          @focus="$emit('focus-on', 'logout');" @blur="$emit('focus-out', 'logout')"
          class="form-control form-control-sm" type="text" id="logout-success-url">
      </div>
      <label for="delete-cookies" class="col-5 col-form-label">Delete Cookies</label>
      <div class="col-7">
        <input v-model="setting.logout.deleteCookies"
          @focus="$emit('focus-on', 'logout');" @blur="$emit('focus-out', 'logout')"
          class="form-control form-control-sm" type="text" id="delete-cookies">
      </div>
    </div>
    </div>

    <!-- Access Policies -->
    <span class="fold float-left">
      <a class="fold text-muted" @click="policies.open = !policies.open">{{ policies.open ? '[-]' : '[+]' }}</a>
    </span>
    <span class="guideline float-right">
      <a href="https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#nsa-intercept-url" class="guideline text-muted">[doc]</a>
    </span>
    <h3 class="h5">Access Policies</h3>
    <div v-show="policies.open">
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
          <input v-model="entry[key]"
            @focus="$emit('focus-on', 'policies');" @blur="$emit('focus-out', 'policies')"
            type="text" class="form-control form-control-sm">
        </td>
        <td class="tddelbtn">
          <button @click="setting.interceptUrls.patterns.splice(index, 1)"
            type="button" class="delbtn btn btn-danger btn-sm float-right">
            del
          </button>
        </td>
      </tr>
      </tbody>
    </table>
      <div class="clearfix">
        <button @click="$emit('add-new-policy');" type="button" class="addbtn btn btn-outline-primary btn-sm float-right">add</button>
      </div>
    </div>

    <!-- Exception -->
    <!-- <span class="guideline float-right">
      <a href="#" class="guideline text-muted">[doc]</a>
    </span>
    <h3 class="h5">Exception Handler</h3>
    <div class="form-group row">
      <label for="exception-url" class="col-5 col-form-label">Exception URL</label>
      <div class="col-7">
        <input class="form-control" type="text" placeholder="/error" id="exception-url">
      </div>
    </div> -->

    <!-- CSRF -->
    <span class="fold float-left">
      <a class="fold text-muted" @click="csrf.open = !csrf.open">{{ csrf.open ? '[-]' : '[+]' }}</a>
    </span>
    <span class="guideline float-right">
      <a href="https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#csrf" class="guideline text-muted">[doc]</a>
    </span>
    <h3 class="h5">CSRF Protection</h3>
    <div v-show="csrf.open">
      <div class="form-check">
      <div class="alert" v-bind:class="{'alert-danger': !setting.enableCSRFProtection}">
        <label class="form-check-label">
          <input v-model="setting.enableCSRFProtection"
            @focus="$emit('focus-on', 'csrf');" @blur="$emit('focus-out', 'csrf')"
          class="form-check-input" type="checkbox" />
          <span v-if="!setting.enableCSRFProtection"><strong>Enable CSRF protection</strong>&ensp;</strong>
          <span class="badge badge-pill badge-danger">Danger!</span></span>
          <span v-else>Enable CSRF protection&ensp;<span class="badge badge-pill badge-success">Good!</span></span>
        </label>
      </div>
    </div>
    </div>

    <hr />

  </div><!-- settings -->
</template>

<script>
  export default {
    name: 'setting-lists',
    props: ['setting'],
    data() {
      return {
        res: { open: true },
        login: { open: true },
        logout: { open: true },
        policies: { open: true },
        csrf: { open: true },
        misc: { open: true },
      };
    },
  };
</script>

<style>
#settings {
  margin-left: .95rem;
}
.guideline {
  margin-top: .2rem;
  font-size: .8rem;
  vertical-align: middle;
}
.fold {
  margin-left: -.75rem;
  text-align: right;
  vertical-align: middle;
  font-family: Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: .8rem;
}
.fold:hover {
  text-decoration: underline;
}
.table > tbody > tr > td {
  vertical-align: middle;
}
.table-sm {
  line-height: .8rem;
}
.form-control {
  font-size: .8rem;
  font-family: Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
.tddelbtn {
  width: 2.5rem;
  text-align: right;
  margin-left: 0rem;
  padding-left: 0rem;
}
.delbtn {
  margin-right: -.2rem;
}
.addbtn {
  margin-top: -.8rem;
  margin-bottom: 1rem;
}
</style>
