const fellows = [{"name":"Steve Gattuso","year":2013,"url":"https://www.stevegattuso.me","rss_url":"https://www.stevegattuso.me/feed.xml","emoji":"💌","description":"My blog and personal wiki. Step right up for thoughts on programming, vegan cooking, urbanism, and whatever else pops into my mind."},{"name":"Ray Berger","rss_url":"https://blog.rayberger.org/rss.xml","year":2018,"url":"https://www.rayberger.org/","emoji":"🍔"},{"name":"Shy Ruparel","year":2014,"url":"https://shy.dev","emoji":"🦸"}];

function goToRandom() {
  const randomFellow = fellows[Math.floor(Math.random() * fellows.length)];
  window.location = randomFellow.url;
};
