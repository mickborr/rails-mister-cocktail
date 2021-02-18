import 'select2';

const selectIngredient = () => {
  const selectIngredientElement = document.getElementById('dose_ingredient_id');
  if (selectIngredientElement) {
    $(function() {
    $('#dose_ingredient_id').select2();
    });
  }

};

export { selectIngredient};
