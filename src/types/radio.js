export default ngModule => {
  ngModule.config(addRadioType);

  function addRadioType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'radio',
      template: require('./radio.html'),
      wrapper: ['foundationLabel', 'foundationHasError'],
      defaultOptions: {
        noFormControl: false
      },
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          labelProp: check.string.optional,
          valueProp: check.string.optional
        }
      })
    });
  }
};
