// ======================GLOBAL VARIABLES ===========================
let colorRightSpot = "green";
let colorRightLetter = "rgb(190, 171, 0)";
let colorWrong = "rgb(129, 129, 129)";
let winSquareBorderColor = "rgb(30, 255, 0)";
const wurtleTitle = document.getElementById("WURTLE");
const numberOfWordsInArray = 4498;
let shareTime = "";
let timerVar;
let countDown;
let countdownTimerSelected = false;
let timerStart = 0;
let soundOn = false;

let buttonClickAudio = new Audio('./audio/buttonClick.mp3');
buttonClickAudio.preload = 'auto';
let buttonDeleteAudio = new Audio('./audio/buttonDelete.mp3');
buttonDeleteAudio.preload = 'auto';
let gameWonAudio = new Audio('./audio/gameWon.mp3');
gameWonAudio.preload = 'auto';
let resetGameAudio = new Audio('./audio/resetGame.mp3');
resetGameAudio.preload = 'auto';
let clockAudio = new Audio('./audio/ticktock.mp3');
clockAudio.preload = 'auto';
let gameLostAudio = new Audio('./audio/gameLost.mp3');
gameLostAudio.preload = 'auto';
let squareAudio = new Audio(`./audio/squareAudio5.mp3`);
squareAudio.preload = 'auto';


// RANDOM NUMBER GENERATOR
let arrayIndex = Math.floor(Math.random() * numberOfWordsInArray);


