import { IMAGES } from "./theme";

// index4 
export const iconBlog = [
    { image: IMAGES.icon1, title1: 'To Think Creatively', title2: 'and Create' },
    { image: IMAGES.icon2, title1: 'To Feel Fne and to', title2: 'Understand Emotions' },
    { image: IMAGES.icon3, title1: 'To be Independent', title2: 'and Active' },
    { image: IMAGES.icon4, title1: 'To Apply', title2: 'Knowledge in Life' },
];
export const iconBlog2 = [
    { icon: <i className="flaticon-rattle text-blue" />, title: 'Infants', },
    { icon: <i className="flaticon-bricks text-green" />, title: 'I myself', },
    { icon: <i className="flaticon-puzzle text-orange" />, title: 'Goodie', },
];
// bloglist 
export const bloglist = [
    { image: IMAGES.bloglarge1, title: "Why is Early Education Essential?", },
    { image: IMAGES.bloglarge2, title: "Ten Reasons Why People Love Education", },
    { image: IMAGES.bloglarge3, title: "Five Easy Ways To Facilitate Education.", },
    { image: IMAGES.bloglarge1, title: "Education Is So Famous, But Why?", },
    { image: IMAGES.bloglarge2, title: "The Modern Rules Of Education.", },
    { image: IMAGES.bloglarge3, title: "The Shocking Revelation of Education.", },
]

