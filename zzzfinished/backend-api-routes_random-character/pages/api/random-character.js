import Chance from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    birthday: chance.birthday({ string: true, american: false }),
    geohash: chance.geohash(),
    twitterName: chance.twitter(),
  };
  response.status(200).json(character);
}
