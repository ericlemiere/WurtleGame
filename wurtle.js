// ====================== VARIABLES ===========================
let colorRightSpot = "green";
let colorRightLetter = "rgb(190, 171, 0)";
let colorWrong = "rgb(129, 129, 129)";
let winSquareBorderColor = "rgb(30, 255, 0)";
var wurtleTitle = document.getElementById("WURTLE");


// RANDOM NUMBER GENERATOR
var arrayIndex = Math.floor(Math.random() * 370);







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
    "ferry", "fetal", "fetch", "fetor", "fetus", "feuds", "feued", "fever", "fewer", "fiats",
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
    "kabab", "kabob", "kafir", "kakis", "kales", "kaput", "karat", "karma", "kayak", "kazoo",
    "kebab", "kebob", "keels", "keeps", "kefir", "kelly", "kelps", "kempt", "keyed", "khaki",
    "kicks", "kiddo", "kiddy", "kills", "kilns", "kilos", "kilts", "kinds", "kings", "kinks",
    "kinky", "kiosk", "kissy", "kites", "kitty", "kiwis", "knack", "knaps", "knave", "knead",
    "kneed", "kneel", "knees", "knelt", "knife", "knits", "knobs", "lycee", "lying", "lyres",
    "label", "labor", "laced", "laces", "lacey", "lacks", "laded", "laden", "lader", "lades",
    "ladle", "lairs", "laith", "laity", "lakes", "lamas", "lambs", "lamer", "lamps", "lance",
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
    "lurch", "lured", "lures", "lurid", "lurks", "lusts", "lutes", 
    
    "IDEAL", "ICONS", "INDEX", "INFER", "INKED", "IVORY", "IRATE", "INSET", "IMAGE", "IMPLY",
    "JOCKY", "JUICE", "JUMBO", "JOKER", "JOUST", "QUIET", "QUEST", "QUAIL", "QUILT", "QUICK",
    "KNIFE", "UNFIT", "ULCER", "URINE", "USHER", "USING", "UNZIP", "UPSET", "ULTRA", "KIOSK",
    "LACES", "LAUGH", "LEASH", "LEMON", "LIMBO", "LIVER", "LOSER", "LONGS", "LEGAL", "LAYER",
    "LABOR", "LANKY", "LAYUP", "LIKEN", "LITER", "LUCID", "LUNGS", "LYING", "LURCH", "LIMBS",
    "MAGIC", "MANGO", "MELON", "MOCHA", "MOVIE", "MULCH", "MUTED", "MINCE", "MARSH", "MANOR",
    "MADLY", "MANLY", "MERCY", "MILKY", "MINOR", "MOGUL", "MONEY", "MOURN", "MUCUS", "MORON",
    "NASTY", "NEWLY", "NOTES", "NUDGE", "NYLON", "NOTCH", "NOMAD", "NOBLE", "NAKED", "NACHO",
    "NOISE", "NOVEL", "NAVEL", "NEIGH", "NOTED", "NUTTY", "NERDS", "NAMED", "NEWTS", "NINJA",
    "OFTEN", "OCEAN", "ORBIT", "ORCAS", "OUGHT", "OWNED", "OVARY", "OUNCE", "ORATE", "ONSET",
    "PERKY", "PESTO", "PHONE", "PILOT", "PIGMY", "PIXEL", "PLATE", "POLKA", "PATCH", "POURS",
    "PARTY", "PAWNS", "PERIL", "PHONE", "PIGMY", "PILAF", "PINTO", "PLANT", "PLUMB", "POOCH",
    "RADIO", "RANGE", "RAPID", "REPLY", "RESIN", "RHYME", "ROUTE", "RUGBY", "RIDGE", "RISKY",
    "RABID", "RANKS", "RECAP", "REIGN", "REUSE", "RISEN", "ROUGE", "RURAL", "RIGOR", "RHINO",
    "SHARP", "SHELF", "SHINE", "SLICE", "SOLID", "SPACE", "STAND", "STONE", "SCOLD", "SPOUT",
    "SALAD", "SAUCY", "SCALD", "SCARF", "SCARE", "SCOPE", "SEIZE", "SHACK", "SHAFT", "SIXTY",
    "TABLE", "TOWER", "THANK", "TINGE", "TOUGH", "TRACK", "TRULY", "TWICE", "TYPES", "TAXES",
    "TAUNT", "TEETH", "TENOR", "THEIF", "THICK", "TIPSY", "TORSO", "TOWER", "TRIAL", "TURBO",
    "VALUE", "VAULT", "VIGOR", "VOCAL", "VOICE", "VOWEL", "VIXEN", "VINYL", "VIDEO", "VENOM",
    "WAIST", "WEDGE", "WHITE", "WHISK", "WOMEN", "WORLD", "WRONG", "WRECK", "WIMPY", "WIDTH",
    "YAWNS", "YOUNG", "YACHT", "YEARN", "ZEBRA", "ZESTY", "EXACT", "ANGRY", "CHEAT", "REACT",
]