const words = [
    "aback","abase","abash","abate","abbey","abbot","abeam","abets","abhor","abide",
    "abler","ables","abode","aboil","aboon","abort","about","above","abuts","abuzz",
    "abyss","acais","ached","achee","aches","achoo","acids","acidy","acing","acned",
    "acold","acorn","acred","acres","acted","actor","acute","adage","adapt","added",
    "adder","addle","adeem","adept","adieu","adios","adman","admen","admit","adobe",
    "adobo","adopt","adore","adorn","adult","adust","afire","afoot","afore","afoul",
    "afrit","after","again","agape","agars","agate","agave","agaze","agent","agers",
    "agger","aggie","aggro","agile","aging","agist","aglow","agone","agony","agora",
    "agree","agura","ahead","ahold","aholt","ahull","aided","aider","aides","ailed",
    "aimed","aimer","aioli","aired","aisle","aking","akita","alack","alamo","alarm",
    "album","alder","alert","alfas","algae","algal","alias","alibi","alien","align",
    "alike","aline","alive","alley","allot","allow","alloy","aloes","aloft","aloha",
    "aloin","alone","along","aloof","aloud","alowe","alpha","altar","alter","altos",
    "alums","alure","amass","amaze","amber","ambit","amble","ambry","ameba","amend",
    "amino","amiss","amity","among","amort","amour","amped","ample","amply","ampul",
    "amuck","amuse","ancho","anear","angel","anger","angle","angry","angst","anile",
    "anils","anime","anion","anise","ankle","annal","annex","annoy","annul","anted",
    "antic","antsy","anvil","aorta","apart","apery","aphid","aping","apish","apnea",
    "aport","appal","appel","apple","apply","apron","aptly","aquae","aquas","arbor",
    "arced","ardor","areal","areas","arena","argon","argue","arise","armed","armor",
    "aroma","arose","array","arrow","arson","artsy","ascot","ashen","ashes","aside",
    "asked","asker","askew","aspen","asper","assay","asses","asset","atilt","atlas",
    "atoll","atoms","atomy","atone","attic","audio","audit","auger","aught","augur",
    "aunts","aunty","aural","auras","autos","avail","avast","avert","avian","avoid",
    "avows","await","awake","award","aware","awash","awful","awing","awoke","axels",
    "axing","axiom","axled","axles","axman","axmen","azure","babes","bacon","badly",
    "bails","baker","balks","backs","bakes","balds","balky","babel","badge","bagel",
    "bairn","baits","baked","baldy","bales","balls","bands","bangs","banks","barbs",
    'bally', 'balms', 'balmy', 'balsa', 'banal', 'bands', 'bandy', 'banes', 'bangs', 'banjo', 
    'banks', 'bants', 'barbs', 'bared', 'barer', 'bares', 'barfs', 'barge', 'barks', 'barns', 
    'baron', 'basal', 'based', 'baser', 'bases', 'basic', 'basil', 'basin', 'basis', 'basks', 
    'baste', 'basts', 'batch', 'bated', 'bates', 'bathe', 'baths', 'baton', 'baulk', 'bawds', 
    'bawdy', 'bawls', 'bayed', 'bayos', 'bayou', 'bazar', 'beach', 'beads', 'beady', 'beaks', 
    'beaky', 'beams', 'beamy', 'beans', 'beard', 'bears', 'beast', 'beats', 'beaus', 'beaut', 
    'beaux', 'bebop', 'becks', 'beech', 'beefy', 'beeps', 'beers', 'beets', 'befit', 'began', 
    'begat', 'beget', 'begin', 'begun', 'beige', 'being', 'belay', 'belch', 'bells', 'belly', 
    'below', 'belts', 'bench', 'bends', 'bendy', 'bento', 'bergs', 'berms', 'berry', 'berth', 
    'beset', 'bests', 'bevel', 'bible', 'bicep', 'bided', 'bides', 'bidet', 'biggy', 'bigly', 
    'bigot', 'biked', 'biker', 'bikes', 'bilge', 'bills', 'billy', 'bimbo', 'binal', 'binds', 
    'binge', 'bingo', 'bings', 'bingy', 'binky', 'biome', 'bipod', 'birch', 'birds', 'birth', 
    'bison', 'bitch', 'biter', 'bites', 'bitsy', 'bitty', 'blabs', 'black', 'blade', 'blame', 
    'blanc', 'bland', 'blank', 'blare', 'blast', 'blaze', 'bleak', 'bleat', 'bleed', 'bleep', 
    'blend', 'bless', 'blimp', 'blimy', 'blind', 'bling', 'blink', 'blips', 'bliss', 'blitz', 
    'bloat', 'blobs', 'block', 'blocs', 'blogs', 'bloke', 'blond', 'blood', 'bloom', 'bloop', 
    'blots', 'blown', 'blows', 'blowy', 'blubs', 'blued', 'bluer', 'blues', 'bluey', 'bluff', 
    'blunt', 'blurb', 'blurs', 'blurt', 'blush', 'board', 'boars', 'boast', 'boats', 'boded', 
    'bodes', 'bogey', 'bogie', 'bogus', 'boils', 'bolts', 'bombs', 'bonds', 'boned', 'bones', 
    'bongo', 'bongs', 'bonks', 'bonus', 'booed', 'books', 'booms', 'boomy', 'boons', 'boost', 
    'booth', 'boots', 'booty', 'booze', 'boozy', 'borax', 'bored', 'borer', 'bores', 'boric', 
    'boron', 'bosom', 'bossy', 'botch', 'bough', 'bound', 'bouts', 'bovid', 'bowed', 'bowel',
    'bower', 'bowls', 'boxed', 'boxer', 'boxes', 'bozos', 'brace', 'brads', 'brags', 'braid', 
    'brail', 'brain', 'brake', 'brand', 'brash', 'brass', 'brats', 'brave', 'bravo', 'brawl', 
    'brawn', 'braze', 'bread', 'break', 'breed', 'breve', 'brews', 'briar', 'bribe', 'brick', 
    'bride', 'brief', 'brier', 'brims', 'brine', 'bring', 'brink', 'briny', 'brisk', 'brits', 
    'broad', 'broil', 'broke', 'brood', 'brook', 'broom', 'broth', 'brown', 'brows', 'bruin', 
    'brung', 'brush', 'brute', 'bucko', 'bucks', 'buddy', 'budge', 'bueno', 'buffs', 'buffy', 
    'buggy', 'bugle', 'build', 'built', 'bulbs', 'bulge', 'bulgy', 'bulks', 'bulky', 'bulls', 
    'bully', 'bumps', 'bumpy', 'bunch', 'bungs', 'bunks', 'bunny', 'buoys', 'burbs', 'burka', 
    'burls', 'burly', 'burns', 'burnt', 'burps', 'burpy', 'burqa', 'burrs', 'bursa', 'burst', 
    'bused', 'buses', 'bushy', 'busks', 'busts', 'busty', 'butte', 'butts', 'buxom', 'buyer', 
    'buzzy', 'bylaw', 'bytes', 'byway', 'cabal', 'cabby', 'cabin', 'cable', 'cabob', 'cacao', 
    'cache', 'cacti', 'caddy', 'cadet', 'cafes', 'caged', 'cager', 'cages', 'cagey', 'caked', 
    'cakes', 'cakey', 'calks', 'calls', 'calms', 'calve', 'camel', 'cameo', 'camps', 'campy', 
    'canal', 'candy', 'caned', 'canes', 'canny', 'canoe', 'canon', 'caped', 'caper', 'capes', 
    'capos', 'caput', 'carat', 'carbs', 'cards', 'cared', 'carer', 'cares', 'cargo', 'carol', 
    'carom', 'carps', 'carry', 'carte', 'carts', 'carve', 'cased', 'caser', 'cases', 'casks', 
    'caste', 'casts', 'catch', 'cater', 'catty', 'caulk', 'cause', 'caved', 'caver', 'caves', 
    'cavil', 'cawed', 'cease', 'cedar', 'ceded', 'cedes', 'celeb', 'cella', 'cello', 'cells', 
    'celts', 'cents', 'chads', 'chafe', 'chaff', 'chain', 'chair', 'chais', 'chalk', 'champ', 
    'chant', 'chaos', 'chaps', 'chard', 'charm', 'chart', 'chase', 'chasm', 'chaws', 'cheap', 
    'cheat', 'check', 'cheek', 'cheep', 'cheer', 'chefs', 'chess', 'chest', 'chews', 'chewy', 
    'chick', 'chide', 'chief', 'child', 'chili', 'chill', 'chime', 'chimp', 'china', 'chine',
    'chins', 'chips', 'chirk', 'chiro', 'chirp', 'chive', 'chock', 'choir', 'choke', 'choli', 
    'chomp', 'chops', 'chord', 'chore', 'chose', 'chubs', 'chuck', 'chugs', 'chump', 'chums', 
    'chunk', 'churn', 'chute', 'cider', 'cigar', 'cinch', 'cists', 'cited', 'cites', 'civic', 
    'civil', 'clack', 'clads', 'claim', 'clamp', 'clams', 'clang', 'clank', 'clans', 'claps', 
    'clash', 'clasp', 'class', 'clave', 'claws', 'clays', 'clean', 'clear', 'cleat', 'cleek', 
    'clefs', 'cleft', 'clept', 'clerk', 'click', 'cliff', 'climb', 'cline', 'cling', 'clink', 
    'clips', 'cloak', 'clock', 'clods', 'clogs', 'clone', 'clops', 'close', 'cloth', 'clots', 
    'cloud', 'clout', 'clove', 'clown', 'clubs', 'cluck', 'clued', 'clues', 'clump', 'clung', 
    'clunk', 'coach', 'coast', 'coats', 'cobra', 'cocky', 'cocoa', 'coded', 'coder', 'codes', 
    'codex', 'coeds', 'coifs', 'coils', 'coins', 'coked', 'cokes', 'colas', 'colby', 'colds', 
    'colon', 'color', 'colts', 'combo', 'combs', 'comer', 'comes', 'comet', 'comfy', 'comic', 
    'comma', 'comps', 'condo', 'coned', 'cones', 'coney', 'conga', 'cooed', 'cooks', 'cooky', 
    'cools', 'cooly', 'coops', 'copay', 'coped', 'coper', 'copes', 'coral', 'cords', 'cored', 
    'corer', 'cores', 'corgi', 'corks', 'corns', 'corny', 'corps', 'corse', 'couch', 'cough', 
    'could', 'count', 'coupe', 'coups', 'court', 'couth', 'coved', 'cover', 'coves', 'covet', 
    'covid', 'cowed', 'crabs', 'crack', 'craft', 'cramp', 'crams', 'crane', 'crank', 'craps', 
    'crash', 'crass', 'crate', 'crave', 'crawl', 'craws', 'craze', 'crazy', 'creak', 'cream', 
    'credo', 'creds', 'creed', 'creek', 'creep', 'creme', 'crepe', 'crept', 'cress', 'crest', 
    'crews', 'cribs', 'crick', 'cried', 'crier', 'cries', 'crime', 'crimp', 'crisp', 'croak', 
    'crock', 'crony', 'crook', 'croon', 'crops', 'cross', 'croup', 'crowd', 'crown', 'crows', 
    'crude', 'cruel', 'crumb', 'crunk', 'crush', 'crust', 'crypt', 'cubby', 'cubed', 'cubes', 
    'cubic', 'cuffs', 'cuing', 'cukes', 'cults', 'cumin', 'cupid', 'curbs', 'curds', 'curdy', 
    'cured', 'curer', 'cures', 'curls', 'curly', 'curry', 'curse', 'curve', 'curvy', 'cushy', 
    'cusps', 'cuter', 'cutes', 'cutey', 'cutty', 'cutup', 'cyans', 'cyber', 'cycle', 'cynic', 
    'cysts', 'czars', "dusty", "dutch", "duvet", "dwarf", "dweeb", "dwell", "dwelt", "dying",
    "daddy", "dahls", "daily", "dairy", "daisy", "dames", "damns", "damps", "dance", "dandy",
    "dangs", "dared", "darer", "dares", "darks", "darns", "darts", "dashi", "dashy", "dated",
    "dater", "dates", "datum", "daunt", "dawns", "dazed", "dazes", "deads", "deals", "dealt",
    "deans", "dears", "death", "debit", "debts", "debug", "debut", "decaf", "decal", "decay",
    "decks", "decor", "decos", "decoy", "decry", "deeds", "deems", "deers", "deets", "defer",
    "defog", "degas", "deify", "deism", "deist", "deity", "deked", "dekes", "delay", "delis",
    "dells", "delly", "delta", "delts", "delve", "demon", "demos", "demur", "denim", "dense",
    "dents", "depot", "depth", "derby", "desks", "deter", "detox", "deuce", "devil", "dewed",
    "dhals", "dials", "diary", "diced", "dicer", "dices", "dicey", "dicks", "dicky", "didos",
    "diets", "digit", "dikes", "dills", "dilly", "dimer", "dimes", "dimly", "dined", "diner",
    "dines", "dinge", "dingo", "dings", "dingy", "dinks", "dinky", "dints", "diode", "dippy",
    "dipso", "direr", "dirts", "dirty", "disco", "discs", "dishy", "disks", "ditch", "ditsy",
    "ditto", "ditty", "ditzy", "divas", "dived", "diver", "dives", "divot", "divvy", "dizzy",
    "dobby", "dobro", "docks", "dodge", "dodgy", "dodos", "doers", "doest", "doeth", "doffs",
    "doggo", "doggy", "dogie", "dogma", "doily", "doing", "dojos", "dolce", "dolls", "dolly",
    "dolts", "domed", "domes", "dongs", "donor", "donut", "dooly", "dooms", "doomy", "doors",
    "doozy", "doped", "doper", "dopes", "dopey", "dorks", "dorky", "dorms", "dosed", "doser",
    "doses", "dotal", "doted", "doter", "dotes", "dotty", "doubt", "douce", "dough", "douse",
    "doves", "dowdy", "dowed", "dowel", "dower", "downs", "downy", "dowry", "dowse", "doyly",
    "dozed", "dozen", "dozer", "dozes", "drabs", "draft", "drags", "drain", "drake", "drama",
    "drank", "drape", "drats", "drawl", "drawn", "draws", "dread", "dream", "dress", "dried",
    "drier", "dries", "drift", "drill", "drink", "drips", "drive", "droid", "droll", "drone",
    "drool", "droop", "drops", "drove", "drown", "drubs", "drugs", "druid", "drums", "drunk",
    "drupe", "dryer", "dryly", "duals", "ducks", "ducky", "ducts", "dudes", "duels", "duets",
    "duffs", "duked", "dukes", "dulls", "dully", "dumbs", "dummy", "dumps", "dumpy", "dunce",
    "dunes", "dungs", "dungy", "dunks", "duped", "duper", "dupes", "duple", "dusks", "dusky",
    "dusts", "expat", "expel", "expos", "extol", "extra", "exude", "exult", "eyers", "exons",
    "eager", "eagle", "eared", "earls", "early", "earns", "earth", "eased", "eases", "eaten",
    "eater", "eaved", "eaves", "ebbed", "ebony", "eched", "eches", "echos", "ecrus", "edged",
    "edger", "edges", "edict", "edify", "edits", "eerie", "egged", "egger", "eight", "eject",
    "elate", "elbow", "elder", "elect", "elegy", "elite", "elope", "elude", "elves", "email",
    "embed", "ember", "emcee", "emery", "emits", "emmet", "emote", "empty", "enact", "enate",
    "ended", "ender", "endow", "endue", "enema", "enemy", "enjoy", "enrol", "ensue", "enter",
    "entry", "envoy", "enzym", "epics", "epoch", "epoxy", "equal", "equip", "erase", "erect",
    "ergot", "erode", "erred", "error", "erupt", "essay", "esses", "ether", "ethic", "ethos",
    "ethyl", "euros", "evade", "evens", "event", "evert", "every", "evict", "evils", "evoke",
    "exact", "exalt", "exams", "excel", "execs", "exert", "exile", "exist", "exits", "fuzes",
    "fable", "faced", "faces", "facet", "facia", "facts", "faded", "fader", "fades", "fails",
    "faint", "fairs", "fairy", "faith", "faked", "faker", "fakes", "fakey", "falls", "false",
    "famed", "fames", "fancy", "fanes", "fangs", "farce", "fared", "farer", "fares", "farms",
    "farts", "fasts", "fatal", "fated", "fates", "fatly", "fatso", "fatty", "fault", "fauna",
    "fauns", "faves", "favor", "fawns", "fawny", "faxed", "faxes", "fazed", "fazes", "fears",
    "feast", "feats", "fecal", "feces", "feeds", "feels", "feign", "feint", "feist", "fella",
    "fells", "felon", "felts", "femes", "femme", "femur", "fence", "fends", "feral", "ferns",
    "ferry", "fetal", "fetch", "fetor", "fetus", "feuds", "fever", "fewer", "fiats", "zippy", 
    "fiber", "ficus", "field", "fiend", "fiery", "fifth", "fifty", "fight", "filed", "filer",
    "files", "filet", "fills", "films", "filmy", "filth", "filum", "final", "finch", "finds",
    "fined", "finer", "fines", "fired", "firer", "fires", "firms", "first", "fishy", "fists",
    "fitly", "fiver", "fives", "fixed", "fixer", "fixes", "fixit", "fizzy", "fjord", "flabs",
    "flack", "flags", "flail", "flair", "flake", "flaky", "flame", "flams", "flank", "flaps",
    "flare", "flash", "flask", "flats", "flaws", "flays", "fleas", "fleck", "fleer", "flees",
    "fleet", "flesh", "flews", "flick", "flies", "fling", "flint", "flips", "flirt", "flits",
    "float", "flock", "flogs", "flood", "floor", "flops", "flora", "floss", "flour", "flout",
    "flown", "flows", "flubs", "flues", "fluff", "fluid", "fluke", "fluky", "flume", "flung",
    "flush", "flute", "fluty", "flyby", "flyer", "foals", "foams", "foamy", "focal", "focus",
    "foggy", "foils", "folds", "folks", "folky", "folly", "fonds", "fondu", "fonts", "foods",
    "fools", "foots", "footy", "foray", "force", "fords", "forge", "forgo", "forks", "forms",
    "forte", "forth", "forts", "forty", "forum", "fouls", "found", "fount", "fours", "fowls",
    "foxed", "foxes", "foyer", "frags", "frail", "frame", "franc", "frank", "frats", "fraud",
    "frays", "freak", "freed", "freer", "frees", "fresh", "frets", "friar", "fried", "frier",
    "fries", "frill", "frisk", "fritz", "frock", "frogs", "frond", "front", "frost", "froth",
    "frown", "froze", "fruit", "fryer", "fudge", "fuels", "fujis", "fully", "fumed", "fumer",
    "fumes", "funds", "fungi", "funks", "funky", "funny", "furls", "furor", "furry", "fused",
    "fuses", "fussy", "futon", "fuzed", "gusty", "gutsy", "guyed", "gybed", "gybes", "gypsy",
    "gabby", "gable", "gaffe", "gaffs", "gaged", "gager", "gages", "gains", "gaits", "gales",
    "galop", "gamed", "gamer", "games", "gamey", "gamma", "gamut", "gangs", "gaped", "gapes",
    "gases", "gasps", "gassy", "gated", "gates", "gator", "gaudy", "gauge", "gault", "gaunt",
    "gauze", "gavel", "gawks", "gayly", "gazed", "gazer", "gazes", "gears", "gecko", "geeks",
    "geeky", "geese", "genes", "genie", "genom", "genre", "gents", "genus", "germs", "germy",
    "gests", "getup", "ghost", "ghoul", "giant", "giddy", "gifts", "gills", "gimps", "gimpy",
    "gipsy", "girds", "girls", "girly", "girth", "gists", "given", "giver", "gives", "gizmo",
    "glade", "glads", "gland", "glans", "glare", "glass", "glaze", "gleam", "glean", "gleek",
    "glide", "glint", "glitz", "gloat", "globe", "globs", "gloom", "glory", "gloss", "glove",
    "glows", "glued", "glues", "gluey", "glyph", "gnarl", "gnash", "gnats", "gnaws", "gnome",
    "goals", "goats", "gobos", "godly", "going", "golds", "golfs", "golly", "gonad", "goner",
    "gongs", "gonzo", "goods", "goody", "gooey", "goofs", "goofy", "goons", "goopy", "goose",
    "goosy", "gored", "gores", "gorge", "gouge", "gourd", "gouts", "gouty", "gowns", "grabs",
    "grace", "grade", "grads", "graft", "grail", "grain", "grams", "grand", "grant", "grape",
    "graph", "grasp", "grass", "grate", "grave", "gravy", "grays", "graze", "great", "greed",
    "greek", "green", "greet", "grids", "grief", "grift", "grill", "grime", "grimy", "grind",
    "grins", "gripe", "grips", "grits", "groan", "groat", "groin", "groom", "grope", "gross",
    "group", "grout", "grove", "growl", "grown", "grows", "grubs", "gruel", "gruff", "grunt",
    "guard", "guava", "guess", "guest", "guide", "guild", "guile", "guilt", "guise", "gulag",
    "gulch", "gulfs", "gulls", "gulps", "gumbo", "gummy", "gunks", "gunky", "gunny", "guppy",
    "gurus", "gushy", "gusto", "gusts", "hydro", "hyena", "hymns", "hyped", "hyper", "hydra",
    "habit", "haiku", "hails", "hairs", "hairy", "hakes", "halls", "halos", "halts", "halve",
    "hands", "handy", "hangs", "hanks", "hanky", "happy", "hards", "hardy", "hared", "harem",
    "hares", "harks", "harls", "harms", "harps", "harsh", "harts", "haste", "hasty", "hatch",
    "hated", "hater", "hates", "hauls", "haunt", "haute", "haven", "havoc", "hawed", "hawks",
    "hayed", "hayer", "hazed", "hazel", "hazer", "hazes", "heads", "heady", "heals", "heaps",
    "heard", "hears", "heart", "heats", "heave", "heavy", "hedge", "heeds", "heels", "hefty",
    "heirs", "heist", "helio", "helix", "hello", "helms", "helps", "hence", "henna", "herbs",
    "herds", "heron", "heros", "hertz", "hexed", "hexes", "hicks", "hides", "highs", "hiked",
    "hiker", "hikes", "hills", "hilly", "hilts", "hinds", "hinge", "hints", "hippo", "hippy",
    "hired", "hirer", "hires", "hissy", "hitch", "hived", "hives", "hoagy", "hoard", "hoars",
    "hobby", "hobos", "hocks", "hocus", "hodad", "hoers", "hoist", "hoked", "hokey", "holds",
    "holed", "holes", "holey", "holla", "holly", "homed", "homer", "homes", "homey", "honed",
    "honer", "hones", "honey", "honks", "honky", "honor", "hooch", "hoods", "hoody", "hoofs",
    "hooka", "hooks", "hooky", "hoops", "hoots", "hoped", "hopes", "hoppy", "horns", "horny",
    "horse", "horsy", "hosed", "hoses", "hosts", "hotel", "hotly", "hound", "hours", "house",
    "hover", "howdy", "howls", "hoyas", "hubby", "hucks", "huffs", "huger", "hulas", "hulks",
    "hulky", "hulls", "human", "humid", "humor", "humph", "humps", "humus", "hunch", "hunks",
    "hunky", "hunts", "hurls", "hurry", "hurts", "husks", "husky", "hussy", "hutch", "ivies",
    "icier", "icily", "icing", "icons", "ideal", "ideas", "idiom", "idiot", "idled", "idler",
    "idles", "idols", "igloo", "iliad", "iller", "image", "imbed", "imbue", "imply", "inane",
    "incur", "index", "indie", "inept", "inert", "infer", "ingot", "inked", "inlay", "inlet",
    "inner", "input", "inset", "intro", "iodin", "ionic", "iotas", "irate", "irked", "irons",
    "irony", "isles", "islet", "issue", "itchy", "items", "ivied", "jumpy", "junks", "junky", 
    "jacks", "jaded", "jades", "jails", "jammy", "janes", "jaunt", "jawed", "jazzy", "jeans",
    "jeers", "jells", "jelly", "jerks", "jerky", "jests", "jetty", "jewel", "jibed", "jiber",
    "jibes", "jiffy", "jills", "jilts", "jimmy", "jinks", "jived", "jiver", "jives", "jocks",
    "joeys", "johns", "joins", "joint", "joist", "joked", "joker", "jokes", "jolly", "jolts",
    "joule", "joust", "jowls", "joyed", "judge", "juice", "juicy", "juked", "jukes", "julep",
    "jumbo", "jumps", "knock", "knoll", "knots", "known", "knows", "knurl", "koala", "kooky",
    "kabob", "kafir", "kakis", "kales", "kaput", "karat", "karma", "kayak", "kazoo", "chows",
    "kebab", "kebob", "keels", "keeps", "kefir", "kelly", "kelps", "kempt", "keyed", "khaki",
    "kicks", "kiddo", "kiddy", "kills", "kilns", "kilos", "kilts", "kinds", "kings", "kinks",
    "kinky", "kiosk", "kissy", "kites", "kitty", "kiwis", "knack", "knaps", "knave", "knead",
    "kneed", "kneel", "knees", "knelt", "knife", "knits", "knobs", "lycee", "lying", "lyres",
    "label", "labor", "laced", "laces", "lacey", "lacks", "laded", "laden", "lader", "lades",
    "ladle", "lairs", "laith", "laity", "lakes", "lambs", "lamer", "lamps", "lance", "trade",
    "lands", "lanes", "lanky", "lapel", "lapse", "larch", "lards", "large", "larks", "larva",
    "lased", "laser", "lases", "lasso", "lasts", "latch", "laten", "later", "latex", "lathe",
    "latte", "laugh", "lawed", "lawns", "laxer", "laxly", "layed", "layer", "layup", "lazed",
    "lazes", "leach", "leads", "leafs", "leafy", "leaks", "leaky", "leans", "leant", "leaps",
    "leapt", "learn", "lears", "leary", "lease", "leash", "least", "leave", "ledge", "leech",
    "leeks", "leery", "lefts", "lefty", "legal", "leggy", "legit", "lemon", "lemur", "lends",
    "lense", "leper", "letch", "letup", "levee", "level", "lever", "liars", "libel", "libra",
    "licit", "licks", "liege", "lifer", "lifts", "liger", "light", "liked", "liken", "likes",
    "lilac", "limas", "limbo", "limbs", "limed", "limes", "limey", "limit", "limps", "lined",
    "linen", "liner", "lines", "lingo", "links", "lions", "lipid", "lippy", "lisps", "lists",
    "liter", "litre", "lived", "liven", "liver", "lives", "livid", "llama", "loads", "loafs",
    "loans", "lobby", "lobed", "lobes", "local", "lochs", "locks", "lodge", "lofts", "lofty",
    "logic", "logos", "loins", "lolly", "loner", "longs", "loofa", "looks", "looms", "loony",
    "loops", "loopy", "loose", "loots", "lords", "loser", "loses", "lotto", "lousy", "loved",
    "lover", "loves", "lowed", "lower", "lowly", "loyal", "lubed", "lubes", "lucid", "lucks",
    "lucky", "lulls", "lumen", "lumps", "lumpy", "lunar", "lunch", "lunge", "lungs", "lupus",
    "lurch", "lured", "lures", "lurid", "lurks", "lusts", "lutes", "mutes", "mutts", "myopy",
    "macaw", "maced", "maces", "macho", "machs", "macks", "macro", "madam", "madly", "myrrh",
    "madre", "mafia", "mages", "magic", "magma", "magot", "maids", "mails", "maims", "mains",
    "maize", "major", "maker", "makes", "males", "malls", "malms", "malmy", "malts", "malty",
    "mamas", "mamba", "mamma", "mammy", "maned", "manes", "mange", "mango", "mangy", "mania",
    "manic", "manly", "manna", "manor", "maple", "march", "marcs", "mares", "marks", "marls",
    "marly", "marry", "marse", "marsh", "marts", "mashy", "masks", "mason", "masse", "masts",
    "match", "mated", "mater", "mates", "matey", "matte", "matza", "mauds", "mauls", "mauve",
    "maven", "mawed", "maxes", "maxim", "maybe", "mayor", "mazed", "mazes", "meads", "meals",
    "mealy", "means", "meant", "meany", "meats", "meaty", "mecca", "medal", "media", "medic",
    "meeds", "meets", "melds", "melee", "melon", "melts", "memes", "memos", "mends", "mensa",
    "mense", "menus", "meows", "mercy", "meres", "merge", "merit", "merks", "merle", "merls",
    "merry", "messy", "metal", "meter", "metro", "mewed", "micro", "midge", "midst", "miens",
    "miffs", "might", "miked", "mikes", "milch", "miler", "miles", "milks", "milky", "mills",
    "mimed", "mimer", "mimes", "mimic", "mince", "minds", "mined", "miner", "mines", "minis",
    "minks", "minny", "minor", "mints", "minty", "minus", "mired", "mires", "mirks", "mirky",
    "mirth", "miser", "mises", "missy", "mists", "misty", "miter", "mites", "mitts", "mixed",
    "mixer", "mixes", "mixup", "mizen", "moans", "moats", "mocha", "mocks", "modal", "model",
    "modem", "modes", "modus", "mogul", "moils", "moist", "molar", "molds", "moldy", "moles",
    "molly", "molts", "momma", "mommy", "mondo", "money", "mongo", "monos", "monte", "month",
    "mooch", "moods", "moody", "mooed", "moons", "moors", "moose", "moots", "moped", "moper",
    "mopes", "mopey", "moral", "mores", "morns", "moron", "morph", "morse", "morts", "mosey",
    "mossy", "mosts", "motel", "motes", "motet", "moths", "motif", "motor", "motto", "mould",
    "moult", "mound", "mount", "mourn", "mouse", "mousy", "mouth", "moved", "mover", "moves",
    "movie", "mowed", "mower", "moxie", "mucks", "mucky", "mucus", "muddy", "muffs", "muggs",
    "muggy", "mulch", "muled", "mules", "mulls", "mummy", "mumps", "mumus", "munch", "mural",
    "mured", "mures", "murex", "murid", "murks", "murky", "mused", "muser", "muses", "mushy",
    "music", "musks", "musky", "musts", "musty", "mutch", "muted", "nutsy", "nutty", "nylon",
    "naans", "nacho", "naggy", "nails", "naive", "naked", "named", "names", "nance", "nancy",
    "nanny", "napes", "nappy", "narco", "narcs", "nards", "narks", "nasal", "nasty", "natal",
    "naval", "navel", "neaps", "nears", "neath", "neats", "necks", "needs", "needy", "neigh",
    "nelly", "neons", "nerds", "nerdy", "nerve", "nests", "never", "newer", "newly", "newsy",
    "newts", "nexus", "nicer", "niche", "nicks", "niece", "nieve", "nifty", "nighs", "night",
    "nihil", "nines", "ninja", "ninny", "ninth", "nippy", "nites", "nitro", "nixed", "nixes",
    "nobby", "noble", "nobly", "nocks", "nodal", "nodes", "noels", "nohow", "noise", "zings", 
    "noisy", "nomad", "nooks", "nooky", "noons", "noose", "norms", "north", "nosed", "noses",
    "nosey", "notch", "noted", "notes", "nouns", "novel", "nubby", "nudes", "nudge", "nuked",
    "nukes", "nulls", "numbs", "numen", "nurds", "nurls", "nurse", "oxlip", "oyers", "oxide",
    "oaken", "oared", "oases", "oasis", "oasts", "oaths", "obese", "obeys", "obits", "oboes",
    "occur", "ocean", "octal", "octan", "octet", "oculi", "odder", "oddly", "odors", "piles",
    "offed", "offer", "often", "ofter", "ogled", "ogler", "ogles", "ogres", "oiled", "oiler",
    "oinks", "olden", "older", "oldie", "olive", "ombre", "omega", "omens", "omits", "onery",
    "onion", "onset", "oohed", "oomph", "oozed", "oozes", "opals", "opens", "opera", "opine",
    "oping", "opium", "opted", "optic", "orals", "orate", "orbed", "orbit", "orcas", "orcin",
    "order", "organ", "ortho", "orzos", "osmic", "whine", "other", "otter", "ought", "ounce",
    "ousts", "outdo", "outed", "outer", "outgo", "ovals", "ovary", "ovate", "ovens", "overs",
    "overt", "ovine", "ovule", "owing", "owlet", "owned", "owner", "oxbow", "oxeye", "pyres",
    "paced", "pacer", "paces", "packs", "pacts", "paddy", "padre", "pagan", "paged", "pager",
    "pages", "pails", "pains", "paint", "pairs", "paled", "pales", "palms", "palsy", "panda",
    "paned", "panel", "panes", "pangs", "panic", "pansy", "pants", "panty", "papal", "papas",
    "paper", "parch", "pared", "parer", "pares", "parka", "parks", "parse", "parts", "party",
    "parvo", "passe", "pasta", "pasts", "pasty", "patch", "paths", "patio", "patsy", "patty",
    "pause", "paved", "paver", "paves", "pawed", "pawns", "payed", "payee", "payer", "peace",
    "peach", "peaks", "peaky", "peals", "pearl", "pears", "peavy", "pecan", "pecks", "pedal",
    "peeks", "peels", "peeps", "peers", "peeve", "pelts", "penal", "pends", "penne", "penny",
    "peons", "peony", "peppy", "perch", "peril", "perks", "perky", "perms", "perps", "perry",
    "pesky", "pesos", "pesto", "pests", "pesty", "petal", "peter", "petit", "petty", "pewee",
    "phase", "phone", "phono", "phony", "photo", "piano", "picks", "picky", "piece", "piers",
    "piety", "piggy", "pigmy", "piked", "piker", "pikes", "pilaf", "piled", "pills", "pilot",
    "pimps", "pinch", "pined", "pines", "piney", "pings", "pinks", "pinky", "pinot", "pinto",
    "pints", "pinup", "pious", "piped", "piper", "pipes", "pipet", "pique", "pitas", "pitch",
    "pithy", "pivot", "pixel", "pixie", "pizza", "place", "plaid", "plain", "plane", "plank",
    "plans", "plant", "plate", "plays", "plaza", "plead", "pleas", "pleat", "plebe", "plebs",
    "plied", "plier", "plies", "plink", "plods", "plonk", "plops", "plots", "plows", "ploys",
    "pluck", "plugs", "plumb", "plume", "plump", "plums", "plumy", "plunk", "plush", "plyer",
    "poach", "pocks", "poems", "poets", "point", "poise", "poked", "poker", "pokes", "pokey",
    "polar", "poled", "poler", "poles", "polio", "polis", "polka", "polls", "polos", "polyp",
    "ponce", "ponds", "pones", "pongs", "pooch", "poofs", "poohs", "pooka", "pools", "poons",
    "poops", "popes", "poppa", "poppy", "porch", "pored", "pores", "porks", "porky", "porno",
    "ports", "posed", "poser", "poses", "posit", "posse", "posts", "potty", "pouch", "poult",
    "pound", "pours", "pouts", "pouty", "power", "poyou", "prank", "prawn", "prays", "preps",
    "press", "preys", "price", "prick", "pricy", "pride", "pried", "prier", "pries", "prime",
    "primo", "primp", "prims", "print", "prior", "prism", "priss", "privy", "prize", "probe",
    "prods", "profs", "promo", "proms", "prone", "prong", "proof", "props", "prose", "proud",
    "prove", "prowl", "prows", "proxy", "prude", "prune", "pryer", "psalm", "pshaw", "psoas",
    "psych", "pubes", "pubic", "pucks", "pudgy", "puffs", "puffy", "puked", "pukes", "pulls",
    "pulps", "pulpy", "pulse", "pumas", "pumps", "punch", "punks", "punky", "punny", "punts",
    "pupae", "pupal", "pupas", "pupil", "puppy", "puree", "purer", "purge", "purrs", "purse",
    "pushy", "putts", "putty", "pygmy", "pylon", "quips", "quirk", "quite", "quits", "quota",
    "quack", "quads", "quags", "quail", "qualm", "quant", "quark", "quart", "quash", "quasi",
    "quate", "quays", "queen", "queer", "quell", "query", "quest", "queue", "quick", "quids",
    "quiet", "quill", "quilt", "rungs", "runts", "rupee", "rural", "rusts", "rumor", "rumps",
    "rabbi", "rabid", "raced", "racer", "races", "racks", "radar", "radii", "radio", "radon",
    "rafts", "raged", "rages", "raids", "rails", "rains", "rainy", "raise", "raked", "rakes",
    "rales", "rally", "ralph", "ramen", "ramps", "ranch", "randy", "range", "rangy", "ranks",
    "rants", "rapid", "rarer", "rasps", "raspy", "rated", "rates", "ratio", "ravel", "raven",
    "raver", "raves", "rawer", "razed", "razes", "razor", "reach", "react", "readd", "reads",
    "ready", "realm", "reals", "reams", "reaps", "rears", "rebar", "rebel", "rebut", "recap",
    "recon", "recur", "redid", "redos", "redye", "reeds", "reedy", "reefs", "reeks", "reels",
    "refer", "refit", "refry", "regal", "rehab", "reign", "reins", "rekey", "relax", "relay",
    "relic", "remit", "remix", "renal", "rends", "renew", "rents", "repay", "repel", "reply",
    "repos", "rerun", "reset", "resin", "resow", "rests", "retro", "retry", "revel", "rewax",
    "rewed", "rhino", "rhyme", "riced", "rider", "rides", "ridge", "riffs", "rifle", "rifts",
    "right", "rigid", "rigor", "riled", "riles", "rinds", "rings", "rinks", "rinse", "riots",
    "ripen", "risen", "riser", "rises", "risks", "risky", "rites", "ritzy", "rival", "river",
    "rivet", "roach", "roads", "roams", "roars", "roast", "robed", "robes", "robin", "robot",
    "rocks", "rocky", "rodeo", "roger", "rogue", "roles", "rolls", "romeo", "romps", "roofs",
    "rooms", "roomy", "roose", "roost", "roots", "roped", "ropes", "ropey", "roque", "rosed",
    "roses", "rosin", "rotor", "rotos", "rouge", "rough", "round", "roust", "route", "routs",
    "roved", "rover", "roves", "rowdy", "rowed", "rower", "royal", "ruble", "ruder", "ruffs",
    "rugby", "ruing", "ruins", "ruled", "ruler", "rules", "rumba", "rummy", "synth", "syren",
    "saber", "sable", "sacks", "sadly", "safer", "safes", "saggy", "sails", "saint", "sakes",
    "salad", "salal", "sales", "sally", "salon", "salsa", "salts", "salty", "salve", "samba",
    "sands", "sandy", "sappy", "sarge", "sassy", "satin", "sauce", "saucy", "sauna", "saute",
    "saved", "saver", "saves", "savor", "savvy", "sawed", "saxes", "sayer", "scabs", "scald",
    "scale", "scalp", "scaly", "scamp", "scams", "scans", "scape", "scare", "scarf", "scars",
    "scary", "scats", "scene", "scent", "schmo", "scion", "scoff", "scold", "scone", "scoop",
    "scoot", "scope", "score", "scour", "scout", "scowl", "scrag", "scram", "scrap", "scree",
    "screw", "scrim", "scrip", "scrub", "scrum", "scuba", "scuff", "sculk", "sculp", "seals",
    "seams", "sears", "seats", "sects", "seeds", "seedy", "seeks", "seems", "seeps", "seize",
    "selah", "sells", "semen", "semis", "sends", "sense", "sepia", "serfs", "serif", "serum",
    "serve", "setup", "seven", "sever", "sewed", "sewer", "sexes", "sexts", "shack", "shade",
    "shady", "shaft", "shags", "shake", "shaky", "shale", "shall", "shame", "shams", "shank",
    "shape", "shard", "share", "shark", "sharp", "shaul", "shave", "shawl", "shear", "sheds",
    "sheen", "sheep", "sheer", "sheet", "sheik", "shelf", "sheol", "shews", "shied", "shies",
    "shift", "shims", "shine", "shins", "shiny", "ships", "shire", "shirk", "shirt", "shlep",
    "shock", "shoed", "shoes", "shone", "shook", "shoos", "shoot", "shops", "shore", "shorn",
    "short", "shots", "shout", "shove", "shown", "shows", "showy", "shred", "shrew", "shrub",
    "shrug", "shtik", "shuck", "shuns", "shush", "shute", "shuts", "shyly", "sicko", "sicks",
    "sided", "sides", "sidle", "siege", "sieve", "sifts", "sighs", "sight", "sigma", "signs",
    "sikes", "silks", "silky", "sills", "silly", "silos", "silty", "since", "sines", "sinew",
    "singe", "sings", "sinks", "sinus", "sired", "siren", "sires", "sissy", "sitar", "sited",
    "sites", "situp", "sixes", "sixth", "sixty", "sized", "sizes", "skags", "skate", "skeet",
    "skews", "skids", "skier", "skies", "skiff", "skill", "skimp", "skims", "skink", "skins",
    "skips", "skirt", "skits", "skulk", "skull", "skunk", "slabs", "slack", "slain", "slant",
    "slaps", "slash", "slate", "slats", "slave", "slaws", "slays", "sleds", "sleek", "sleep",
    "sleet", "slept", "slice", "slick", "slide", "slime", "slims", "slimy", "sling", "slink",
    "slips", "slits", "slobs", "slogs", "sloop", "slope", "slops", "slosh", "sloth", "slots",
    "slows", "slugs", "slump", "slums", "slung", "slurb", "slurp", "slurs", "slush", "slyly",
    "smack", "small", "smart", "smash", "smear", "smell", "smelt", "smile", "smirk", "smite",
    "smith", "smock", "smoke", "smoky", "smolt", "snack", "snafu", "snags", "snail", "snake",
    "snaky", "snaps", "snare", "snark", "snarl", "sneak", "sneer", "snide", "sniff", "snipe",
    "snips", "snobs", "snogs", "snoop", "snore", "snort", "snots", "snout", "snows", "snowy",
    "snubs", "snuck", "snuff", "soaks", "soaps", "soapy", "soars", "sober", "socks", "sofas",
    "softy", "soggy", "soils", "solar", "soled", "soles", "solid", "solos", "solve", "sonar",
    "songs", "sonic", "sooth", "sooty", "sorry", "sorts", "souls", "sound", "soups", "soupy",
    "sours", "south", "sowed", "sower", "space", "spade", "spake", "spank", "spans", "spare",
    "spark", "spars", "spasm", "spats", "spawn", "spays", "speak", "spear", "speck", "specs",
    "speed", "spell", "spelt", "spend", "spent", "sperm", "spews", "spice", "spicy", "spied",
    "spiel", "spier", "spies", "spike", "spiky", "spill", "spilt", "spine", "spins", "spiny",
    "spire", "spirt", "spite", "spits", "splat", "split", "spoil", "spoke", "spoof", "spook",
    "spool", "spore", "sport", "spots", "spout", "spray", "spree", "sprig", "sprit", "spuds",
    "spume", "spunk", "spurn", "spurs", "spurt", "squad", "squat", "squib", "squid", "stabs",
    "stack", "staff", "stage", "stags", "stain", "stair", "stake", "stale", "stalk", "stall",
    "stamp", "stand", "stank", "staph", "stare", "stark", "stars", "start", "stash", "state",
    "stats", "stave", "stays", "stead", "steak", "steal", "steam", "steed", "steel", "steep",
    "steer", "stein", "stems", "steps", "stern", "stews", "stick", "stiff", "still", "stimy",
    "sting", "stink", "stint", "stirs", "stock", "stogy", "stoic", "stoke", "stole", "stomp",
    "stone", "stony", "stood", "stool", "stoop", "stops", "stork", "storm", "story", "stout",
    "stove", "stows", "strap", "straw", "stray", "strep", "strip", "strum", "strut", "stubs",
    "stuck", "studs", "study", "stuff", "stump", "stung", "stunk", "stuns", "stunt", "stupe",
    "styed", "styes", "style", "stymy", "suave", "sucks", "sucre", "sudor", "sudsy", "suede",
    "sugar", "suing", "suite", "suits", "sulks", "sulky", "sumos", "sunny", "sunup", "super",
    "supes", "surer", "surfs", "surge", "surly", "sushi", "swabs", "swain", "swamp", "swank",
    "swans", "swaps", "sware", "swarm", "swath", "swats", "sways", "swear", "sweat", "sweep",
    "sweet", "swell", "swept", "swift", "swigs", "swill", "swims", "swine", "swing", "swipe",
    "swirl", "swish", "swoon", "swoop", "sword", "swore", "sworn", "swung", "synch", "syncs",
    "tabby", "table", "taboo", "tacet", "tacit", "tacks", "tacky", "tacos", "taffy", "tails",
    "taint", "taken", "taker", "takes", "tales", "talks", "talky", "tally", "talon", "tamed",
    "tamer", "tames", "tamps", "tango", "tangs", "tangy", "tanka", "tanks", "tapas", "taped",
    "tapes", "tardy", "tared", "tares", "tarot", "tarry", "tarts", "tasks", "taste", "tasty",
    "tater", "taunt", "taupe", "taxed", "taxes", "taxis", "teach", "teams", "tears", "teary",
    "tease", "teddy", "teems", "teens", "teeny", "teeth", "tells", "tempo", "temps", "tempt",
    "tends", "tenet", "tenor", "tense", "tenth", "tents", "tepee", "tepid", "terms", "terra",
    "terry", "terse", "tesla", "tests", "testy", "tetra", "texts", "thank", "thaws", "theft",
    "their", "theme", "there", "these", "thick", "thief", "thigh", "thine", "thing", "think",
    "thins", "third", "thong", "thorn", "those", "three", "threw", "throb", "throe", "throw",
    "thuds", "thugs", "thumb", "thump", "thyme", "tiara", "tibia", "ticks", "tidal", "tides",
    "tiers", "tiger", "tight", "tigon", "tikes", "tilde", "tiled", "tiler", "tiles", "tills",
    "tilts", "timed", "timer", "times", "timid", "tined", "tines", "tinge", "tings", "tinny",
    "tints", "tipsy", "tired", "tires", "titan", "tithe", "title", "toads", "toast", "today",
    "toddy", "togas", "toils", "toked", "token", "toker", "tokes", "tolls", "tombs", "tommy",
    "tonal", "toned", "toner", "tones", "tongs", "tonic", "tools", "toons", "tooth", "toots",
    "topaz", "topic", "torah", "torch", "toros", "torso", "torte", "torts", "total", "toted",
    "totem", "totes", "touch", "tough", "tours", "touts", "towed", "towel", "tower", "towns",
    "towny", "toxic", "toxin", "toyed", "trace", "track", "tract", "trail", "train", "trait",
    "tramp", "trams", "traps", "trash", "tread", "treat", "trees", "treks", "trend", "triad",
    "trial", "tribe", "trick", "tried", "tries", "trike", "trims", "trios", "tripe", "trips",
    "troll", "troop", "trope", "trots", "trout", "trove", "truce", "truck", "truer", "truly",
    "trump", "trunk", "truss", "trust", "truth", "tubas", "tubby", "tubed", "tubes", "tucks",
    "tufts", "tulip", "tummy", "tumor", "tuned", "tuner", "tunes", "tungs", "turbo", "turns",
    "turps", "tushy", "tusks", "tutee", "tutor", "tutus", "tuxes", "twang", "tweak", "tweed",
    "tween", "tweet", "twerp", "twice", "twigs", "twill", "twine", "twins", "twiny", "twirl",
    "twirp", "twist", "twits", "tying", "typed", "types", "typos", "usual", "usurp", "utter",
    "udder", "ulcer", "ultra", "umber", "umped", "unarm", "unbox", "uncle", "uncut", "under",
    "undid", "undue", "unfit", "unfix", "ungot", "unify", "union", "unite", "units", "unity",
    "unmet", "unpin", "unset", "untie", "until", "unwed", "unwit", "unzip", "updos", "upend",
    "uplit", "upped", "upper", "upset", "urban", "urged", "urges", "urine", "usage", "users",
    "usher", "using", "voter", "votes", "vowed", "vowel", "vroom", "vulva", "vomit", "voted",
    "vague", "vails", "vales", "valet", "valid", "valor", "value", "valve", "vamps", "vapid",
    "vapor", "vases", "vault", "veeps", "veers", "vegan", "veils", "veins", "veiny", "venal",
    "venge", "venom", "vents", "venue", "verbs", "verge", "verse", "verts", "verve", "vesta",
    "vests", "vexed", "vexes", "vibes", "vicar", "viced", "vices", "video", "viers", "views",
    "vigil", "vigor", "villa", "vined", "vines", "vinyl", "viola", "viper", "viral", "virid",
    "virls", "visas", "visit", "visor", "vista", "vital", "vivid", "vixen", "vizor", "vocal",
    "vodka", "vogue", "voice", "voids", "voila", "voles", "volta", "volts", "wryly", "wurst",
    "wacko", "wacks", "wacky", "waded", "wades", "wafer", "wafts", "waged", "wager", "wages",
    "wagon", "wahoo", "wails", "wains", "waist", "waked", "wakes", "walls", "waltz", "wands",
    "waned", "wanes", "wants", "wards", "wares", "warms", "warns", "warts", "washy", "wasps",
    "waste", "watch", "water", "watts", "waved", "waves", "wavey", "waxed", "waxen", "waxes",
    "wazoo", "weans", "wears", "weary", "weave", "webby", "wedge", "wedgy", "weeds", "weeks",
    "weens", "weeps", "weepy", "weigh", "weird", "welds", "wells", "welts", "wench", "wetly",
    "whack", "whale", "wharf", "whats", "wheat", "wheel", "whens", "where", "which", "whiff",
    "while", "whims", "whiny", "whips", "whirl", "whisk", "white", "whole", "whoop", "whose",
    "wicks", "widen", "wider", "widow", "width", "wield", "wifed", "wills", "willy", "wilts",
    "wimps", "wimpy", "wince", "winch", "winds", "windy", "wines", "wings", "winks", "winos",
    "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wised", "wiser", "wises", "wisps",
    "wispy", "witch", "witty", "wives", "woful", "woken", "wolfs", "woman", "wombs", "women",
    "wonky", "woods", "woody", "wooed", "wooer", "woofs", "wooly", "woops", "woosh", "woozy",
    "words", "wordy", "works", "world", "worms", "worry", "worse", "worst", "worth", "worts",
    "would", "wound", "woven", "wowed", "wraps", "wrath", "wreak", "wreck", "wrens", "wrist",
    "write", "wrong", "wrote", "wrung", "yours", "youth", "yucky", "yummy", "yolky", "young",
    "yacht", "yahoo", "yanks", "yappy", "yards", "yarns", "yawed", "yawns", "yearn", "years",
    "yeast", "yells", "yelps", "yield", "yikes", "yodel", "yokes", "yolks", "zoned", "zones",
    "zebra", "zeros", "zests", "zesty", "zilch", "slang", "laned", "chats", "chars", "stilt",
    "trays", "taper", "paste", "syrup", "shell", "store", "juror", "quote", "slams",
]


