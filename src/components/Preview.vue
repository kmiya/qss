<template>
<div id="preview">
  <pre id="preview"><code class="lang-xml">
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
    xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
    xmlns:sec=&quot;http://www.springframework.org/schema/security&quot;
    xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security.xsd
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
    &quot;&gt;

    &lt;sec:http<!--
--><span v-for="entry in setting.resources.patterns"><!--
--> pattern=&quot;<span>{{ entry.pattern }}</span>&quot;<!--
--> security=&quot;<span>{{ entry.security }}</span>&quot; /&gt;<!--
--></span>
    &lt;sec:http&gt;
      &lt;sec:form-login
        login-page=&quot;<span>{{ setting.formLogin.loginPage }}</span>&quot;
        authentication-failure-url=&quot;<span>{{ setting.formLogin.failureUrl }}</span>&quot; /&gt;
      &lt;sec:logout
        logout-success-url=&quot;<span>{{ setting.logout.successUrl }}</span>&quot;
        delete-cookies=&quot;<span>{{ setting.logout.deleteCookies }}</span>&quot; /&gt;
      &lt;sec:access-denied-handler ref=&quot;accessDeniedHandler&quot;/&gt;
      &lt;sec:custom-filter ref=&quot;userIdMDCPutFilter&quot; after=&quot;ANONYMOUS_FILTER&quot;/&gt;
      &lt;sec:session-management /&gt;
<div v-for="entry in setting.interceptUrls.patterns"><!--
-->      &lt;sec:intercept-url pattern=&quot;<span>{{ entry.pattern }}</span>&quot;<!--
--> access=&quot;<span>{{ entry.access }}</span>&quot; /&gt;<!--
--></div><!--
-->    &lt;/sec:http&gt;

  &lt;sec:authentication-manager /&gt;
<!--
--><div v-show="setting.enableCSRFProtection">
  &lt;!-- CSRF Protection --&gt;
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
</div><!--

--><div v-if="setting.putUserIdIntoMDC">
  &lt;!-- Put UserID into MDC --&gt;
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
  props: ['setting'],
  data() {
    return {
    };
  },
  method: {
  },
};
</script>

<style>
pre {
  border: 0px !important;
  tab-size: 2;
  font-size: 0.8rem;
}
</style>
