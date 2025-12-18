import blender from '../jsons/equipments/appliances/blender.json'
import handMixer from '../jsons/equipments/appliances/hand-mixer.json'
import microwave from '../jsons/equipments/appliances/microwave.json'
import oven from '../jsons/equipments/appliances/oven.json'
import cutBoard from '../jsons/equipments/cut-board.json'
import bakingTray from '../jsons/equipments/dishes/baking-tray.json'
import bowl from '../jsons/equipments/dishes/bowl.json'
import colander from '../jsons/equipments/dishes/colander.json'
import lid from '../jsons/equipments/dishes/lid.json'
import pan from '../jsons/equipments/dishes/pan.json'
import plate from '../jsons/equipments/dishes/plate.json'
import pot from '../jsons/equipments/dishes/pot.json'
import fork from '../jsons/equipments/fork.json'
import grater from '../jsons/equipments/grater.json'
import grill from '../jsons/equipments/grill.json'
import knife from '../jsons/equipments/knife.json'
import parchment from '../jsons/equipments/parchment.json'
import rollingPin from '../jsons/equipments/rolling-pin.json'
import measuringSpoon from '../jsons/equipments/measuring-spoon.json'
import paperTowel from '../jsons/equipments/paper-towel.json'
import brush from '../jsons/equipments/brush.json'
import skewers from '../jsons/equipments/skewers.json'
import spatula from '../jsons/equipments/spatula.json'
import spoon from '../jsons/equipments/spoon.json'
import tongs from '../jsons/equipments/tongs.json'
import whisk from '../jsons/equipments/whisk.json'
import sieve from '../jsons/equipments/dishes/sieve.json'
import ladle from '../jsons/equipments/dishes/ladle.json'
import woodenSpoon from '../jsons/equipments/wooden-spoon.json'
import mortar from '../jsons/equipments/dishes/mortar.json'
import fridge from '../jsons/equipments/appliances/fridge.json'
import skimmer from '../jsons/equipments/skimmer.json'
import bottle from '../jsons/equipments/dishes/bottle.json'
import jar from '../jsons/equipments/dishes/jar.json'
import cookieCutters from '../jsons/equipments/dishes/cookie-cutters.json'

const APPLIANCES = {
  microwave,
  blender,
  oven,
  fridge,
  handMixer,
}

const DISHES = {
  pan,
  bowl,
  plate,
  pot,
  colander,
  bakingTray,
  lid,
  sieve,
  ladle,
  mortar,
  bottle,
  jar,
  cookieCutters,
}

export const EQUIPMENTS = {
  ...APPLIANCES,
  ...DISHES,
  spatula,
  whisk,
  fork,
  knife,
  rollingPin,
  parchment,
  grater,
  brush,
  cutBoard,
  spoon,
  woodenSpoon,
  skimmer,
  measuringSpoon,
  grill,
  tongs,
  paperTowel,
  skewers,
}
