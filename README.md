
# Brain Tumour Detection Model🧠
Welcome to our Brain Tumour Detection Model developed during the AI Unite Hackathon by team nvAI! Our project utilizes Machine Learning, Computer Vision, and Segmentation techniques to detect brain tumors from MRI images.


## Project Overview
### Client
🖥️ Our client-side application is built using React, offering an intuitive interface for interacting with our brain tumor detection system. It seamlessly communicates with the server-side Flask API.
<br>
[Live Demo](https://nv-ai.vercel.app/)

### Server
🖥️ The server component is powered by Flask, hosted on a Linode instance. This API accepts MRI images of brain tumors and returns detailed JSON responses, including detection status, confidence scores, and image links.

```json
{
  "inference_id": "b20e9d99-8a77-4484-a30d-130aedfe49be",
  "time": 0.03575260299976435,
  "image": { "width": 319, "height": 360 },
  "predictions": [
    {
      "x": 217.0,
      "y": 185.5,
      "width": 90.0,
      "height": 85.0,
      "confidence": 0.8729356527328491,
      "class": "yes",
      "class_id": 0,
      "detection_id": "33c0f948-a90d-4039-83bc-a42386d5daec"
    }
  ]
}

```

## Team Members
+ **Parth Vastavik** - Full Stack Developer  
+ **Krish Goenka** - AI Model Developer 
+ **Anustup Karnar** - AI Model Developer   
+ **Rajarshi Ghosh** - AI Model Developer   
+ **Palak Chaplot** - UI/UX Designer, Presentation Head


## Technologies Used
### Frontend
<div style="display: flex">
    <img src="https://skillicons.dev/icons?i=html" alt="HTML">
    <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS">
    <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript">
    <img src="https://skillicons.dev/icons?i=react" alt="React">
</div>

### Backend
<div style="display: flex">
    <img src="https://skillicons.dev/icons?i=python" alt="Python">
    <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js">
    <img src="https://skillicons.dev/icons?i=express" alt="Express">
    <img src="https://skillicons.dev/icons?i=flask" alt="Flask">
</div>

### Machine Learning
<div style="display: flex">
    <img src="https://skillicons.dev/icons?i=tensorflow" alt="TensorFlow">
</div>

### DataBase
<div style="display: flex">
    <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB">
</div>


## Installation

+ Clone the repository:     
``` bash
git clone https://github.com/nvAI/brain-tumour-detection.git
```
+ Install dependencies:
    + [Client Side Dependencies](https://github.com/parthasdey2304/nvAI/tree/main/client#readme)
    + [Server Side Dependencies](https://github.com/parthasdey2304/nvAI/tree/main/server#readme)

## Model Overview
ℹ️ Our model is based on convolutional neural networks (CNNs) trained on a dataset of MRI images labeled with tumor presence or absence. We achieved an accuracy of 89% on our test dataset. The model utilizes segmentation techniques to identify and classify brain tumors from MRI scans.

## Contribution Guidelines
🤝 We welcome contributions from the community! Whether it's improving the model, enhancing the UI/UX, or optimizing the codebase, we appreciate all efforts. Feel free to fork the repository, make improvements, and submit pull requests.

## License
📝 This project is licensed under the [MIT License](https://github.com/parthasdey2304/nvAI/blob/main/LICENSE) - see the LICENSE file for details.

## Acknowledgements
🙏 We would like to express our gratitude to the organizers of the AI Unite Hackathon for providing this platform to showcase our work. Additionally, we extend our thanks to the dataset providers and the open-source community for their invaluable contributions.