// ==========================================================================================================

//                                                                                  Keyboard Button Function

// ==========================================================================================================

// KEYBOARD FUNCTION VARIABLES

document.getElementById("guessBtn").style.pointerEvents = 'none';
let letterRow = 1;
let letterCol = 0;
let lettersPressed = [];
let wrongLetters = [];

// ===============================================================


const keyboard = (letter) => {
    disableGameLevelSelectors();
    timerStart++;
    if (timerStart == 1) timer();

    let letterString = `btn${letter}`;
    let letterButton = document.getElementById(letterString);

    if (lettersPressed.includes(letter) == false && letter != 'xxx') lettersPressed.push(letter);

    if (letter === 'xxx') { // Delete button
        if (soundOn) buttonDeleteAudio.play();
        if(letterCol != 0)
        {
            letterCol--;

            letterButton.animate({
                transform: 'translateX(-.5em) scaleX(1.1)',
            }, {
                duration: 100,      
                iterationCount: 1,
            });

            let rowID = `r${letterRow}c${letterCol}`;
            let square = document.getElementById(rowID);
            square.innerHTML = "";
            document.getElementById("guessBtn").style.pointerEvents = 'none';

            square.animate({
                transform: 'scale(0.96)',
            }, {
                delay: 0,          
                easing: "ease-in-out", 
                duration: 100,        
                iterationCount: 1,     
            });
        } 
    }
    else if (wrongLetters.includes(letter) == false) {
        if (letterCol < 5) {
            if (soundOn) buttonClickAudio.play();

            letterButton.animate({
                transform: 'translateY(-.6em) scaleY(1.1) scaleX(1.1)',
            }, {
                duration: 100,      
                iterationCount: 1,
            });

            let rowID = `r${letterRow}c${letterCol}`;
            let square = document.getElementById(rowID);
            square.innerHTML = letter;

            square.animate({
                borderBottomColor: ["white", "rgb(163, 163, 163)"],
                borderTopColor: ["white", "rgb(163, 163, 163)"],
                borderLeftColor: ["white", "rgb(163, 163, 163)"],
                borderRightColor: ["white", "rgb(163, 163, 163)"],
                backgroundColor: ["rgba(255, 255, 255, 0.24)", "rgba(163, 163, 163, 0)"]
            }, {
                delay: 0,            
                easing: "ease-in-out", 
                duration: 400,      
                iterationCount: 1,    
            });

            square.animate({
                transform: 'scale(1.05)',
            }, {
                easing: "ease-in-out", 
                duration: 200,      
                iterationCount: 1,
            });

            letterCol++;
        }
    }
    if (letterCol == 5) {
        document.getElementById("guessBtn").style.pointerEvents = 'auto';
    }
}



