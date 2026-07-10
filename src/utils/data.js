import PsychologyIcon from "@mui/icons-material/Psychology";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TvIcon from "@mui/icons-material/Tv";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BoltIcon from "@mui/icons-material/Bolt";
import AnimationIcon from "@mui/icons-material/Animation";
import CodeIcon from "@mui/icons-material/Code";

//add some legend on each part or sum idk
export const videogames = [
    {
        id: 1,
        img: "videogames/doomEternal.jpg",
        theme: "hellfire",
        name: "Doom Eternal",
        relevantData: [
        { label: "Completion", value: "100%" },
        { label: "Favorite Weapon", value: "Super Shotgun" },
        { label: "Favorite OST", value: "The Only Thing They Fear Is You" },
        { label: "Favorite Demon", value: "Tyrant"},
        { label: "Best Level", value: "THE GREAT CITY OF Taras Nabad"},
        { label: "Best Chain Combo", value: "Super Shotgun + Aeroblast"}
        ],
    },
    {
        id: 2,
        img: "videogames/dbzDokkan.jpg",
        theme: "lr",
        name: "Dragon Ball Z Dokkan Battle",
        relevantData: [
        { label: "Completion", value: "The grind never STOPS" },
        { label: "Power Level", value: "4,060,486" },
        { label: "Quote", value: "WE SAIYANS HAVE NO LIMITS!" },
        {
            label: "Favorite OSTs",
            value: [
            "LR Gomah Intro",
            "LR PHY SSJ4 Gogeta Intro",
            "TEQ Metal Cooler Active Skill",
            "LR TEQ Gogeta Active Skill",
            "AGL Trunks Active Skill",
            "LR TEQ Namek SSJ Goku Transformation",
            "LR SSJ4 Goku (DAIMA) Intro",
            "LR SSJ4 Goku (Standby)",
            "LR AGL Future Gohan Active Skill",
            "Gamma 2 Intro",
            "LR INT Vegeta / Goku",
            ],
        },
        {
            label: "Favorite Cards",
            value: [
            "TEQ Ultimate Gohan",
            "LR SSJ4 Goku (DAIMA)",
            "LR FP SSJ4 Goku",
            "EZA LR Ultimate Gohan",
            "LR FP Frieza",
            "LR Majin Vegeta & SSJ2 Goku (Angel)",
            "LR Orange Piccolo",
            "LR PHY SSJ4 Gogeta",
            "PHY God Goku",
            "Gamma 2",
            "LR Blue Goku & Blue Vegeta",
            "LR G4",
            "LR AGL Gohan",
            "LR BirdKu",
            ],
        },
        ],
    },
    {
        id: 3,
        img: "videogames/batmanac.jpg",
        theme: "gotham",
        name: "Batman: Arkham City",
        relevantData: [
        { label: "Completion", value: "100%" },
        { label: "Quote", value: "Batman must save Gotham." },
        { label: "Best Suit", value: "Batman Beyond" },
        { label: "Best Side Mission", value: "Hush" },
        ],
    },
    {
        id: 4,
        img: "videogames/darksouls3.jpg",
        theme: "embers",
        name: "Dark Souls III",
        relevantData: [
        { label: "Best Boss", value: "Slave Knight Gael" },
        { label: "Favorite OST", value: "Slave Knight Gael & Main Theme" },
        { label: "Best Area", value: "The Ringed City" },
        { label: "Hardest Boss", value: "Sister Friede" },
        { label: "Best Weapon", value: "Sellsword Twinblades" },
        ],
    },
    {
        id: 5,
        img: "videogames/bb.jpg",
        theme: "bloodmoon",
        name: "Bloodborne",
        relevantData: [
        { label: "Quote", value: "Needs a PC port ASAP + Fuck SONY." },
        { label: "Favorite OST", value: "Ludwig, the Accursed & Holy Blade" },
        { label: "Best Boss", value: "Lady Maria of the Astral Clocktower" },
        { label: "Hardest Boss", value: "Orphan of Kos" },
        { label: "Best Weapon", value: "Holy Moonlight Sword" },
        ],
    },
    {
        id: 6,
        img: "videogames/eldenring.jpg",
        theme: "erdtree",
        name: "Elden Ring",
        relevantData: [
        { label: "Quote", value: "I am Malenia, Blade of Miquella." },
        { label: "Favorite OST", value: "The Final Battle & Promised Consort Radahn" },
        { label: "Best Boss", value: "Promised Consort Radahn" },
        { label: "Hardest Boss", value: "The goddamn Draconic Tree Sentinel (Farum Azula 😭) and the dungeon of the 2 crucibles (DEATH)" },
        { label: "Best Weapon", value: "Blasphemous Blade" },
        ],
    },
    {
        id: 7,
        img: "videogames/sonicUnleashed.jpg",
        theme: "boost",
        name: "Sonic Unleashed",
        relevantData: [
        { label: "Best Stage", value: "Rooftop Run - Day" },
        { label: "Favorite OST", value: "Dragon Road Day + Rooftop Run Day" },
        { label: "Best Boss", value: "Perfect Dark Gaia" },
        { label: "Worst Stage", value: "Eggmanland" },
        ],
    },
    {
        id: 8,
        img: "videogames/spidermanSD.jpg",
        name: "Spider-Man: Shattered Dimensions",
        theme: "multiverse",
        relevantData: [
            { label: "Favorite Spider-Man", value: "Spider-Man Noir" },
            { label: "Best Boss", value: "Goblin" },
            { label: "Favorite OST", value: "Noir themes" },
            { label: "Favorite Level", value: "Goblin's FREAK SHOW" },
            { label: "Completition", value: "100%"}
        ]
    },
    {
        id: 9,
        img: "videogames/re7.jpg",
        name: "Resident Evil 7",
        theme: "mold",
        relevantData: [
            { label: "Favorite Weapon", value: "Albert-01 Magnum" },
            { label: "Best Boss", value: "Lucas Baker NOT a HERO" },
            { label: "Favorite Area", value: "Main House" },
            { label: "Quote", value: "Welcome to the family, son." },
            { label: "Soundtrack", value: "Go tell Aunt Rhody"},
        ]
    },
    {
        id: 10,
        img: "videogames/re2.jpg",
        name: "Resident Evil 2 Remake",
        theme: "rpd",
        relevantData: [
            { label: "Favorite Character", value: "Leon S. Kennedy" },
            { label: "Best Boss", value: "Mr. X Final" },
            { label: "Favorite Weapon", value: "Lightning Hawk" },
            { label: "Favorite OST", value: "Looming Dread" },
        ]
    },
    {
        id: 11,
        img: "videogames/storm4.jpg",
        name: "Naruto Shippuden: Ultimate Ninja Storm 4",
        theme: "storm",
        relevantData: [
            { label: "Favorite Character", value: "Naruto Six Paths" },
            { label: "Favorite Ultimate", value: "Naruto vs Sasuke" },
            { label: "Favorite Team", value: "Naruto, Obito & Kakashi" },
            { label: "Favorite Level", value: "Shinobi Ninja Alliance vs Juubi and Obito and Madara" },
        ]
    },
    {
        id: 12,
        img: "videogames/legoCity.jpg",
        name: "LEGO City Undercover",
        theme: "lego",
        relevantData: [
            { label: "Completion", value: "100%" },
            { label: "Favorite Disguise", value: "Astronaut" },
            { label: "Funniest Mission", value: "Moon Base" },
            { label: "Quote", value: "One of the funniest LEGO games ever." },
        ]
    },
    {
        id: 13,
        img: "videogames/pokemonAS.jpg",
        name: "Pokémon Alpha Sapphire",
        theme: "hoenn",
        relevantData: [
            { label: "Completion", value: "National Pokédex" },
            { label: "Starter", value: "FirePollo (Torchic)" },
            { label: "Favorite Legendary", value: "Rayquaza" },
            { label: "Favorite Mega", value: "Mega Rayquaza" },
        ]
    },
    {
        id: 14,
        img: "videogames/pokemonMoon.jpg",
        name: "Pokémon Moon",
        theme: "alola",
        relevantData: [
            { label: "Completition", value: "Alola Dex 100%"},
            { label: "Starter", value: "Incirenoroar" },
            { label: "Favorite Pokémon", value: "Ash-Greninja" },
            { label: "Favorite Island", value: "Akala Island" },
            { label: "Favorite OST", value: "Champion Battle" },
        ]
    },
    {
        id: 15,
        img: "videogames/yokai2.jpg",
        name: "Yo-kai Watch 2",
        theme: "yokai",
        relevantData: [
            { label: "Favorite Yo-kai", value: "Bushinyan" },
            { label: "Favorite Watch", value: "Model Zero" },
            { label: "Best Boss", value: "Kat Kraydel" },
            { label: "Completion", value: "Medallium Grind" },
        ]
    },
    {
        id: 16,
        img: "videogames/sonicXShadow.jpg",
        name: "Sonic x Shadow Generations",
        theme: "chaos",
        relevantData: [
            { label: "Favorite Character", value: "Shadow" },
            { label: "Favorite Stage", value: "Sonic vs Shadow Clash at Space" },
            { label: "Favorite Doom Power", value: "Chaos Control" },
            { label: "Favorite Stage Sonic", value: "Rooftop Run ACT 2" },
        ]
    },
    {
        id: 17,
        img: "videogames/sonicMania.jpg",
        name: "Sonic Mania",
        theme: "mania",
        relevantData: [
            { label: "Favorite Zone", value: "Egg Reverie Zone" },
            { label: "Best Boss", value: "Eggman + Hard Boiled Eggs Boss" },
            { label: "Favorite OST", value: "Egg Reverie" },
            { label: "Favorite Character", value: "Ray" },
        ]
    },
    {
        id: 18,
        img: "videogames/halfLife.jpg",
        name: "Half-Life",
        theme: "lambda",
        relevantData: [
            { label: "Protagonist", value: "Gordon Freeman" },
            { label: "Favorite Enemy", value: "The Combine" },
            { label: "Favorite Weapon", value: "Crowbar" },
            { label: "Quote", value: "Rise and shine, Mr. Freeman." },
        ]
    },
    {
        id: 19,
        img: "videogames/gd.jpg",
        name: "Geometry Dash",
        theme: "geometry",
        relevantData: [
            { label: "Hardest Completed", value: "Deadlocked" },
            { label: "Favorite Level", value: "Deadlocked" },
            { label: "Favorite Demon", value: "CrAzy III" },
            { label: "Favorite Song", value: "Theory of Everything 2" },
        ]
    },
    {
        id: 20,
        img: "videogames/dbxv2.jpg",
        name: "Dragon Ball Xenoverse 2",
        theme: "xenoverse",
        relevantData: [
            { label: "Favorite Transformation", value: "Ultra Instinct" },
            { label: "Favorite Character", value: "Ultra Villain Vegeta" },
            { label: "Favorite Parallel Quest", value: "Ultimate Rivalry" },
            { label: "Quote", value: "Time Patroller reporting for duty!" },
        ]
    }
    //doom eternal, dragon ball z dokkan battle, batman arkham city, dark souls 3, bloodborne, elden ring, sonic unleashed, spiderman shattered dimensions, resident evil VII, re2, storm 4, lego city undercover, pokemon alpha sapphire, pokemon moon, yo-kai watch 2, sonic x shadow gen, sonic mania, half life, geometry dash, db xv2
    // for this I will use a Hover Card with like style referent to the game. The idea is a base component but with personalization props other than the actual data input props.
    //add like facts and corky crap for games like or image ref (dokkan: power level, fav card, friend code, ds3: gael and maintheme, doom eternal: rip and tear, bb: ludwig, batman ac: batman must save gotham, sonic unlashed: rooftop run spagonia, re7: magnum albert, storm 4: naruto vs sasuke, re2: leon vs mr.x, gd: deadlocked, half life: gordon vs combine, sonic mania: egg reverie, sonic x shadow: yellow chaos emerald cross, pkmn as: nationaldex, pkmn moon:ash greninja, db xv2: ultra villan vegeta, yk2: model zero watch, lego city: skin wheel)
]

