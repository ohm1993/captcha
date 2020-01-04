# captcha
Provide captcha service for generating captcha and validating captcha 
#api for getting captcha and to validate captcha
1.
  url-http://localhost:3000
  method-get
  desc-By calling this api you will get a captcha with some code which you have to send it back by entering to the text box.
2.
  url-http://localhost:3000
  method-post
  header-{Content-Type:application/x-www-form-urlencoded}
  param-code
  desc-By calling this post method and sending the code param it will return true or false based on the captcha matched or not.

