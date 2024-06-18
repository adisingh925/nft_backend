const express = require("express");
const app = express();
const port = 3000;

const dogBreeds = {
  1: {
    name: "Pug",
    description: "A small and charming dog breed with a wrinkled face.",
    image: "https://image.petmd.com/files/styles/978x550/public/2022-10/pug-dog-breed.jpeg",
    attributes: [
      {
        trait_type: "Color",
        value: "Fawn",
      },
      {
        trait_type: "Size",
        value: "Small",
      },
    ],
  },
  2: {
    name: "Bulldog",
    description:
      "A muscular and heavy dog breed with a distinctive pushed-in nose.",
    image: "https://www.thesprucepets.com/thmb/zXkzVVV5P8h2JG0ZUFtXtvIq-lM=/3600x0/filters:no_upscale():strip_icc()/bulldog-4584344-hero-8b60f1e867f046e792ba092eec669256.jpg",
    attributes: [
      {
        trait_type: "Color",
        value: "White",
      },
      {
        trait_type: "Size",
        value: "Medium",
      },
    ],
  },
  3: {
    name: "Beagle",
    description:
      "A small to medium-sized dog breed known for its excellent sense of smell.",
    image: "https://www.dogster.com/wp-content/uploads/2012/05/beagle-dog-standing-outdoor_Artyom-Gantsev_Shutterstock.jpg",
    attributes: [
      {
        trait_type: "Color",
        value: "Tricolor",
      },
      {
        trait_type: "Size",
        value: "Medium",
      },
    ],
  },
  4: {
    name: "Poodle",
    description:
      "An intelligent and elegant dog breed, known for its hypoallergenic coat.",
    image: "https://www.dogster.com/wp-content/uploads/2024/02/red-toy-poodle-dog-at-the-park_Mykhaylo_Kozelko_Shutterstock.jpg",
    attributes: [
      {
        trait_type: "Color",
        value: "White",
      },
      {
        trait_type: "Size",
        value: "Medium",
      },
    ],
  },
};

app.get("/:id", (req, res) => {
  const nftId = req.params.id;
  const metadata = dogBreeds[nftId];

  if (metadata) {
    res.json(metadata);
  } else {
    res.status(404).json({ error: "Breed not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
