{
  class NestedDependency {

    static async init() {
      this.dependency = await loader.require('modules/dependency');
    }
  };

  module.exports = NestedDependency;
}
