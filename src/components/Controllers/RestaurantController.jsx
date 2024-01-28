import UploadWidget from "../Dashboard/EditForm/UploadWidget";

class RestaurantController {

  static renderCreateForm({ newItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: 'image', value: imageUrl } });
    };

    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
        <label>Image:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>Rating:</label>
        <input type="number" name="rating" value={newItem.rating} onChange={handleChange} />
        <label>Chef ID:</label>
        <input type="text" name="chef" value={newItem.chef} onChange={handleChange} />
        <label>Chef Name:</label>
        <input type="text" name="chefName" value={newItem.chefName} onChange={handleChange} />
        <label>Dishes:</label>
        <input type="text" name="dishes" value={newItem.dishes} onChange={handleChange} />
      </>
    );
  }

  static renderEditForm({ editedItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: 'image', value: imageUrl } });
    };
    
    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={editedItem.name} onChange={handleChange} />
        <label>Image:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>Rating:</label>
        <input type="number" name="rating" value={editedItem.rating} onChange={handleChange} />
        <label>Chef ID:</label>
        <input type="text" name="chef" value={editedItem.chef} onChange={handleChange} />
        <label>Chef Name:</label>
        <input type="text" name="chefName" value={editedItem.chefName} onChange={handleChange} />
        <label>Dishes:</label>
        <input type="text" name="dishes" value={editedItem.dishes} onChange={handleChange} />
      </>
    );
  }
}

export default RestaurantController;
