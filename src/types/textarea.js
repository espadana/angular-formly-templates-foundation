export default  ngModule => {
  ngModule.config(addTextareaType);

  function addTextareaType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'textarea',
      template: '<textarea class="" ng-model="model[options.key]"' + 
      ' ng-class="fc.$valid ? \'\' : \'is-invalid-input\'"></textarea>',
      wrapper: ['templateLabel', 'templateHasError'],
      defaultOptions: {
        ngModelAttrs: {
          rows: {attribute: 'rows'},
          cols: {attribute: 'cols'}
        }
      },
      apiCheck: check => ({
        templateOptions: {
          rows: check.number.optional,
          cols: check.number.optional
        }
      })
    });
  }
};