const dirtyWords = [
    "PENIS", "BOOBS", "DICKS", "COCKS", "BITCH", "TITTY", "BUTTS", "LABIA", "SEMEN", "SPERM",
    "BLOWY", "CLITS", "QUEEF", "ASSES", "WANKS", "WANGS", "DONGS", "BONER", "RENOB", "PUSSY",
    "GOOCH", "TAINT", "CHODE", "DILDO", "HUMPS", "KOOCH", "PRICK", "SKEET", "SLUTS", "WHORE",
]

// ==========================================================================================================

//                                                                                  Keyboard Button Function

// ==========================================================================================================

document.getElementById("guessBtn").style.pointerEvents = 'none';
var letterRow = 1;
var letterCol = 0;
var lettersPressed = [];
var wrongLetters = [];

function keyboard(letter) {

    var letterString = `btn${letter}`;
    var letterButton = document.getElementById(letterString);

    if (lettersPressed.includes(letter) == false && letter != 'xxx') lettersPressed.push(letter);

    if (letter === 'xxx') {
        if(letterCol != 0)
        {
            letterCol--;

            letterButton.animate({
                transform: 'translateX(-.5em) scaleX(1.1)',
            }, {
                //easing: "ease-out", 
                duration: 100,      
                iterationCount: 1,
            });

            let rowID = `r${letterRow}c${letterCol}`;
            var square = document.getElementById(rowID);
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

            letterButton.animate({
                transform: 'translateY(-.6em) scaleY(1.1) scaleX(1.1)',
            }, {
                //easing: "ease-out", 
                duration: 100,      
                iterationCount: 1,
            });

            let rowID = `r${letterRow}c${letterCol}`;
            var square = document.getElementById(rowID);
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

var codeWordCounter = 0;
var guesses = 0;
var word = words[arrayIndex].toUpperCase();
var wordCheck = word;
let codeWord = "";
console.log(word);
function submitGuess() {
    var delayCounter = 0;
    var correctCount = 0;
    guesses++;
    // =========================================================
    /* This section of code checks to see if the word is valid, 
    but I can only check against my list of words. In order to 
    get it working correctly, I would need a massive, inclusive
    list of 5 letter words to check against */
    
    // let userWord = "";
    // for (let col = 0; col < 5; col++) {
    //     let rowID = `r${guesses}c${col}`;
    //     userWord += document.getElementById(rowID).innerHTML;
    // }

    // let validWord = false;
    // for (let ii = 0; ii < 220; ii++) {
    //     if (userWord == words[ii]) validWord = true;
    // }
    // if (validWord == false) alert("Invalid Word");
    // =========================================================

    if (codeWordCounter == 0) {
        
        for (let col = 0; col < 5; col++) {
            let rowID = `r${guesses}c${col}`;
            codeWord += document.getElementById(rowID).innerHTML;
        }
        codeWordCounter++;
        if (codeWord == "XXXXX") dirtyWurtle();
    }
    
    


    if (guesses < 7) {
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

                shareSquares("rightSpot");
                
                var square = document.getElementById(rowID);
                var squareBackgroundColor = square.style.backgroundColor;
                square.animate({
                    backgroundColor: [squareBackgroundColor, colorRightSpot]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });
                
                var keyboardButton = document.getElementById(keyboardBtnID);
                var keyboardButtonBackground = keyboardButton.style.backgroundColor;
                keyboardButton.animate({
                    backgroundColor: [keyboardButtonBackground, colorRightSpot],
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });


                if (correctCount == 5) {

                    document.getElementById("gameOver").style.backgroundColor = colorRightSpot;
                    for (let winCol = 0; winCol < 5; winCol++) {
                        var winRowID = `r${guesses}c${winCol}`;
                        var winSquare = document.getElementById(winRowID);
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

                    // document.getElementById("gameOverMsg").innerHTML = "You WIN!";
                    // document.getElementById("gameOver").style.display = "block";
                    // document.getElementById("keyboard").style.display = "none";
                    $(document).ready(function()
                    {
                        setTimeout(function()
                        {
                            //document.getElementById("gameOverMsg").innerHTML = "You WIN!";
                            document.getElementById("gameOverMsg").style.display = "block";
                            document.getElementById("showWord").style.display = "none";
                            document.getElementById("gameOver").style.display = "block";
                            document.getElementById("keyboard").style.display = "none";
                        }, 
                        2000);
                    });   
                }
            }

            // Make square yellow if wordCheck contains the letter.
            // This allows for words with more than one of the same letter.
            else if (wordCheck.includes(letterSq)) {
                correctCount = 0;
                shareSquares("rightLetter");
                wordCheck = wordCheck.replace(letterSq, "_");
                var square = document.getElementById(rowID);
                var squareBackgroundColor = square.style.backgroundColor;
                square.animate({
                    backgroundColor: [squareBackgroundColor, colorRightLetter]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });
                var keyboardButton = document.getElementById(keyboardBtnID);
                var keyboardButtonBackground = keyboardButton.style.backgroundColor;
                keyboardButton.animate({
                    backgroundColor: [keyboardButtonBackground, colorRightLetter]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });
            }

            // If the word does not contain the letter, then:
            // The square is gray and the keyboard button is disabled.
            // If the word DOES contain the letter, the next 'else if' is run.
            else if (word.includes(letterSq) == false) {
                correctCount = 0;
                wrongLetters.push(letterSq);
                shareSquares("gray");
                var square = document.getElementById(rowID);
                var squareBackgroundColor = square.style.backgroundColor;
                square.animate({
                    backgroundColor: [squareBackgroundColor, colorWrong]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1, 
                    fill: "forwards",   
                });
                var keyboardButton = document.getElementById(keyboardBtnID);
                var letterColor = keyboardButton.style.color;
                keyboardButton.animate({
                    color: [letterColor, "rgb(163, 163, 163)"]
                }, {
                    delay: delayCounter,            
                    easing: "ease-in-out", 
                    duration: 1000,      
                    iterationCount: 1,    
                    fill: "forwards",
                });
                //keyboardButton.onclick = null;
                //keyboardButton.style.pointerEvents = 'none';
            }

            // If the word DOES contain the letter (and previous 'else if' is bypassed) BUT the wordCheck does NOT,
            // then the square is grayed out but the keyboard is unchanged.
            // This is because the word has more than one of the same letter.
            // This accounts for the user entering multiples of the same letter.
            else if (wordCheck.includes(letterSq) == false) {
                correctCount = 0;
                shareSquares("gray");
                var square = document.getElementById(rowID);
                var squareBackgroundColor = square.style.backgroundColor;
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

            var linkString = "https://www.dictionary.com/browse/" + word;
            var word_link = document.createElement("a");
            word_link.href = linkString;
            word_link.target = '_blank';
            word_link.innerHTML = word;


            var par = document.getElementById("showWord");
            par.innerHTML = "The word was: ";
            par.appendChild(word_link);

            $(document).ready(function()
            {
                setTimeout(function()
                {
                    document.getElementById("gameOverMsg").style.display = "none";
                    document.getElementById("showWord").style.display = "block";
                    //document.getElementById("showWord").innerHTML = "The word was: " + word;
                    document.getElementById("gameOver").style.backgroundColor = "rgb(83, 83, 83)";
                    document.getElementById("gameOver").style.display = "block";
                    document.getElementById("keyboard").style.display = "none";
                }, 
                2000);
            });     
        }
    }
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

//                                                                              Show/Hide Directions Function

// ==========================================================================================================



let directionCounter = 0;
function showDirections(clickCounter) {
    directionCounter += clickCounter;
    let directions = document.getElementById("directions");
    if (directionCounter % 2 != 0) {
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
    else {
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
                hideDirections(); 
            }, 
            200);
        }); 
    }
}

function hideDirections() {
    document.getElementById("directions").style.display = "none";
    directionCounter = 0;
}


// ==========================================================================================================

//                                                                                              Share Squares

// ==========================================================================================================

var shareArray = [];
var shareString = "";
var shareCounter = 0;
var rightSpotShareSquare = "🟩";
var rightLetterShareSquare = "🟨";
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

function printShareSquares() {
    let fullShareText = 'Wurtle in ' + shareArray.length + "!\n";
    for (let ii = 0; ii < shareArray.length; ii++) {
        fullShareText += shareArray[ii] + '\n';
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
        alert(fullShareText + "(Copied!)");
    } catch (err) {
        console.error(err);
        result = null;
    } finally {
        document.body.removeChild(textarea);
    }


    // navigator.clipboard.writeText(fullShareText).then(function() {
    //     alert(fullShareText + "(Copied!)");
    // })
    // .catch(err => {
    //     console.error('Failed to read clipboard contents: ', err);
    // });
    //console.log(fullShareText);
}


// ==========================================================================================================

//                                                                                              Color Schemes

// ==========================================================================================================



let schemeCounter = 0;
function showColorSchemes(clickCounter) {

    schemeCounter += clickCounter;
    let colorScheme = document.getElementById("colorScheme");
    if (schemeCounter % 2 != 0) {
        colorScheme.style.display = "block";

        colorScheme.animate({
            opacity: 1,
        }, {
            easing: "ease-in", 
            duration: 200,      
            iterationCount: 1,
            fill: "forwards",
        });

        if (guesses > 0) {
            alert("Changes to the color scheme can only be made before your first guess.");
            hideColorSchemes();
        }
    }
    else {
        colorScheme.animate({
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
                hideColorSchemes(); 
            }, 
            200);
        }); 
    }
}

