import UploadWidget from "../Dashboard/EditForm/UploadWidget";

class DishController {

  static renderCreateForm({ newItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: 'image', value: imageUrl } });
    };

    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
        <label>Price:</label>
        <input type="number" name="price" value={newItem.price} onChange={handleChange} />
        <label>Restaurant:</label>
        <input type="text" name="restaurant" value={newItem.restaurant} onChange={handleChange} />
        <label>Image:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>Tags:</label>
        <input type="text" name="tags" value={newItem.tags} onChange={handleChange} />
        <label>Description:</label>
        <input type="text" name="description" value={newItem.description} onChange={handleChange} />
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
        <label>Price:</label>
        <input type="number" name="price" value={editedItem.price} onChange={handleChange} />
        <label>Image:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>Description:</label>
        <input type="text" name="description" value={editedItem.description} onChange={handleChange} />
      </>
      
    );
  }
}

export default DishController;
