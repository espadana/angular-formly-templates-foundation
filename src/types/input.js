export default ngModule => {
  ngModule.config(addInputType);

  function addInputType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'input',
      template: '<input ng-model="model[options.key]" ng-class="options.formControl.$invalid && options.formControl.$pristine == false ? \'is-invalid-input\' : \'\'">',
      wrapper: ['foundationLabel', 'foundationHasError'],
      defaultOptions: {
        templateOptions: { type: 'text' }
      }
    });
  }
};
