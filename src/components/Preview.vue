<template>
<div id="preview">
  <pre id="preview" class="prettyprint"><code class="lang-xml">
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans:beans xmlns=&quot;http://www.springframework.org/schema/security&quot;
&Tab;xmlns:beans=&quot;http://www.springframework.org/schema/beans&quot;
&Tab;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
&Tab;xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
&Tab;&Tab;http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security.xsd&quot;&gt;

&Tab;&lt;http&gt;
<span v-for="entry in setting['interceptUrls']['patterns']"><!--
--><span v-if="key === 'pattern'" v-for="key in setting['interceptUrls']['column']"><!--
-->&Tab;&Tab;&lt;intercept-url pattern="{{ entry[key] }}"</span><!--
--><span v-if="key === 'access'" v-for="key in setting['interceptUrls']['column']"><!--
--> access="{{ entry[key] }}" /&gt;</span>
</span>
&Tab;&lt;/http&gt;

&lt;/beans:beans&gt;
</code></pre>
</div>
</template>

<script>
export default {
  name: 'preview',
  props: ['setting'],
  data() {
    return {
      result: 'result',
    };
  },
  method: {
    generateXmlConfig() {
      this.result = 'changed';
    },
  },
};
</script>

<style>
pre {
  border: 0px !important;
  tab-size: 2;
}
</style>
