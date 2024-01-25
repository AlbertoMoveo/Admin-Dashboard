class DishController {

  static renderCreateForm({ newItem, handleChange }) {
    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
        <label>Price:</label>
        <input type="number" name="price" value={newItem.price} onChange={handleChange} />
        <label>Restaurant:</label>
        <input type="text" name="restaurant" value={newItem.restaurant} onChange={handleChange} />
        <label>Tags:</label>
        <input type="text" name="tags" value={newItem.tags} onChange={handleChange} />
      </>
    );
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
