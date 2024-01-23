class RestaurantController {
  static create() {
    const name = window.prompt('Enter the name for the new Restaurant:');
    if (!name) return null;

    const image = window.prompt('Enter the image URL for the new Restaurant:');
    if (!image) return null;

    const chefId = window.prompt('Enter the chef ID for the new Restaurant:');
    if (!chefId) return null;

    return {
      name,
      image,
      chef: chefId,
      dishes: [],
    };
  }

  static renderEditForm({ editedItem, handleChange }) {
    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={editedItem.name} onChange={handleChange} />
        <label>Image:</label>
        <input type="text" name="image" value={editedItem.image} onChange={handleChange} />
      </>
    );
  }
}

export default RestaurantController;