// ==========================================================================================================

//                                                                                  Submit Guess Function

// ==========================================================================================================

// SUBMIT GUESS FUNCTION VARIABLES 

let guesses = 0;
let word = words[arrayIndex].toUpperCase();
let wordCheck = word;
console.log(word);
let correctCount = 0;

// ==========================================

function submitGuess() {
    
    
    let delayCounter = 0;
    guesses++;

    // =========================================================
    /* This section of code checks to see if the word is valid, checking against the list of words in the array */
    
    let userWord = "";
    for (let col = 0; col < 5; col++) {
        let rowID = `r${guesses}c${col}`;
        userWord += document.getElementById(rowID).innerHTML;        
    }

    let validWord = false;
    const validWordCheck = (words.includes(userWord.toLowerCase())) ? validWord = true : wordNotFound();

    // =========================================================



    if (guesses < 7 && validWord == true) {
        // this for loop finds correct letters in correct spots, 
        // then replaces that letter in wordCheck with an underscore
        // in order to check against that in next for loop
        for (let col = 0; col < 5; col++) {
            let rowID = `r${guesses}c${col}`;
            let letterSq = document.getElementById(rowID).innerHTML;
            if (letterSq === word[col]) {
                wordCheck = wordCheck.replace(letterSq, "_");
            }
        }

        // This for loop does the actual verification.
        for (let col = 0; col < 5; col++) {
            
            let rowID = `r${guesses}c${col}`;
            let letterSq = document.getElementById(rowID).innerHTML;
            let keyboardBtnID = `btn${letterSq}`;

            // Turn square green if the letters match in the square and word
            if (word[col] === letterSq) {
                correctCount++;

                if (soundOn) {
                    setTimeout(() => {
                        squareAudio.play();
                    }, delayCounter);
                }

                shareSquares("rightSpot");
                
                let square = document.getElementById(rowID);

                let squareBackgroundColor = square.style.backgroundColor;
                square.animate({
                    backgroundColor: [squareBackgroundColor, colorRightSpot]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });
                
                let keyboardButton = document.getElementById(keyboardBtnID);
                keyboardButton.style.setProperty('--delayTime', delayCounter);
                keyboardButton.classList.add("bgColorRS");


                if (correctCount == 5) {
                    for (let winCol = 0; winCol < 5; winCol++) {
                        let winRowID = `r${guesses}c${winCol}`;
                        let winSquare = document.getElementById(winRowID);
                        winSquare.animate({
                            transform: ['translateY(0em)', 'translateY(-.6em)', 'translateY(0em)'],
                            borderBottomColor: [winSquareBorderColor, winSquareBorderColor, winSquareBorderColor],
                            borderTopColor: [winSquareBorderColor, winSquareBorderColor, winSquareBorderColor],
                            borderLeftColor: [winSquareBorderColor, winSquareBorderColor, winSquareBorderColor],
                            borderRightColor: [winSquareBorderColor, winSquareBorderColor, winSquareBorderColor],
                            //transform: 'rotate(360deg)',
                        }, {
                            delay: 1500 + winCol * 100,            
                            easing: "ease-in-out", 
                            duration: 600,      
                            iterationCount: 1,    
                            fill: "forwards",
                        });
                    }

                    gameOver('won', 2000);

                }
            }

            // Make square yellow if wordCheck contains the letter.
            // This allows for words with more than one of the same letter.
            else if (wordCheck.includes(letterSq)) {
                correctCount = 0;
                if (soundOn) {
                    setTimeout(() => {
                        squareAudio.play();
                    }, delayCounter);
                }
                shareSquares("rightLetter");
                wordCheck = wordCheck.replace(letterSq, "_");
                let square = document.getElementById(rowID);

                let squareBackgroundColor = square.style.backgroundColor;
                square.animate({
                    backgroundColor: [squareBackgroundColor, colorRightLetter]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });

                let keyboardButton = document.getElementById(keyboardBtnID);
                keyboardButton.style.setProperty('--delayTime', delayCounter);
                keyboardButton.classList.add("bgColorRL");
                keyboardButton.classList.remove("bgColorRS");

            }

            // If the word does not contain the letter, then:
            // The square is gray and the keyboard button is disabled.
            // If the word DOES contain the letter, the next 'else if' is run.
            else if (word.includes(letterSq) == false) {
                if (soundOn) {
                    setTimeout(() => {
                        squareAudio.play();
                    }, delayCounter);
                }
                correctCount = 0;
                wrongLetters.push(letterSq);
                shareSquares("gray");
                let square = document.getElementById(rowID);
                let squareBackgroundColor = square.style.backgroundColor;
                square.animate({
                    backgroundColor: [squareBackgroundColor, colorWrong]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1, 
                    fill: "forwards",   
                });
                
                let keyboardButton = document.getElementById(keyboardBtnID);
                keyboardButton.style.setProperty('--delayTime', delayCounter);
                keyboardButton.classList.add("keyboardLetterGrayedOut");

            }

            // If the word DOES contain the letter (and previous 'else if' is bypassed) BUT the wordCheck does NOT,
            // then the square is grayed out but the keyboard is unchanged.
            // This is because the word has more than one of the same letter.
            // This accounts for the user entering multiples of the same letter.
            else if (wordCheck.includes(letterSq) == false) {
                if (soundOn) {
                    setTimeout(() => {
                        squareAudio.play();
                    }, delayCounter);
                }
                correctCount = 0;
                shareSquares("gray");
                let square = document.getElementById(rowID);
                let squareBackgroundColor = square.style.backgroundColor;
                square.animate({
                    backgroundColor: [squareBackgroundColor, "rgb(129, 129, 129)"]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });
            }  
            delayCounter += 300;
        }

        wordCheck = word;

        if (guesses == 6 && correctCount < 5) {
            gameOver('lost', 2000);
        }
    }
    else {
        for (let col = 0; col < 5; col++) {
            let rowID = `r${guesses}c${col}`;
            document.getElementById(rowID).innerHTML = "";

        }
        letterCol = 4;
        letterRow--;
        guesses--;
    }
}

