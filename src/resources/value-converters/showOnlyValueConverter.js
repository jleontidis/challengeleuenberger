export class ShowOnlyValueConverter {
    toView(array, count) {

      return array.slice(0, count);
    }
  }