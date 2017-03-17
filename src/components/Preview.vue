<template>
<div id="preview">
  <pre id="preview"><code class="lang-xml"><!--
-->&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:sec=&quot;http://www.springframework.org/schema/security&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security.xsd
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
    &quot;&gt;
<!--
      Resources
-->
<div v-for="entry in setting.resources.patterns" v-bind:class="{ focused: focuses.resources }"><!--
-->    &lt;sec:http pattern=&quot;<span>{{ entry.pattern }}</span>&quot;<!--
--> security=&quot;<span>{{ entry.security }}</span>&quot; /&gt;<!--
--></div><!--
-->    &lt;sec:http&gt;<!--

      login

-->      <div v-bind:class="{ focused: focuses.login }"><!--
-->     &lt;sec:form-login
        login-page=&quot;<span>{{ setting.formLogin.loginPage }}</span>&quot;
        authentication-failure-url=&quot;<span>{{ setting.formLogin.failureUrl }}</span>&quot; /&gt;<!--
      --></div><!--

      Logout

      --><div v-bind:class="{ focused: focuses.logout }"><!--
-->     &lt;sec:logout
        logout-success-url=&quot;<span>{{ setting.logout.successUrl }}</span>&quot;
        delete-cookies=&quot;<span>{{ setting.logout.deleteCookies }}</span>&quot; /&gt;<!--
      --></div><!--
-->      &lt;sec:access-denied-handler ref=&quot;accessDeniedHandler&quot;/&gt;
      &lt;sec:custom-filter ref=&quot;userIdMDCPutFilter&quot; after=&quot;ANONYMOUS_FILTER&quot;/&gt;
      &lt;sec:session-management /&gt;<!--

      Intercept URLs

--><div v-bind:class="{ focused: focuses.policies }"><!--
  --><div v-for="entry in setting.interceptUrls.patterns"><!--
-->      &lt;sec:intercept-url pattern=&quot;<span>{{ entry.pattern }}</span>&quot;<!--
--> access=&quot;<span>{{ entry.access }}</span>&quot; /&gt;<!--
  --></div><!--
--></div><!--
-->    &lt;/sec:http&gt;

  &lt;sec:authentication-manager /&gt;
<!--
  CSRF Protection
-->
<div v-show="setting.enableCSRFProtection" v-bind:class="{ focused: focuses.csrf }"><!--
-->  &lt;!-- CSRF Protection --&gt;
  &lt;bean id=&quot;accessDeniedHandler&quot;
      class=&quot;org.springframework.security.web.access.DelegatingAccessDeniedHandler&quot;&gt;
      &lt;constructor-arg index=&quot;0&quot;&gt;
          &lt;map&gt;
              &lt;entry
                  key=&quot;org.springframework.security.web.csrf.InvalidCsrfTokenException&quot;&gt;
                  &lt;bean
                      class=&quot;org.springframework.security.web.access.AccessDeniedHandlerImpl&quot;&gt;
                      &lt;property name=&quot;errorPage&quot;
                          value=&quot;/WEB-INF/views/common/error/invalidCsrfTokenError.jsp&quot; /&gt;
                  &lt;/bean&gt;
              &lt;/entry&gt;
              &lt;entry
                  key=&quot;org.springframework.security.web.csrf.MissingCsrfTokenException&quot;&gt;
                  &lt;bean
                      class=&quot;org.springframework.security.web.access.AccessDeniedHandlerImpl&quot;&gt;
                      &lt;property name=&quot;errorPage&quot;
                          value=&quot;/WEB-INF/views/common/error/missingCsrfTokenError.jsp&quot; /&gt;
                  &lt;/bean&gt;
              &lt;/entry&gt;
          &lt;/map&gt;
      &lt;/constructor-arg&gt;
      &lt;constructor-arg index=&quot;1&quot;&gt;
          &lt;bean
              class=&quot;org.springframework.security.web.access.AccessDeniedHandlerImpl&quot;&gt;
              &lt;property name=&quot;errorPage&quot;
                  value=&quot;/WEB-INF/views/common/error/accessDeniedError.jsp&quot; /&gt;
          &lt;/bean&gt;
      &lt;/constructor-arg&gt;
  &lt;/bean&gt;
</div>
<!--
  Misc
--><div v-if="setting.putUserIdIntoMDC" v-bind:class="{ focused: focuses.misc }"><!--
-->  &lt;!-- Put UserID into MDC --&gt;
  &lt;bean id=&quot;userIdMDCPutFilter&quot; class=&quot;org.terasoluna.gfw.security.web.logging.UserIdMDCPutFilter&quot;&gt;
  &lt;/bean&gt;
</div><!--
-->
&lt;/beans&gt;
</code></pre>
</div>
</template>

<script>
export default {
  name: 'preview',
  props: ['setting', 'focuses'],
  data() {
    return {
    };
  },
  method: {
  },
};
</script>

<style>
#preview {
  margin-left: -.5rem;
}
pre {
  margin-left: 0;
  border-left: solid 1px rgba(0,0,0,.125);
  padding: 0 0 14px 14px;
  tab-size: 2;
  font-size: 0.8rem;
}
.focused {
  margin-left: -14px;
  padding-left: 11px;
  border-left: solid 3px rgb(2, 117, 216);
  border-top: dotted .1px rgba(2, 117, 216, .50);
  border-bottom: dotted .1px rgba(2, 117, 216, .50);
}
</style>