// ==========================================================================================================

//                                                                                         Game Over Function

// ==========================================================================================================

const gameOver = (wonOrLost, gameOverDelay) => {
    clearInterval(timerVar);
    clearInterval(countDown);
    disableIcon(headingRow);
    let gameOverMsg = document.getElementById("gameOverMsg");
    let linkString = "https://www.dictionary.com/browse/" + word;
    let word_link = document.createElement("a");
    word_link.href = linkString;
    word_link.target = '_blank';
    word_link.innerHTML = "See Definition For " + word;
    let par = document.getElementById("showWord");
    par.innerHTML = "";
    par.appendChild(word_link);

    if (wonOrLost === 'won') {
        document.getElementById("gameOver").style.backgroundColor = colorRightSpot;
        gameOverMsg.innerHTML = "You WIN!";
        firstShareLine = "Wurtle in ";
    }
    if (wonOrLost === 'lost') {
        document.getElementById("gameOver").style.backgroundColor = "rgb(54, 54, 54)";
        gameOverMsg.innerHTML = "No Wurtle!";
        firstShareLine = "No Wurtle!";
    }

    $(document).ready(function()
    {
        setTimeout(function()
        {
            if (wonOrLost === 'won' && soundOn) gameWonAudio.play();
            document.getElementById("timer").style.opacity = "0";
            document.getElementById("gameOverMsg").style.display = "block";
            document.getElementById("showWord").style.display = "block";
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("keyboard").style.display = "none";
        }, 
        gameOverDelay);
    });   
    

    setTimeout(function(){
        printShareSquares();
        document.getElementById("shareResults").style.display = "block";
    }, (gameOverDelay + 600));
}



