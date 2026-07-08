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
        greatestQuote: " I'm not gonna run away, I never go back on my word! That's my nindō: my ninja way!. It's almost unbearable, isn't it… the pain of being all alone. I know that feeling; I've been there, in that dark and lonely place, but now there are others, other people who mean a lot to me. I care more about them than I do myself, and I won't let anyone hurt them. That's why I'll never give up. I will stop you, even if I have to kill you! They saved me from myself. They rescued me from my loneliness. They were the first to accept me as who I am. They're my friends.",
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
        id: 1, name: "Learning wacky things", treatment: "default", icon: PsychologyIcon,
        blurb: "I chase down random rabbit holes — obscure tech, weird history, how things work under the hood.",
        detail: "If something makes me go 'wait, how does that work?', I lose an evening to it. It's how half my coding knowledge got started.",
    },
    {
        id: 2, name: "Marvel & DC Figures", treatment: "limited", icon: SportsMartialArtsIcon,
        blurb: "A growing shelf of Marvel and DC figures.",
        detail: "Favorites so far: The Amazing Spider-Man (Marvel). I go for dynamic poses over boxed-and-mint — they're meant to be seen.",
        stat: "Figures owned: [n]",
    },
    {
        id: 3, name: "Games Across Platforms", treatment: "default", icon: SportsEsportsIcon,
        blurb: "PC, PlayStation, Nintendo, retro — I don't do console wars.",
        detail: "Good games are good games. I bounce between platforms depending on what's worth playing.",
    },
    {
        id: 4, name: "Limited Edition Hunting", treatment: "limited", icon: Inventory2Icon,
        blurb: "Tracking down limited-edition releases and collector's boxes.",
        detail: "The thrill is in the hunt — finding the rare version before it's gone or scalped into orbit.",
        stat: "Best find: Avatar the last airbender BOOK 2 DVD Retailer",
        interestingFact: "I would like to find and get Physical Rare DS games, 3DS games, Manga Limited Editions, Amiibos, Yo-Kai Watches"
    },
    {
        id: 5, name: "Platinuming Games (100%)", treatment: "shine", icon: EmojiEventsIcon,
        blurb: "Chasing that 100% completion — every trophy, every achievement.",
        detail: "There's a specific satisfaction in the platinum ping. Toughest one I've earned: [Elden Ring].",
        stat: "Platinums: 7",
    },
    {
        id: 6, name: "Classic / Retro Games", treatment: "vintage", icon: TvIcon,
        blurb: "Going back to the classics that hold up.",
        detail: "Old games taught design without hand-holding. I keep coming back to: [Sonic The Hedhehog 2, LEGO StarWars The Complete Saga, Duke Nukem Manhattan Project].",
    },
    {
        id: 7, name: "Collecting & Reading Manga", treatment: "manga", icon: MenuBookIcon,
        blurb: "A physical manga shelf that keeps outgrowing itself.",
        detail: "Currently reading: DAN DA DAN. I prefer physical volumes — the paper, the shelf, the whole ritual.",
        stat: "Volumes: 8",
    },
    {
        id: 8, name: "Marvel & DC Comics", treatment: "comic", icon: BoltIcon,
        blurb: "Collecting and reading Marvel and DC runs.",
        detail: "Favorite run: [Batman The Dark Knight Returns, The Killing Joke]. Single issues and trades both — I'm not picky about format.",
    },
    {
        id: 9, name: "Watching Anime", treatment: "default", icon: AnimationIcon,
        blurb: "Always mid-way through at least one series.",
        detail: "All-time favorites: [add yours]. My inspirations section is basically a love letter to some of these.",
    },
    {
        id: 10, name: "Coding Wacky Projects", treatment: "default", icon: CodeIcon,
        blurb: "Building strange, fun things — like this very page.",
        detail: "The weirder the idea, the more I want to build it. This site is exhibit A.",
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
            11: "I Want to Break Free"
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
            10: "Going back to Indiana + Jackson's 5"

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
        description: "The first project of an integrated Full Stack Application, it features the database schema for the Gym application, the administration website made in Thymeleaf for User Data Management. The Backend Application is based in Java Springboot following it's layered architecture(JPA, Security, REST(Documented with OpenAPI), MVC)",
        imgSource: "projects/icesigym.back.png",
        urlSource: ""
    },
    {
        name: "Universitary Wellbeing",
        description: "Integrated Project made for the Wellbeing department for ICESI University, it provides a rich user Experience allowing to register for activities/events/tournaments, manage the schedule with such and provides all the Wellbeing services into One Integrated web app. It is executed following SCRUM Methodology, enriched with software & database design documentation and featuring the use of the Django Framework, Contenarization in Docker,User driven testing with Selenium web driver, Relational Database deployed on Supabase and web application deployed on Render.",
        imgSource: "projects/Integrator-universitary-Wellbeing.png",
        urlSource: "https://github.com/ICESI-PI1-202502/20252-g3-pi1-t3"
    },
    {
        name: "Sentiment Analyzer",
        description: "Machine Learning Project using simple Neural Networks for binary class Airline focused sentiment analysis.",
        imgSource: "projects/sentiment-Analyzer-github.png",
        urlSource: "",
    },
    {
        name: "Chomsky KeY Patterns",
        description: "Python project featuring Regular Expression use for pattern recognition, Automatons for Pattern Classification, Transducers for Breach Patching, CFG for syntax preservation for GOlang files.",
        imgSource: "projects/chomsky.png",
        urlSource: "",
    },
    {
        name: "ICESI-Gym Frontend",
        description: "Frontend Application based in React.js and Typescript featuring Redux for Global state management, Websockets STOMP/SockJS for Real Time Operations, husky webhooks. ",
        imgSource: "projects/icesi-gym-front.png",
        urlSource: "",
    },
    {
        name: "Multiple client hub",
        description: "Web app Chat Application with functionalities such as Real-Time texting, Chat History, Audio recording and Calls between users and Group chats. It is based on ZeroC ICE(Observer Pattern) for Websockets Alike Implementation in Java and frontend SPA on dynamic Javascript.",
        imgSource: "projects/multiple-client-hub.png",
        urlSource: "https://github.com/Davinerto9/multiple-client-hub",
    }
]

// I am thinking to divide each dataset into different parts of the page for differentiation and styling (advanced crap i would need HELP of the web+ Ai cus idk)