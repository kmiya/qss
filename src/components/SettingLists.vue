<template>
  <div id="settings">
    <h1 class="h2">Setting</h1>
    <div class="form-group row">
      <label for="spring-security-version" class="col-8 col-form-label">Spring Security Version</label>
      <div class="col-4">
        <select class="form-control" id="spring-security-version">
          <option value="4.x.x">4.x.x</option>
        </select>
      </div>
    </div>
    <h2 class="h3">Access Policies</h2>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Directory or File</th>
        <th scope="col">Permissions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in setting['interceptUrls']['patterns']">
        <td v-for="key in setting['interceptUrls']['column']">
          <p v-if="key == 'no'">{{ entry[key] }}</p>
          <input v-else v-model="entry[key]" :value="entry[key]" type="text" class="form-control">
        </td>
      </tr>
      </tbody>
    </table>

    <h2 class="h3">Logout</h2>
    <div class="form-group row">
      <label for="logout-success-url" class="col-6 col-form-label">Logout Success URL</label>
      <div class="col-6">
        <input class="form-control" type="text" placeholder="/logout" id="logout-success-url">
      </div>
    </div>

    <h2 class="h3">Exception Handler</h2>
    <div class="form-group row">
      <label for="exception-url" class="col-6 col-form-label">Exception URL</label>
      <div class="col-6">
        <input class="form-control" type="text" placeholder="/error" id="exception-url">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setting-lists',
    props: ['setting'],
  };
</script>

<style>
</style>