// ==========================================================================================================

//                                                                                         Next Line Function

// ==========================================================================================================


function nextLine() { 
    letterCol = 0;
    letterRow++;
    document.getElementById("guessBtn").style.pointerEvents = 'none';
}

// ==========================================================================================================

//                                                                                    Word Not Found Function

// ==========================================================================================================


function wordNotFound() { 
    let wordNotFoundDiv = document.getElementById("wordNotFound");
    wordNotFoundDiv.style.display = "block";
    let wnfTop = 7.5;
    if (guesses == 2) wnfTop = 16.5;
    if (guesses == 3) wnfTop = 25.6;
    if (guesses == 4) wnfTop = 34.8;
    if (guesses == 5) wnfTop = 44;
    if (guesses == 6) wnfTop = 53.1;
    wordNotFoundDiv.style.top = wnfTop.toString() + "%";

    wordNotFoundDiv.animate({
        transform: 'rotateX(0deg)',
    }, {            
        easing: "ease-in-out", 
        duration: 300,      
        iterationCount: 1,    
        fill: "forwards",
    });

    let displayTimer = setTimeout(function(){
        wordNotFoundDiv.style.display = "none";
        wordNotFoundDiv.animate({
            transform: 'rotateX(90deg)',
        }, {            
            easing: "ease-in-out", 
            duration: 300,      
            iterationCount: 1,    
            fill: "forwards",
        });
    }, 1200);

}



