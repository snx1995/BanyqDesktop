import Vue from 'vue';

import Icon from './Icon';

const components = {
    Icon
}

for (let i in components) {
    Vue.component(i, components[i])
}

export default {
    components
}