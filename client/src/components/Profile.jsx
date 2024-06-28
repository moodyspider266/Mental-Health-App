import React from "react";
import '../components_styling/Profile.css';

export default function Profile() {

    // const imageInput = document.getElementById('image-input');
    // const previewImage = document.getElementById('preview-image');

    // imageInput.addEventListener('change', function() {
    //     const file = this.files[0];
    //     const reader = new FileReader();

    //     reader.onload = function(e) {
    //         previewImage.src = e.target.result;
    //     }

    //     reader.readAsDataURL(file);
    // });
    return (
        <div className="profile-container">
            <div className="title">
                <h1>Personal Information</h1>
                <hr className="title-underline" />
            </div>
            <div className="content">
                <div className="picture-content">
                    <img id="preview-image" src="" alt="Preview Image" />
                    {/* <input type="file" id="image-input" accept="image/*" /> */}
                </div>
                <div className="info-content">
                    <form>
                        <h3>First Name</h3>
                        <input type="text" />
                        <h3>Last Name</h3>
                        <input type="text" />
                        <h3>Email</h3>
                        <input type="email" />
                        <h3>Mobile</h3>
                        <input type="tel" />
                        <h3>City</h3>
                        <input type="text" />
                        <h3>State</h3>
                        <input type="text" />
                        <h3>Country</h3>
                        <input type="text" />
                        <button type="submit" className="save-btn">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}