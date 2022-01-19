export const fileUpload = async(file) =>{
    const urlCloudinary = "https://api.cloudinary.com/v1_1/osmeily/upload"
    const formData = new FormData()
    formData.append('upload_preset','amazonas')
    formData.append('file', file)

    const response = await fetch(urlCloudinary, {
        method : "POST",
        body : formData
    })
    const cloudinaryImg = await response.json()
    return cloudinaryImg.secure_url
}

