export default  ngModule => {
  ngModule.config(addSelectType);

  function addSelectType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'select',
      template: require('./select.html'),
      wrapper: ['foundationLabel', 'foundationHasError'],
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          labelProp: check.string.optional,
          valueProp: check.string.optional,
          groupProp: check.string.optional
        }
      })
    });
  }
};
