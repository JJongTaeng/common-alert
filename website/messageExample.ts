import { Alert } from "../src/index";

export default function makeMessageExample() {
  const $setMessageButton = document.querySelector('#messageSetMessage');
  const $visibleTrueButton = document.querySelector('#messageVisibleTrue');
  const $visibleFalseButton = document.querySelector('#messageVisibleFalse');
  const $messageTypeInfo = document.querySelector('#messageTypeInfo');
  const $messageTypeError = document.querySelector('#messageTypeError');

  const message = new Alert();

  $setMessageButton.addEventListener('click', () => {
    message.setMessage('This is alert');
  });

  $visibleTrueButton.addEventListener('click', () => {
    message.visible(true);
  });

  $visibleFalseButton.addEventListener('click', () => {
    message.visible(false)
  });
  $messageTypeInfo.addEventListener('click', () => {
    message.type('info');
  })
  $messageTypeError.addEventListener('click', () => {
    message.type('error');
  })
};