//MAYBE THIS IS NOT NECESSARY as an extra data set
export const qualities = [
    { id: 1, label: "Fast learner",   icon: "⚡" },
    { id: 2, label: "Dedicated",      icon: "🎯" },
    { id: 3, label: "Creative",       icon: "🎨" },
    { id: 4, label: "Team leader",    icon: "🤝" },
    { id: 5, label: "Problem solver", icon: "🧩" },
    { id: 6, label: "Self-driven",    icon: "🚀" },
];
//good leader, fast learner, dedicated, creative
// for this a list with icons referent to it


export const inspirations = [
    {
        id: 1,
        name: "Son Goku",
        img: "inspirations/goku.jpg",
        series: "Dragon Ball", //Can be the logo image
        creator: "Akira Toriyama",
        accent: "#ff7a1a",
        greatestQuote: "I do not consider myself as a hero of justice or anything else like that, but if someone ever tries to hurt my friends, IT'S GONNA PAY!!"

    },
    {
        id: 2,
        name: "Yuji Itadori",
        img: "inspirations/yuji.jpg",
        series: "Jujutsu Kaisen",
        creator: "Gege Akutami",
        accent: "#c0392b",
        greatestQuote: "I don't know how I'll feel when I'm dead, but I won't regret the way I lived."
    },
    {
        id: 3,
        name: "Asta",
        img: "inspirations/asta.jpg",
        series: "Black Clover",
        creator: "Yuki Tabata",
        accent: "#2e7d32",
        greatestQuote: "諦めないのが俺の魔法だ！(My magic is never giving up)"
    },
    {
        id: 4,
        name: "Son Gohan (Future)",
        img: "inspirations/fgohan.jpg",
        series: "Dragon Ball",
        creator: "Akira Toriyama",
        accent: "#5b6dc9",
        greatestQuote: ["I won't die, no matter what happens to my body! My fighting spirit will keep me going because it is very strong, and after that, I will defeat them no matter what!", "You know you can't win! You can't destroy what I really am! Even if you manage to kill this body, someone even stronger will rise and take my place!"]
    },
    {
        id: 5,
        name: "Subaru Natsuki",
        img: "inspirations/subaru.jpg",
        series: "Re: Zero",
        creator: "Tappei Nagatsuki",
        accent: "#6a3f87",
        greatestQuote: "I have no strength, but I want it all. I have no knowledge, but all I do is dream. There's nothing I can do, but I struggle in vain! I hate myself. All I do is talk a big game when I can't do a single thing!"
    },
    {
        id: 6,
        name: "Futaro Uesugi",
        img: "inspirations/futaro.jpg",
        series: "The Quintesential Quintuplets",
        creator: "Negi Haruba",
        accent: "#414767",
        greatestQuote:["Inspiration is a facade. Learning is key. If I hadn't accepted this job, I’d still be ignorant and arrogant.", "I've never even had to remember someone's name just because they were below me. I'll be with those girls for as long as they want me to.I will conitnue teaching them and I will get Top 10 overall just to show they are not a charge at all!"],
    },
    {
        id: 7,
        name: "Peter Parker/Spider-Man",
        img: "inspirations/spidey.jpg",
        series: "The Amazing Spider-Man",
        creator: "Stan Lee/Jack Kirby/Steve Ditko",
        accent: "#ff0505",
        greatestQuote: "Hope you were watching, Uncle Ben. 'Cause I did that for you. Kept everyone safe. Kept them from being scared. And I made it fun. It doesn't matter that most of 'em wouldn't have lifted a finger for Peter Parker. That's not why you do it. You do it 'cause it's the right thing to do. Because it's what you would've done. You were more than a father to me, Ben Parker. More than a role model... You were my hero. Now it's my turn. Because from now on, I'm going to be yours! You'll see. I'm going to give it my all! We'll have fun! I'll never quit--and it's going to be amazing!. -With Great Power Comes With Great Responsability (Ben Parker)"
    },
    {
        id: 8,
        name: "Kyojuro Rengoku",
        img: "inspirations/rengoku.jpg",
        series: "Demon Slayer",
        creator: "Koyoharu Gotouge",
        accent: "#dc5309",
        greatestQuote: "If you are feeling disheartened, that you are somehow not enough, set your heart ablaze. Dry your eyes and look ahead. You may feel like digging your heels in, but the flow of time waits for no one. It won't patiently stand by as you grieve.(炎)"
    },
    {
        id: 9,
        name: "Naruto Uzumaki",
        img: "inspirations/naruto.jpg",
        series: "NARUTO/NARUTO SHIPPUDEN",
        creator: "Masashi Kishimoto",
        accent: "#ff5900",
        greatestQuote: " I'm not gonna run away, I never go back on my word! That's my nindō(忍道): my ninja way!. It's almost unbearable, isn't it… the pain of being all alone. I know that feeling; I've been there, in that dark and lonely place, but now there are others, other people who mean a lot to me. I care more about them than I do myself, and I won't let anyone hurt them. That's why I'll never give up. I will stop you, even if I have to kill you! They saved me from myself. They rescued me from my loneliness. They were the first to accept me as who I am. They're my friends.",
    },
    {
        id: 10,
        name: "Jhonatan Joestar",
        img: "inspirations/jojo.jpg",
        series: "Jojo's Bizarre Adventure",
        creator: "Hiroiko Araki",
        accent: "#08025e",
        greatestQuote: "I strive to be a true gentleman! There are times when a gentleman has to be courageous and fight, even when his opponent is bigger than he is and he knows he's going to lose! (ぼくは本当の紳士をめざしているからだ！相手が大きいヤツだからって負けるとわかっているからって紳士は勇気を持って戦わなくてはならない時があるからだぞッ！！)",
    },
    {
        id: 11,
        name: "Eren Yeager",
        img: "inspirations/eren.jpg",
        series: "Attack on Titan",
        creator: "Hajime Isayama",
        accent: "#743a18",
        greatestQuote: ["We’re born free. All of us. Some don’t believe it, some try to take it away. To hell with them! …Fight to live, risk it all for even a glimmer of real freedom! It doesn’t matter what’s waiting outside the gate, or what comes in! It doesn’t matter how cruel the world can be, or how unjust! Fight. Fight. Fight. FIGHT!", " -There’s nothing further removed from freedom than ignorance."]
    },
    {
        id: 12,
        name: "Bruce Wayne/The Batman",
        img: "inspirations/batman.jpg",
        series: "The Batman",
        creator: "Bob Kane/Bill Finger",
        accent: "#000000",
        greatestQuote: "I'm starting to see now. I have had an effect here, but not the one I intended. Vengeance won't change the past, mine or anyone else's. I have to become more. People need hope, to know someone's out there for them. The city's angry, scarred, like me. Our scars can destroy us, even after the physical wounds have healed. But if we survive them, they can transform us. They can give us the power... to endure, and the strength to fight."
    }
    //yuji itadori, asta, son goku, subaru, future gohan, 
    // Personalized component that highlights the image layer with their most important quote in italics
    // I dont fkning know what to put bruh
]

