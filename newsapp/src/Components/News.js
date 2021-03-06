import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
    articles=[
        // {
        //     "source": { "id": null, "name": "New York Times" },
        //     "author": "Hiroko Tabuchi, Lisa Friedman",
        //     "title": "Oil Executives Testify on Industry’s Role in Climate Disinformation - The New York Times",
        //     "description": "In a historic hearing, the leaders of some of the most powerful energy companies in the world are appearing before a House panel to face questioning on climate change.",
        //     "url": "https://www.nytimes.com/2021/10/28/climate/oil-executives-house-disinformation-testimony.html",
        //     "urlToImage": "https://static01.nyt.com/images/2021/10/28/climate/28cli-oilhearing2/28cli-oilhearing2-facebookJumbo-v2.jpg",
        //     "publishedAt": "2021-10-28T16:01:33Z",
        //     "content": "At Thursdays hearing, the president of BP America, David Lawler, is expected to respond to criticisms like these by pointing to a 1997 speech at Stanford University by John Browne, then chief executi… [+2275 chars]"
        //   },
        //   {
        //     "source": { "id": "fox-news", "name": "Fox News" },
        //     "author": "Ryan Gaydos",
        //     "title": "Braves' Charlie Morton replacement received middle of the night call to get to Houston - Fox News",
        //     "description": "Atlanta Braves pitcher Tucker Davidson was at a Georgia hotel watching the team in Game 1 of the World Series on Tuesday night when he saw Charlie Morton exit with a broken fibula.",
        //     "url": "https://www.foxnews.com/sports/braves-charlie-morton-replacement-houston",
        //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Tucker-Davidson.jpg",
        //     "publishedAt": "2021-10-28T15:57:16Z",
        //     "content": "Atlanta Braves pitcher Tucker Davidson was at a Georgia hotel watching the team in Game 1 of the World Series on Tuesday night when he saw Charlie Morton exit with a broken fibula.\r\nDavidson, a 25-ye… [+2826 chars]"
        //   },
        //   {
        //     "source": { "id": "fox-news", "name": "Fox News" },
        //     "author": "Tyler McCarthy",
        //     "title": "Alec Baldwin shooting investigation focused on who brought live rounds to the set: sheriff - Fox News",
        //     "description": "The sheriff investigating the shooting incident involving Alec Baldwin on the set of the movie “Rust” said the investigation is now focused on the presence of live ammunition on the set.",
        //     "url": "https://www.foxnews.com/entertainment/alec-baldwin-shooting-investigation-who-brought-live-rounds",
        //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/rust-set.png",
        //     "publishedAt": "2021-10-28T15:28:34Z",
        //     "content": "The sheriff investigating the shooting incident involving Alec Baldwin on the set of the movie \"Rust\" said the investigation is now focused on the presence of live ammunition on the set.\r\nSanta Fe Co… [+3587 chars]"
        //   },
        //   {
        //     "source": { "id": "nbc-news", "name": "NBC News" },
        //     "author": "Pete Williams",
        //     "title": "Justice Department reaches settlement with families of 2015 Charleston church massacre - NBC News",
        //     "description": "The Justice Department agreed Thursday to settle a series of lawsuits filed by survivors and families of the victims of 2015’s deadly church shooting in Charleston, South Carolina.",
        //     "url": "https://www.nbcnews.com/politics/justice-department/families-charleston-church-shooting-settle-lawsuit-justice-department-n1282635",
        //     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_43/3515637/211028-charleston-church-shooting-vigil-jm-0941.jpg",
        //     "publishedAt": "2021-10-28T15:20:00Z",
        //     "content": "The Justice Department agreed Thursday to settle a series of lawsuits filed by survivors and families of the victims of 2015s deadly church shooting in Charleston, South Carolina.\r\nNine people were k… [+2566 chars]"
        //   },
        //   {
        //     "source": { "id": "usa-today", "name": "USA Today" },
        //     "author": "Eve Chen, USA TODAY",
        //     "title": "'Outraged' American Airlines bans passenger for life after flight attendant injured - USA TODAY",
        //     "description": "An American Airlines flight from New York to California was forced to divert to Denver after the airline says a flight attendant was assaulted.",
        //     "url": "https://www.usatoday.com/story/travel/airline-news/2021/10/28/american-airlines-flight-forced-divert-after-flight-attendant-hurt/8580912002/",
        //     "urlToImage": "https://www.gannett-cdn.com/presto/2021/10/28/USAT/1bb75d79-30b7-4d50-91da-e3908248b4fe-GettyImages-1323904374.jpeg?auto=webp&crop=2999,1687,x0,y313&format=pjpg&width=1200",
        //     "publishedAt": "2021-10-28T15:11:15Z",
        //     "content": "An American Airlines flight from New York to Orange County, California, was forced to divert to Denver Wednesday after the airline says a passenger \"physically assaulted\" a female flight attendant.\r\n… [+1738 chars]"
        //   },
        //   {
        //     "source": { "id": null, "name": "YouTube" },
        //     "author": null,
        //     "title": "Metroid Dread - Discover the Hunter Trailer - Nintendo Switch - Nintendo",
        //     "description": "Discover the origins and motivations that helped make Samus Aran the most powerful bounty hunter in the galaxy.Check out more on Samus and Metroid Dread: htt...",
        //     "url": "https://www.youtube.com/watch?v=eKC6KZ9wQbs",
        //     "urlToImage": "https://i.ytimg.com/vi/eKC6KZ9wQbs/maxresdefault.jpg",
        //     "publishedAt": "2021-10-28T15:00:31Z",
        //     "content": null
        //   },
        //   {
        //     "source": { "id": null, "name": "Yahoo Entertainment" },
        //     "author": "MARCIA DUNN",
        //     "title": "Solar wing jammed on NASA spacecraft chasing asteroids - Yahoo News",
        //     "description": "NASA is debating whether to try to fix a jammed solar panel on its newly launched Lucy spacecraft, en route to explore an unprecedented number of asteroids...",
        //     "url": "https://news.yahoo.com/solar-wing-jammed-nasa-spacecraft-144758841.html",
        //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/QlJ3eh.SVoG7bPhzLUTYGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03ODg-/https://s.yimg.com/uu/api/res/1.2/KoY06uRXDguCUgGeZG0wxQ--~B/aD0xOTY5O3c9MzAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/93ae64edaf0630c29276c58b45d76916",
        //     "publishedAt": "2021-10-28T14:47:58Z",
        //     "content": "CAPE CANAVERAL, Fla. (AP) NASA is debating whether to try to fix a jammed solar panel on its newly launched Lucy spacecraft, en route to explore an unprecedented number of asteroids.\r\nThe problem cro… [+992 chars]"
        //   },
        //   {
        //     "source": { "id": "the-verge", "name": "The Verge" },
        //     "author": "Tom Warren",
        //     "title": "Sony now uses PlayStation PC label for its PC games - The Verge",
        //     "description": "Sony has registered PlayStation PC as a company to publish its PC games. It comes as Sony has started to get serious about releasing its PlayStation games on Steam over the past year.",
        //     "url": "https://www.theverge.com/2021/10/28/22750577/sony-playstation-pc-games-label-steam",
        //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/WU5Dtu_92-_LgWkznVFADZ9wA3A=/0x95:1320x786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22962825/sonylogo.jpg",
        //     "publishedAt": "2021-10-28T14:27:42Z",
        //     "content": "Sony has been getting serious about PC this year\r\nSonys PlayStation games on Steam are now published by PlayStation PC LLC instead of PlayStation Mobile. Forum posters at Resetera noticed the change … [+1418 chars]"
        //   },
        //   {
        //     "source": { "id": "ars-technica", "name": "Ars Technica" },
        //     "author": "Andrew Cunningham",
        //     "title": "Raspberry Pi Zero 2 W: 5x faster than the original for $5 more - Ars Technica",
        //     "description": "New miniature Pi will fit most cases and accessories made for the first Pi Zero.",
        //     "url": "https://arstechnica.com/gadgets/2021/10/raspberry-pi-zero-2-w-crams-pi-3-parts-into-the-same-tiny-board/",
        //     "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/10/Raspberry-Pi-Zero-2-W-Hero-760x380.jpeg",
        //     "publishedAt": "2021-10-28T14:25:23Z",
        //     "content": "Enlarge/ The Raspberry Pi Zero 2 W.\r\n8 with 7 posters participating\r\nThe diminutive Raspberry Pi Zero is getting its first upgrade in nearly five years. Today, Raspberry Pi founder Eben Upton announc… [+1956 chars]"
        //   },
        //   {
        //     "source": { "id": null, "name": "Page Six" },
        //     "author": "Leah Bitsky",
        //     "title": "Brad Pitt's petition for review in Angelina Jolie custody case denied - Page Six",
        //     "description": "A California appeals court disqualified Judge Ouderkirk, ruling that he didn’t sufficiently disclose business relationships with Pitt’s attorneys.",
        //     "url": "https://pagesix.com/2021/10/28/brad-pitts-petition-in-angelina-jolie-custody-case-denied/",
        //     "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2021/10/angelina-jolie-brad-pitt-90.jpg?quality=90&strip=all&w=1200",
        //     "publishedAt": "2021-10-28T14:04:00Z",
        //     "content": "Brad Pitts petition to challenge the courts ruling to disqualify the private judge in his ongoing custody battle with Angelina Jolie has been denied. \r\nOn Wednesday, the California Supreme Court shut… [+2422 chars]"
        //   },
        //   {
        //     "source": { "id": null, "name": "ABC6OnYourSide.com" },
        //     "author": "STEPHEN LOIACONI, Sinclair Broadcast Group",
        //     "title": "More vaccinated people are dying of COVID-19. Here's what that means - KOMO News",
        //     "description": "Data from several states and the federal government suggests deaths among Americans fully vaccinated against COVID-19 rose sharply amid the nation&rsquo;s most recent surge of infections, but experts say that is not unexpected as more of the population gets i…",
        //     "url": "https://abc6onyourside.com/news/nation-world/rise-in-breakthrough-deaths-should-not-cast-doubt-on-vaccines-experts-say",
        //     "urlToImage": "https://static-18.sinclairstoryline.com/resources/media/57c01081-47cf-44ae-b37b-3b45fce8f2dc-large16x9_AP21294035516945.jpg?1635369342514",
        //     "publishedAt": "2021-10-28T14:03:21Z",
        //     "content": null
        //   },
        //   {
        //     "source": { "id": null, "name": "MarketWatch" },
        //     "author": "Barbara Kollmeyer",
        //     "title": "Shell stock tumbles after disappointing results as activist investor Third Point calls for a breakup - MarketWatch",
        //     "description": "WPP shares surge on earnings",
        //     "url": "https://www.marketwatch.com/story/shell-stock-tumbles-after-disappointing-results-as-activist-investor-third-point-calls-for-a-breakup-11635428735",
        //     "urlToImage": "https://images.mktw.net/im-364796/social",
        //     "publishedAt": "2021-10-28T13:45:00Z",
        //     "content": "Royal Dutch Shell was getting battered from all sides on Thursday. Investors were displeased with earnings that fell short of expectations, and activist investor Third Point has apparently called for… [+3292 chars]"
        //   },
        //   {
        //     "source": { "id": null, "name": "GMA" },
        //     "author": "Good Morning America",
        //     "title": "American Music Awards 2021: Complete list of nominations - GMA",
        //     "description": "Taylor Swift is up for artist of the year, along with BTS and Olivia Rodrigo.",
        //     "url": "https://www.goodmorningamerica.com/culture/story/american-music-awards-2021-complete-list-nominations-80820474",
        //     "urlToImage": "https://s.abcnews.com/images/GMA/olivia-rodrigo-gty-rc-211028_1635426160714_hpMain_16x9_992.jpg",
        //     "publishedAt": "2021-10-28T13:30:00Z",
        //     "content": null
        //   },
        //   {
        //     "source": { "id": null, "name": "Yahoo Entertainment" },
        //     "author": "Jasmine Alyce",
        //     "title": "‘I Wonder How I Can Embarrass This Man This Month’: Fans Call Out Jada Pinkett Smith for Saying This About Marriage to Will, Actress Later Responds - Yahoo News",
        //     "description": "Jada Pinkett Smith‘s marriage to Will Smith is the topic of internet conversation yet again thanks to more oversharing about what goes on with the […]",
        //     "url": "https://news.yahoo.com/wonder-embarrass-man-month-fans-133000538.html",
        //     "urlToImage": "https://s.yimg.com/uu/api/res/1.2/EeooW6LjBd7Z.WwR4IAV8g--~B/aD00MDM7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/atlanta_black_star_articles_803/a14df4d90df2dbce0284539e793ae7a7",
        //     "publishedAt": "2021-10-28T13:30:00Z",
        //     "content": "Jada Pinkett Smiths marriage to Will Smith is the topic of internet conversation yet again thanks to more oversharing about what goes on with the two behind bedroom doors, this time on the Red Table … [+3820 chars]"
        //   },
        //   {
        //     "source": { "id": null, "name": "NDTV News" },
        //     "author": null,
        //     "title": "\"Win Some, Lose Some\": Ex-Attorney General Who Fought For Aryan Khan Bail - NDTV",
        //     "description": "Aryan Khan, Arbaaz Merchant, and Munmun Dhamecha, who were granted bail in the Mumbai cruise drugs seizure case, will be released from jail after the Bombay High Court issues a detailed order in the matter on Friday, former Attorney General of India",
        //     "url": "https://www.ndtv.com/india-news/aryan-khan-bail-mukul-rohatgi-who-fought-for-bail-win-some-lose-some-2591264",
        //     "urlToImage": "https://c.ndtvimg.com/2021-10/kh0shjf8_mukul-rohatgi-pti_625x300_28_October_21.jpg",
        //     "publishedAt": "2021-10-28T13:24:51Z",
        //     "content": "Aryan Khan case: Mukul Rohatgi at the Bombay High Court.\r\nHighlights\r\n<ul><li>Former Attorney General of India Mukul Rohatgi represented Aryan Khan\r\n</li><li>They will come out of the jail by tomorro… [+1651 chars]"
        //   },
        //   {
        //     "source": { "id": "cbs-news", "name": "CBS News" },
        //     "author": "Zoe Zoe",
        //     "title": "Scientists believe they've spotted the first planet outside the Milky Way - CBS News",
        //     "description": "The planet hasn't been confirmed but the findings could help scientists identify other planets outside of our galaxy.",
        //     "url": "https://www.cbsnews.com/news/nasa-new-planet-discovered-outside-milky-way/",
        //     "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2021/10/28/da7a20a3-bdbd-4970-a4b6-d31c484fe649/thumbnail/1200x630/466f811a29c424c2776805aa1e4a982a/m51-comp.jpg",
        //     "publishedAt": "2021-10-28T13:16:03Z",
        //     "content": "NASA says a group of scientists may have discovered signs of a new planet beyond the Milky Way. The potential discovery could be the first-ever planet found in another galaxy. \r\nThe potential planet,… [+1910 chars]"
        //   },
        //   {
        //     "source": { "id": null, "name": "Whitehouse.gov" },
        //     "author": null,
        //     "title": "President Biden Announces the Build Back Better Framework - The White House",
        //     "description": "Joe Biden believes that there’s no greater economic engine in the world than the hard work and ingenuity of the American people. But for too long, the",
        //     "url": "https://www.whitehouse.gov/briefing-room/statements-releases/2021/10/28/president-biden-announces-the-build-back-better-framework/",
        //     "urlToImage": "https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share-1100x740.png",
        //     "publishedAt": "2021-10-28T13:07:30Z",
        //     "content": "Joe Biden believes that theres no greater economic engine in the world than the hard work and ingenuity of the American people. But for too long, the economy has worked great for those at the top, wh… [+25918 chars]"
        //   },
        //   {
        //     "source": { "id": "financial-times", "name": "Financial Times" },
        //     "author": null,
        //     "title": "Cheap antidepressant cuts risk of Covid hospitalisation, study finds - Financial Times",
        //     "description": "Trial shows fluvoxamine reduces need for retention in an emergency setting or transfer to another hospital",
        //     "url": "https://www.ft.com/content/c867b3ed-daee-485c-91ca-ee2e98528d02",
        //     "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F889f88aa-9ed7-4d8c-be09-460f35250b96.jpg?source=next-opengraph&fit=scale-down&width=900",
        //     "publishedAt": "2021-10-28T12:42:35Z",
        //     "content": "A cheap antidepressant reduces the risk of hospitalisation in Covid-19 outpatients that are at higher risk of severe disease, a large study has found. \r\nResearchers in a peer-reviewed study published… [+2763 chars]"
        //   },
        
        ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=305e67f6ef574ee89841d789394c5f66"
        let data= await fetch(url);
        let parseData= await data.json();
        console.log(parseData)
        this.setState({articles:parseData.articles})
    }
  render() {
    return (
      <div class="container my-2">
        <h2 id="myh">NewsApp Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage} newsUrl={element.url}/></div>
  })}
          </div>
          </div>
      
    )
}
}

export default News
