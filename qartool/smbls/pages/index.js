import { dictionary } from './dictionary';
import { translate } from './translate';
import { main } from './main';
import { research } from './research';
import { vepkhistqaosani } from './vepkhistqaosani';
import { history } from './history';
import { notable_georgian_projects } from './notable_georgian_projects';
import { convert } from './convert';
export default {
      '/dictionary': dictionary,
'/translate': translate,
'/': main,
'/research': research,
'/vepkhistqaosani': vepkhistqaosani,
'/history': history,
'/notable_georgian_projects': notable_georgian_projects,
'/convert': convert,

    }