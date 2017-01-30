export default ngModule => {
  ngModule.config(addInputType);

  function addInputType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'input',
      template: '<input ng-model="model[options.key]" ng-class="options.formControl.$invalid && options.formControl.$pristin == false ? \'\' : \'is-invalid-input\'">',
      wrapper: ['templateLabel', 'templateHasError' ],
      defaultOptions: {
        templateOptions: { type: 'text' }
      }
    });
  }
};
