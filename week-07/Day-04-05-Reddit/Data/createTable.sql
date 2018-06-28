SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS 'posts' (
 "id" int(8) NOT NULL,
 "title" varchar(255) NOT NULL,
 "url" varchar(255) NOT NULL,
 "timestamp" int,
 "score" int,
  PRIMARY KEY ("id")
);

INSERT INTO posts (id, title, url, timestamp, score) VALUES
  ("1", 
  "Alex Jones: The Pentagon has 'weaponized perfumes' that make men gay to prevent them from having kids",
  "https://www.mediamatters.org/video/2018/06/22/alex-jones-pentagon-has-weaponized-perfumes-make-men-gay-prevent-them-having-kids/220524",
  "1529798400",
  "381"
  ),
  ("2", 
  "Turkey blames ‘Jewish lobby’ for economic crisis",
  "https://www.thetimes.co.uk/article/turkey-blames-jewish-lobby-for-economic-crisis-lqrk8t0b7",
  "1527897600",
  "28"
  ),
  ("3", 
  "Trump 'under attack from multidimensional Luciferian advanced beings'",
  "http://deadstate.org/christian-author-trump-is-under-attack-from-multidimensional-luciferian-advanced-beings/",
  "1527552000",
  "326"
  ),
  ("4", 
  "Flat-Earthers think 'Pac-Man Effect' stops us falling of the edge of the planet",
  "http://www.newsweek.com/flat-earth-pac-man-edges-907976",
  "1527645540",
  "199"
  ),
  ("5", 
  "Creator of Pepe sues InfoWars for co-opting image of his ‘peaceful frog-dude’ -- Furie is suing InfoWars for copyright infringement, saying they did not have permission to use Pepe in merchandise sold on the site",
  "https://lawandcrime.com/high-profile/creator-of-pepe-sues-infowars-for-co-opting-image-of-his-peaceful-frog-dude/",
  "1521141960",
  "443"
  ),
  ("6", 
  "It's really the year 1720 because the middle ages were a hoax.",
  "http://all-that-is-interesting.com/phantom-time-hypothesis",
  "1510011992",
  "238"
  );