// ==========================================================================================================

//                                                                              Show/Hide Divs Function

// ==========================================================================================================

let directionCounter = 0;
let headingRow = document.getElementById("headingRow");

function showDiv(clickCounter, id, iconAnimate) {
    if (soundOn) buttonClickAudio.play();
    directionCounter += clickCounter;
    let directions = document.getElementById(id);
    let iconToAnimate = document.getElementById(iconAnimate);
    if (directionCounter % 2 != 0) {

        if (guesses > 0 && id === 'colorScheme') {
            alert("Changes to the color scheme can only be made before your first guess.");
            hideDiv(id);
        }
        else {
            disableKeyboard();
            whiteIcon(iconToAnimate);
            disableIcon(headingRow);
            directions.style.display = "block";
            directions.animate({
                opacity: 1,
            }, {
                easing: "ease-in", 
                duration: 200,      
                iterationCount: 1,
                fill: "forwards",
            });
        }
        
    }
    else {
        enableKeyboard();
        grayIcon(iconToAnimate);
        enableIcon(headingRow);
        directions.animate({
            opacity: 0,
        }, {
            easing: "ease-in", 
            duration: 200,      
            iterationCount: 1,
            fill: "forwards",
        });
        $(document).ready(function()
        {
            setTimeout(function()
            {
                hideDiv(id); 
            }, 
            200);
        }); 
    }
}

function hideDiv(id) {
    document.getElementById(id).style.display = "none";
    directionCounter = 0;
}

const disableKeyboard = () => {
    let keyboardDirections = document.getElementById('keyboard');
    keyboardDirections.style.pointerEvents = "none";
    keyboardDirections.animate({
        opacity: 0.2,
    }, {
        easing: "ease-in", 
        duration: 200,      
        iterationCount: 1,
        fill: "forwards",
    });
}

const enableKeyboard = () => {
    let keyboardDirections = document.getElementById('keyboard');
    keyboardDirections.style.pointerEvents = "auto";
    keyboardDirections.animate({
        opacity: 1,
    }, {
        easing: "ease-in", 
        duration: 200,      
        iterationCount: 1,
        fill: "forwards",
    });
}


// ======= Make icon animate to pulsing white when clicked and gray when dismissed =========
const whiteIcon = icon => icon.classList.add('whiteIcon');
const grayIcon = icon => icon.classList.remove('whiteIcon');

const disableIcon = icon => icon.style.pointerEvents = "none";
const enableIcon = icon => icon.style.pointerEvents = "auto";
// =========================================================================================



// ==========================================================================================================

//                                                                                                     SOUND

// ==========================================================================================================


const toggleSound = onOrOff => {

    soundOnIcon = document.getElementById('soundOn');
    soundOffIcon = document.getElementById('soundOff');
    if (onOrOff === 'on') {
        soundOnIcon.classList.add('soundIconSelected');
        soundOffIcon.classList.remove('soundIconSelected');
        soundOn = true;
    }
    if (onOrOff === 'off') {
        soundOnIcon.classList.remove('soundIconSelected');
        soundOffIcon.classList.add('soundIconSelected');
        soundOn = false;
    }
}



const playAnimateSound = () => {
    
}


// ==========================================================================================================

//                                                                                                     Timers

// ==========================================================================================================

let timerSeconds = 0;

function timer() {
    if (!countdownTimerSelected) {
        clearInterval(timerVar);
        
        let sec = 1;
        let minute = 0;
        let timerDisplay = minute + ":0" + sec;

        function timerCount() {
            document.getElementById('timer').innerHTML = timerDisplay;
            shareTime = timerDisplay;
            sec++;
            if (sec < 10) timerDisplay = minute + ":0" + sec;
            else timerDisplay = minute + ":" + sec;

            if (sec == 59) {
                minute++;
                sec = -1;
            }
        }
        timerVar = setInterval(timerCount, 1000);
    }
    if (countdownTimerSelected) {
        timerSeconds = gameLevelSeconds - 1;
        clearInterval(countDown);
        function timerCountdown() {
            if (timerSeconds >= 0) {
                document.getElementById('timer').innerHTML = timerSeconds;
                timerSeconds--;

                if (timerSeconds < 10 && soundOn) clockAudio.play();
            }
            else {
                gameOver('lost', 0);
                clearInterval(countDown);
                if (soundOn) gameLostAudio.play();
            }
        }

        countDown = setInterval(timerCountdown, 1000);
    }
    
}


// ==========================================================================================================

//                                                                                            Gameplay Levels

// ==========================================================================================================

let gameLevelSeconds = 60;
let gameLevelMode = 'Free Play';

const gameLevelSelector = (level) => {
    if (soundOn) buttonClickAudio.play();
    if (level != 0) {
        gameLevelSeconds = level;
        countdownTimerSelected = true;
        document.getElementById('timer').innerHTML = level;
        if (level == 60) {
            gameLevelMode = 'Hard';
            document.getElementById(`gameLevel60`).classList.add('gameLevelBtnSelected');
            document.getElementById(`gameLevel30`).classList.remove('gameLevelBtnSelected');
            document.getElementById(`gameLevel0`).classList.remove('gameLevelBtnSelected');
        }
        if (level == 30) {
            gameLevelMode = 'Expert';
            document.getElementById(`gameLevel30`).classList.add('gameLevelBtnSelected');
            document.getElementById(`gameLevel60`).classList.remove('gameLevelBtnSelected');
            document.getElementById(`gameLevel0`).classList.remove('gameLevelBtnSelected');
        }
        
    }
    else {
        countdownTimerSelected = false;
        gameLevelMode = 'Free Play';
        document.getElementById('timer').innerHTML = "0:00";
        document.getElementById(`gameLevel0`).classList.add('gameLevelBtnSelected');
        document.getElementById(`gameLevel60`).classList.remove('gameLevelBtnSelected');
        document.getElementById(`gameLevel30`).classList.remove('gameLevelBtnSelected');
    }

}

const disableGameLevelSelectors = () => document.getElementById('gameLevelSelectors').style.pointerEvents = "none";
const enableGameLevelSelectors = () => document.getElementById('gameLevelSelectors').style.pointerEvents = "auto";




// ==========================================================================================================

//                                                                                              Share Squares

// ==========================================================================================================

// SHARESQUARES FUNCTION VARIABLES

let shareArray = [];
let shareString = "";
let shareCounter = 0;
let rightSpotShareSquare = "🟩";
let rightLetterShareSquare = "🟨";

// ====================================

function shareSquares(color) {

    if (color == "rightSpot") shareString += rightSpotShareSquare;
    else if (color == "rightLetter") shareString += rightLetterShareSquare;
    else shareString += "⬜";
    shareCounter++;

    if (shareCounter % 5 == 0) {
        shareArray.push(shareString);
        shareString = "";
    }    
}

let firstShareLine = '';
let fullShareText = '';

