type RuMessages = typeof import('./messages/ru.json');
type EnMessages = typeof import('./messages/en.json');

declare interface IntlMessages extends RuMessages, EnMessages {}
