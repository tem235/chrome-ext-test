# Написать расширение под браузер Google Chrome

## Требования:
- Использовать Manifest v3
- Использовать Vue2/Vue3 (CDN версию) для UI (popup.html)
- Расположения кнопок, полей и дизайн окна на свое усмотрение

## Функционал:
Изменение фона на странице https://www.google.com/. Открытие вводимого URL в 
новой закрепленной вкладке.
1. Добавить кнопку "Change Google background". При клике изменять background 
страницы https://www.google.com/ на зеленый цвет, повторный клик должен 
вернуть background в начальное состояние.
2. Добавить кнопку "Open new tab", добавить поле для ввода URL адреса. Введя URL в 
поле и нажав на кнопку "Open new tab" введенная страница должна открыться в 
новой закрепленной вкладке в фоне (неактивная вкладка), поле ввода URL после 
нажатия кнопки должно очищаться.

## References:
https://developer.chrome.com/docs/extensions/mv3/
https://vuejs.org/guide/quick-start.html#using-vue-from-cdn/
