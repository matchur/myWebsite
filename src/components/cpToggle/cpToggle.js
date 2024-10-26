import React from 'react';
import './cpToggle.css';

const CpToggle = () => {


    const toggleTheme = () => {
        document.querySelector('.App-backGround').classList.toggle('dark-theme');
        document.querySelector('.Text-projetos').classList.toggle('dark-theme');
        document.querySelector('.tumbler-wrapper').classList.toggle('dark-theme');
        const spliters = document.querySelectorAll('.Spliter');
        spliters.forEach(spliter => {
            spliter.classList.toggle('dark-theme');
        });
    };


    return (
        <div className="tumbler-wrapper" onClick={toggleTheme}>
            <div className="tumbler"></div> <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 499.712 499.712"
                style={{ enableBackground: 'new 0 0 499.712 499.712' }}
                xmlSpace="preserve"
                aria-labelledby="svgTitle"
            >
                <title id="svgTitle">Ilustração com sol e lua</title>
                <path
                    style={{ fill: '#FFD93B' }}
                    d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88
        C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712
        C39.744,355.368,90.944,375.528,146.88,375.528z"
                ></path>
                <path
                    style={{ fill: '#F4C534' }}
                    d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256
        c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256
        C499.712,162.12,461.392,89.64,401.92,42.776z"
                ></path>
                <g>
                    <polygon
                        style={{ fill: '#FFD83B' }}
                        points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296 
            128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4"
                    ></polygon>
                    <polygon
                        style={{ fill: '#FFD83B' }}
                        points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984 
            276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552"
                    ></polygon>
                </g>
            </svg>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                <g>
                    <path style={{ fill: '#F0C419' }} d="M30,0c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1s1-0.448,1-1V1C31,0.448,30.552,0,30,0z"></path>
                    <path style={{ fill: '#F0C419' }} d="M30,52c-0.552,0-1,0.448-1,1v6c0,0.552,0.448,1,1,1s1-0.448,1-1v-6C31,52.448,30.552,52,30,52z"></path>
                    <path style={{ fill: '#F0C419' }} d="M59,29h-6c-0.552,0-1,0.448-1,1s0.448,1,1,1h6c0.552,0,1-0.448,1-1S59.552,29,59,29z"></path>
                    <path style={{ fill: '#F0C419' }} d="M8,30c0-0.552-0.448-1-1-1H1c-0.552,0-1,0.448-1,1s0.448,1,1,1h6C7.552,31,8,30.552,8,30z"></path>
                    <path style={{ fill: '#F0C419' }} d="M46.264,14.736c0.256,0,0.512-0.098,0.707-0.293l5.736-5.736c0.391-0.391,0.391-1.023,0-1.414
        s-1.023-0.391-1.414,0l-5.736,5.736c-0.391,0.391-0.391,1.023,0,1.414C45.752,14.639,46.008,14.736,46.264,14.736z"></path>
                    <path style={{ fill: '#F0C419' }} d="M13.029,45.557l-5.736,5.736c-0.391,0.391-0.391,1.023,0,1.414C7.488,52.902,7.744,53,8,53
        s0.512-0.098,0.707-0.293l5.736-5.736c0.391-0.391,0.391-1.023,0-1.414S13.42,45.166,13.029,45.557z"></path>
                    <path style={{ fill: '#F0C419' }} d="M46.971,45.557c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l5.736,5.736
        C51.488,52.902,51.744,53,52,53s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.971,45.557z"></path>
                    <path style={{ fill: '#F0C419' }} d="M8.707,7.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l5.736,5.736
        c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L8.707,7.293z"></path>
                    <path style={{ fill: '#F0C419' }} d="M50.251,21.404c0.162,0.381,0.532,0.61,0.921,0.61c0.13,0,0.263-0.026,0.39-0.08l2.762-1.172
        c0.508-0.216,0.746-0.803,0.53-1.311s-0.804-0.746-1.311-0.53l-2.762,1.172C50.272,20.309,50.035,20.896,50.251,21.404z"></path>
                    <path style={{ fill: '#F0C419' }} d="M9.749,38.596c-0.216-0.508-0.803-0.746-1.311-0.53l-2.762,1.172
        c-0.508,0.216-0.746,0.803-0.53,1.311c0.162,0.381,0.532,0.61,0.921,0.61c0.13,0,0.263-0.026,0.39-0.08l2.762-1.172
        C9.728,39.691,9.965,39.104,9.749,38.596z"></path>
                    <path style={{ fill: '#F0C419' }} d="M54.481,38.813L51.7,37.688c-0.511-0.207-1.095,0.041-1.302,0.553
        c-0.207,0.512,0.041,1.095,0.553,1.302l2.782,1.124c0.123,0.049,0.25,0.073,0.374,0.073c0.396,0,0.771-0.236,0.928-0.626
        C55.241,39.603,54.994,39.02,54.481,38.813z"></path>
                    <path style={{ fill: '#F0C419' }} d="M5.519,21.188L8.3,22.312c0.123,0.049,0.25,0.073,0.374,0.073c0.396,0,0.771-0.236,0.928-0.626
        c0.207-0.512-0.041-1.095-0.553-1.302l-2.782-1.124c-0.513-0.207-1.095,0.04-1.302,0.553C4.759,20.397,5.006,20.98,5.519,21.188z"></path>
                    <path style={{ fill: '#F0C419' }} d="M39.907,50.781c-0.216-0.508-0.803-0.745-1.311-0.53c-0.508,0.216-0.746,0.803-0.53,1.311
        l1.172,2.762c0.162,0.381,0.532,0.61,0.921,0.61c0.13,0,0.263-0.026,0.39-0.08c0.508-0.216,0.746-0.803,0.53-1.311L39.907,50.781z"></path>
                    <path style={{ fill: '#F0C419' }} d="M21.014,9.829c0.13,0,0.263-0.026,0.39-0.08c0.508-0.216,0.746-0.803,0.53-1.311l-1.172-2.762
        c-0.215-0.509-0.802-0.747-1.311-0.53c-0.508,0.216-0.746,0.803-0.53,1.311l1.172,2.762C20.254,9.6,20.625,9.829,21.014,9.829z"></path>
                    <path style={{ fill: '#F0C419' }} d="M21.759,50.398c-0.511-0.205-1.095,0.04-1.302,0.553l-1.172,2.762c-0.216,0.508-0.041,1.095,0.53,1.311
        c0.129,0.054,0.263,0.08,0.394,0.08c0.397,0,0.772-0.236,0.928-0.626l1.172-2.762C22.509,51.398,22.271,50.814,21.759,50.398z"></path>
                </g>
                <circle style={{ fill: '#F0C419' }} cx="30" cy="30" r="20"></circle>
                <circle style={{ fill: '#EDE21B' }} cx="30" cy="30" r="15"></circle>
            </svg>

           

        </div>
    );
};

export default CpToggle;
