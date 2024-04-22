import { main } from './main';
import { dictionary } from './dictionary';
import { translate } from './translate';
import { notable_georgian_projects } from './notable_georgian_projects';
import { history } from './history';
import { research } from './research';
import { convert } from './convert';
export default {
      '/': main,
'/dictionary': dictionary,
'/translate': translate,
'/notable_georgian_projects': notable_georgian_projects,
'/history': history,
'/research': research,
'/convert': convert,

    }