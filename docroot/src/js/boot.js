Application = {
  modules: {},
  core: {}
};

(function (core) {
  core.render = function() {
   for (var module in Application.modules) {
     if (!Application.modules.hasOwnProperty(module)) {
       continue;
     }

     Application.modules[module]();
   }
  };
}(Application.core));
