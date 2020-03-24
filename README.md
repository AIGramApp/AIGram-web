<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/paladium/aigram">
    <img src="./images/logo.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">AIGram</h3>

  <p align="center">
    Instagram for everything AI-related
    <br />
    <br />
    <a href="https://wonderful-visvesvaraya-7dfbae.netlify.com">View Demo</a>
    ·
    <a href="https://github.com/paladium/aigram/issues">Report Bug</a>
    ·
    <a href="https://github.com/paladium/aigram/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

![AIGram desktop screenshot](./images/screenshot.png)

The aim of the this project is to gather all the resources about the AI industry in instagram style (posts, comments etc.)

### Built With

* [Vue.Js](https://vuejs.org/)
* [TailwindCSS](https://tailwindcss.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You only need node.js and npm to run the project.
* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/paladium/aigram.git
```
2. Install NPM packages
```sh
npm install
```
3. Run the local server:
```sh
npm run serve
```
4. After you are done with development, run for production using the following command:
```sh
npm run build
```


<!-- USAGE EXAMPLES -->
## Usage

The project will be developed in several stages. The first stage only includes frontend for the project. Currently the following features have been implemented:
- [x] Loading of data from json
- [x] Display feed of data
- [x] Bookmark items
- [x] Display bookmarked items
- [x] Search across the posts


## How to add data

For the first stage, the data is located in the ***src/feed.json*** file. To add a new link, use the following template:
```json
{
    "image": "link to image url",
    "title": "Title of the post",
    "description": "Description of the post. Keep it short )",
    "tags": ["some-tag", "framework"]
}
```
For now, the repo needs to be forked, a new link added and then a pull request should be opened. This will be fixed in the Second stage.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/paladium/aigram/issues) for a list of proposed features (and known issues).

The project will include lots of features in next stages.

### Second stage
- [ ] Backend where new posts can be added along with the timestamp
- [ ] Lazy loading of the feed
- [ ] Image storage for the posts

### Third stage:
- [ ] Mobile application written in Flutter
- [ ] 


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ilkin Musayev - [@real_paladium](https://twitter.com/real_paladium) - musaevilkin29@gmail.com

Project Link: [https://github.com/paladium/aigram](https://github.com/paladium/aigram)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [AITube](http://web.archive.org/web/20190124222053/https://aitube.io/) - inspiration for the project (discountinued)
* [Uplabs](https://www.uplabs.com/) - for awesome design inspiration