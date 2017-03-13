<template>
  <div id="settings">
    {{ interceptUrls['test'] }}
    <form>
      <fieldset>
        <legend>Setting</legend>
        <p>
          <label for="spring-security-version">Spring Security Version</label>
          <select id="spring-security-version">
            <option value="4.x.x">4.x.x</option>
          </select>
        </p>
      </fieldset>
    </form>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Directory or File</th>
        <th>Permissions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entry in interceptUrls['patterns']">
        <td v-for="key in interceptUrls['column']">
          <input :value="entry[key]" type="text">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'setting-lists',
    props: ['interceptUrls'],
  };
</script>

<style>

</style>