export const hobbies = [
    {
        id: 5, name: "Platinuming Games (100%)", treatment: "shine", icon: EmojiEventsIcon,
        span: { cols: 2, rows: 2 }, // hero tile — the shine deserves the space
        blurb: "Every trophy, every achievement, the platinum ping.",
        detail: "There's a specific satisfaction in a 100% completion. I chase the platinum even when the last trophy is miserable.",
        stat: "Platinums: DOOM Eternal, ELDEN RING, Batman Arkham City, Batman Arkham Asylum, LEGO City Undercover, SONIC 4 I & II, DISTRAINT 1 & 2",
        wishlist: ["Hardest earned: ELDEN RING", "Currently grinding: Batman Arkham Origins"],
    },
    {
        id: 4, name: "Limited Edition Hunting", treatment: "limited", icon: Inventory2Icon,
        span: { cols: 2, rows: 2 },
        blurb: "Chasing rare releases before they're gone or scalped into orbit.",
        detail: "The thrill is in the hunt.",
        stat: "Best find: Avatar the Last Airbender Book 2 DVD (retailer ed.)",
        wishlistLabel: "ON THE HUNT OF",
        wishlist: [
            "Rare physical DS & 3DS games",
            "Manga limited editions",
            "Amiibos",
            "Hard Cover Comics (Limited Runs)",
            "Yo-Kai Watch medals",
            "Avatar the Last Airbender BOOK 1 & BOOK 3 DVD",
            "Avatar the Last Airbender Comics(Need some)",
            "Yo-kai Watch Dream",
            "Yo-kai Watch Prototype U",
            "PSP Red God Of War Edition",
            "Wii- U",
            "Good Old PS2",
            "GameCube",
            "XBOX og",
            "PS4 with P.T(Kojima's Silent Hill)",
            "Skylander Portal",
            "LEGO Spider-Man 1:1 Scale Sets",
            "LEGO SONIC & LEGO MARIO",
            "Nintendo DS Lite Red",
            "GBA Original game cartridges",
            "NES Classic Edition",
            "New Nintendo 3DS",

        ],
    },
    {
        id: 7, name: "Manga Collecting", treatment: "manga", icon: MenuBookIcon,
        span: { cols: 1, rows: 2 },
        blurb: "A physical shelf that keeps outgrowing itself.",
        detail: "I prefer physical volumes — the paper, the shelf, the ritual and the corky stuff with volumes.",
        stat: "On Possesion: [The Seven Deadly Sins Vol. 1-5,13], [Assasination Classroom Vol.6,7,9,13], [The Quintessential Quintuplets Vol.1], [Black Clover Vol.24]",
        wishlist: ["Reading now: Smiley", "Want to record: GANTZ, Oyasumi Pun Pun,Berkserk, JJK,Demon Slayer, Dragon Ball"],
    },
    {
        id: 8, name: "Marvel & DC Comics", treatment: "comic", icon: BoltIcon,
        span: { cols: 2, rows: 1 },
        blurb: "Collecting and reading runs, singles and trades.",
        detail: "Comics are endless, there are like 9k branches and variants of stories of our favorite heroes.",
        stat: "On Possesion: [DC's Collection of Villains & Heroes: Batman - I am Gotham, Harley Quinn - Heat In the City, Eternal Wickedness, Superman-The Son of Superman, Joker - The Devil's Attorney, Batman - I, My Worst Enemy, Infinite Crysis- OMAC Project, Joker- Asylum Vol.1], Spider-Man's Complete Guide",
        wishlistLabel: "PRIORITY",
        wishlist: ["Batman The Dark Knight Returns", "Batman: The Killing Joke", "Marvel Zombies full RUN", "Spider-Man: Back In Black", "Spider-Man: Brand New Day", "Crysis On Infinite Earths", "Old Man Logan", "Marvel's: Infinity War", "Secret Wars", "Spider-Verse FULL RUN"]

    },
    {
        id: 6, name: "Retro Games", treatment: "vintage", icon: TvIcon,
        span: { cols: 1, rows: 2 },
        blurb: "The classics that still hold up.",
        detail: "Retro games, must be preserved and remembered for the bases of what we have today.",
        stat: "Retro Faves: Pokémon Emerald, Spider-man 2, PvZ, Sonic The Hedhehog 2, Duke Nukem Manhattan Project, The Legend of Zelda Ocarina of Time",
        wishlistLabel: "MUST PLAY",
        wishlist: ["Pokémon Platinum", "Spider-Man Shattered Dimensions", "Spider-man Edge of Time", "Resident Evil 4", "Silent Hill 2", "MarioKart DS", "Super Mario 64",  "Pokémon Heartgold/Soulsilver","The Legend of Zelda Ocarina of Time","The Legend of Zelda Majora's Mask", "Warioland", "Super Mario Sunshine", "Sonic Adventure 2"]

    },
    {
        id: 3, name: "Games Across Platforms", treatment: "console", icon: SportsEsportsIcon,
        span: { cols: 1, rows: 2 },
        blurb: "PC, PlayStation, Nintendo, retro — no console wars.",
        detail: "PC mogs every console sorry point blank it's just to damn powerful",
        stat: "Main Rig: PC Master Race",
        wishlistLabel: "IN THE ROTATION",
        wishlist: ["STEAM everything","Switch - Games on the Go","PlayStation should be here but since Physical Media is Gone F***K SONY"]
    },
    {
        id: 9, name: "Anime", treatment: "anime", icon: AnimationIcon,
        span: { cols: 1, rows: 2 },
        blurb: "Always mid-way through at least one series.",
        detail: "Where a lot of my inspirations come from — my inspirations section is basically a love letter to a few of these. There's always one show I'm caught up on and three I'm behind on.",
        stat: "Currently Watching: Re: Zero S3",
        wishlistLabel: "FAVORITE SHOWS",
        wishlist: ["Black Clover", "Dragon Ball", "Jujutsu Kaisen", "DAN DA DAN", "Demon Slayer", "Re:Zero", "Attack on Titan", "Naruto Shippuden", "Chainsaw Man", "The Quintessential Quintuplets", "Jojo's Bizarre Adventure", "The Seven Deadly Sins", "Four Knights of the Apocalypse", "Devilman Crybaby", "Cyberpunk Edgerunners"]
    },
    {
        id: 2, name: "Comic Heroes, Game, Anime Figures", treatment: "limited", icon: SportsMartialArtsIcon,
        span: { cols: 1, rows: 2 },
        blurb: "A shelf of dynamic-pose figures.",
        detail: "My goal is to have one of those HOT TOYS big shots and those 1/6 Figures ",
        stat: "I have SSJ3 Vegito, Waluigi, Mr.Game & Watch, Duck Hunt Duo, R.O.B",
        wishlistLabel: "WISHLIST",
        wishlist: ["Doom Slayer Figure", "Soul of Cinder Figure", "Slave Knight Gael Figure", "SSJ Namek Goku Figure", "Full Power Frieza Figure", "Majin Vegeta Figure", "Blue Gogeta & Vegetto Figure", "Super Saiyan 4 Gogeta Figure", "Devil Union Asta Figure", "Assault Mode Meliodas Figure", "Black Suit Spiderman Figure", "Infinity Gauntlet Figure", "Sun Breathing Tanjiro Figure", "MUI Goku Figure", "Goku vs Kid Buu Genkidama figure", "Super Sonic Figure with Chaos Emeralds", "Sonic Amiibo"]
    },
    {
        id: 10, name: "Coding Wacky Projects", treatment: "terminal", icon: CodeIcon,
        span: { cols: 1, rows: 2 },
        blurb: "Strange, fun builds — like this page.",
        detail: "My favorite stack to learn and play with:",
        stat: "Springboot(Java), Typescript/JavaScript (React.js), Python(TF, Qt6)",
        wishlistLabel: "Wish to learn:",
        wishlist: ["C++", "C", "Rust", "Golang", "Vim/NeoVim"]
    },
    {
        id: 1, name: "Learning wacky things", treatment: "wacky", icon: PsychologyIcon,
        span: { cols: 2, rows: 1 },
        blurb: "Random rabbit holes, obscure tech, how things work.",
        detail: "Youtube is one of the biggest rabbit hole inducer if it goes solo...",
        stat: "Wackiest Things learnt: Psychology behind 'Instagram People', AI Roadmap and the huge statements from their unhinged developers(Like New Dominant Race, Dystopian World, Breakout etc), LinkedIn Joke of a Rabbithole",
        wishlistLabel: "Interesting things to learn:",
        wishlist: ["How to build a Black hole simulator on C++", "Wi-fi Decrypter", "How to code an OS", "How to build Git and Docker", "How to build my own Server", "Secrets of Linux Distributions and Commands(Stuff like that)"],
    },
];

    // collect figures of marvel,dc heores, games collectibles, find limited edition content, 100% games, play good old games, collect physical media, collect and read manga,collect and read comics, watch anime
    // A component that is styled according to the main attractive of each hobby. (100% a shiny effect like the steam one (or LR gif shine), read manga a black and white component, a stripe type component for comics, old games a vintage/tv component, limited edition a bigger component like those LE boxes, anime idk )

