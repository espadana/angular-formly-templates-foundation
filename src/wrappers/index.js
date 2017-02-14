export default ngModule => {
  ngModule.config(addWrappers);

  function addWrappers(formlyConfigProvider,formlyFoundationApiCheck) {
    var c = formlyFoundationApiCheck;
    formlyConfigProvider.setWrapper([
      {
        name: 'templateLabel',
        template: require('./label.html')
      },
      {name: 'templateHasError', template: require('./has-error.html')}
    ]);
  }
};
