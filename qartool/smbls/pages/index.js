import { dictionary } from './dictionary';
import { main } from './main';
import { history } from './history';
import { translate } from './translate';
import { convert } from './convert';
import { research } from './research';
import { vepkhistqaosani } from './vepkhistqaosani';
import { notable_georgian_projects } from './notable_georgian_projects';
export default {
      '/dictionary': dictionary,
'/': main,
'/history': history,
'/translate': translate,
'/convert': convert,
'/research': research,
'/vepkhistqaosani': vepkhistqaosani,
'/notable_georgian_projects': notable_georgian_projects,

    }