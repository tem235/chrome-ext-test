# Написать расширение под браузер Google Chrome

## Требования:
- Использовать Manifest v3
- Использовать Vue2/Vue3 (~~CDN версию~~ [v3 не позволяет использовать CDN](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/#remotely-hosted-code)) для UI (popup.html)
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


## Screenshots chrome extension
![Screen 1](https://github.com/tem235/chrome-ext-test/blob/main/screens/screen1.png)
![Screen 2](https://github.com/tem235/chrome-ext-test/blob/main/screens/screen2.png)
![Screen 3](https://github.com/tem235/chrome-ext-test/blob/main/screens/screen3.png)
