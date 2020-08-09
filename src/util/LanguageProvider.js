export default function (key, locale) {
  switch (locale) {
    case 'en':
      if (key === 'HELLO')
        return 'Hello Friends!';
      break;
    case 'fr':
      if (key === 'HELLO')
        return 'Bonjour les amis!';
      break;
    case 'sw':
      if (key === 'HELLO')
        return 'Hej kompisar!';
      break;
    default:
      return 'Hello Friends!';
  }
}