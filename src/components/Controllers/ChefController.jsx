class ChefController {
  static create() {
    const name = window.prompt('Enter the name for the new Chef:');
    if (!name) return null;

    const image = window.prompt('Enter the image URL for the new Chef:');
    if (!image) return null;

    const description = window.prompt('Enter the description for the new Chef:');
    if (!description) return null;

    return {
      name,
      image,
      description,
    };
  }

  static renderEditForm({ editedItem, handleChange }) {
    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={editedItem.name} onChange={handleChange} />
        <label>Image:</label>
        <input type="text" name="image" value={editedItem.image} onChange={handleChange} />
        <label>Description:</label>
        <input type="text" name="description" value={editedItem.description} onChange={handleChange} />
      </>
    );
  }
}

export default ChefController;
