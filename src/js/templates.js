/*模板*/
;(function (templates, undefined) {
  templates["src/tpl/confirm.html"] = "<div class=\"modal fade\" id=\"confirm<%=num%>\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"confirmLabel\" aria-hidden=\"true\">\n" +
    "      <div class=\"modal-dialog modal-sm\">\n" +
    "        <div class=\"modal-content\">\n" +
    "          <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\" class=\"icon icon_close\"></span><span class=\"sr-only\">Close</span></button>\n" +
    "            <h4 class=\"modal-title\">删除确认</h4>\n" +
    "          </div>\n" +
    "          <div class=\"modal-body\">\n" +
    "            <p class=\"text-center\"><%=msg%></p>\n" +
    "          </div>\n" +
    "          <div class=\"modal-footer\" style=\"text-align:center !important;\">\n" +
    "            <div class=\"line\"></div>\n" +
    "            <button type=\"button\" class=\"btn btn-success btn-sm w50\">是</button>\n" +
    "            <button type=\"button\" class=\"btn btn-danger btn-sm w50 ml40\" data-dismiss=\"modal\">否</button>\n" +
    "          </div>\n" +
    "        </div><!-- /.modal-content -->\n" +
    "      </div><!-- /.modal-dialog -->\n" +
    "    </div><!-- /.modal -->";
})(this.TPL = this.TPL || {});