function hideColorSchemes() {
    document.getElementById("colorScheme").style.display = "none";
    schemeCounter = 0;
}


function colorSchemeSelector(selection) {
    if (selection == 1) colorSchemeTraditional();
    else if (selection == 2) colorSchemeMiami();
    else if (selection == 3) colorSchemeAutumn();
}


function colorSchemeSetter(colorRS, colorRL, colorWinBorder, wordRS, wordRL) {
    colorRightSpot = colorRS;
    colorRightLetter = colorRL;
    var directionsRS = document.getElementsByClassName("directionsRightSpot");
    var directionsRL = document.getElementsByClassName("directionsRightLetter");
    wurtleTitle.animate({
        color: colorRightSpot
    }, {          
        easing: "ease-in-out", 
        duration: 300,      
        iterationCount: 1,    
        fill: "forwards",
    });
    for(var i = 0; i < directionsRS.length; i++){

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
    rightSpotShareSquare = "🟪";
    rightLetterShareSquare = "🟫";
    colorSchemeSetter(colorRS, colorRL, colorWinBorder, wordRS, wordRL);
}



// ==========================================================================================================

//                                                                                                     Dirtle

// ==========================================================================================================


function dirtyWurtle() {
    var dirtyIndex = Math.floor(Math.random() * 30);
    word = dirtyWords[dirtyIndex];
    wordCheck = word;
    $(document).ready(function()
    {
        setTimeout(function()
        {
            var confirmDirtle = confirm("You have entered into dirty mode. You have 5 more tries to guess the dirty word. Welcome to DIRTLE.");
            if (confirmDirtle) {
                
                colorSchemeDirtle();
                for (let col = 0; col < 5; col++) {
                    let rowID = `r1c${col}`;
                    document.getElementById(rowID).animate({
                        //backgroundColor: [squareBackgroundColor, "rgb(189, 0, 173)"],
                        fontSize: "4rem",
                    }, {          
                        easing: "ease-in-out", 
                        duration: 1000,      
                        iterationCount: 1,    
                        fill: "forwards",
                    });
                    if (col == 0 || col == 4) document.getElementById(rowID).innerHTML = "";   
                }
            }
            else { window.location.reload(); }
        }, 
        2000);
    }); 
}



// ==========================================================================================================

//                                                                                                 Reset Game

// ==========================================================================================================


function resetGame() {
    arrayIndex = Math.floor(Math.random() * 370);
    codeWordCounter = 0;
    word = words[arrayIndex].toUpperCase();
    wordCheck = word;
    console.log(word);
    var eraseTime = 0;

    
    for (let ii = 0; ii < lettersPressed.length; ii++) {
        let buttonPressedID = `btn${lettersPressed[ii]}`;
        let buttonPressed = document.getElementById(buttonPressedID);

        
        buttonPressed.animate({
            color: ["white"],
            backgroundColor: ["rgb(163, 163, 163)"],
        }, {
            delay: 0,            
            easing: "ease-in-out", 
            duration: 0,      
            iterationCount: 1,    
            fill: "forwards",
        });

        buttonPressed.classList.remove("keyBtn");
        void buttonPressed.offsetWidth;
        buttonPressed.classList.add("keyBtn");

        // this is just some JQuery for testing
        // $(".keyBtn").hover(function(){
        //     $(this).css("background-color", "yellow");
        //     }, function(){
        //     $(this).css("background-color", "pink");
        // });
        
    }


    // animate squares background color 
    // and make font color transparent
    for (let row = 6; row > 0; row--)
    {
        for (let col = 4; col >= 0; col--) {
            var squaresRowID = `r${row}c${col}`;
            var clearSquares = document.getElementById(squaresRowID);

            clearSquares.animate({
                backgroundColor: ["rgb(160, 160, 160)"],
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


    guesses = 0;
    shareArray = [];
    shareString = "";
    shareCounter = 0;
    letterRow = 1;
    letterCol = 0;
    codeWord = "";
    lettersPressed = [];
    wrongLetters = [];

    
    
}


function keyboardHoverIn(x) {
    x.style.backgroundColor = "rgb(88, 88, 88)";
}

function keyboardHoverOut(x) {
    x.style.backgroundColor = "rgb(163, 163, 163)";
}