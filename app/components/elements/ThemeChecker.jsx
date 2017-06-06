import store from 'store';
import { DEFAULT_THEME } from 'config/client_config';

export function themeName() {
    var theme_name = DEFAULT_THEME;
    if (store.get('theme')) {
        theme_name = store.get('theme');
    }
    theme_name = theme_name.replace(/"/g,'').toLowerCase();
    return theme_name;
}
