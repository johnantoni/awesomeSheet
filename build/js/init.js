(function() {

  nav.bind();
  nav.render(sheet.allCharacters);
  hidableBlock.bind();
  inputBlock.bind(helper.eA(".input-block"));
  textareaBlock.bind(helper.eA(".textarea-block"));
  stats.bind();
  sheet.render();

})();