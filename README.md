# pesapal_test


Problem 1: Web server (with optional secure communication).
Design a basic HTTP web-server application which can listen on a configurable TCP port and serve both static HTML and dynamically generated HTML by means of a chosen programming language, such as in the way Apache uses PHP. It is acceptable for this server application to support only a restricted subset of HTTP, such as GET or POST requests, and the only headers it must support are Content-Type and Content-Length.

Update: Many applicants are misunderstanding and submitting web services and web applications instead of web servers. Please note that this problem is about designing a web server like Apache or Nginx, not a web application.

Extensions.
For extra points you may want extend the server with one of the following: 

Implement TLS (HTTPS) or a secure protocol of your choice to run over the server
Add a feature for URL rewriting, such as mod_rewrite in Apache.
