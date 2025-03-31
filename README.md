<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>藏韵美食坊 - 藏餐体验</title>
    <style>
        body {
            font-family: 'Noto Sans Tibetan', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fdf6e3;
        }

        header {
            background-image: url('https://dummyimage.com/1200x400/004d40/ffffff&text=Tibetan+Landscape');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 100px 0;
        }

        header h1 {
            font-size: 3em;
            margin-bottom: 20px;
        }

        header p {
            font-size: 1.2em;
        }

        nav {
            background-color: #004d40;
            color: white;
        }

        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 20px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            padding: 15px 0;
            display: block;
        }

        main {
            padding: 50px;
            max-width: 1200px;
            margin: 0 auto;
        }

        section {
            margin-bottom: 50px;
        }

        section h2 {
            color: #004d40;
            font-size: 2em;
            margin-bottom: 20px;
        }

        .menu-item {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
        }

        .menu-item img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
            margin-right: 20px;
        }

        .menu-item h3 {
            color: #004d40;
            margin-bottom: 10px;
        }

        #about p {
            line-height: 1.6;
        }

        #contact form input,
        #contact form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        #contact form button {
            background-color: #004d40;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        footer {
            background-color: #004d40;
            color: white;
            text-align: center;
            padding: 20px 0;
        }

        /* 轮播图样式 */
        .slider {
            position: relative;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            overflow: hidden;
        }

        .slider-images {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .slider-images img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }

        .slider-controls {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
        }

        .slider-controls button {
            background-color: rgba(255, 255, 255, 0.7);
            border: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
        }

        .slider-controls button.active {
            background-color: #004d40;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Tibetan&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <h1>藏韵美食坊</h1>
        <p>品味地道藏餐，感受高原风情</p>
    </header>
    <nav>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">菜单</a></li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">联系我们</a></li>
        </ul>
    </nav>
    <!-- 轮播图部分 -->
    <div class="slider">
        <div class="slider-images">
            <img src="https://dummyimage.com/1200x400/004d40/ffffff&text=Slide1" alt="Slide 1">
            <img src="https://dummyimage.com/1200x400/004d40/ffffff&text=Slide2" alt="Slide 2">
            <img src="https://dummyimage.com/1200x400/004d40/ffffff&text=Slide3" alt="Slide 3">
        </div>
        <div class="slider-controls">
            <button class="active"></button>
            <button></button>
            <button></button>
        </div>
    </div>
    <main>
        <section id="menu">
            <h2>特色菜单</h2>
            <div class="menu-item">
                <img src="https://dummyimage.com/150x150/004d40/ffffff&text=Thukpa" alt="Thukpa">
                <div>
                    <h3>藏面（Thukpa）</h3>
                    <p>传统的藏式面条汤，有丰富的肉类和蔬菜搭配。</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="https://dummyimage.com/150x150/004d40/ffffff&text=Momo" alt="Momo">
                <div>
                    <h3>藏式饺子（Momo）</h3>
                    <p>美味的饺子，有多种馅料可供选择。</p>
                </div>
            </div>
        </section>
        <section id="about">
            <h2>关于我们</h2>
            <p>藏韵美食坊致力于为您带来最正宗的藏餐体验。我们的厨师团队来自西藏，拥有丰富的藏餐烹饪经验，使用当地新鲜的食材，精心制作每一道菜肴。在这里，您可以品尝到传统的藏餐美食，感受浓郁的高原文化氛围。</p>
        </section>
        <section id="contact">
            <h2>联系我们</h2>
            <form>
                <input type="text" placeholder="您的姓名">
                <input type="email" placeholder="您的邮箱">
                <textarea placeholder="您的留言"></textarea>
                <button type="submit">提交</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 藏韵美食坊 - 版权所有</p>
    </footer>
    <script>
        const sliderImages = document.querySelector('.slider-images');
        const sliderControls = document.querySelectorAll('.slider-controls button');
        let currentIndex = 0;

        function updateSlider() {
            sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
            sliderControls.forEach((control, index) => {
                if (index === currentIndex) {
                    control.classList.add('active');
                } else {
                    control.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % sliderControls.length;
            updateSlider();
        }

        setInterval(nextSlide, 5000);

        sliderControls.forEach((control, index) => {
            control.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
    </script>
</body>

</html>    
