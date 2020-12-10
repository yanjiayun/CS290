(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newTwit'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"twit\">\n  <div class=\"twit-icon\">\n    <i class=\"fas fa-bullhorn\"></i>\n  </div>\n  <div class=\"twit-content\">\n    <p class=\"twit-text\">\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":14}}}) : helper)))
    + "\n    </p>\n    <p class=\"twit-author\">\n      <a href=\"#\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":18}}}) : helper)))
    + "\n      </a>\n    </p>\n  </div>\n</article>";
},"useData":true});
})();