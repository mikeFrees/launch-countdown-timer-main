fetch('https://mikes-launch-countdown.netlify.app/assets/data/time.json')
    .then((response) => response.json())
    .then((json) => console.log(json));