function printShareSquares() {
    document.getElementById("shareResults").style.opacity = "100%";
    document.getElementById("wurtleWord").innerHTML = word;
    document.getElementById("shareWurtleNum").innerHTML = firstShareLine + shareArray.length + "!";
    if (correctCount < 5) document.getElementById("shareWurtleNum").innerHTML = "No Wurtle!";

    document.getElementById("shareWurtleLevel").innerHTML = "Mode: " + gameLevelMode;
    if (gameLevelMode === 'Hard' || gameLevelMode === 'Expert') {
        document.getElementById("shareWurtleTime").innerHTML = "Time: " + (gameLevelSeconds - timerSeconds - 1) + " seconds";

        if (firstShareLine == 'No Wurtle!') fullShareText = firstShareLine + "\n" + "Mode: " + gameLevelMode + "\n" + "Time: " + (gameLevelSeconds - timerSeconds - 1) + " seconds" + "\n" + "wurtlegame.com\n";
        else fullShareText = firstShareLine + shareArray.length + "!\n" + "Mode: " + gameLevelMode + "\n" + "Time: " + (gameLevelSeconds - timerSeconds - 1) + " seconds" + "\n" + "wurtlegame.com\n";
        
        for (let ii = 0; ii < shareArray.length; ii++) {
            fullShareText += shareArray[ii] + '\n';
            document.getElementById(`shareSquares${ii}`).innerHTML = shareArray[ii];
        }

    }
    else {
        document.getElementById("shareWurtleTime").innerHTML = "Time: " + shareTime;
        if (guesses == 6 && correctCount < 5) fullShareText = "No Wurtle!" + "\n" + "Mode: " + gameLevelMode + "\n" + "Time: " + shareTime + "\n" + "wurtlegame.com\n";
        else fullShareText = firstShareLine + shareArray.length + "!\n" + "Mode: " + gameLevelMode + "\n" + "Time: " + shareTime + "\n" + "wurtlegame.com\n";
        
        for (let ii = 0; ii < shareArray.length; ii++) {
            fullShareText += shareArray[ii] + '\n';
            document.getElementById(`shareSquares${ii}`).innerHTML = shareArray[ii];
        }
    }
    
    let textarea;
    let result;

    try {
        textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', true);
        textarea.setAttribute('contenteditable', true);
        textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
        textarea.value = fullShareText;

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        const range = document.createRange();
        range.selectNodeContents(textarea);

        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);

        textarea.setSelectionRange(0, textarea.value.length);
        result = document.execCommand('copy');

        //alert(fullShareText + "(Copied!)");
    } catch (err) {
        console.error(err);
        result = null;
    } finally {
        document.body.removeChild(textarea);
    }
}


function copyShareSquares() {
    if (soundOn) buttonClickAudio.play();

    let copiedWord = document.getElementById("copiedWord");
    copiedWord.classList.add("copiedWordAnimate");
    let shareBorder = document.getElementById("shareBorder");
    shareBorder.classList.add("shareBorderAnimate");

    setTimeout(function(){
        copiedWord.classList.remove("copiedWordAnimate");
        shareBorder.classList.remove("shareBorderAnimate");
    }, 800);
}


// ==========================================================================================================

//                                                                                              Color Schemes

// ==========================================================================================================

let rootColors = document.querySelector(':root');

function colorSchemeSelector(selection) {
    if (soundOn) buttonClickAudio.play();
    if (selection == 1) colorSchemeTraditional();
    else if (selection == 2) colorSchemeMiami();
    else if (selection == 3) colorSchemeAutumn();
}


function colorSchemeSetter(colorRS, colorRL, colorWinBorder, wordRS, wordRL) {
    colorRightSpot = colorRS;
    colorRightLetter = colorRL;

    rootColors.style.setProperty('--colorRS', colorRS);
    rootColors.style.setProperty('--colorRS', colorRS);
    rootColors.style.setProperty('--colorRL', colorRL);
    let directionsRS = document.getElementsByClassName("directionsRightSpot");
    let directionsRL = document.getElementsByClassName("directionsRightLetter");
    wurtleTitle.animate({
        color: colorRightSpot
    }, {          
        easing: "ease-in-out", 
        duration: 300,      
        iterationCount: 1,    
        fill: "forwards",
    });
    for(let i = 0; i < directionsRS.length; i++){

        // directionsRS[i].animate({
        //     backgroundColor: colorRightSpot
        // }, {          
        //     easing: "ease-in-out", 
        //     duration: 300,      
        //     iterationCount: 1,    
        //     fill: "forwards",
        // });
        // directionsRL[i].animate({
        //     backgroundColor: colorRightLetter
        // }, {          
        //     easing: "ease-in-out", 
        //     duration: 300,      
        //     iterationCount: 1,    
        //     fill: "forwards",
        // });

		directionsRS[i].style.backgroundColor = colorRightSpot;
        directionsRL[i].style.backgroundColor = colorRightLetter;
	}
    document.getElementById("directionsColorWordRightSpot").style.color = colorRightSpot;
    document.getElementById("directionsColorWordRightSpot").innerHTML = wordRS;
    document.getElementById("directionsColorWordRightLetter").style.color = colorRightLetter;
    document.getElementById("directionsColorWordRightLetter").innerHTML = wordRL;
    winSquareBorderColor = colorWinBorder;
}


function colorSchemeTraditional() {
    let colorRS = "green";
    let colorRL = "rgb(190, 171, 0)";
    let colorWinBorder = "rgb(30, 255, 0)";
    let wordRS = "green";
    let wordRL = "yellow";
    document.getElementById("addAnN").innerHTML = " ";
    rightSpotShareSquare = "🟩";
    rightLetterShareSquare = "🟨";
    colorSchemeSetter(colorRS, colorRL, colorWinBorder, wordRS, wordRL);
    

}

function colorSchemeMiami() {
    let colorRS = "rgb(0, 195, 255)";
    let colorRL = "rgb(189, 0, 173)";
    let colorWinBorder = "rgb(189, 0, 173)";
    let wordRS = "blue";
    let wordRL = "pink";
    document.getElementById("addAnN").innerHTML = " ";
    rightSpotShareSquare = "🟦";
    rightLetterShareSquare = "🟪";
    colorSchemeSetter(colorRS, colorRL, colorWinBorder, wordRS, wordRL);
}

function colorSchemeAutumn() {
    let colorRS = "rgb(197, 72, 0)";
    let colorRL = "rgb(197, 161, 0)";
    let colorWinBorder = "yellow";
    let wordRS = "orange";
    let wordRL = "yellow";
    document.getElementById("addAnN").innerHTML = "n ";
    rightSpotShareSquare = "🟧";
    rightLetterShareSquare = "🟨";
    colorSchemeSetter(colorRS, colorRL, colorWinBorder, wordRS, wordRL);
}

function colorSchemeDirtle() {
    let colorRS = "rgb(189, 0, 173)";
    let colorRL = "rgb(104, 70, 48)";
    let colorWinBorder = "white";
    let wordRS = "pink";
    let wordRL = "brown";
    document.getElementById("addAnN").innerHTML = " ";
    rightSpotShareSquare = "🟪";
    rightLetterShareSquare = "🟫";
    colorSchemeSetter(colorRS, colorRL, colorWinBorder, wordRS, wordRL);
}




// ==========================================================================================================

//                                                                                                 Reset Game

// ==========================================================================================================


function resetGame() {
    if (soundOn) resetGameAudio.play();
    arrayIndex = Math.floor(Math.random() * numberOfWordsInArray);
    codeWordCounter = 0;
    word = words[arrayIndex].toUpperCase();
    wordCheck = word;
    console.log(word);
    let eraseTime = 0;

    
    for (let ii = 0; ii < lettersPressed.length; ii++) {
        let buttonPressedID = `btn${lettersPressed[ii]}`;
        let buttonPressed = document.getElementById(buttonPressedID);

        buttonPressed.classList.remove("bgColorRS");
        buttonPressed.classList.remove("bgColorRL");
        buttonPressed.classList.remove("keyboardLetterGrayedOut")
        
    }


    // animate squares background color 
    // and make font color transparent
    for (let row = 6; row > 0; row--)
    {
        for (let col = 4; col >= 0; col--) {
            let squaresRowID = `r${row}c${col}`;
            let clearSquares = document.getElementById(squaresRowID);

            clearSquares.animate({
                backgroundColor: ["rgb(240, 240, 240)"],
                color: ["rgba(0,0,0,0)"],
                borderBottomColor: ["rgb(163, 163, 163)"],
                borderTopColor: ["rgb(163, 163, 163)"],
                borderLeftColor: ["rgb(163, 163, 163)"],
                borderRightColor: ["rgb(163, 163, 163)"],
            }, {
                delay: eraseTime * 8,            
                easing: "linear", 
                duration: 100,      
                iterationCount: 1,    
                fill: "forwards",
            });

            eraseTime++;
        }
    }

    // loop through again and change background color to transparent
    for (let row = 6; row > 0; row--)
    {
        for (let col = 4; col >= 0; col--) {
            squaresRowID = `r${row}c${col}`;
            clearSquares = document.getElementById(squaresRowID);
            clearSquares.animate({
                backgroundColor: ["rgba(0,0,0,0)"],
            }, {
                delay: eraseTime * 8,            
                easing: "linear", 
                duration: 100,      
                iterationCount: 1,    
                fill: "forwards",
            });

            eraseTime++;
        }
    }

    // after short time, loop through one last time to make innerHTML blank
    // and reset font color to white
    $(document).ready(function()
    {
        setTimeout(function()
        {
            document.getElementById("gameOver").style.display = "none";
            document.getElementById("keyboard").style.display = "block";
            for (let row = 6; row > 0; row--)
            {
                for (let col = 4; col >= 0; col--) {
                    squaresRowID = `r${row}c${col}`;
                    clearSquares = document.getElementById(squaresRowID);
                    clearSquares.innerHTML = "";
                    clearSquares.animate({
                        color: ["white"],
                    }, {
                        delay: 0,            
                        easing: "linear", 
                        duration: 100,      
                        iterationCount: 1,    
                        fill: "forwards",
                    });
                }
            }
        }, 
        800);
    });  



    document.getElementById("shareResults").style.opacity = "0%";
    for (let ii = 0; ii < 6; ii++) {
        document.getElementById(`shareSquares${ii}`).innerHTML = "";
    }

    setTimeout(function()
    {    
        document.getElementById("timer").style.opacity = "100%";
        if (gameLevelMode === 'Hard') document.getElementById("timer").innerHTML = "60";
        if (gameLevelMode === 'Expert') document.getElementById("timer").innerHTML = "30";
        if (gameLevelMode === 'Free Play') document.getElementById("timer").innerHTML = "0:00";
    }, 1000);
    guesses = 0;
    shareArray = [];
    shareString = "";
    shareCounter = 0;
    letterRow = 1;
    letterCol = 0;
    lettersPressed = [];
    wrongLetters = [];
    correctCount = 0;
    timerStart = 0;
    clearInterval(timerVar);
    clearInterval(countDown);
    enableGameLevelSelectors();
    enableIcon(headingRow);
}

