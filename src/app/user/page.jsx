'use client'
import { useState } from 'react';
import "./form.css"

function UserPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    gender: '',
    productPurchased: '',
    title: '',
    description: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would usually handle the submission to the backend
    console.log(formData);
    // Reset form if necessary
    // setFormData({ username: '', email: '', age: '', gender: '', productPurchased: '', title: '', description: '' });
};
  return (
      
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <label>Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <label>Gender:
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <label>Product Purchased:
                <input type="text" name="productPurchased" value={formData.productPurchased} onChange={handleChange} />
            </label>
            <label>Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>Description:
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
  }
  
  export default UserPage;
  