class DishController {
  static create() {
    const name = window.prompt('Enter the name for the new Dish:');
    if (!name) return null;

    const price = parseFloat(window.prompt('Enter the price for the new Dish:'));
    if (isNaN(price)) return null;

    const ingredients = window.prompt('Enter ingredients (comma-separated) for the new Dish:')
      .split(',')
      .map((ingredient) => ingredient.trim());

    const tags = window.prompt('Enter tags (comma-separated) for the new Dish:')
      .split(',')
      .map((tag) => tag.trim());

    const restaurantId = window.prompt('Enter the restaurant ID for the new Dish:');
    if (!restaurantId) return null;

    return {
      name,
      price,
      ingredients,
      tags,
      restaurant: restaurantId,
    };
  }

  static renderEditForm({ editedItem, handleChange }) {
    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={editedItem.name} onChange={handleChange} />
        <label>Price:</label>
        <input type="number" name="price" value={editedItem.price} onChange={handleChange} />
      </>
    );
  }
}

export default DishController;