export const musicTaste = [
    {
        id:1,
        artist: "Queen",
        img: "music/queen.jpg",
        favTrackList: {
            1: "Good Old Fashioned Lover Boy",
            2: "Don't Stop Me Now",
            3: "Killer Queen",
            4: "The March of the Black Queen",
            5: "You Take My Breath Away",
            6: "Bohemian Rhapsody",
            7: "All dead, All dead",
            8: "My Melancholy Blues",
            9: "Flash",
            10: "Keep Yourself Alive",
            11: "I Want to Break Free",
            12: "Spread Your Wings",
            13: "Seven Seas of Rhye",
            14: "Teo Toriatte (てをとりあっ て)"
        },
        listenedMinutes: 8900,
        topTrack : 5,
        accent: "#e8b923",
    },
    {
        id: 2,
        artist: "Bad Bunny",
        img: "music/badBunny.jpg",
        favTrackList: {
            1: "La MuDANZA",
            2: "Safaera",
            3: "NO ME QUIERO CASAR",
            4: "NUEVAYoL",
            5: "BAILE INoLVIDABLE",
            6: "DtMF",
            7: "VOY A LLeVARTE PA PR",
            8: "CAFé CON RON",
            9: "Tu no metes cabra",
            10: "MONACO",
            11: "Tití me preguntó",
            12: "La corriente",
            13: "Tormenta",
            14: "Ojitos Lindos"

        },
        listenedMinutes: 3700,
        topTrack: 3,
        accent: "#84cc16"

    },
    {
        id: 3,
        artist: "Michael Jackson",
        img: "music/mj.jpg",
        favTrackList: {
            1: "Billie Jean",
            2: "Smooth Criminal",
            3: "Bad",
            4: "Don't stop till you get enough",
            5: "Ben",
            6: "Beat it",
            7: "Remember the Time",
            8: "Thriller",
            9: "The Way You Make Me Feel",
            10: "Going back to Indiana + Jackson's 5",
            11: "I want you back + Jackson's 5"

        },
        listenedMinutes: 1900,
        topTrack: 1,
        accent: "#6a3f87",
    },
    {
        id: 4,
        artist: "FROMSOFTWARE Sound Team",
        img: "music/fromsoft.jpg",
        favTrackList: {
            1: "Slave Knight Gael",
            2: "DARK SOULS III",
            3: "Soul of Cinder",
            4: "Malenia, Blade of Miquella",
            5: "For the dark soul",
            6: "The Promised Consort", //Shoi Miyazawa
            7: "The Final Battle",
            8: "Elden Ring",
            9: "Mesmer the Impaler",
            10: "Ludwig, the Holy Blade"
        },
        listenedMinutes: 3000,
        topTrack: 1,
        accent: "#ea580c",
    },
    {
        id: 5,
        artist: "Fujii Kaze",
        img: "music/fujii.jpg",
        favTrackList: {
            1: "Kirari",
            2: "Matsuri",
            3: "Michi Teyu Ku",
            4: "Shinunoga E-Wa",
            5: "Okay, Goodbye",
            6: "I Need U Back",
            7: "Prema",
            8: "Hana",
            9: "Nan-Nan",
            10: "Mo-Eh-Wa",
            11: "Just the Two of Us (Fujii Kaze Ver.)"
        },
        topTrack: 11,
        listenedMinutes: 5500,
        accent: "#7291bc",

    },
    {
        id: 6,
        artist: "Crush40",
        img: "music/crush40.jpg",
        favTrackList: {
            1: "Live and Learn",
            2: "Knight of the Wind",
            3: "I Am... All of me",
            4: "Open Your Heart",
            5: "What I'm Made Of..."
        },
        topTrack: 2,
        listenedMinutes: 5000,
        accent: "#c13790",

    }

    //Queen, Michael Jackson, Bad Bunny, Michael Giaccino, FROMSOFT OST (bb, DS3, ER)
    //A component that shows image of the band and via modal the liked tracks (nothing more DON'T WANT DMCA claims)
]

