import axios from "axios"

const uploadImage = async (file) => { 
if(!file) return
    const formData = new FormData()
    formData.append('upload_preset', 'vueprojects') // <4>
    formData.append('file', file) // <5>
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dosaxkwcj/image/upload' // <2>
  try {
    const {data} = await axios.post(cloudUrl,formData)
    return data.secure_url
  } catch (error) {
    throw error // <10>
  }
}

export default uploadImage