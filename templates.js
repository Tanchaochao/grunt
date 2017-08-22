/*模板*/
;(function (templates, undefined) {
  templates["include_js.html"] = "<script src=\"../dist/js/jquery.min.js\"></script>\n" +
    "<script src=\"../dist/js/bootstrap.min.js\"></script>\n" +
    "<script src=\"../dist/js/base.js\"></script>";
  templates["include_css.html"] = "<link href=\"../dist/css/mybootstrap.min.css\" rel=\"stylesheet\">\n" +
    "<link href=\"../dist/css/base.css\" rel=\"stylesheet\">\n" +
    "<!--[if lt IE 9]>\n" +
    "  <script src=\"../dist/js/html5.min.js\"></script>\n" +
    "  <script src=\"../dist/js/respond.min.js\"></script>\n" +
    "  <script src=\"../dist/js/selectivizr-min.js\"></script>\n" +
    "<![endif]-->";
})(this.TPL = this.TPL || {});