export const projects = [
    {
        name: "ICESI-Gym Backend",
        description: "The engine behind a fitness platform for ICESI University — a place for students and staff to build workout routines, track their progress over time, and get feedback from certified trainers. I designed the database and built the backend in Java Spring Boot: institutional login with role-based access (user, trainer, admin), an exercise library with types and demo videos, progress tracking with performance stats, and a Thymeleaf admin panel for managing trainers and content. Real-time event notifications run over websockets. My first time owning a backend end to end, for something people would actually use.",
        imgSource: "projects/icesigym.back.png",
        urlSource: "https://github.com/Davinerto9/ICESI-Gym-Backend"
    },
    {
        name: "University Wellbeing Platform",
        description: "A full integrated web app built for ICESI University's Wellbeing department, bringing all their services into one place — students can register for activities, events, and tournaments and manage their schedules around them. Built with Django under a real SCRUM process, containerized with Docker, tested end-to-end with Selenium, backed by a relational database on Supabase, and deployed on Render. The closest thing to shipping real production software I've done.",
        imgSource: "projects/Integrator-universitary-Wellbeing.png",
        urlSource: "https://github.com/ICESI-PI1-202502/20252-g3-pi1-t3"
    },
    {
        name: "Airline Sentiment Analyzer",
        description: "A machine learning project that classifies airline customer feedback as positive or negative, built from a simple neural network for binary sentiment analysis. My entry point into applied ML — turning raw text into a model that actually predicts.",
        imgSource: "projects/sentiment-Analyzer-github.png",
        urlSource: "https://github.com/Davinerto9/Airline-Sentiment-Analysis",
    },
    {
        name: "Chomsky — Code Hazard Analyzer",
        description: "A static analysis tool for Go source files, named for the syntax theory behind it. It uses regular expressions to spot risky patterns, automatons to classify them, transducers to auto-patch breaches, and a context-free grammar to keep the file's syntax intact through the fix. Easily the most theory-heavy thing I've built — formal language concepts turned into a working tool.",
        imgSource: "projects/chomsky.png",
        urlSource: "https://github.com/Davinerto9/Chomsky-Code-Hazard-Analyzer",
    },
    {
        name: "ICESI-Gym Frontend",
        description: "The interface students and trainers actually use — the React + TypeScript client for the gym platform above. Users create and log routines, watch their progress build up in charts, and pull personal PDF reports; trainers review assigned users and push recommendations. Built with Redux for global state, STOMP/SockJS websockets for the real-time notifications and trainer alerts, and a responsive layout that works on phone and desktop. Where I got comfortable with typed React and live data.",
        imgSource: "projects/icesi-gym-front.png",
        urlSource: "https://github.com/Davinerto9/ICESI-Gym-Frontend",
    },
    {
        name: "Multiple Client Hub",
        description: "A full chat application with real-time messaging, chat history, audio recording, voice calls, and group chats. The real-time layer runs on ZeroC ICE using the Observer pattern for a websocket-style backend in Java, with a single-page frontend in vanilla JavaScript. Building the live communication layer from the pattern up was the fun part.",
        imgSource: "projects/multiple-client-hub.png",
        urlSource: "https://github.com/Davinerto9/multiple-client-hub",
    }
]

// I am thinking to divide each dataset into different parts of the page for differentiation and styling (advanced crap i would need HELP of the web+ Ai cus idk)