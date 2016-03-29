import Ember from 'ember';

var stories = [{
  id: 1,
  title: "Tupac alive and well in Cuba: Is there any truth to outlandish claims rapper has been partying with Rihanna?",
  story: "Social media has been abuzz with claims that rap legend Tupac Shakur is alive and well in Cuba. Conspiracy theorists have long claimed that 2Pac, who would now be 44, faked his own death. The star, then 25, was gunned down in a drive-by shooting in Las Vegas following a Mike Tyson fight in 1996.",
  image: "http://img.thesun.co.uk/aidemitlum/archive/02652/tupac1_2652781a.jpg"
}, {
  id: 2,
  title: "WHO SHOT YA, BIG POPPA?: On the 19th anniversary of Biggie's death, a look at some of the craziest conspiracies surrounding his murder",
  story: "On March 9, 1997 hip-hop superstar Biggie Smalls had a smile on his face and the world at his feet. And in the blink of an eye all of that was gone after The Notorious B.I.G. was shot dead at just 24-years-old while he sat in a parked car outside a Los Angeles party.",
  image: "http://assets.nydailynews.com/polopoly_fs/1.2558645.1457552845!/img/httpImage/image.jpg_gen/derivatives/article_635/lvbiggie10n-3-web.jpg"
}];

export default Ember.Route.extend({
  model() {
    return stories;
  },
});
