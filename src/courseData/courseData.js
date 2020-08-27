var courseData = [
    {
        id: 1,
        name: "The Data Science Course 2020: Complete Data Science Bootcamp",
        price: 9.99,
        duration: 4,
        hours: 15,
        picture: "https://img-a.udemycdn.com/course/240x135/1754098_e0df_3.jpg",
        instructor: {
            name: "365 Careers Team",
            img: "https://img-a.udemycdn.com/user/200_H/48349002_9974_2.jpg"
        },
        includes: [
            { get: "20 Video Classes"},
            { get: "10 coding exercises"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]
    },
    {
        id: 2,
        name: "Devops Fundamentals- CI/CD with AWS + Docker + Ansible + Jenkins",
        price: 19.9,
        duration: 8,
        hours: 12,
        picture: "https://img-a.udemycdn.com/course/240x135/3236235_7888.jpg",
        instructor: {
            name: "Rahul Shetty",
            img: "https://img-a.udemycdn.com/user/200_H/5997742_a60f_51.jpg" 
        },
        includes: [
            { get: "30 Video Classes"},
            { get: "15 coding exercises"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]
    },
    {
        id: 3,
        name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        price: 49.9,
        duration: 6,
        hours: 5,
        picture: "https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
        instructor: {
            name: "Maximilian Schwarzmüller",
            img: "https://img-a.udemycdn.com/user/200_H/13952972_e853.jpg"
        },
        includes: [
            { get: "50 Video Classes"},
            { get: "20 coding exercises"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]
    },
    {
        id: 4,
        name: "The Complete Oracle SQL Certification Course",
        price: 24.9,
        duration: 8,
        hours: 10,
        picture: "https://img-a.udemycdn.com/course/240x135/866196_be1d.jpg",
        instructor: {
            name: "Imtiaz Ahmad",
            img: "https://img-a.udemycdn.com/user/200_H/7315098_7c17_3.jpg"
        },
        includes: [
            { get: "40 Video Classes"},
            { get: "15 coding exercises"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]
    },
    {
        id: 5, 
        name: "WordPress & WooCommerce Course: Complete Guide to E-Commerce",
        price: 29.99,
        duration: 12,
        hours: 10,
        picture: "https://img-a.udemycdn.com/course/240x135/3412228_3592.jpg",
        instructor: {
            name: "Fatah Gabrial",
            img: "https://img-a.udemycdn.com/user/200_H/38236092_d1b8.jpg"
        },
        includes: [
            { get: "50 Video Classes"},
            { get: "10 project exercises"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]
    },
    {
        id: 6,
        name: "Wordpress for Beginners - Master Wordpress Quickly",
        price: 19.9,
        duration: 2,
        hours: 6,
        picture: "https://img-a.udemycdn.com/course/240x135/355212_948a_10.jpg",
        instructor: {
            name: "Andrew Williams",
            img:  "https://img-a.udemycdn.com/user/200_H/4851584_06aa_2.jpg"
        },
        includes: [
            { get: "30 Video Classes"},
            { get: "5 project exercises"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
    
    {
        id: 7,
        name: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
        price: 9.99,
        duration: 2,
        hours: 10,
        picture: "https://img-a.udemycdn.com/course/240x135/1561458_7f3b.jpg",
        instructor: {
            name: "Manuel Lorenz",
            img: "https://img-a.udemycdn.com/user/200_H/30035496_b180_2.jpg"
        },
        includes: [
            { get: "20 Video Classes"},
            { get: "5 coding exercises"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
  
    {
        id: 8,
        name: "Adobe Photoshop Mega Course-From Beginner to Super Designer",
        price: 59.9,
        duration: 16,
        hours: 10,
        picture: "https://img-a.udemycdn.com/course/240x135/3384040_67c1.jpg",
        instructor: {
            name: "Alan Ayoubi",
            img: "https://img-a.udemycdn.com/user/200_H/77407536_c6da_3.jpg"
        },
        includes: [
            { get: "100 Video Classes"},
            { get: "32 downloadable resources"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
  
    {
        id: 9,
        name: "The Ultimate Drawing Course - Beginner to Advanced",
        price: 49.9,
        duration: 8,
        hours: 10,
        picture: "https://img-a.udemycdn.com/course/240x135/874012_c7f2_3.jpg", 
        instructor: {
            name: "Jaysen Batchelor",
            img: "https://img-a.udemycdn.com/user/200_H/17082766_0590_7.jpg"
        },
        includes: [
            { get: "50 Video Classes"},
            { get: "10 downloadable resources"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
    {
        id: 10,
        name: "Premiere Pro CC for Beginners: Video Editing in Premiere",
        price: 159.9,
        duration: 20,
        hours: 10,
        picture: "https://img-a.udemycdn.com/course/240x135/926512_6fdf_6.jpg",
        instructor: {
            name: "Ava Natkarni",
            img: "https://img-a.udemycdn.com/user/200_H/317821_3cb5_9.jpg"
        },
        includes: [
            { get: "150 Video Classes"},
            { get: "30 downloadable resources"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
    {
        id: 11,
        name: "Photography Masterclass: A Complete Guide to Photography",
        price: 79.9,
        duration: 4,
        hours: 6,
        picture: "https://img-a.udemycdn.com/course/240x135/1462428_639f_7.jpg",
        instructor: {
            name: "David Backhum",
            img: "https://img-a.udemycdn.com/user/200_H/14267432_d7f1.jpg" 
        },
        includes: [
            { get: "63 Video Classes"},
            { get: "50 downloadable resources"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
    {
        id: 12,
        name: "Illustrator CC 2020 MasterClass",
        price: 29.9,
        duration: 5,
        hours: 6,
        picture: "https://img-a.udemycdn.com/course/240x135/1197206_7201_3.jpg",
        instructor: {
            name: "Washington Alto",
            img: "https://img-a.udemycdn.com/user/200_H/713757_e8ae_5.jpg"
        },
        includes: [
            { get: "25 Video Classes"},
            { get: "5 downloadable resources"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
    {
        id: 13,
        name: "DSLR Photography for Beginners: A Step-by-Step Video Course",
        price: 9.9,
        duration: 2,
        hours: 4,
        picture: "https://img-a.udemycdn.com/course/240x135/1814202_36fe.jpg",
        instructor: {
            name: "Kush Sharma",
            img: "https://img-a.udemycdn.com/user/200_H/21967820_1aa1_2.jpg"
        },
        includes: [
            { get: "25 Video Classes"},
            { get: "15 downloadable resources"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
    {
        id: 14,
        name: "Smartphone Photography | iPhone, Android, Instagram & more!",
        price: 4.9,
        duration: 2,
        hours: 3,
        picture: "https://img-a.udemycdn.com/course/240x135/2452638_a6b2_7.jpg",
        instructor: {
            name: "Omid Scheybani",
            img: "https://img-a.udemycdn.com/user/200_H/171479_f266.jpg"
        },
        includes: [
            { get: "20 Video Classes"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
    {
        id: 15,
        name: "Adobe Lightroom Classic CC - Beginner Level",
        price: 29.9,
        duration: 2,
        hours: 5,
        picture: "https://img-a.udemycdn.com/course/240x135/1981576_f891_3.jpg",
        instructor: {
            name: "Villiers Steyn",
            img: "https://img-a.udemycdn.com/user/200_H/9220094_78c6_2.jpg"
        },
        includes: [
            { get: "10 Video Classes"},
            { get: "Full lifetime access"},
            { get: "Access on mobile and TV"},
            { get: "Certificate of completion"}
        ]

    },
  
]

export default courseData;