// status slider 
export const statusslider = [
    { image: IMAGES.background5 },
    { image: IMAGES.background3 },
    { image: IMAGES.background1 },
    { image: IMAGES.background2 },
    { image: IMAGES.background4 },
]
// header menu 
export const MenuList = [
    {
        maintitle: 'Home',
        content: [
            { heading: 'Home 1', to: '' },
            { heading: 'Home 2', to: 'index-2' },
            { heading: 'Home 3', to: 'index-3' },
            { heading: 'Home 4', to: 'index-4' },
        ]
    },
    {
        maintitle: 'About',
        content: [
            { heading: 'About Us 1', to: 'about-1' },
            { heading: 'About Us 2', to: 'about-2' },
        ]
    },
    {
        maintitle: "Blog",
        classChange: 'sub-menu-down',
        content: [
            {
                maintitle: "Page Layout",
                classChange: 'sub-menu',
                content: [
                    {
                        maintitle: "No Sidebar",
                        classChange: 'sub-menu',
                        content: [
                            { heading: "Blog List", to: "/blog-list" },
                            { heading: "Blog Grid", to: "/blog-grid" },
                            { heading: "Blog Grid Wide", to: "/blog-grid-wide" }
                        ]
                    },
                    {
                        maintitle: "2 Columns",
                        classChange: 'sub-menu',
                        content: [
                            { heading: "Blog List", to: "/blog-list-right-sidebar" },
                            { heading: "Blog Grid", to: "/blog-grid-right-sidebar" }
                        ]
                    },
                    {
                        maintitle: "3 Columns",
                        classChange: 'sub-menu',
                        content: [
                            { heading: "Blog List", to: "/blog-list-both-sidebar" },
                            { heading: "Blog Grid", to: "/blog-grid-both-sidebar" }
                        ]
                    }
                ]
            },
            {
                maintitle: "Blog Sidebar",
                classChange: 'sub-menu-down',
                content: [
                    {
                        maintitle: "No Sidebar",
                        classChange: 'sub-menu',
                        content: [
                            { heading: "Blog List", to: "/blog-list" },
                            { heading: "Blog Grid", to: "/blog-grid" }
                        ]
                    },
                    {
                        maintitle: "Left Sidebar",
                        classChange: 'sub-menu',
                        content: [
                            { heading: "Blog List", to: "/blog-list-left-sidebar" },
                            { heading: "Blog Grid", to: "/blog-grid-left-sidebar" }
                        ]
                    },
                    {
                        maintitle: "Right Sidebar",
                        classChange: 'sub-menu',
                        content: [
                            { heading: "Blog List", to: "/blog-list-right-sidebar" },
                            { heading: "Blog Grid", to: "/blog-grid-right-sidebar" }
                        ]
                    },
                    {
                        maintitle: "2 Sidebar",
                        classChange: 'sub-menu',
                        content: [
                            { heading: "Blog List", to: "/blog-list-both-sidebar" },
                            { heading: "Blog Grid", to: "/blog-grid-both-sidebar" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        maintitle: 'Post Layout',
        classChange: 'has-mega-menu',
        content: [
            {
                label: 'Side bar',
                submenu: [
                    { heading: 'Post Left Sidebar', to: '/post-left-sidebar' },
                    { heading: 'Post Right Sidebar', to: '/post-right-sidebar' },
                    { heading: 'Post both Sidebar', to: '/post-both-sidebar' },
                    { heading: 'Post no Sidebar', to: '/post-no-sidebar' },
                ],
            },
            {
                label: 'Post Type',
                submenu: [
                    { heading: 'Text Post ', to: '/post-text' , new :  <span class="new-page">New</span>},
                    { heading: 'Image Post ', to: '/post-image' },
                    { heading: 'Post Video', to: '/post-video' },
                    { heading: 'Post Links', to: '/post-link' },
                    { heading: 'Post Audio', to: '/post-audio' },
                    { heading: 'Post Quote', to: '/post-quote' },
                    { heading: 'Tutorial Post ', to: '/post-tutorial' },
                    { heading: 'Cateloge Post ', to: '/post-cateloge' },
                ],
            },
            {
                label: 'Multiple Media',
                submenu: [
                    { heading: 'Banner ', to: '/post-banner' },
                    { heading: 'Post Slide Show', to: '/post-slide-show' },
                    { heading: 'Gallery', to: '/post-gallery' },
                    { heading: 'Status Slider ', to: '/post-status-slider' },
                ],
            },
            {
                label: 'Post Layout Type',
                submenu: [
                    { heading: 'Standard Post ', to: '/post-standard' },
                    { heading: 'Side Post ', to: '/post-side' },
                    { heading: 'Corner Post ', to: '/post-corner' },
                ],
            },
        ]
    },
    {
        maintitle: 'Classes',
        content: [
            { heading: 'Classes', to: 'classes' },
            { heading: 'Classes Details', to: 'classes-details' },
        ]
    },
    {
        maintitle: 'Teachers',
        content: [
            { heading: 'Teachers', to: 'teachers' },
            { heading: 'Teachers Details', to: 'teachers-details' },
        ]
    },
    {
        maintitle: 'Pages',
        content: [
            { heading: 'Coming Soon', to: 'coming-soon' },
            { heading: 'Faqs', to: 'faqs' },
            { heading: 'Event', to: 'event' },
            { heading: 'Event Details', to: 'event-details' },
            { heading: 'Error 404', to: 'error-404' },
            { heading: 'Contact Us', to: 'contact-us' },
        ]
    },

    {
        maintitle: 'Our Gallery',
        content: [
            { heading: 'Gallery Grid', to: 'gallery' },
            { heading: 'Gallery Masonary', to: 'gallery-masonary' },
            { heading: 'Gallery Tiles Filter', to: 'gallery-filter' }
        ]
    },
];


// index 3 
export const counterBlog = [
    { title: 'Success Stories', number: '8', label: 'K+' },
    { title: 'Expert Instructor', number: '200', label: '+' },
    { title: 'Worldwide Students', number: '108', label: 'K+' },
    { title: 'Trendy Subjects', number: '310', label: '+' },

];
export const iconBoxBlog = [
    { image: IMAGES.star1, image2: IMAGES.icon1png, title: 'To Think Creatively ', title2: 'and Create' },
    { image: IMAGES.star2, image2: IMAGES.icon2png, title: 'To Feel Fne and to ', title2: 'Understand Emotions' },
    { image: IMAGES.star3, image2: IMAGES.icon3png, title: 'To be Independent ', title2: 'and Active' },
    { image: IMAGES.star4, image2: IMAGES.icon4png, title: 'To Apply', title2: 'Knowledge in Life' },
];

export const teacherBlog = [
    { name: 'Kate Doe', image1: IMAGES.backwhite, image2: IMAGES.team1 },
    { name: 'Jone Doe', image1: IMAGES.backpink, image2: IMAGES.team2 },
    { name: 'Manie Doe', image1: IMAGES.backgreen, image2: IMAGES.team3 },
    { name: 'Jennie Doe', image1: IMAGES.backred, image2: IMAGES.team4 },
];
// aboutus1 
export const galleryBlog = [
    { image: IMAGES.gallery1 },
    { image: IMAGES.gallery2 },
    { image: IMAGES.gallery3 },
    { image: IMAGES.gallery4 },
    { image: IMAGES.gallery5 },
    { image: IMAGES.gallery6 },
];
// classes 
export const classesBlog = [
    { images: IMAGES.clsimg1, title: 'Art Drawing Classes' },
    { images: IMAGES.clsimg4, title: 'The Answer To Everything.' },
    { images: IMAGES.clsimg3, title: 'The Miracle Of Education.' },
    { images: IMAGES.clsimg5, title: 'Ten Things To Know About' },
    { images: IMAGES.clsimg2, title: 'The Story Of Education' },
    { images: IMAGES.clsimg6, title: 'The Shocking Revelation' },
];
// classes details 
export const galleryBlog2 = [
    { image: IMAGES.gallery1, },
    { image: IMAGES.gallery5, },
    { image: IMAGES.gallery7, },
    { image: IMAGES.gallery8, },
    { image: IMAGES.gallery2, },
    { image: IMAGES.gallery3, },
    { image: IMAGES.gallery4, },
    { image: IMAGES.gallery9, },
];
// teachers 
export const teamBlog = [
    { image: IMAGES.team1jpg, },
    { image: IMAGES.team2jpg, },
    { image: IMAGES.team3jpg, },
    { image: IMAGES.team4jpg, },
    { image: IMAGES.team5jpg, },
    { image: IMAGES.team6jpg, },
    { image: IMAGES.team7jpg, },
    { image: IMAGES.team8jpg, },
    { image: IMAGES.team3jpg, },
    { image: IMAGES.team4jpg, },
    { image: IMAGES.team5jpg, },
    { image: IMAGES.team6jpg, },
];
// event 
export const eventBlog = [
    { images: IMAGES.bloglarge1, date: '05', title: 'Business Conferences 2025', },
    { images: IMAGES.bloglarge2, date: '27', title: '5 Outrageous Ideas For You', },
    { images: IMAGES.bloglarge3, date: '25', title: 'Seven Latest Developments', },
    { images: IMAGES.bloglarge1, date: '03', title: 'Five Mind Numbing Facts About', },
    { images: IMAGES.bloglarge2, date: '19', title: 'Five Ways To Introduce', },
    { images: IMAGES.bloglarge3, date: '17', title: 'Ten Things To Know About', },
];
// gallery grid 
export const image = [
    IMAGES.gallery1,
    IMAGES.gallery2,
    IMAGES.gallery3,
    IMAGES.gallery4,
    IMAGES.gallery5,
    IMAGES.gallery6,
    IMAGES.gallery1,
    IMAGES.gallery2,
    IMAGES.gallery3,
    IMAGES.gallery4,
    IMAGES.gallery5,
    IMAGES.gallery6,
];
// gallery masonary 
export const masonaryimage = [
    IMAGES.masonary1,
    IMAGES.masonary2,
    IMAGES.masonary3,
    IMAGES.masonary4,
    IMAGES.masonary5,
    IMAGES.masonary6,
    IMAGES.masonary1,
    IMAGES.masonary2,
    IMAGES.masonary3,
    IMAGES.masonary7,
    IMAGES.masonary8,
    IMAGES.masonary9
];
// element accordian  
export const defaultAccordion = [
    {
        title: '500 new items in the toy collection',
        text:
            'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
    },
    {
        title: 'Throwing birthday parties is fun and easy',
        text:
            'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
    },
    {
        title: 'Multiple benefits from buying a membership',
        text:
            'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
    },
    {
        title: 'Fresh snacks and beverages for everyone',
        text:
            'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
    },
    {
        title: 'Over 1 000 visitors for the last year',
        text:
            'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
    },
]
//  element bannerslider 
export const carouselBlog = [
    { image: IMAGES.slide3, title: 'Children Academy', title2: "First Researchers" },
    { image: IMAGES.slide2, title: 'Unveiling Young', title2: "Talent at Children" },
    { image: IMAGES.slide1, title: "Children Academy's", title2: "Research Pioneers" },
];
// element bannerslider2 
export const carouselBlog2 = [
    { image: IMAGES.slide2 },
    { image: IMAGES.slide3 },
    { image: IMAGES.slide1 },
];
// Element blogsliderhome3 
export const latestBlog = [
    { image: IMAGES.blogpic1, title: 'The Trust About Education Blog is About to be revealed.' },
    { image: IMAGES.blogpic2, title: 'The Biggest contribution of education blog of Humanity.' },
    { image: IMAGES.blogpic3, title: 'Five Reasone Why People like Education Blog' },
    { image: IMAGES.blogpic2, title: 'The Trust About Education Blog is About to be revealed.' },
]
// element centersliderhome 3
export const latestBlog2 = [
    { image: IMAGES.testimonial4png },
    { image: IMAGES.testimonial4png },
    { image: IMAGES.testimonial4png },
]
// element classess slider 
export const latestBlog3 = [
    { image: IMAGES.clsimg1, },
    { image: IMAGES.clsimg2, },
    { image: IMAGES.clsimg3, },
    { image: IMAGES.clsimg1, },
]
// element filtertab 
export const imageBlog = [
    { id: '0', Large_img: IMAGES.gallery1, title: 'Education' },
    { id: '1', Large_img: IMAGES.gallery2, title: 'Drawing' },
    { id: '2', Large_img: IMAGES.gallery3, title: 'Lunch' },
    { id: '3', Large_img: IMAGES.gallery4, title: 'Education' },
    { id: '4', Large_img: IMAGES.gallery5, title: 'Lunch' },
    { id: '5', Large_img: IMAGES.gallery6, title: 'Drawing' },
    { id: '6', Large_img: IMAGES.gallery1, title: 'Lunch' },
    { id: '7', Large_img: IMAGES.gallery2, title: 'Game' },
    { id: '8', Large_img: IMAGES.gallery3, title: 'Lunch' },
    { id: '9', Large_img: IMAGES.gallery4, title: 'Education' },
    { id: '10', Large_img: IMAGES.gallery3, title: 'Drawing' },
    { id: '11', Large_img: IMAGES.gallery6, title: 'Game' },
]
export const filterData = [
    { id: '0', title: 'All', },
    { id: '1', title: 'Drawing', },
    { id: '2', title: 'Education', },
    { id: '3', title: 'Game', },
    { id: '4', title: 'Lunch', },
];
// element fromslider 
export const latestBlog4 = [
    { image: IMAGES.bloggrid1, },
    { image: IMAGES.bloggrid2, },
    { image: IMAGES.bloggrid3, },
    { image: IMAGES.bloggrid2, },
]
// element mainsliderhome3
export const sliderBlog = [
    { image: IMAGES.banner4 },
    { image: IMAGES.slide3 },
    { image: IMAGES.slide1 },
];
// element sidebar 
export const btnBlog = [
    { title: 'Design' }, { title: 'User interface' }, { title: 'SEO' }, { title: 'WordPress' }, { title: 'Development' }, { title: 'Joomla' },
    { title: 'Design' }, { title: 'User interface' }, { title: 'SEO' }, { title: 'WordPress' }, { title: 'Development' }, { title: 'Joomla' },
    { title: 'Design' }, { title: 'User interface' }, { title: 'SEO' }, { title: 'WordPress' }, { title: 'Development' }, { title: 'Joomla' },
];
// element teacherslider 
export const latestBlog6 = [
    { image: IMAGES.team1jpg, },
    { image: IMAGES.team2jpg, },
    { image: IMAGES.team3jpg, },
    { image: IMAGES.team4jpg, },
    { image: IMAGES.team3jpg, },
]
// element testimoniul slider 
export const latestBlog7 = [
    { image: IMAGES.testimonial2, },
    { image: IMAGES.testimonial2, },
]