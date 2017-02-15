export default ngModule => {
  ngModule.config(addWrappers);

  function addWrappers(formlyConfigProvider) {
    formlyConfigProvider.setWrapper([
      {
        name: 'foundationLabel',
        template: require('./label.html')
        // apiCheck: check => ({
        //   templateOptions: {
        //     label: check.string.optional,
        //     required: check.bool.optional
        //   }
        // })
      },
      {name: 'foundationHasError', template: require('./has-error.html')}
    ]);
  }
};
